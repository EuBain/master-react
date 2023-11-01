import {  AppDispatch, RootStore } from "@/redux/store";
import { useRef, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

export const usePageTabs = () => {
    const Element = useRef< Record<any,any>>({})
    const [keepalive, setKeepalive] = useState<string[]| unknown[]>([])
    const keepElement = Element.current;
    return {keepElement,keepalive,setKeepalive}
}