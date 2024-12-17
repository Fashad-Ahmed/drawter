export interface MenuState {
  activeMenuItem: string;
  actionMenuItem: string | null;
}

export interface MenuActions {
  menuItemClick: (menuItem: string) => void;
  actionItemClick: (actionItem: string | null) => void;
}
