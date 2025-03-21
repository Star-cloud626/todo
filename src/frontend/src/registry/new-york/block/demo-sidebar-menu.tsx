'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider
} from '@/registry/new-york/ui/sidebar';

import { Frame, LifeBuoy, Map, PieChart, Send } from 'lucide-react';

const projects = [
    {
        name: 'Design Engineering',
        url: '#',
        icon: Frame
    },
    {
        name: 'Sales & Marketing',
        url: '#',
        icon: PieChart
    },
    {
        name: 'Travel',
        url: '#',
        icon: Map
    },
    {
        name: 'Support',
        url: '#',
        icon: LifeBuoy
    },
    {
        name: 'Feedback',
        url: '#',
        icon: Send
    }
];

export default function AppSidebar() {
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Projects</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {projects.map((project) => (
                                    <SidebarMenuItem key={project.name}>
                                        <SidebarMenuButton asChild>
                                            <a href={project.url}>
                                                <project.icon />
                                                <span>{project.name}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
    );
}
