import { useCallback, useEffect, useState } from "react"


export const useModal = (data: string[]) => {

    const dataCollection = useCallback(() => {
        return data.map(s => ({
            rowID: 3,
            s
        }))
    }, [])

    const [rows, setRows] = useState<any[]>(dataCollection())
    const [target, setTarget] = useState<any>(null)

    useEffect(() => {
        setRows(dataCollection())
    }, [rows, dataCollection])

    const insert = () => {

    }

    const remove = () => {

    }

    const updated = () => {

    }

    return {
        target,
        setTarget
    }
}