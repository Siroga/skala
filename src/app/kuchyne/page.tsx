"use client";
import styles from "./page.module.scss";
import React, { useState, useEffect } from "react";
import { IItem, IItemsList } from "@/types/types";
import { socket } from "@/app/lib/socket";
import { addItemsToPage, logIn } from "@/utils/utils";
import { MenuTypeEnum } from "@/types/menu";

export default function Home() {
  const ordersRef = React.createRef<HTMLDivElement>();
  const [isConnected, setIsConnected] = useState(false);

  logIn();

  useEffect(() => {
    console.log("useEffect");

    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      console.log("onConnect");
      setIsConnected(true);
    }

    function onDisconnect() {
      console.log("onDisconnect");
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.on("items_list", (items: IItemsList) => {
      onItemsList(items);
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("items_list", onItemsList);
    };
  }, []);

  function onItemsList(items: IItemsList) {
    console.log("get data");
    addItemsToPage(items.items, MenuTypeEnum.KITCHEN);
  }

  return (
    <div>
      <div className={`main`} ref={ordersRef}>
        <div className={`orderNew`}>
          <h1>Nová objednávka</h1>
          <div className={`items newItems`} id="new-items" />
        </div>
        <div className={`pageDivider pageLeftDivider`} />
        <div className={`orderProgress orderProgress`}>
          <h1>Objednávka se připravuje</h1>
          <div
            className={`items inprogress-items inprogressItems`}
            id="inprogress-items"
          />
        </div>
        <div className={`pageDivider pageRightDivider`} />
        <div className={`orderCompleted orderCompleted`}>
          <h1>Objednávka je připravena</h1>
          <div className={`items ready-items readyItems`} id="readyItems" />
        </div>
      </div>
    </div>
  );
}
