interface MenuItem {
    name: string;
    icon: string;
    path: string;
}

export interface Menu {
    name: string;
    icon: string;
    path: string;
    children?: MenuItem[];
}
