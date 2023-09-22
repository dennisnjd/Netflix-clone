import React from 'react'
import MyList from '../../components/MyList/MyList'
import { MyListProvider } from '../../MyListContext'

function MyListPage() {
    return (
        <div>
            <MyListProvider>
                <MyList />
            </MyListProvider>
        </div>
    )
}

export default MyListPage
