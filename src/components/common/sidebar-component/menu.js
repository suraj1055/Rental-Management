import { Home, Sliders, DollarSign, FolderPlus } from 'react-feather';

export const MENUITEMS = [
    {
        path: '/master', title: 'Master', icon: Home, type: 'link', badgeType: 'primary', active: false, children: [
            { path: '/master/category_master', title: 'Category Master', type: 'link' },
            { path: '/master/component_master', title: 'Component Master', type: 'link' },
            { path: '/master/asset_master', title: 'Asset Master', type: 'link' },
            { path: '/master/customer_master', title: 'Customer Master', type: 'link' },
            { path: '/master/document_master', title: 'Document Master', type: 'link' }
        ]
    },
    {
        path: '/transactions', title: 'Transaction', icon: DollarSign, type: 'link', active: false
    },
    {
        path: '/invoice', title: 'Invoice Generation', icon: FolderPlus, type: 'link', active: false
    },
    {
        path: '/report', title: 'Report', icon: Sliders, type: 'link', badgeType: 'primary', active: false, children: [
            { path: '/report/available_assets', title: 'Available Assets', type: 'link' },
            { path: '/report/rented_assets', title: 'Rented Assets', type: 'link' },
            { path: '/report/due_payments', title: 'Due Payments', type: 'link' },
            { path: '/report/absconding_assets', title: 'Absconding Assets', type: 'link' },
            { path: '/report/roi', title: 'Return On Investment', type: 'link' },
            { path: '/report/p&l', title: 'Profit & Loss', type: 'link' }
        ]
    }
]
