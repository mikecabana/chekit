import React, { MouseEventHandler } from 'react';
import { Fragment } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';
import { LogoutIcon, LoginIcon } from '@heroicons/react/outline';

import { Popover, Transition } from '@headlessui/react';
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

import { signIn, signOut, useSession } from 'next-auth/client';
import Image from 'next/image';
import { DarkMode } from '../DarkMode';

export type NavProps = {};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export function Nav({}: NavProps) {
    const [session, loading] = useSession();

    const handleSignIn = (e: MouseEvent) => {
        e.preventDefault();
        signIn();
    };

    const handleSignOut = (e: Event) => {
        e.preventDefault();
        signOut();
    };
    return (
        <Popover className="relative z-50">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center border-b-2 border-gray-100 dark:border-gray-800 py-6 md:justify-start md:space-x-10">
                            <div></div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="hidden md:flex md:items-center center space-x-10">
                                <Link href="/">
                                    <a className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-indigo-500">
                                        Home
                                    </a>
                                </Link>
                                <Link href="/docs">
                                    <a className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-indigo-500">
                                        Docs
                                    </a>
                                </Link>
                                <DarkMode />
                            </Popover.Group>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                {!session && (
                                    <>
                                        <a
                                            href={'/api/auth/signin'}
                                            onClick={(e) => handleSignIn}
                                            className="flex items-center whitespace-nowrap pr-3 pl-4 py-1 border border-transparent rounded-full shadow-sm text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:text-indigo-500 dark:hover:bg-gray-800"
                                        >
                                                Sign in
                                                <LoginIcon height="18" width="18" className="ml-2" />
                                        </a>
                                        {/* <a
											href="#"
											className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
											Sign up
										</a> */}
                                    </>
                                )}
                                {session && (
                                    <div className="flex flex-row items-center">
                                        <a
                                            href={'/api/auth/signout'}
                                            onClick={(e) => handleSignOut}
                                            className="flex items-center whitespace-nowrap text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-indigo-500"
                                        >
                                            Sign out
                                            <LogoutIcon height="18" width="18" className="mx-2" />
                                        </a>
                                        <span className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-3 py-1 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-indigo-600">
                                            {session.user.name}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <DarkMode />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 px-5 space-y-6">
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <Link href="/">
                                            <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                Home
                                            </a>
                                        </Link>
                                        <Link href="/docs">
                                            <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                Docs
                                            </a>
                                        </Link>
                                    </div>
                                    <div>
                                        {!session && (
                                            <>
                                                <a
                                                    href="#"
                                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                                >
                                                    Sign up
                                                </a>
                                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                    Existing customer?{' '}
                                                    <a
                                                        href={'/api/auth/signin'}
                                                        onClick={(e) => handleSignIn}
                                                        className="text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        Sign in
                                                    </a>
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
}
