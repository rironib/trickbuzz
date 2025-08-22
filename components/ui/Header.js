"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Link from "next/link";
import { ThemeSwitch } from "../theme-switch";
import { atomic_age } from "../../config/fonts";

const Header = () => {
  return (
    <Navbar maxWidth="full" isBordered>
      <NavbarBrand>
        <Link href="/">
          <div className={`${atomic_age.className} text-3xl font-bold`}>
            TrickBuzz
          </div>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
