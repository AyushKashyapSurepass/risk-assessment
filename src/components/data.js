import {AlignJustify, FilePlus} from "lucide-react";

export const navItems = [
    {
        title: 'Add',
        href: '/',
        icon: FilePlus,
        label: 'Add'
    },
    {
        title: 'User',
        href: '/users',
        icon: AlignJustify,
        label: 'User'
    },
];

export const users = [
    {
        id: 1,
        name: 'Candice Schiner',
        company: 'Dell',
        role: 'Frontend Developer',
        verified: false,
        status: 'Active'
    },
    {
        id: 2,
        name: 'John Doe',
        company: 'TechCorp',
        role: 'Backend Developer',
        verified: true,
        status: 'Active'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        company: 'WebTech',
        role: 'UI Designer',
        verified: true,
        status: 'Active'
    },
    {
        id: 4,
        name: 'David Smith',
        company: 'Innovate Inc.',
        role: 'Fullstack Developer',
        verified: false,
        status: 'Inactive'
    },
    {
        id: 5,
        name: 'Emma Wilson',
        company: 'TechGuru',
        role: 'Product Manager',
        verified: true,
        status: 'Active'
    },
    {
        id: 6,
        name: 'James Brown',
        company: 'CodeGenius',
        role: 'QA Engineer',
        verified: false,
        status: 'Active'
    },
    {
        id: 7,
        name: 'Laura White',
        company: 'SoftWorks',
        role: 'UX Designer',
        verified: true,
        status: 'Active'
    },
    {
        id: 8,
        name: 'Michael Lee',
        company: 'DevCraft',
        role: 'DevOps Engineer',
        verified: false,
        status: 'Active'
    },
    {
        id: 9,
        name: 'Olivia Green',
        company: 'WebSolutions',
        role: 'Frontend Developer',
        verified: true,
        status: 'Active'
    },
    {
        id: 10,
        name: 'Robert Taylor',
        company: 'DataTech',
        role: 'Data Analyst',
        verified: false,
        status: 'Active'
    }
];

export const dashboardCard = [
    {
        date: 'Today',
        total: 2000,
        role: 'Students',
        color: 'bg-[#EC4D61] bg-opacity-40'
    },
    {
        date: 'Today',
        total: 2000,
        role: 'Teachers',
        color: 'bg-[#FFEB95] bg-opacity-100'
    },
    {
        date: 'Today',
        total: 2000,
        role: 'Parents',
        color: 'bg-[#84BD47] bg-opacity-30'
    },
    {
        date: 'Today',
        total: 2000,
        role: 'Schools',
        color: 'bg-[#D289FF] bg-opacity-30'
    }
];

export const employees = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        gender: 'Male',
        date_of_birth: '1990-01-01',
        street: '123 Main St',
        city: 'Springfield',
        state: 'IL',
        country: 'USA',
        zipcode: '62701',
        longitude: -89.64,
        latitude: 39.78,
        job: 'Software Engineer',
        profile_picture: null
    },
    {
        id: 2,
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane.smith@example.com',
        phone: '0987654321',
        gender: 'Female',
        date_of_birth: '1985-05-12',
        street: '456 Elm St',
        city: 'Springfield',
        state: 'IL',
        country: 'USA',
        zipcode: '62701',
        job: 'Product Manager',
        profile_picture: 'https://example.com/jane.jpg'
    }
];
