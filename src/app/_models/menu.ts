export interface Menu {
    menuSeq: string;
    menuId: string;
    menuName: string;
    level: string;
    parentMenu?: string;
    url: string;
    childsMenu?: Menu[];
}