'use client'
import React, { use, useEffect, useState } from 'react'
import { SignOutBtn } from './SignOutBtn';
import Image from 'next/image';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const links = [
    { label: 'Home', href: '/' },
    { label: 'Live', href: '/live' },
    { label: 'Films', href: '/films' },
    { label: 'Series', href: '/series' },
    { label: 'My List', href: '/my_list' },
]

const profileLinks = [
    { label: 'Your Profile', href: '#' },
    { label: 'Settings', href: '#' },
]

const TOP_OFFSET = 66;

export const Navbar = () => {
    const { userInfo } = useCurrentUser()
    const [showbg, setShowbg] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > TOP_OFFSET) {
                setShowbg(true)
            } else {
                setShowbg(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <Disclosure as="nav" className={`fixed w-full z-40  transition duration-75 ${showbg && 'bg-zinc-900 bg-opacity-90 shadow-md backdrop-blur-md'}`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                <div className="relative flex h-12 sm:h-16 items-center justify-between">
                    <div className="flex items-center px-2 lg:px-0">
                        <div className="flex-shrink-0">
                            <Image
                                placeholder='empty'
                                width={20}
                                height={20}
                                alt="Your Company"
                                src="/images/logo.jpg"
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="hidden lg:ml-6 lg:block">
                            <div className="flex space-x-4">
                                {
                                    links.map((link, i) => (
                                        <Link href={link.href} key={i} className=" px-3 py-2 text-sm font-semibold text-white cursor-pointer hover:text-gray-300 transition">
                                            {link.label}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                        {/*  <div className="w-full max-w-lg lg:max-w-xs">
                            <label htmlFor="search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="search"
                                    name="search"
                                    type="search"
                                    placeholder="Search"
                                    className="block w-full rounded-md border-0 bg-gray-500 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-gray-300 focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div> */}
                    </div>
                    <div className="flex lg:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="hidden lg:ml-4 lg:block">
                        <div className="flex items-center">
                            {/* <button
                                type="button"
                                className="relative flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <BellIcon aria-hidden="true" className="h-6 w-6" />
                            </button> */}

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative  flex-shrink-0">
                                <div>
                                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <Image
                                            width={32}
                                            height={32}
                                            alt=""
                                            src={userInfo?.image || '/images/default-avatar.jpg'}
                                            className="rounded-full"
                                        />
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-50  w-32 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    {
                                        profileLinks.map((link, i) => (
                                            <MenuItem key={i}>
                                                <Link href={link.href} className="block px-4 py-2 text-sm text-white data-[focus]:text-gray-300">
                                                    {link.label}
                                                </Link>
                                            </MenuItem>
                                        ))
                                    }
                                    <SignOutBtn isSmalScreen={false} />
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 bg-black">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    {
                        links.map((link, i) => (
                            <DisclosureButton
                                key={i}
                                as="a"
                                href={link.href}
                                className="block rounded px-3 py-2 text-base font-medium text-white"
                            >
                                {link.label}
                            </DisclosureButton>
                        ))
                    }
                </div>
                <div className="border-t border-gray-700 bg-black pb-3 pt-4">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            <Image
                                height={40}
                                width={40}
                                alt=""
                                src={userInfo?.image || '/images/default-avatar.jpg'}
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-white">{userInfo?.name}</div>
                            <div className="text-sm font-medium text-gray-400">{userInfo?.email}</div>
                        </div>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                        {
                            profileLinks.map((link, i) => (
                                <DisclosureButton
                                    key={i}
                                    as="a"
                                    href={link.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                >
                                    {link.label}
                                </DisclosureButton>
                            ))
                        }
                        <SignOutBtn isSmalScreen={true} />
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
