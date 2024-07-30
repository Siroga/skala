"use client";
import { logIn } from "@/utils/utils";
import styles from "./page.module.scss";
import React, { useState, useEffect } from "react";

export default function Home() {
  logIn();

  const fs = () => {
    $("#container").get(0).requestFullscreen();
  };

  return (
    <div className={styles.mainBlock}>
      <a href="/pokladna">
        <div className={styles.menuItem}>
          <span>Pokladna</span>
        </div>
      </a>
      <a href="/kuchyne">
        <div className={styles.menuItem}>
          <span>Kuchyně</span>
        </div>
      </a>
      <a href="/gril">
        <div className={styles.menuItem}>
          <span>Gril</span>
        </div>
      </a>
    </div>
  );
}
