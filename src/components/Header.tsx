import React, { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode; // 定义 children 为可选的 React 节点类型
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="bg-white shadow-md py-8 h-20 z-10">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="logo">
          <a href="#" className="text-lg font-bold text-gray-800">MyBrand</a>
        </div>
        <nav>
          <ul className="flex items-center space-x-24">
            <li><a href="#home" className="text-stone-900 text-base font-medium hover:text-primary">Home</a></li>
            <li><a href="#about" className="text-stone-900 text-base font-medium hover:text-primary">About</a></li>
            <li><a href="#services" className="text-stone-900 text-base font-medium hover:text-primary">Services</a></li>
            <li><a href="#contact" className="text-stone-900 text-base font-medium hover:text-primary">Contact</a></li>
          </ul>
        </nav>
        {children}  {/* 展示 children，如果有的话 */}
      </div>
    </header>
  );
};

export default Header;

