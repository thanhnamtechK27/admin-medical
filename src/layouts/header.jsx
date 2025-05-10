import { useTheme } from "@/hooks/use-theme";
import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";
import profileImg from "@/assets/profile-image.jpg";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; 
export const Header = ({ collapsed, setCollapsed }) => {
    const { theme, setTheme } = useTheme();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-sm dark:bg-slate-900">
            <div className="flex items-center gap-x-3">
                <button
                    className="btn-ghost size-10"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <ChevronsLeft className={collapsed && "rotate-180"} />
                </button>
                <div className="relative flex items-center rounded-md bg-slate-100 px-3 dark:bg-slate-800">
                    <Search size={18} className="text-slate-400" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="ml-2 w-64 bg-transparent py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100"
                    />
                </div>
            </div>

            <div className="flex items-center gap-x-3 relative" ref={dropdownRef}>
                <button
                    className="btn-ghost size-10"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    <Sun size={20} className="dark:hidden" />
                    <Moon size={20} className="hidden dark:block" />
                </button>
                <button className="btn-ghost size-10">
                    <Bell size={20} />
                </button>

                {/* Avatar + Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                        className="rounded-full border-2 border-slate-300 dark:border-slate-600 size-10"
                    >
                        <img
                            src={profileImg}
                            alt="profile"
                            className="rounded-full object-cover w-full h-full"
                        />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-52 rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
                            <div className="flex items-center gap-3 px-4 py-3 border-b dark:border-slate-700">
                                <img
                                    src={profileImg}
                                    alt="Avatar"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Mr.Tom</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">asdh@gmail.com</p>
                                </div>
                            </div>
                            <ul className="py-1 text-sm text-slate-700 dark:text-slate-200">
                                <li>
                                <Link
                                        to="/profile-management"
                                        className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"
                                    >
                                        Quản lý tài khoản
                                    </Link>
                                </li>   
                                <li>
                                    <button className="w-full px-4 py-2 text-left text-red-500 hover:bg-red-50 dark:hover:bg-red-900">
                                        Đăng xuất
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
};
