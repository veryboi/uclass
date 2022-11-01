/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Twemoji from './Twemoji'

const user = {
    name: 'Tim Cooky',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'My Classes', href: '#', current: false },
    { name: 'Resources', href: '#', current: false },
    { name: 'Company Directory', href: '#', current: false },
    { name: 'Openings', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

const classes = [
    {
        name: 'Math 32A',
        color: 'bg-red-600',
        emoji: '🔢',
    },
    {
        name: 'CS31',
        color: 'bg-blue-600',
        emoji: '💻',
    },
    {
        name: 'EPS SCI 3',
        color: 'bg-purple-600',
        emoji: '🦖',
    },
    //Add classes here
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {
    return (
        <>
            <div className="min-h-full">
                <Popover as="header" className="bg-gray-700 pb-24">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-full px-24">
                                <div className="relative flex items-center justify-center py-5 lg:justify-between">
                                    {/* Logo */}
                                    <div className="absolute left-0 flex-shrink-0 lg:static">
                                        <a href="#">
                                            <span className="sr-only">Your Company</span>
                                            {/*<img*/}
                                            {/*    className="h-8 w-auto"*/}
                                            {/*    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"*/}
                                            {/*    alt="Your Company"*/}
                                            {/*/>*/}
                                            <p className="text-4xl text-yellow-400 font-black">UCLA</p>
                                            <p className="text-4xl text-blue-400 font-black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SS</p>
                                        </a>
                                    </div>
                                    {/* Nav Bar */}
                                    <div className="relative flex justify-center" px-10>
                                        <nav className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'text-white' : 'text-indigo-100',
                                                        'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-4 hover:bg-opacity-10'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>

                                    {/* Right section on desktop */}
                                    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                                        <button
                                            type="button"
                                            className="flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-4 flex-shrink-0">
                                            <div>
                                                <Menu.Button className="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {userNavigation.map((item) => (
                                                        <Menu.Item key={item.name}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700'
                                                                    )}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>

                                    {/* Search */}
                                    <div className="min-w-0 flex-1 px-12 lg:hidden">
                                        <div className="mx-auto w-full max-w-xs">
                                            <label htmlFor="desktop-search" className="sr-only">
                                                Search
                                            </label>
                                            <div className="relative text-white focus-within:text-gray-600">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                                </div>
                                                <input
                                                    id="desktop-search"
                                                    className="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white focus:border-transparent focus:bg-opacity-100 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                                                    placeholder="Search"
                                                    type="search"
                                                    name="search"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Menu button */}
                                    <div className="absolute right-0 flex-shrink-0 lg:hidden">
                                        {/* Mobile menu button */}
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
                                    <div className="grid grid-cols-3 items-center gap-8">
                                        <div className="col-span-2">

                                            <p className="text-4xl font-bold text-white">My Classes</p>


                                        </div>
                                        <div>
                                            <div className="mx-auto w-full max-w-md">
                                                <label htmlFor="mobile-search" className="sr-only">
                                                    Search
                                                </label>
                                                <div className="relative text-white focus-within:text-gray-600">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                                    </div>
                                                    <input
                                                        id="mobile-search"
                                                        className="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white focus:border-transparent focus:bg-opacity-100 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                                                        placeholder="Search"
                                                        type="search"
                                                        name="search"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Transition.Root as={Fragment}>
                                <div className="lg:hidden">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="duration-150 ease-out"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="duration-150 ease-in"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
                                    </Transition.Child>

                                    <Transition.Child
                                        as={Fragment}
                                        enter="duration-150 ease-out"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="duration-150 ease-in"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Popover.Panel
                                            focus
                                            className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                                        >
                                            <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="pt-3 pb-2">
                                                    <div className="flex items-center justify-between px-4">
                                                        <div>
                                                            <img
                                                                className="h-8 w-auto"
                                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                                alt="Your Company"
                                                            />
                                                        </div>
                                                        <div className="-mr-2">
                                                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                                <span className="sr-only">Close menu</span>
                                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                            </Popover.Button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 space-y-1 px-2">
                                                        <a
                                                            href="#"
                                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                        >
                                                            Home
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                        >
                                                            Profile
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                        >
                                                            Resources
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                        >
                                                            Company Directory
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                        >
                                                            Openings
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pt-4 pb-2">
                                                    <div className="flex items-center px-5">
                                                        <div className="flex-shrink-0">
                                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                                        </div>
                                                        <div className="ml-3 min-w-0 flex-1">
                                                            <div className="truncate text-base font-medium text-gray-800">{user.name}</div>
                                                            <div className="truncate text-sm font-medium text-gray-500">{user.email}</div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        >
                                                            <span className="sr-only">View notifications</span>
                                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                    <div className="mt-3 space-y-1 px-2">
                                                        {userNavigation.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                            >
                                                                {item.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition.Child>
                                </div>
                            </Transition.Root>
                        </>
                    )}
                </Popover>
                <main className="-mt-24 pb-8">
                    <div className="mx-auto max-w-full px-24">
                        <h1 className="sr-only">Page title</h1>
                        {/* Main 3 column grid */}
                        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                            {/* Left column */}
                            <div className="grid grid-cols-1 gap-4 lg:col-span-4">
                                <section aria-labelledby="section-1-title">

                                    <div className="overflow-hidden rounded-lg bg-white shadow">
                                        <div className="p-6">
                                            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 place-content-center">
                                                {classes.map((classes) => (
                                                    <li className="col-span-1 divide-y rounded-2xl shadow-lg overflow-hidden">
                                                        <div className={`flex w-full items-center justify-between space-x-6 p-3 ${classes.color}`}  >
                                                            <div className="flex-1 truncate">
                                                                <div className="flex items-center space-x-3">
                                                                    <Twemoji emoji={classes.emoji} />
                                                                    <h3 className="truncate text-lg font-bold text-white">{classes.name}</h3>
                                                                </div>
                                                            </div>
                                                            {/* Chat Button */}
                                                            <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6 block">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                                            </svg></button>


                                                        </div>

                                                        {/* Box underneath classes */}
                                                        <div className="px-5 min-h-200 pb-3 bg-gray-100 rounded-b-2xl">
                                                            <div className="">
                                                                <li className="w-50 my-5 rounded-xl col-span-1 divide-y p-3 bg-yellow-500 shadow-lg overflow-hidden justify-center">

                                                                    <h3 className="text-center">10 New Messages</h3>

                                                                </li>
                                                                <li className="w-30 my-5 rounded-xl col-span-1 divide-y p-3 bg-yellow-500 shadow-lg overflow-hidden justify-center">
                                                                    <h3 className="text-center">5 New Posts</h3>
                                                                </li>
                                                            </div>

                                                        </div>

                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </section>
                            </div>

                            {/* Right column */}
                            {/*<div className="grid grid-cols-1 gap-4">*/}
                            {/*    <section aria-labelledby="section-2-title">*/}
                            {/*        <h2 className="sr-only" id="section-2-title">*/}
                            {/*            Section title*/}
                            {/*        </h2>*/}
                            {/*        <div className="overflow-hidden rounded-lg bg-white shadow">*/}
                            {/*            <div className="p-6">/!* Your content *!/</div>*/}
                            {/*        </div>*/}
                            {/*    </section>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </main>


                <footer>
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
                            <span className="block sm:inline">&copy; 2022, UCLASS.</span>{' '}
                            <span className="block sm:inline">All rights reserved.</span>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    )
}