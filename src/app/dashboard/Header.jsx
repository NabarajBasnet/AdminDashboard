"use client";

import '../globals.css'
import { RiAccountCircleFill } from "react-icons/ri";
import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { ToggleAdminSidebar, MinimizeSidebar } from '@/state/slicer';
import { useDispatch } from 'react-redux';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/DashboardUI/MobileSidebar";
import Link from "next/link";
import { useSelector } from 'react-redux';
import '../globals.css'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/DashboardUI/SidebarAccrodin";
import { RiDashboard2Line, RiUserUnfollowFill, RiCustomerService2Fill, RiRunLine } from 'react-icons/ri';
import { BiSolidUserCheck } from 'react-icons/bi';
import { GiLockers, GiBiceps } from 'react-icons/gi';
import { TiUserAdd } from 'react-icons/ti';
import { FaUsers, FaMoneyCheckAlt, FaRegUser, FaBox, FaChartLine, FaTags, FaCog, FaDumbbell } from 'react-icons/fa';
import { MdPayments, MdFitnessCenter, MdEventAvailable } from 'react-icons/md';
import { AiOutlineSchedule } from 'react-icons/ai';
import { FaUsersGear } from "react-icons/fa6";
import { RiDashboard3Fill } from "react-icons/ri";

const Header = () => {
    const adminSidebar = useSelector(state => state.rtkreducer.adminSidebar);
    const sidebarMinimized = useSelector(state => state.rtkreducer.sidebarMinimized);
    const dispatch = useDispatch();

    const handleDispatchSidebar = () => {
        dispatch(ToggleAdminSidebar());
    };

    const minimizeSidebar = () => {
        dispatch(MinimizeSidebar());
    }

    const sidebarContent = [
        {
            icon: FaMoneyCheckAlt,
            title: 'Membership Plans',
            link: '/dashboard/membershipplans',
        },
        {
            icon: BiSolidUserCheck,
            title: 'Attendance',
            link: '/dashboard/attendance/memberattendance',
            subObj: [
                { icon: BiSolidUserCheck, title: 'Member Attendance', link: '/dashboard/attendance/memberattendance' },
                { icon: BiSolidUserCheck, title: 'Staff Attendance', link: '/dashboard/attendance/staffattendance' },
                { icon: BiSolidUserCheck, title: 'Attendance History', link: '/dashboard/attendance/attendancehistory' }
            ]
        },
        {
            icon: GiLockers,
            title: 'Lockers',
            link: '/dashboard/lockers',
        },
        {
            icon: TiUserAdd,
            title: 'New Member',
            link: '/dashboard/newmember',
        },
        {
            icon: FaUsers,
            title: 'All Members',
            link: '/dashboard/allmembers',
        },
        {
            icon: MdPayments,
            title: 'Payment Details',
            link: '/dashboard/paymentdetails',
        },
        {
            icon: FaUsersGear,
            title: 'Staff Management',
            link: '/dashboard/staffmanagement',
            subObj: [
                { icon: FaUsersGear, title: 'Trainer Management', link: '/dashboard/trainermanagement' },
                { icon: FaUsersGear, title: 'Staff Scheduling', link: '/dashboard/staffscheduling' }
            ]
        },
        {
            icon: RiUserUnfollowFill,
            title: 'Expired Memberships',
            link: '/dashboard/expiredmemberships',
        },
        {
            icon: MdEventAvailable,
            title: 'Class Scheduling',
            link: '/dashboard/classscheduling',
            subObj: [
                { icon: MdEventAvailable, title: 'Yoga Classes', link: '/dashboard/yogaclasses' },
                { icon: MdEventAvailable, title: 'Spinning Classes', link: '/dashboard/spinningclasses' },
                { icon: MdEventAvailable, title: 'Zumba Classes', link: '/dashboard/zumbaclasses' }
            ]
        },
        {
            icon: FaDumbbell,
            title: 'Equipments',
            link: '/dashboard/equipmentmanagement',
            subObj: [
                { icon: FaDumbbell, title: 'Add Equipment', link: '/dashboard/addequipment' },
                { icon: FaDumbbell, title: 'View Equipment', link: '/dashboard/viewequipment' },
                { icon: FaDumbbell, title: 'Maintenance Requests', link: '/dashboard/equipmentmaintenance' }
            ]
        },
        {
            icon: GiBiceps,
            title: 'Personal Training',
            link: '/dashboard/personaltraining',
            subObj: [
                { icon: RiRunLine, title: 'Trainer Availability', link: '/dashboard/traineravailability' },
                { icon: GiBiceps, title: 'Book Personal Trainer', link: '/dashboard/booktrainer' }
            ]
        },
        {
            icon: MdFitnessCenter,
            title: 'Fitness Programs',
            link: '/dashboard/fitnessprograms',
            subObj: [
                { icon: MdFitnessCenter, title: 'Weight Loss Program', link: '/dashboard/weightloss' },
                { icon: MdFitnessCenter, title: 'Muscle Gain Program', link: '/dashboard/musclegain' }
            ]
        },
        {
            icon: RiCustomerService2Fill,
            title: 'Customer Support',
            link: '/dashboard/customersupport',
        },
        {
            icon: FaChartLine,
            title: 'Analytics & Reports',
            link: '/dashboard/analytics',
        },
        {
            icon: AiOutlineSchedule,
            title: 'Schedule Management',
            link: '/dashboard/schedulemanagement',
        },
        {
            icon: FaTags,
            title: 'Promotions & Offers',
            link: '/dashboard/promotions',
        },
        {
            icon: FaCog,
            title: 'Settings',
            link: '/dashboard/settings',
        },
    ];


    return (
        <div className={`fixed top-0 right-0 transition-all duration-500 ${sidebarMinimized ? 'md:w-[calc(100%-48px)] w-full' : 'md:w-[calc(100%-240px)]'} w-full flex justify-between py-4 items-center backdrop-blur-sm bg-white bg-opacity-70 z-50`}>
            <div className='mx-4'>
                <IoMenuSharp
                    className='text-3xl text-gray-800 hidden md:flex cursor-pointer'
                    onClick={minimizeSidebar}
                />
                <div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <IoMenuSharp
                                className='text-3xl md:hidden flex text-blue-600 cursor-pointer'
                            />
                        </SheetTrigger>
                        <SheetContent className="h-full flex flex-col">
                            <SheetHeader className="bg-white">
                                <SheetTitle>
                                    <Link href={'/dashboard'} className="flex justify-start py-3 bg-blue-600">
                                        <RiDashboard3Fill className='text-4xl mx-2 text-white' />
                                        <span className="text-white w-full text-2xl font-bold">Dashboard</span>
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>

                            <SheetDescription className="flex-grow overflow-y-auto">
                                <div className='min-h-screen'>
                                    <ul>
                                        {sidebarContent.map((sidebar, index) => (
                                            <li key={index} className="p-1">
                                                {sidebar.subObj ? (
                                                    <Accordion type="single" collapsible className="w-full">
                                                        <AccordionItem value={`item-${index}`}>
                                                            <AccordionTrigger className="w-full flex items-center p-2 cursor-pointer hover:bg-gray-100 transition-colors">
                                                                <sidebar.icon className='text-xl' />
                                                                <h1 className='text-start mx-2 text-sm font-semibold'>{sidebar.title}</h1>
                                                            </AccordionTrigger>
                                                            {sidebar.subObj.map((subItem, subIndex) => (
                                                                <AccordionContent key={subIndex}>
                                                                    <Link href={subItem.link} className="flex items-center ml-6 p-1">
                                                                        <subItem.icon className='text-lg' />
                                                                        <h1 className='mx-2 text-sm font-semibold'>{subItem.title}</h1>
                                                                    </Link>
                                                                </AccordionContent>
                                                            ))}
                                                        </AccordionItem>
                                                    </Accordion>
                                                ) : (
                                                    <Link href={sidebar.link} className="flex items-center p-2 cursor-pointer hover:bg-gray-100 transition-colors">
                                                        <sidebar.icon className='text-xl' />
                                                        <h1 className='mx-2 text-sm font-semibold'>{sidebar.title}</h1>
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SheetDescription>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            <div className='mx-4'>
                <RiAccountCircleFill
                    className='text-3xl text-gray-800 cursor-pointer'
                    onClick={minimizeSidebar}
                />
            </div>
        </div>
    );
}

export default Header;
