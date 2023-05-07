// resetTheGame() resets the following arrays to their starting values. 
// !!! This function is very long right now because of urls pointing to images on google photos. You need to scroll like 2/3 of the way to get past it.
let allCharacters = [];
let allRooms = [];
let itemDeck = [];
let kluddeDeck = [];
let damage = [];
function resetTheGame(){
  // allCharacters is an array of objects where each object is a playable character. Selected characters get moved into a seperate array called katundianCrew.
  //'role' is used when the game needs to refer to a specific character in text. (maybe change 'role' to 'name'?)
  //'description' tells the user about the the character.
  //'charAction' is a special action which only that character can do.
  //'room' is the character's location on the ship. 
  //'items' array gets fill with objects from 'itemDeck'.
  //'actions' array gets filled with possible actions during turn.
  //'selected' is whether the user selects the character in the start selection screen.
  //'stagger' can cause the character to lose a turn. 
  //'infections' array gets filled with objects from 'kluddeDeck'.
  //'picture' points to an image, a colored circle with character portrait inside.
  allCharacters = [
    {role: 'android', description: "Android: Kit 10 \n Special action, Computer: Activate 1 undamaged ship system in any room.", charAction:{label: 'Computer'}, room: 0, items: [], actions:[], selected: false, stagger: 0, infections:[], picture:'https://lh3.googleusercontent.com/rsQ54R-9i5V4Ipfyra4axAFbLm_L3f3ZrssMb3pVwGMGDqINwBi-F5u0ws3md7PDxZVwG5m-gmo-i_Ts6oULiQXksZ7Z_kOVqPMuCc_q9H-z1Jy6ROkbmrjRgbQ_WS89TtJEaILcVnfajRgHSSn1oV6C3QSFPrB3MwNXyN0jWfznly1eDIDTsPUdzUdzisnpq5fHxPKwBH36TDnaTVbvM_WzjxbjFezPx9LSHu60s-xzjzLIDJwTrGQ2jdMabWU23_xaTc8BZPCk6AfBdTL_Yo-6zDsRjuvfLf4qrqFd7-c3Qxv4lasESAQPOFp4tCVCWbiBuUwGwSREXGiIzDH5wbVTC5WmN-GivtcNaum_ELnTBdcgOHYjL1FSabj-TkbpArPxz0cainJvwcF0358NAYan1QHWAU7P1VEDpTZes6wqqLWFfPCBimmnhfyfjdrUX5SfaLKLEk1ZrIHI1yid1DczZJk_GVZM-ntrZehGaDGr2t0BErBYbxqj6jiyNbAa_CcyrgYcJ929ZrLkSIlM-edgmAcEk5yFN-DrT2ukdOto-labZfk4RrDJRBL9BVStv0cSd4WCwq0KcnGb74k5YHf998MCAmbOF32LsmMR0rhNbMNidFA3aoDNNyLs1C4ZBMk2mLqoz4BVqSjtCM9XvtC7eydjno6Yz_poqIG4HYS7Xst6quQdefnBYd-XU0RS_8PXFXh99oi3Sqtcd0boBB1Ny_LxMTg6GvSE89Omy9hs3-Ux7STmuLLaV9w2Tn_IzfJ_BVmBvm6zxVsBRVGw1uijFU_0iaKINxEovaQ6W_3NtUkY9dgF6g1azaAFeF-XANT2WyCC_Qz1Sd_78zuF6XIdneZXDKsXUkZP4bWGXs-4-MqVX-hZNtKA28Y3h3-DNXkxbTT6EfMI__JmHhqdcv83CAop8ydVWNIXQTHwgrmlcGZY=w300-h300-s-no?authuser=0'},
    {role: 'captain', room: 0, items: [], description: "Captain: Purrseus Starpouncer \n Special action, Captain's Orders: Choose another character. That character takes 1 action.", charAction:{label: "Captain's Orders"}, actions:[], selected: false, stagger: 0, infections:[], picture:'https://lh3.googleusercontent.com/N78zWkwY29_B5cj7ZqWQlwOC-TKksDLCwiYf0CNUGSWWJxXVTBvp9vf3hXKx1OrgTS5Qdo4X0iN2RiMZY21uBiImPsyxzc0kuNUgg-wcaKZquXPA6G2RgFG8zU1xqhL-G6pIPpDqfZSI5Qm7iUWUHctFP35mDpuRNIIR7x-NT0z7-795Pda5Ss5LmO0Ew4zLEvEiO42sT4XM4WWuwPfNk6tVXmKa61HZ7ZdZr5U_hdV2cJ7qnviPlh7Tnz90ns6bTQYWs5g65DvXjteb0jeWkwsYwHjqbNcCX8fw7oFlIV_EwspRBdAP0FWclKE1I-M0ZsZzqf6GdVDr9WRxcpMyASjygsnIXaOY9H1bRCBmFmeBwZl7M6ME9tUsHkvRUQ2kV30jxwD8u5Hr2xNz65gdyxxyuQAYa-bb7iL0qFG36EHFSyftSBVsn0fDVL9APfbrZXbM6GVn3xoiMw95iYAlqw9OO_4PPOESFsk7vmMpedC8IU_vOlEcC7cv6Fo_i8uopkLTOK9wPanzkDQK9tmy9ETqWLHbFKDmB9gYSa88UdqDQCM85XaWVU5NfZcdp4MplOjWVdJXJGu0zXuO2qFQJ9j46vhnPZRaNPay_spv5-7IuZkoXP04JJRVuDTTbBPJGF5kZ7D1QJ_B0uSCJUkrSFbSQPp4f750PGdMjq2bD9Xa1uj8UCFaj8vog4dxgxG5HkFczQUikuH6kTcVUCiJ6vL1r1RHPVGaY8G0MQ4t5q_ilM2mLGyrQIPD4B5hTcCLHe1esQP_1iZj8VWcFAfFe-YPoy31_QKopPZQiZLhQA9q2aImAt5_-QAuMh1efU6P3NCAYLnrhE9bjLGJxhl4ATqRmFPkKVY5gMAUmJvqBnTETSfSziYgUGb18WEuA09tA2RI-zfLavcglaQWAIaqYWRSrANVB2eV8p16J723dfHi3y9y=w300-h300-s-no?authuser=0'},
    {role: 'cook', room: 0, items: [], description: "Cook: Purrina Wan Cannoli \n Special action, Chow Time: Remove all stagger from any number of characters in your room.", charAction:{label: 'Chow Time'}, actions:[], selected: false, stagger: 0, infections:[], picture:'https://lh3.googleusercontent.com/nmqDVi8jOynjui3WAUgPd1b_S1bRPqiD1oArD-tpNoqVjnFDzzhfTZfBKlUf_pjeKaZb5Pf8wA1o5uUUA4tG2BQ3lNGSqJqOrAgysg4PFD5CUkvH-xr2D6pmXCSg39SrRenC6QR0K9S3p3Gaz1S4epf1_0Z84j06Bfybwou0nDbeGccQrs4SNf9xfPXP1Kb-8JznvrTJDEUnAOl16LIlSoNpCrabVoeu-wgHlr1jpyYyLPDaTuFRoB1s_DsQtnRdMkqnwHgG3zpwoUVp754WGW8xQsNrUHkWILIiTaLoFyeQh6KrVYI4guPvrbF6Pgm_LP8ZEMynk7VKiQRR1OOtwaJwREmZXU1e8fDMq34ow1e2avwQdODBIeqQSLfkhfkg0nI_ekID2rjW93VcAqgQ6dSAv_qrF8YT8y9FtovVHrBk88_N0qQOWGjYnEySisl8ECNnd43Dh4j3HBh6BGsRQafG06E0j4Wh5QrkTP2WrVP2PBONFBeSe8IB2RcYRpc9gkKU_ky5TGnVSBoEUO_0xI9VaEozsPfBlHTpwwiLCVUhuGdJEYoJsNEC1_PNnRHJEcDkFL-LHvvva_xcqwIl1IF8WgzTVXlcYkfz9qcjnL07uxJgQ1OvHbV6djNRkR9JfZ8gdyBhmwbzg2Fb7NTBIeWJir2PpL4nHjbm43Jrdt2LwGpnbtH-hjSyF_DObfJWruP6iU1_MTNVxwoHV7zFk39nGA--WjhppH7jydXSyi3yf2K0-EyyHodwZEiFxu5LkkAuTsR4TcLUaV-erNHFiXM8YJnXdN4OJSw_cb3B7OM31Rhv2b_i9My16kTR12HXs1PfddSXlUuHE4DH4y3wr9oqP6PqcxdyYIJ0DtLA4BJb6WcY-zcEKH0m0ZeS_nSudKhgtpG29jtyC6lqXLUgsoUn9Uge45ZLAIoVlGz8KBsjc5Ba=w300-h300-s-no?authuser=0'},
    {role: 'mechanic', room: 0, items: [], description: "Mechanic: Diesel T Wrench \n Special Action, Quick Fix: Repair up to 2 damage tokens in your room.", charAction:{label: 'Quick Fix'}, actions:[], selected: false, stagger: 0, infections:[], picture:'https://lh3.googleusercontent.com/Wf4aLuhk405NfAQRMYufDm1VMFvMPmv95vn5opX9qBienVIyFrNDXNQBepHx2uZvaFPWUzVQUhQAcFdnCtk3ZlvCZFUeCHSsL0h6-NZ4FCDsOx1w9Oqu_pdDiSlG88NOJN45qcuAUUSOteQgB_nRyWn1FJzdqVNwOqO8MkxP3TQHSXNo3wTsSfdE0s4mbrvj9Fc4sKufLg2F6SXciuIpIoxIlVrP8LoXpuprpt5xHkQz7FUBn1GFAQlQDOASxWmg6s-pXymTKH-h_qTgo-0oXPfp1QT0KQVkkSJLqrrsgkeffpf1-93lZ_253omC5Jdu9BAX-stlbyoqf5lkLfGfcC8fbadFgiWMJlgBAvACNcbyojdVScRHO_-TwJj9GeZsq5Ik5F4uPPX3dSqr2DHCgaJWqxgB_Eit4PVc1oWrKRzNNpNo_qai6EI9pFsTCWpfMDhYLHIdo-RsS3-FdlVy-HinIW-hW_Ea5S4igQjXy7lzV9dpmci-uAn_G0cc31qSfXgPDybrtv_En6BjeBQdFBWQv0XqqLwxd_BWknSo0U9F9YQBbSsc0W526Fyw-qfJAGP0mhw4qbx9mSba2AsFlqzUFB9QOfD8DgyW22Z07dysPD_N3fFi_sCvvoLEfkUWJrB7ofMZXkx_TQrBYHORr1r4jA-c9lZTmB5Na8_os3KLI5AVGhPWfIMEKEqu3__ASHgjgBlFqiaU4nG1btIZOCCjZD7GmD5A66oHOnIUlVSXKJEu2Tb0Y2dOh_h8Q1wO5KSXwmc_ABe3AWmPZZbs4iHU-xMjoR46IotV9P0Y7AfCRg7ek5N7vZynsedUxQBKZt0613F9o7Ff1fzHuO7X4MYbgBCBWxN-5-ViaZYItvJpGc1l0yJjZHiEoZZjqjA7m7XD6OrMlrjXVPDw-7wt3d3X8EONfE88BxJZ-Q9advfQuc7U=w300-h300-s-no?authuser=0'},
    {role: 'medic', room: 0, items: [], description: "Medic: Dr Keratin Claw \n Special action, Treat: Remove all infections from all characters in your room.", charAction:{label: 'Treat'}, actions:[], selected: false, stagger: 0, infections:[], picture:'https://lh3.googleusercontent.com/9yVmiDQy1rGNyqcYglXX93wYXxpfE5rM07gHBqT9EPE3wd8IxgsxEmMkcOsC1SKeU_2GFd3B8O0Z1aryNrXWXufnBj4nyKGfQvUf_M_qP_cabadCjcZ_NPmebuv8Stk5HYZuNC5IBla933mEzUer-rPDYSB9nV55BzR3Hg63n66LQaYML3K4vxjIT7xT1A7MoqSHSq721BgmnHlTLzH9JOfpFzAf7ww6Kh4iaRucdWVF0zJroRFgoPwz7OA_6nBQHKiAguLeBjxin1qjgBTa_nGeLexVEc6x2bwIpelMWZRRYPalB_M-znStHYYsbt0hnwLatWQs7M5VKMRxREzHXlexyQz-SzlowqYZULEn01oXmdYjNyqUS7WkZd0aeB4Rqu3p2rfFEG4B3Ebhm3ESvo1Se3MmBV3GTFfb6fNqPV3qJvPb8roRkAImumkm1XZQ2KQJ1-213v65VESkGfZ9BaKdvHfG1OuBKAcLCiz5gmHs4sl9OCVrDdOL_RbjW0cu6Bmi8snq-bIQ8RHFUrmR4igM2UvBS1F79cwG0HMFvc14_4mT1TMvolSDpfXkA09fh0k6oTkLPl_R_WtRcSzN9kbUuCNAqzH9EbG_78oTMhUHp1PBswS_8xh2RyAtKGWKpPEEq45jOusxjS3EvYhF1ef7KNqr5qJiajciTS_YGadf4u0UlDJ-SbyQ6GRr6mUqlQtn-1B4PCLXAOmnKUEXLWBJSEB4-Ab7B16KPaEnlNCTYsvhNrQwv97x9gyffj1HpVuvz97UUEESfUdWYcR4XRFqhuUsOOanCfKbORDTd8oVv8Zzhm5ZP8wLYaZkB0WGKCz64igTYEVRmPf4Y7JaQH9htHkxPdovUznfTbssUIvFx7eMqzdCELjogjE9bIMD-SoWb9FSo5jyAgxfXDyugaGRgujy8WfKYPlDAWFMWC0RtzQZ=w300-h300-s-no?authuser=0'},
    {role: 'scout', room: 0, items: [], description: "Scout: Cudds Lee Munchkin \n Special action, Spot: Reveal 1 Kludde that is attacking any room of the ship.", charAction:{label: 'Spot'}, actions:[], selected: false, stagger: 0, infections:[], picture:'https://lh3.googleusercontent.com/3020gAzA3txetsCBthZ_4bKhD7S1jrseW0S7RR6JH2qyo14KxhmM_ZiIYj5fg63uEZCnHiHvmphIletTVEbXorysYKBmBJSsROE4ruJSID3KFDlX669KYNhasIhLnOWl2w0n6FJCUXhN80q-1mNqvBDWKclchgWiaO4TYFa--ErWdnWSxNG0FnwHoYzcitAp-Sg0z8o_YMGBR6Djz76gHf6Baye8V_WAb_mVgI9pbYZJgXoA2yzTcB4-fBGqi8RVns9GRnSRKGRwonvUqdXEKamrOpYqQczRGwFQO7cTv9YiKeCJ1XQKRxN_dOUym4YvhWaRbbxfJ2f1RnLSh6Mz_2i69DrOUyGorxKiqYz6TNNIH0yrhBffhbYKUgZXCHh5Cw4ZmxWEfQNRQ3xkPpIl8ErD3B24UHwrpHQkbas14jqWlfIp-xiQ3HhNMHyyXDlDQAitSFSR11JA9lZtHqFx723wqh7rz_SL1t7S2Kg58J0W9T97wBTUmFiuVLNmLCT7gKkdM-KTPX6kA-0vRyOy78junI3ucRTxPRZDmCCagwLUWeEC4z6Mu_7WAPmR6pP8lU-kXI9E_2vm6A6geR58bK9kjGBABKWw4hNNwwvIdrOHBZFmyjViRVROiwpb98iuN9k48_ZFYYzU4WWqfTb5AQdDOgzFDQNKgecxox_ZiwcXnPv92QzPciCteLQP_rzDmEDpwXn5xN62bevAMfyYVZauw6gnvqCbHDiRG7X9OwMwjCX7jAcXhC0Ne8POrFC7u6bCVo-aLG52TFeQOm3AWizl-ZYI3vsf0zhs4rAgbLn_RwranZ2tYB43Bx6P781NZckyxieD6xvLs4Zd_6LVz-pZJEiApMwt_Ho7C9ue3n1eDsJHvYrN0ipN_xKAog7SZdSnYr77btrvoxQWy_B6bozI1DMNfNhEYCG34q2dqsf_7H3_=w300-h300-s-no?authuser=0'},
    {role: 'teleporter', room: 0, items: [], description: "Teleporter: Emmitt Tor \n Special action, Blip: Move to any room.", charAction:{label: 'Blip'}, actions:[], selected: false, stagger: 0, infections:[], picture:'https://lh3.googleusercontent.com/PhEuUergpBLmcGpz5D8k7av1EwHetRJrHEEnmdMko-IJ7c56kgZTQlJPlCT6J-AV7fyHEX9jbhpOoQT1XDOpgfsqD7d3jETMIIMicohI5Z-CpIkpFu9N7HsHhktUEyzw265dSfwPtusWPILFSMsvYM3K_ot81hf6BgYO0PuzeeRtuLYEPf_P_geq_G0qW_1T8e6XzmfNZOEu-igoD5lqU1Heus9vLxLvLAxXrX1W3Rstqmdtfh0zdccyOV8wxZ2waXIDQz4FBKmWCuxJurRtPVAIX4kjuFF5wTj1_wFmxJgC4U-1hy9sXa3bZdVK-CXqduz8oAQN2_oqxhtFofQcs9VzF_0yOuRrOqDPnLamXDOTt3zBgc2JAy_CVDxetbutSCNFP4n1E4xJoKeb057Sb7fyeIM-tup_DNiNQdn6id4ayEfR3oBFxQ8kwWpwWPQKMmerX_nmu12Yzmx9o-AVlnO8_Jvnk_p50AM3vxlGTRTOus_K6XHh_nu2ogjunfl3AfmCLQ_O3-0FmxP34uxN4jD9ouG_070sJ4pTHAZ4Sbtm5FA8eIDaGx7YHBKMu3SSf5uj1QTXUQ4rU5Y0p1Cc_6yaMmvjT1VzHCEoaQMk9Y0Dscl6pAjkMJFvc3w1hDqVgYg6bM4zI_TAfVA4Fh_SR6P4tRHWZjlW8HQGOVi2eXHxpIFxVj_blahdcUe32SXHSwo7MEvKCKt0_t9GSqk9bNN8EPsgjvU8wqcW8_a2uMkna2L1XY7rJRw6U4kwW_NtIxDpMGcct95kPtXD0aj2pZ1DZbhMBUQdu8gg8cukgxHyuWlj1Mm8p9ptN02iGD6XBSuDl5u9REOPx7lUtYntDrXHe6c0oq1zd3CH9zGGAJrbZbs0yqcI3xXMJ2zWnxV8b_gLuo65J-qnR3OTL0w-U15cKjLBDqYYUMzB-8iMaHQ0sDKF=w300-h300-s-no?authuser=0'}
  ]

  // allRooms is an array of objects, where each object represents a room of the ship. 
  // 'room' is used to refer to the room in text. (maybe change 'room' to 'name'?)
  // 'description' tells the user about the special action they can take inside the room.
  // 'action' gives a label to the 'actionSelector', during the possibleActions() function.
  // 'kludde' is an array of objects that come from kluddeDeck. 
  allRooms = [
    {room: 'Bridge', description: "Bridge \n System action, Grabby Paws: Spend 1 ship energy to defeat 1 kludde that is attacking any room of the ship.", action:{label: 'Grabby Paws'}, kludde: []},
    {room: 'Infirmary', description: "Infirmary \n System action, Wellness Enforcer: Spend 1 ship energy to remove all infections from all characters.", action:{label: 'Wellness Enforcer'}, kludde: []},
    {room: 'Loading bay', description: "Loading Bay, \n System action, Quantifoam Tank: Spend 1 ship energy to refresh all quantifoam items for all characters.", action:{label: 'Quantifoam Tank'}, kludde: []},
    {room: 'Engine Room', description: "Engine Room, \n System action, Dank Fusion Reactor: Spend 1 ship energy to refresh all dank matter items for all characters.", action:{label: 'Dank Fusion Reactor'}, kludde: []},
    {room: 'Hold', description: "Hold, \n System action, Nanite Nest: Spend 1 ship energy to refresh all nanite items for all characters.", action:{label: 'Nanite Nest'}, kludde: []},
    {room: 'Galley', description: "Galley, \n System action, Sustinance Replicator: Spend 1 ship energy to remove all stagger from all characters.", action:{label: 'Sustinance Replicator'}, kludde: []},
    {room: 'Hub', description: "Hub \n System action, Power Core: Spend 1 ship energy to repair all damaged ship systems.", action:{label: 'Power Core'}, kludde: []}  
]

// itemDeck is an array of objects, where each object represents an item your characters can pick up and use.
// 'name' is used to refer to the item in text.
// 'description' tells the player what the item can do.
// 'picture' points to an image of the item card.
// 'actions' gives 1 or 2 labels to the actionSelector.
// 'selected' keeps track of whether the item is chosen on start selection screen.
// 'refreshed' keeps track of whether the item is ready to use. (false=cannot use item)
// 'charge' is a number which tells how to refresh the item. 
// | 1 = nanites | 2 = dank matter | 3 = quantifoam. | 0 = consumable, cannot be refreshed. |
  itemDeck = [
    {name: 'Alkashitzer', description: "Alkashitzer [consumable] ...You know what it's for. \n Action: Remove all infection and stagger from all players in your room.", picture:'https://lh3.googleusercontent.com/puEhJsymG4NooR_LZ8V6h2Lsf-vHpGwIQVHj5uEqsG5tGaYmDsrLwsagYPzaWylLRZ4IDBCuafwdHM6gcpe_MbLJsxUyHcA0kzbDcnKyGlj0l9380tsvn_BkPNoL4YXpoCvMekFUi8qT-Lv4RVU3L7kXMGv0n6yiUN7j9TYsP-ff11p_LXbmjtzDzvZorsznU7RDCW8jZwaD657Q9p1-NbmU6thCPKnAkjvSPJHp6hWAik3OiynKNTDY61OVbFCfWHk60P9Jzr0chLyFRg6c78qjc514tEz9g1uytEMFTuHwjXYUaiAYhaITrGQxyDnI2T_qcnJUZ7V3fnuGb7pxtmo5a7YanSNvbCbVeJq1kRY56GDGmWgdTk7KMaytmTknOHfTEAyncLBk4-XZwGIgeShGoR6p2FWf_4OGpVzNcY8qPeQIU2hxtuvg0V9_XCYH4A2WzdTc_7gE4NdWadU3sJAY49JMyjLVCgkLh4O7g0rfdj2afsAcg8lmVY9nDtl77zNl84K1l1fnrbwuvbhtpltct-k7DAWCN_0lyqkRO48HZlsyZtcaxfAWx9-ONgjTVYBH08lJc38Tv-lC6mu6A6kdg0osrvSKBbZdovgKL9DhpKtuQIVVhZjYJf2yfdBnOpIgU2Xm5tg4wWLfrlMWWaCE6PnSmV4yGxJD2pQ_djMqv2U1NBcjd-FczctN-AA4GREYh5l9pabZ5sU5HQSc8XQO4x82aoFCmNMZ7jBHmcXf9iEL-KrqUDg5PJM3Y-_cNJgJT-DuhXCKMyI2rGr3hE9Ek-pDecJOS4yQoWGUbpOxAKTuQtl1ebEWJ8GM3T5CULtn5t3tW3ISHTEg0IZZr9edxZlSxYxI3YhkQA5P4rFmGGFPFrvpmAknGEW75-VAnRcbDpaMrSdAdLnNSm99FL1qfD4cVmi6n07OkGDdQdbwBfkL=w825-h1125-s-no?authuser=0', actions:[{label: 'Alkashitzer'}], selected: false, refreshed: true, charge:0},
    {name: 'Atomic Deconstructor', description: "Atomic Deconstructor [nanites] Point at your problems and click! The nanites make them dissapear. \n Action 1: Defeat 1 revealed 'snake vine' that is attacking yoru room. \n Action 2: defeat 1 revealed 'green matter blob that is attacking your room.", picture:'https://lh3.googleusercontent.com/O2u2XjPbGToovpdX4QOZdV-lcxXC2jNACiOiS9mKl3noy_XLjJ2O0iODTrciZibExkPXy3I66-Qb0kZMH5MIqeetjc33FA7lFuyc38VOLsPPBE7vis1HYmidIDB9wd3ovnkGymXuuFC-QpRLURqeMa4DolkJuv-5MO_80cwj75gpNqSiy1oNiSQZEDxfszgtRxkPZKcwPPAcPdu4_4H5Pc60dnlyX9Z1qV0ag0Z8RAh193esmn77kxUe6VxzbGWpSGkGLv3n6v2giyHqlbqL8pXAUOir7TPj53FqLPkobQAwufpfmfstlkSNjOp8NP5LDBjLbGM7WFENvqdNMJeYW-zzMOacBN3f3_xiMcR6MGK_cu-KohMuhUkzdm5mPDNrc0Wz_0tDvRU1SQ0tXxINsMvUbAZPMBZZ6L9fPKctKAQ3WHkTMnxNb7CUi9KlH7wm8MtqsHU8TQ3fACdsTDQaWmYoxOW3DPp237xclEmwrrw7dq4Fy8JDOJfROQN8PqOIHyEiNXUJ4vZ2oq9Y9_2HOqrD2ACe5aL3e3frX83IcFxy0LGkX3s3Yz7kFG6CBYK6BGcJPtKKXuVKUqGUhYsSyxRHPI1F9XBdN7wHjNFEr0HX9x88U0235oei3cPE2JkUpiJbDDIE1jyPffCmAFVLsSAFapnYFX4vqBm6Q9Rorx3KE3O0H644wPL1MFJj1OJHK2Pg6lRBwk840QmrzvGx7M1M_JQytFQuTQj4pzE_j_pW7ix23st7RHMhLw_FkXiVsC_zwZY7SytUnjx-x8f8kf_0I3hUhamSqlPGy6g7En6ixoJm2Ye3aYGVJkxexN3V2kbtMWWxVOgnBePBnb05x6eQcZhv0ZJEgaGHl46Hikma0iKvf8ZjMdy369no3qHBIayRw-1j_jBm9FOGETQzdMwYZDxlPVybNuQuhDOq-Q_EdhMn=w825-h1125-s-no?authuser=0', actions:[{label: 'Atomic Deconstructor 1'}, {label: 'Atomic Deconstructor 2'}], selected: false, refreshed: true, charge:1},
    {name: 'Atomic Reconstructor', description: "Atomic Reconstructor [nanites] Point at your problems and click! The nanites fix them for you. \n Action 1: Defeat 1 kaboom pod that is attacking your room. \n Action 2: Repair all damage tokens in your room.", picture:'https://lh3.googleusercontent.com/8ZsKdoOiHqOYOBXr_i4DxUrRvZ0TMjxGOS3er80EL2cgONY4MYMgVAYnZ3x-wd9yYZSwqUC2s_OJPJH7SpLt-Lz35A6ECkjLZnR6V-ejZV0JJQwwy8uhBpJVxJXoKT8J18lgu37k67EaUuKq46O5ReLfjQN_FFh1Bz8j9FmOC3md4qc8UP9Tn7IT8DsGqmj-OujRAbMdxhPrmy6SRwPICSv0Q-sBWsC8VB2rM7Km7oRmITsC3K8hJdVfpR55g0pafrCzxGkVOQDTDJlth-o5IzRqw6X6IdZOMGZOtvxYXVfnta5rF4Ks1USP3FFA-z6ySe71kKPYk5SAT-ekq-wQ2zKvQxLVbF3gIorh-zN316P_yujM6Mk-6XtF1lgDa5T3q2oM3Ev0I9oYd7vJ2PImDuFFnJ_oEB7QzSXgIRo_rT7gm_6JyoX_gGsGyD_QLYdmGiJUpKLEchZIIhyh6hS3BU7P7bJMw_enthFNvZQQS22ARnKK3c8Umgznls8Rz32mps3E5-qbS6OvBvi_fdCn4Ew-4xRN9WJQ9T1n9DGehBe342BXIQHIniJGJ4Bn9pYK29H4unVmb1S9T2rtg6r4Op42S60QjzL9m8R-tFcp3na1JS87jTvuEvKw1iWCMyF4MJ6gahQrz73R0cPnpkDjPifmaiFaeDNHtEjBseDlBnoWQCMrwfOQJfDzr3lEEmsPl6QqKy5zL4xT4hIg9v0HdS6kD4BDihidOVSVl9VjivmQhGzS3oSxZeoieucOLnifUuS4h9VVdEF4ZB2Wl5jPtGOVPjT_cBD1SgHShY5jLWzKsZW2oWe86mTDNHePfvOFAFJrKaD9onUP2BZuXnz4phELRu9-GiIQspRKd13BGvsXEnUkM6NdEWXGZuYCY2TUhor1ZmUSlrq1k7lQJM44WmS66-DFXhD4DEBxrC6GZ6JG3Xop=w825-h1125-s-no?authuser=0', actions:[{label: 'Atomic Reconstructor 1'}, {label: 'Atomic Reconstructor 2'}], selected: false, refreshed: true, charge:1},
    {name: 'BFGG', description: "BFGG [dank matter] Baryonic Fusion Grenade Gun. \n Action 1: Defeat 1 revealed 'lashing root' that is attacking your room. \n Action 2: defeat 1 revealed 'shadow seeder' that is attacking your room.", picture:'https://lh3.googleusercontent.com/hr6xnEU7aqwxyD1R3K5wcXpbAl4BhrvzkfURwd-Z89R2riz1RNzR-PJ-aGULXJfKgBYaPxZW89dmajvtY5VvAf6e-JwpBrgSa5DeCBV1zlGuKMmyu9aFMffD6BIQH9YOhKi9Ae3tIA7jj3O5hBuU68Z8wcBG-gNTnVZAJAUXLZWx9jXMFHIQGDyker0kJnfi64KRbDPs9U5rHMmxcsV9SGT7A_I0YDXLYY0L3zyEVMk7EKai3hwLVdCLO5D7vc383U61nrMbrKGjOCXtyDmeJUwPGyW0LRFglvHo9x4hgn2VAq9S4tiHD_2MNsvGZWR2SetpkAn6NqpCyISb5RrbsK6k2Xnmbmsdb44rdWbGqfb6VZDX_pk388CFj0wX35bHZMvJVFKpvdH6dT1hzoQFQPWCkzYYZgeIb0kkvq_AbMLeoncLwubHNTQy03-fGqOAREe5SLXBYjOTuhOixK6CLA_817HXTlWq5v4quBZOnXIoMEAB-hSszD14zUfk-2jh-afLiKt02xOkX6yKGKNpL4nrwGELlfiaJPDh034W6Knrx1PBzHstHByUht8J9xwMopASyVfZe4KGeplY-EQWVO1T0R8HcF4Zp33J7ibCmP7krU7YxEczEuEhgAXJs7aN985IUqQclBxa_WEq3MNGAx507wQKl2s5Xaw3mj4Ck0rT7q1kCKFb1d6MfJKKqvV50PLIihdFk82dGM9-sjwRzNj-V8lCoLd4Kab24dqlznFW6w4Zt5wqjJFCC74UlHv2-m1rY44OWLwtlq6wKBNg5JYYsndyau0Aa3YcMr7773oh6hIYlh4my0uuQAtpSgc2U1m7peA6NJKHKJi_2T95E3hOaVAvRjk8M6f004tIs9N9QOiLiVNYEn7ZAqggU9y0eCn-JY0wITE11bgo624L3maXqkgSn0qAAYnnwOlNpfBNuQSM=w825-h1125-s-no?authuser=0', actions:[{label: 'BFGG 1'}, {label: 'BFGG 2'}], selected: false, refreshed: true, charge:2},
    {name: 'Battle Biscuits', description: "Battle Biscuits [consumable] Katundian Interstellar Battle Biscuits, Large Edition. \n Action 1: Remove all stagger from any number of characters in your room.", picture:'https://lh3.googleusercontent.com/Dft3bCD_evVMlBBJ-ZYq_bEXXvoJCSeAxxAL5VPHrgTSA3-qzlXy90usjmdcNG50rb6_lEq_x0dvVUeSnQ1nGyGYgBS6WBbPdbP92qXaXKQ2kx_lLbRq7gAjJdCV0QATIOjZqJwSFl6tcU-w5ds8X-NentE5PAupWmSh6NOvgp10bIGqbxGoCDJ9Q6fXbooS0Y3r76GxrlvesK1ooxh2QiQQ5a4QNq0kIhxKmHZoidsGmahbkrUrI-L2nc5yCCQltcV7nYPxWOYlzKhauAFEwSlbPihtrchYxVA_3TqSJ-91WAmgZc2dFCR2J0zdlxARjqV_znjIj7hVTFTitPwt1gl9wE_O7nfKb1eA5duR2Tjf36kks67T48TPVnoSnZPh43RJ5L-kVWMjNM_cz_QCX1kZKUuTJipACQQKX3HSEp_lp2dj7tkHsLVWhwjRZlQ8I3lFX7GApB6zyxJpOB49gqq6I753WPHbZSEPVWzW74J23hOfHYfSp_Bp03qDTawmulJg1UiVf6TSJpDPB4_WnKXXK_9JyM7jAZEgzLL7rIpV0DxGvpjIhnLvxKG1_GyzmudtZCPw3FEHTbURz8YvS1K8v5cMPoxeeX1b27VJ0H2xInulMlhZt1v1CVD1Vmy8LO2RS1PsPi727CkeE7RnFSPZwihu7_EpiSDd_le_nosf1JENIDaZmCDkKtI-3_9mfGZir5hP7Ao_vGAFqjq5U605FF20r-OBx1RHF-40uiieiu2IUOjsk3CAZsIZDymmHSmltzBONz5acl70IGu2Px4jou56rS5Wmvh--JAeUQ7r_rdHJuvTH9jvszPehYJaccfK7aEOQh3LGZaihY5oJXvxyHv8rzrXuYH_S-wbJBKm1suJc1_pZvpYgo6NnwnqFTwLdPSe7RkHo650wt_pnPDoYyDOc0zxDRr7oUIgrDVrV1Ie=w825-h1125-s-no?authuser=0', actions:[{label: 'Battle Biscuits'}], selected: false, refreshed: true, charge:0},
    {name: 'Dank Nugget', description: "Dank Nugget [consumable] Next generation energy. \n Action 1: All players refresh all dank matter items. \n Action 2: The ship gains 3 energy", picture:'https://lh3.googleusercontent.com/SNyw3QvafkEDNDJdD0-3gvR4owQcqiW4FHMJ0STbHyfYedlgmETFZxsrBjDXggEANx7wgz8E3Db2o5m7Wyy25i9pO7w02haE7Oaot2k-VqNW5_whZdb37_EzZ5Z1TiXrLXyXr-OVvPUM0jxG0jZzgBumRwf1hI3_CWoHHgUEZRGctrJgOuYgdxMdzafs0_7PZ3gRHMd3GTXvXgTaoMyJo0_piejE_VPqtSy1RS1bWBrD6AF08nJ1lA4ZERBy10DOeHgTALxHpLzENJRMudI-t_nSV-Tuy_wdNccqwF4-aQ1vbMlYcdkKJyJrxYx3mu82g3Za_aGDIqu8VAxysDYybodByJ4urjv8SCaqk9Ydwf0p3QIiZi1CbC0PNC2vRbmbwNyPHcQUJsR9i4dAqbMiL79-mbXO5MjYaEZ4tD97cwL3jJMQl80kC4lj_n35vQyG4Zf4lRu58bBEWxPg5kAprdXL4tuMOfLrl-DeUCz5wUg9sOVT3qU6QG9QK0H1-l0nnppiIo9xwXk4X8rrQCcyyIwfn6D02mbxkvPpkE8NHTHSbduhTGbOzkYv443ILhRHdPFwQ3cu2hnV6c4p4mXfaJDMYhYK5keviZNaIj5G-yCiD6kh750-LrtIemnzeGa_Qdc7RptqFEq3alICgMjShi1dHHqUPj23Nt3qXjufIuCKqtdf2Sx-slflL4E5V9XKsfVwImEgpshOzBGU1fqKfuSs1cmEsq6H7xOOgNSkWhRM3BmdMCNHMuCgmqz_7C09cCawnQKX8h6sH2HBWT9YtYtIVWP571YXxvRlM7iFou-N6EMRO0LKKS2RyBaarI6a3AbKdy-BNbeXzHGtniewQPjL_ShV8Z6vzqIqPG5t_WurZdUW4xiSO_hjzrsIFtIQWESZEvJz7fllx0W0u2IIW1RyRAT-BnO-6clNHgvH9jvAfI_p=w825-h1125-s-no?authuser=0', actions:[{label: 'Dank Nugget 1'}, {label: 'Dank Nugget 2'}], selected: false, refreshed: true, charge:0},
    {name: 'Dimensional Scanner', description: "Dimensional Scanner [nanites] Scans in all dimensions. \n Action 1: Defeat 1 'shadow seeder' that is attacking your room. \n Action 2: Reveal all Kludde that are attacking your room.", picture:'https://lh3.googleusercontent.com/J1FBQwuRj4h6vgZMy6pnD_0fqn4boLUfLYSd0kQaPYUb8duzAYFaoJidihoYUBM0L7jsUMNi2T8NUypQtKm0Ladvlhlp82XB1BwvlyPvj4Fcr6MiC8SUD_z_-X6nyVEiZd82hgGFuU9Dxi6SECVfgiqMOSp_aBHwFwCwVHvAVJG3eK71Pa0Uilwie-x44GziCsrYbwQsTStVZ4fBQNnpmJPjTGirQLnMy9KXiJWWAcWl9UtDBouDPiyLz7N7fr3NrB0qhiZee7s2YA6giLqKbcf0Cqn3BtTS0AoqKlsNC4ehR4HE_RUYLFqFdiIYkHAUG2kECYTHQm-Ng3ChUApD998jqFPUDWmbe_k9-mCGX8kkVT2cLNhdRdSOHjj3wNhdgXFkfjwiy8QhhMjsL6S4x5Muzr4z9JSj-qQ1edNIV8sd9ls9meJPXRtUTik-R_o0Qo4Pahx88zfaAoTfPFl2kEIIyryc5tkE1ef1RhIVByhHRyDIMQvBuzGzIYY8hkJ-6F0vo7VS6qUl_jA0o5bd7Wo4F9_SGISZT0gUc3kabJboVVBIBturtKrfeTZtIShz90M-mXcIjhnP3FJsGtbF78iSEA6gfVf4LpyZC-DPUTD69LL8J9DVMS5N7QkJfLHuDyTNDn1VdPjUVklpc43bDzoYGUIYZk1Wf_hZrHFpG4jqI-usBFtQ7w3aB_LYd0qwFfyC7Q1fNwECF_8y2TCkbgEnBd320Uqf29AwGK1J5MoP9I4oqanLIENDtmSG7zlKAf50XoQoQpVeTZh8odTIDqmaLgjY9COutqIsEQcGyXBx23ci2dRI94GVHYq_IzuMur29G6-slpn_x1NGmPw4ErogT_uVwAzVa9k4KfDlKdu9KQTIO4N1zLk6Z1q1objw1lta-KDtNBV5fVks2vgi-NJnvyzzO4rcTg8aEf5pIvZKFx4y=w825-h1125-s-no?authuser=0', actions:[{label: 'Dimensional Scanner 1'}, {label: 'Dimensional Scanner 2'}], selected: false, refreshed: true, charge:1},
    {name: 'Eye Drone', description: "Eye Drone [quantifoam] Eyes that appear wherever you need them. \n Action 1: Defeat 1 'shadow seeder' that is attacking your room. \n Action 2: Choose a space zone. Reveal up to 2 kludde in that space zone.", picture:'https://lh3.googleusercontent.com/4VGwzTyqe4bcR-p750xVB3LHu0Ukd7X_yzdyOwvNbjf7Hn_EELM3HS1Rz9yJfY38k4mhwSKDwfz42D4kCZvyjAo0i9q7YYtGgrAhybP1cY4wZvz7V5ml8ZqSRqJTybH_IeGRiqcATtUTNSsK9TbNFpw1egiXN6DBATQ2CZqUnebh82bBdHcvHUWsESTJFJgO3btDZNTcW4gKv6nqT5QYVJdBlgpQLyU58y8UhfRc6bcsOf63poUJRL_K1FVyeIdeZlz7u3RhiM2ztdFdnzfh3VU3kkUy7MPBpuT5rXG6r_cr54FZ_AmVfZmpxdn4Yz0rYOv4sW0BcrHxUXgsJTsjHoAepU6EqLXfIjCgQKag8CMm9tMmf4WX_0s6uL6gAvhxh1KpdFGnJtp696XbDTUw3xpvvcuBNsXp5sv00fgjqjvPaiFMt8FEqRRhW2Bs7GGu0mb98cQZ_DxLUDk6YQiO_nHLeJs77in3amc5xi7jY53XzP8xAnmVxBTcEZG1mQbZGPf5F9aCaqAN1u2X5Z4fo8Qp9SuGZl-Y7Hgv9Qo_ey8ke314G3u8dkCNjHmYLg0wKZaD5TWyIRLdTmTy2wCCTiFbaHJ5im6gXXYjfmReL0Ggi36MfBrG1T9XByXPsecRMlYWi1wNjHe79R3-vxB_fsl5mQiuJnHoBBb_KShxDCUtBD-fMXoRSwP80MKL_ZFVq1e4u72awkRN62_16Y2TPxSRCeYmU_nOz8ZoTHC8EA_XXBn4T1rm9iIksGBfSfXfPpmN9FwAuaQE-tn5P353f15E1Rsxfv_Q6UQxPc3LbPB15BjRCxa9a5_114Avbc5lrPMWwDSFJuGtzNXTFHe5gbozmS3xxmtAB-Jsm3okuag5OhcEcQodLVIGFxPLZ3-a8dVyD-oE_gcOw83eLtssqhvNJMFYEEQNg-jgNkaZ9m9bYNOk=w825-h1125-s-no?authuser=0', actions:[{label: 'Eye Drone 1'}, {label: 'Eye Drone 2'}], selected: false, refreshed: true, charge:3},
    {name: 'Fixit Grenade', description: "Fixit Grendae [consumable] State of the art incendiary reconstruction technology. \n Action: Repair all damage tokens on any 1 room of the ship.", picture:'https://lh3.googleusercontent.com/2G5adU6XeuA8fE5p1-dZqb134ige0w1-nvqStrhr8IHLSXLI2F80Gnp4IZ6VkofVTcHYdSzp5kZWnTv1Z_c1FZzY9QR9YEWRktuaMkp6JCela1CuD-n6AN8VP43mNNZaZOYLcfwnOkFWT5ktnoOF8IOlHpZVTQuDCM7NPdCRlOrYMGqUmhsnyPp4jLpjoOQXspDKrB5VoRzKVxxIrwsrY08lNFKtMOO5Ww49gqdcW5SnmEA7NlBlDPH_Tc7gjoKN6j_rJTQQzttwKeW-AAfY3Ni2doTjNeXHisnKmtzdzgo3od0Vwr6msoAYIRtphypSXGmcJkKZeYxmDTNVAp7n4_VhiL7VQgTQhcqQANWrGQn-4z8FqzRTX7wvMd9c2rgIqixY_zavLI3qWxpkp36MOil3eLXX-2rUx5Ns-mdePlb1Kc0fx_fOQL6TVde0vXg_LWhI-YWzNzWZMZDq5X1dDfB6TECBktwiwRyWacqTBeDQhaGwiaqh1eT8qj7WdPC-WkE_1NTXvwhqAeMBqLftGVohHsWqweJ9zdJBGPLB2KYt8b73aYnPsOwuCcfnmAQAj5uV-d8TyIR1biYbJXdB4C8Xxb_YyzOjgbpdaZnXQtmYthTdbru23jKGt2nWnDgKe6NQM8Q15LFQ47a5OD2bssUvlnqv841l48JBdowYOX0vjA0YUikHyP0il5_SmxFR36JwfqPtwJ0-f0LRJVbPlCnqkICYftwzDWcbc6MxGouQNQk5NlJoQnY9kfXVR_FJcfz8TGo6sFUgu5z8WS9yHdGtiWblIp8nHP7h8WQcqvFQoUJ-bPixEPz4hPR4erpncmN1giK6ibfjpvq5xrndczoXj86xdZhf6LSBbmIAQIFJAHs11tKwq7yMlCgS694NhADBIh8nf9_IqKnX4F1PvJnRkKNQfCK6-IT1pZlrZopy40q1=w825-h1125-s-no?authuser=0', actions:[{label: 'Fixit Grenade'}], selected: false, refreshed: true, charge:0},
    {name: 'Handi Boots', description: "Handi Boots [quantifoam]: The quantifoam creates tools as you walk. \n Action 1: Defeat 1 'kaboom pod' that is attacking your room. \n Action 2: repair all damaged doorways in your room, then you may move through 1 doorway.", picture:'https://lh3.googleusercontent.com/B__RMk6hphYweWnoYdBdEZtXf4uqfbXGqWSCGmZ2ptou4lpMqDY2IZStQPhlu7zP4O7MQbds5nT17t4oh619Zq7MmqYacyuKF-Bcc2momPurZHpJwQLs-g-gaomYYEUodkKxmdJY-Oxgxzzbpgu_OqgDHFkzmDRDuhjJRs1WlZe9PxYhVouwx048n1gqJCLZTIq-Do7qaGyf4WNV1geSfg9oWmZWolEflU2lx7BkbvFmJExtehDKpJSNlSWn58LApual47-SVKau-3m7kNdaQMJhV-itayb5ZQfPwZ-e3BPuRwq4H3L1mcvd9qxY0_sc62e3ifTZLAcHnPuyzP3cH3vSxbubBKHuqAGw2ydqzvyiWdpWEoPnjoFdYU05HP3aq-xMCJje4L8CVvXLgaf5FpayhEJXjLIbayty35l_Emvk5_sY-6t6H-fKygdRIvnX94DSHejzJnXXsX2Tx0S1lDWbaAp3FUEi-oNAIpDG-LCCC9PO5PvtloZlfJ6Ut-dG3HVTRvrs4mFRgKUnjtrIIpOQRo1Ni_z4nFBU1q3DEGmsp-hrkHgWs5iH1kZzRtxGDVuKWtDrqdujl1IkRMSBSFkUyH6JWciPrm6VX1oZmOxhDblIX08ObC2aBpU1FkkJHQR9oYf-EFtRWdoxp82Nil83A5zafSAU8QwMWXcSQMoUKupprVyKGwVXe5ZGmOKeOVPxvP3xpHS1srjndX6K5bYcvVtnQ61lHGLAnS8LMSZhWiZM45_WnwlVOkMQqiiOdjL1ZFD-bybN7284ZNJPgnYDLaPXEHcNOjwVC6V8y_yoxalpGVBGDE1XhkUTk6WytmeFh43QtEMK1IJYVtaHvdvHj9SZOed-YbrJL61Qy5AY1ETczSvdrQKnRTC4O3ySHomP_hbc4N_gZfSZAIJA0ESI_DTxVTh58pFRqTWod6wvcnvm=w825-h1125-s-no?authuser=0', actions:[{label: 'Handi Boots 1'}, {label: 'Handi Boots 2'}], selected: false, refreshed: true, charge:3},
    {name: 'Hypersonic Wrench', description: "Hypersonic Wrench [dank matter]: When you need it fixed in a hurry. \n Action 1: Defeat 1 'kaboom pod' that is attacking your room. \n Action 2: Repair up to 4 damage tokens anywhere on the ship.", picture:'https://lh3.googleusercontent.com/_hSj1-fL6YHP4LS9C6miRob2gTH2kqUjyp8J2LOY3wU7MEM1HodjXtBacLi1WKY-FF8-fC8fKch4nVJo5aQgVPgr0iL0FpZWxntXYC3EoTHAAoICC-mGUXSquvZu5kEKslbv3ZvE4HchS6Sv8mhkFxrDKoXeg-p7XNxIFN8SPiaGgHOtmWdQu59xf87q-j2GeUPYBMznwNvPcDx3x8_CmOxwWnt3Gdv8gEsiXJpSMO5pfsRRIYU_8G4MR3Exw4-0Jfvjk9PdIzq2YVYvzyX1zATvOVsxGotXa5YVzfW87MS6SqcxCeAunldGwGczFsvdoQxIe8moqeo1noC1QEFvvH406fVPCA_lJjhY_xJXfr1PgLbZ5_C6AmRbShSOOepFWaBS6RS6eFlBE8P72SfLswDczpvrBd50M2icZ1Qi8h-ajBQlMQ1TOqNIgRsHU1GN7tNrODTjDMH5cQ1ngr2EV-j2EwwhuXuBegErzoRUp1VxQccVIEGOgVhHMnRohRJBNRA4ZKF0sRy_DAz_O4Vtgu-z6CGKVQ4sqBPnL3AfHxnvPKuGMDUHt3KyD2tV8oPQFgVxgQZ96TdFgSkXfjqcNEgrOO8yUm3cPOSwAvnwMot5lxhZS8WcwkT_emLyOpsL19kECp1q-757DYX9X7HtYTQtjJ1Otnemq5aUbL0zhRBIxG5OinLutFcHYoDq5r0CtYGYDHES5cKsilwAQovRzub_9mn4Y7842LgjJKm9yygFBbxnZDOCM2Aw-pz3g_f-O1xwGt221aZ_wx1vTvdIrWvmREemRx1dI9wXwIMSATBWJdT9HaQk3e9yvFm9AF9kQWGqSfHVlxl8CnMLWv3xI9n_a8nz8XXeNrbUmaLt8BYmBQ8lmGtcYQ7naGiP0LJZaeMuwzdZX6Hub-1cjZ-e0X2wuIrty-f13tz17sAM6QLb-SWo=w825-h1125-s-no?authuser=0', actions:[{label: 'Hypersonic Wrench 1'}, {label: 'Hypersonic Wrench 2'}], selected: false, refreshed: true, charge:3},
    {name: 'Implosion Launcher', description: "Implosion Launcher [nanites]: Point and click and the nanites condense into an implosion. \n Action 1: Defeat 1 'lashing root' that is attacking your room. \n Action 2: Divert the kludde's attention towards a specific room.", picture:'https://lh3.googleusercontent.com/Q92biAK9hjiSzuciPuHMlWVHOmwf40zqG67b5UJ7JchcpWGDWUyJGdPGVqJX9h5wWN8DejDRSMivJdOSIKbisEUBiqNnjxr4sBrtmSI2De2QwuOTx4iGwIeOK4egXeonkhSCUn2zf7wEtLiRexFRTCfBSUWqA1zNwQsNXHmcHRPvP82E4J9-_D-uLPNifSuCHYv7uJ1Yd-SAZZID8qjzfcqfglUkYKmZfbAfob3R62kV8c3OR_jJ6LUqP1fSR543tTWRDApmNO1uGJXMj7EatuafYGGn0qG01C_ps9R2nuGqV45vX2SE1GYTN-FNHsi0QIVd98ecMVGqCCpiJTAvNM8Gjl8V1i8e296IypsaTHfQcbFN6ME5YpiRSuQUib2snSTjfziUubQGAJWzQkIE0Ft4BLW4JA_6096sqSmXZn1h48HeiyZXCw0pdFh63jLVFI5jkLWif4EVRdpLGP2lOpaiaDiUyALXlY8PsQ19fKrYSfEVfYKFLvKzvNtLy20fXYAC6ECJnpEw3I06St4_xlIGfFUklflJG1zldK7U1x3A6HBd2F9fpPOrbJY1eVJ7Gee0bhF_yDuZz3tu8WFrVAWsEstmTLWKKDW9MjTXAKlgN9VyG6BFGMHJxXQoYJe3OEorvVlY3x6ATWdf8dEq5sMkUFa5zxwzUk88T7SbpzuxMhRghzpaa-8RFd-LXLx4xpgfQj3vYwXMtaeagcm7LjbFnLqTjXpFMjG-CR4PA1jmE_M9k-LB_CWs-CoLR20lK_iubfYx5ZrftYK9PlYHLBtBQxk-qksOYw6CiW91SQrDdXVwFJiYdlvqHZ4R1AWdX3YGIRtFRu6YYWYG5qlk2i6p8pkCBMgKyRzuMQFPgu-zy6kA7mfjqveYkLzF6zrPzzhAgE1FpLE7p-ddURgLPq_Nix3Qhl7Ih-dClX61YCct3Wgz=w825-h1125-s-no?authuser=0', actions:[{label: 'Implosion Launcher 1'}, {label: 'Implosion Launcher 2'}], selected: false, refreshed: true, charge:1},
    {name: 'Inferno Blaster', description: "Inferno Blaster [quantifoam]: Squeeze your paw to spray a torrent of flame. \n Action 1: Defeat 1 'big bamboo' that is attacking your room. \n Action 2: Defeat 1 'green matter blob' that is attacking your room.", picture:'https://lh3.googleusercontent.com/2xX95HUN3uw5FrsNWZC17BGzVU0lxoGcITpEa8Q1aWAk3F0BMC1HXAFvJArWUt_2U3mlu99TnI0ulGomOShjPvDXazMaf6nDvNRL7KOmt3Drd2asKv1zf-S2DtUraHs67BXxN75rHOGPC-nfnG7sGFnE5jg6nRiq9AMCqfGWdbklXwyZ_i_dg5amjHwKCfJNddZRTgzI1Nh8nZXot7Le2d8FIry6pk6S7F-Hjl5WKkWds7eCQzWWCD5OqyZI1HsGx4XLTCb4uwU2SN9-bDR4h20bRU2K1jouqlCk0XSN7bryVKVfMLvzznYM9RUoeXgpbFG4t8f8RXueGc9nDNbGucR6cA_Zr_Vqy4lyV1ZRhEBGskGy8q9D_jZRzZAkjb53VYhAe6j5XRg5MuvIsTL-zouM3x7MDUR5YpXsimirwpdj7I5PHKSyFLI_4LrI2aP3OqsU52rwEN5pHIXilWlwvQ_B351ClZo6VHX8r2tbXlxrSbxEAAVJd7Yv9SAWyus_KwPVfLPpCyXlplpQ7e1eDMtOfHCLU5yRQfibAIPsddNr9IhdOi2oRulCMz8_6x3PFNgnVIwNxM23Lgr9625gXiKPYDTQ701veVJ_32HFHS4vY4LiTBIlyS7b4_dYuIY6roLZzhi-0M-oyYOO4maX1p114qTXkdR2dnUIC9sN3-agz3vqiM9aFH2UU8Z0AwVLXru-t2OlyIvUFbBpp7fVdrR4R10XlpplLK_URnnPqhnF3CkSNLbhcy50sTf3-R40YsxnLpnGk66yQG09FcYTAEgdu7EtEqD0a_Nco_yTrwRTue7MMmOOMKBhF2u-5pPistjjrKuD3KtjkhWIS2DLUQANvKUbf8sFOpPi-QTrQJ6JN8gFsuAehgy1GRs4QKXdI4URgRgEJKHdJ1U9I4j-NWhJVS5D4eZ_0olNE4vUiH7rKhsk=w825-h1125-s-no?authuser=0', actions:[{label: 'Inferno Blaster 1'}, {label: 'Inferno Blaster 2'}], selected: false, refreshed: true, charge:3},
    {name: 'KEM Spray', description: "KEM Spray [quantifoam]: Katundian Electrostabilizing Milk. \n Action 1: Defeat 1 'green matter blob' that is attacking your room. \n Action 2: Remove 1 infection and all stagger from 1 player in your room.", picture:'https://lh3.googleusercontent.com/vS_MJoik91x6Q_XTXSg7YwS-aa5hN9pQjKMktxwSRk00b7dRc9tkJnuKhQRelSPRCYuxbSRjyvrpSxeg8oqMnQw45woq1XgBx8OoR9LbNyWMxWtuwZyMRjezNTzaexuzKVDUGIniWP9cP6RQzinW1Ji_-xlrDEzKXUQQANYT4Let-Cdjx0QamhTVWq9VaOCRXhb6eOlGvnMgUtrKXLNP-vi-yzsDZxKnKrrl6ShQ0cp_DNaNCqz-4CdG3TkY4u8bC2KfaXrXUxrz6XywQiTzObzo3cpyGG24BsMd4kul17ytK1e_7W-cZyELJTZWNwqQAJKz2wIrGWxdq60IE2paNAl7Ht02CnP7_BI61xyrKna3PKyzc7P6RSVBaSFjiPKfaCgLC6NIJNjvwD82f8HAl-BY8gjos-GOgHG9BeIeOM2siFVYzY0uVAak7t2MEg22nkBcmjckQG4km2PP-YJQChbak7Rz9XA3nJEtlxawFTGy38o5KnjfogJhvPqjCqqg__Rm_0TeMD_mDI5kIa6jeI36SBaQezr1ql437KisVGvZmA5aBTyFf4vhjTEXGvBfrCuOVnwIPTqXElWUfKUr-pp0mEPEfFgTlPO1icUr7h4blp__vzSaNKnHC3nDe5WjbTjgr2ZRXGHP8kVuKcn1yzex1X9BIrdnX274AvOY2-yGkVa7gGX9eLGtFg7nDKtkMhvTTgI-xtWR_SSpnHbCo_lK7GdpokSveGsAnyYSm1fmVQPVXiApJtlWhAe4Mdj3oKcXxAQ30n_xS7aaJyc1PdxUCYaMGonCSXs06lqIZFYWLoGv9JFPJqAcyyMkaptIteHOYkjHXNZmqNcRDdHU1obkKTPxXJi1ZLIfTu9O7DyW33AaqdfFn9Q0FnmxtnQfPybXvo4pnspJE_rzANtSkKy4UA9wfkjpjcCXcoZvuR92QTAF=w825-h1125-s-no?authuser=0', actions:[{label: 'KEM Spray 1'}, {label: 'KEM Spray 2'}], selected: false, refreshed: true, charge:3},
    {name: 'Lumination Stick', description: "Lumination Stick [consumable]: Crack it, throw it, close your eyes. \n Action: Reveal all kludde that are attacking any 1 room of the ship.", picture:'https://lh3.googleusercontent.com/og9Ur13_s6GCICDJqe-4qCOAq2wmwX5YL6D6BxLKkR4EAs59Y1hI-H_4COY85DtaXA_Z4vtGh6mxrkWH726-5lgOaTrgGXwmCCKuLojCV-860bE5ubS2t6sE4F93CFlZECZ4LSSETwYYa2s-1QeJUJDNSLSsGZwr2ssuMvzAt6OUI8FWWZwcHLDtK1kZfK52c76ps_B_2LSoUKQRkyPMgyF70fdKtn8ircM89VCJqED11P0zFUfspUi7LdErjWtPKmPDw79DV2uyEPkLCLVZG6-2GCGOqPYiyc1iJoroFf3ZyTixK1K3LglZ7-gSuF6jjlt1gNuKE25XUklQsARkw6Qklu9DIz_WSuBGf31SfSLJQ7HY6193d9msLYT55Bh4nojEhThD_U3SD9xVnIpHb_xtr92fyd07dX3h4m1vIzHrkIQM2kcrjqF7OupHeQdKxJaH15OkN3i3cgV4edkHUQ4i1Z7L_rR3Lkdd6HJvgmicLavdWj3Beon83Ia5tDFEigawasH9W7py8Os3o1y6FN_gK0py7_lutrq9AgdIOV7Lv1slqTJyuIOhQRolyBv4g_Mf3Q0jcXfUZF8ZE4Kq1nIJ23_s_Zx6d7QAhSo6ggEUD2UHpsecOhdW4qICRFgUQqW3a1dgb7i32WHOfEVbmG_WlTlAG-FSc6mIAwKC6zp9lmvxazLIrgoT7QFKib6A3__Fx45qgjt2to0z_Py0_FLFyLNvrbSYdffrZZ6tAxHI53RQKanBGj0VzT3ZGR5nq2LVj-FnWL4-l7iVJyLo59iC9NivqbET-JY5H1gIwPfbVC9U-ib8fQsftwzoO5ZUP5jHmnGMzWJCL0-qFV5b9sRuGDfP-_zSyfp23hIFlGY37Kp7CzI1BraNJw1R-ITJ7PyWjy8XTm4PNNa8ZGy-jQfCiehJlq98-o4x4UicNPDRvEdY=w825-h1125-s-no?authuser=0', actions:[{label: 'Lumination Stick'}], selected: false, refreshed: true, charge:0},
    {name: 'Nanite Cluster', description: "Nanite Cluster [consumable]: Send in the nanites! \n Action 1: All players refresh all nanite cards. \n Action 2: The ship gains 3 energy.", picture:'https://lh3.googleusercontent.com/SlgnYvAYcIOxaGR47NVVzmG301K-fFTr7JY-9MtrqrL-Gm0l5KfofvVbboWB32isFQa0ScKiEKfG0AKQ91LVR8RxJRsW9lZGtqkyGUghmkyjZ8oXeVaHkBIcHNNuHQo4ziuHgqjrmb8vqgRTD64Qkxu2FlhQRSiI_XdHZzOXmrmHk-qfgr0utWA6MoNe6itkhKpJ_0UZ2tYdKPUJaUeXzDs6HgqV5C7gZcX0iV8w5sA64wMeF-_LFQGBgFro-i8tlzWLKFVQprVoQ4iXRWziMlUqlQGcZ1DjQMLToO7lG_jjpKCDsz5CAHptAKWX_cH_vryk03r8S1rljBiGq_OL7muJWNgF0czP8oj0TwpFZwLWoh_s-Qjb_AaS5Kt9ynjqhJB6xYw3vXbrSjYaKvoqNyfE3IVCY7UfDaHYcs5jd3vDDN_kAIpBKtmGyVLCxU-9aSxoEJZO1UOUKLA9Lr5_A4LwVK_0uo-hD2TWFf6swsX-GunaPnesxHs7Mjd2vo6zDljdxE41BjhOBB5fDKMooAQp5qcbKQvrwd1vlQbRiBpkPnhJJX8FhTIv2VOX0_QLwDzirKVziOdSlIYHnhbYQJU5XAJkHEDmCFcByTCMIA8ncWrp_4z2Il7Spe_5WIWmhcXs3EIU1FqmArsvcw0KR9dAVFIqaKr2HdWoDsjBtsARuG_vPVaT1ABfgexV9pIZY3kP_LZYwv6nOzRMz62ufoX7HNixGhWu0lP26LYY0-JYJEVbsY-iokdHcQFxndrFRfDEgr2nL3d1-GwD1akzgVn_6UmH3GcEI_iJnMmETaU3aplbbu-ink6J_SgbzQpmW_4jopAPTp5cnB7pAVC9RTBIdDTtTXeQkz1MmKjv4uetiWDOFwMrAwFgw5ddhNNbpI57Io6gJiHxnyxvzSJ0oSaESJKPiWnQvIz2v1WBcvdLulLB=w825-h1125-s-no?authuser=0', actions:[{label: 'Nanite Cluster 1'}, {label: 'Nanite Cluster 2'}], selected: false, refreshed: true, charge:0},
    {name: 'NIP', description: "NIP. [consumable]: Nerve Ignition Powder! \n Action: Take 3 extra actions this turn.", picture:'https://lh3.googleusercontent.com/r_32mcEJr2d4Rzbn_SBTj6Ho1nogihxaYAckiChD5YrHoPufYGSCD59Sq8JrO7riXR-v648fPSulpweqfBoQjFIUd1QmWVhwSTtrGh9XCs8pxaozpgRRBeCk2C75QLXH5RljROKz1IUANBI1Otq5tNjsh20iBgK-qQOkmQ6NYNk5UaStt2tU6SGTOICpxCqauEtpnvqMYDfJTIDrc9fh0zMLM-0yhCFl6eTt34wQkCIc7xpWBz6LMaIcQjzjreU-ThPL1_WqUcqJtkClXluyY7prBwozdvN-rMEAq5YERP2t9T6XR_yXrrUgWwDYfs3gIKun_UNQujrn7KNoQu_kyZZFUea_Ij8ENc-PZ01vIJfDUjKrH-kyp1V4kWNZzjz2ETCazoUg7ZxyK1cK7w9u_JmewK8m2xnSNzCW9Rf85_yf61Qz7S_T19phy6-3n90HNFNR8ZGehgZef8qFBwbXSmOoaL4uAdHBBl7Wn8JtnRsrAO3KkmNpEaM-dJKeitk2QiK8uzOjprZRw6wWnOmk8U0gQWeUQCLl-g-I0sA0iMRjf3KeK3y0WQH7oq5_7iKmnRDWkR3C82BKPcCp26n9BJLC0SOPG-e8uuYWdJ2IP60oxGfqCTiqyX9OL7yEblqX2pi1imi0D6mq6y8egyjuLePI-EICQwNbw00EDs7Nl2T4JV5XJI3IUizghE7ktiV05s_GckbSSlg724KMD7uPR5MYR25RkYjdtZJmaYR4sd0pXoQA_68HxorwBX--MzBYObNPBAOhPzfTInmTeZOUHwtMYhFkoK32AsXV3Po0Q47m8LGOhy5vEgWBekTp3saBPVmJseBNGwXapSrHslh919Somzz_DL0_Jp_omb-fj7i7y_srvC5hu1pc78p1dfFjdOintbYNSsHvkQf9Fmh0FMIabsO_oHfbFYolW144rWl9uHyX=w825-h1125-s-no?authuser=0', actions:[{label: 'NIP'}], selected: false, refreshed: true, charge:0},
    {name: 'Photon Emitter', description: "Photon Emitter [dank matter]: It has 3 settings 'make visible', 'ultra violent', and 'red dot.' \n Action 1: Defeat 1 'shadow seeder' that is attacking your room. \n Action 2: Reveal up to 2 Kludde cards that are attacking your room. Remove any infections revealed this way.", picture:'https://lh3.googleusercontent.com/yyvkIH-96AVIXk0NlHG72mStVYytD_4G9Oa_4Cn8LYpFZpU0Km1Jbleovl1DL9EWRpsB5lz6bi9_4GWbIXk0BXbxr5QjhCbTW0gILWXR_02mSFpaa-QVZpYdfDOJNfkmZTG_emzRlabLAKhGIK1yV08cdbyonv7m1iPTRb9fJKbk-58VchC0oIFaAcfF1-OAPywKfrswPPXQwmm1C1FmTEI6ANgvHtXhPCGOZ8C_s1MPS7on0mTQtfhQXZWPi_SxEunvqsaEfCP83JlJxsAb23fMkBSiGlVhVgjcfEuWKRlLK7XIyl-HvWLYZrtlxqoDd0cpKo5A1USWpIHIsJ3FXALQKSA0_1SgEJuuLL60k3obIRBqrXUwmzAGqBDxlU8jb-w-H-bSDvccVujBUniZIFJPe-fRkh0uYa-MmKxQ2YXTHH1aPpg_p5HNIcQT57FJQOnJxF3ZDVlhmci-FzjJXh_qK7JKVsTZ-Ry0LJFc-M-jZVxSgpCKbwOP16ABh8C3fvVk6nHwR2qFsb9wdAbgOxuAp48JfmNlrmDk7Jy1oH92dh-80IP9w9-i-wF2KWLHaR5r9jdiOTlk_3sO3H_e6vEV-5fIELHAUl9T9yNshDI74WNAgdyb-EiaYZCPvogQ-sZsC8QRkBPabUKcbLkoij7GFJ7uCwGg9gWte8JCXS5VJvJ-nvaJxNS_tgA4vlxdF7WAgx3Ob6-iipQe7gRtSiK_oLz6x0OKpNxpjrLuCF_WIxZ7y5IDMmOqgeNipT3vPUd01nJ_05XaoMdST6P-BJZlLnzeAZJvc131ROTKsFI75_HrGcbOVQ5uwRvc8-gPz7VnaqXAJijRsRxsT-EY9Po4cZEalOtWryp2C936ySeEiCGRDw7oQ8johXE7c5nxEP1lc9YTIEpbq9JEH7vlNo91h6tIb-DSC0dFm4mP5rIwXFeI=w825-h1125-s-no?authuser=0', actions:[{label: 'Photon Emitter 1'}, {label: 'Photon Emitter 2'}], selected: false, refreshed: true, charge:2},
    {name: 'Pounce Suit', description: "Pounce Suit [quantifoam] Blip through the quantifoam field, wheeeeeee. \n Action 1: Defeat 1 'green matter blob' that is attacking your room. \n Action 2: move to any room of the ship.", picture:'https://lh3.googleusercontent.com/_jDzF1utBacF1S5A34LzZeGv6Rqp11nuJxSOz1gpUS19XZBPbPCU3CWqZNiicBKIcZW2di_RkfpFAsKZg8406cPfa0JFPVAdnvl0Q5EGvx7O3tq1_uRJirsyg5NFbyoXBDAY7KQIZbdJTrhtDpFYNcbRIxmCR78Bq7whiyF6Vuz-0XR-As2uEVKs_vxm1umzIVikjcKO0D1_AvBwDpxnv0_kNK3OrTcq8Znbii5KqPLb5N5bmhNTDx7_QEpPaYSE3goHRcUnDskMufq-BnZhGFbTCkKIHgb-78fyE9tvqU1McT8_FgjSmMegFvYd1OfKZE5wbv4yr7cRuYTggrymZ8gxDeC7lRxyQJjLBDe123YQCUvzEy-_KPmyKC1jvmwHOjuvXeMmlvQuvKJpzM_VTygUEU8dnWnoclsd4DWTZ_w4m7_OTh9ZhK7tc04gtOQcieSW59VBKJESeUp-OLquaJFZ_lIhtmlfkoRrGmG8nfn3qUud5mEaKk8jaWDipMmhlYex6d68mm8XoOlG6hx_ZJiSKnNKue1xMv2aOCZLEF1v3-eKfqK7ritqqeByKjXjTH34NB4eepEowHsmWzHOr4DlN9GV2Gm-BgzQ9KiVLELnwV3RWWiSL6HPkCRb3xcaHpZubMxZlGqJSpCx8f3IEMWsLevY8A8i4k8MQY89jM4L7gJ1My8LItrr09oOKFjZDlOtlb4rDNCWkSmSSp0A-hzQYNt-lobi9fPdjJKg_v8mLi1uPAcdbhCHsrCJW5N3YjYR_EW9h-nzNFSUVUGezgn321Fwa1Pd_cQyq1OY47Ju0XcuBIxbOc0lVmM1n9n5sTnCsh_3w_zv6_rqGSYII135NIq3U91rfff6YOeIzR_VzTlXG9imTSO-Yw6N9Brtsha6jsc3sFfhZ5eOuZEZVGRUVyrepKd26ogzsRdGASKumBWQ=w825-h1125-s-no?authuser=0', actions:[{label: 'Pounce Suit 1'}, {label: 'Pounce Suit 2'}], selected: false, refreshed: true, charge:3},
    {name: 'Power Suit', description: "Power Suit [dank matter] Heavily armed. \n Action 1: Defeat 1 'big bamboo' that is attacking your room. \n Action 2: take 2 additional actions this turn.", picture:'https://lh3.googleusercontent.com/0iVvHuwBKa1VCq4ly6y-ZcZwQU0K5llBCHEWATwd9b-T1JcBMn-B_LBttC3cYJw0b1dKt6YzWLL6C4bZ9DeiQfeOiTPcCxJTx3g4U_xyn4l4XCrb2BJvSbcsN72kPe5KyckhtT39H5a1Keoww-Y5iqgVgubRRMeUSNjhFraYmlw7vUFa373Cxr7zoLqqgdqAvUfGaOvVUrcawwzKNfQnDMmUKQN9KVGJSGn1vY4vNBBiyK3vAUdXstdwqyEAe0q4hUq7p8HfpsS9bNyUrJ4WbhNlXtesdrOPEsOFlmQc2JwABhL1U1j1n2JMSUgbPfFkGubI9o5eorK0JoPqF3ORc1_baBqUXomUxfXH0mUWzymlko6wZE8ClGqfLx8lOsFuuMR_y-A0ykrTjUTucdKc2dMR72tvqYcgH7FcS_7-BSHgQCw2vZtGthr83SXJMdU4B_HWhsLS1B78JevoeKOdRadze6ciraLebNAeKBIVgzHi6wDoB-0ns0P_v8kp1fXVjdDGb9YVDO3s8c_66k9OVbV5BnpR0I2wfmiTjekg5Z_D6q28h21F1mz0dIeuMDR8A1XjxsdB3_qkT5FaK-igVUjY7ee0gf6wH5sdtlVZRurbslCRRyUdzw9QTTnzh_E2Uw_cIAkSdd6EIXhCVj__-upHOyqXIHUABfmqt4OeetgiSYPWrPZ4joIJtsLNcrDb-Eq1cF0-lIuYDHkJqpr3AfK2PF6ghvJFzBSkyaTfaEw78mc3KbLDueAHvA9isEKhYm1wAnjimhzdepDXj3zbAt0UsilldVXvx9hYmwZQVY9UmIPuZWzHexBnsXELtodmU3sqgDK-CW6RczQ44JKlyZY-JOdiCBrjvA05bcG4zfCwAJWNP8sfM8yNtVoAUlTdaBuGbxnLpI22N_3nQ2CFg48R248AWoDvJzey0zGP7q0Tx5oZ=w825-h1125-s-no?authuser=0', actions:[{label: 'Power Suit 1'}, {label: 'Power Suit 2'}], selected: false, refreshed: true, charge:2},
    {name: 'Quantifoam Canister', description: "Quantifoam Canister [consumable] Be careful, it gets everywhere. \n Action 1: All players refresh all quantifoam cards. \n Action 2: the ship gains 3 energy.", picture:'https://lh3.googleusercontent.com/Fr5oyQtb5RZXTxSMPDXTX4pRFZ0EMNUiMAJZSIYxIYo6XZMI5i9uoUgvZDn-8y6cI71aKifPuFb0PjHkoMYgWopaQJgvG64zmKDV-UUkT0d3uDKh0Eh3_osrelughF2nlHxDKSlComuNECuI4VADP3WsobyQof6IyMPBhBboo7UuuBOaFDMU_ucZLTwGkYjt5ykgnIT_PusPV7zCy5CarWz1phtR0fP47nV2SjoQWk5d7-r5MJSjXrpguYaQYhjXUorufcEnhNr3SXcQTVjFtc_gkpCKwqpN1ox51yRx2RyVtgWFFKqHexojGTSfAIqDv-IPUMEoF2bQ5xphOqrBl247tG1uI1zc-Udm-RLaH3owUci1YxnZXnn3NgWNszX47YDP2cxUVwGjHpMaIxh9dvD_btP9pYXI5Dx19sUXShTBz8K5GLFMMEQRjZhUkOlDH5BCeBZHWzVdr80orWJiv3Hs5Kf3OR_rBrLb21oxXewMckWQrMbCbcrilRinnCkBuOmoeHdUl-xMxbN3uzf89QhMfTl9oz3Up5ZR74LkfA-cQ1JIYb2NXwmwdjIlNK-BwWq8PIj62TCoVYENeLxA2hEcoRe-M0y-QgkFKhFzSRoxINVFerFYWyZcllwnlKraGREI3LL3BC8y3bDCHLH7R-WHVoK1tFgoQJV1_bHVfBq8MX04pp1cLLsJ_iRNd3ZxW7lhUlZF1F9A7uk4yIC7kIvwlJc31Pd8sNB-7M2PG0BVTR9eAt2YKPXa02Rb_WtKx_-bIOfSvHR_X8NaCwhRkD8_zrA86mipfB-pkK5MoOLHcqu9OWbYyids1LfNgjM_qn2ifPkw6kZDi2f-jho51sSPmUiIslPkkeG0_V6Y2SUaHDsEiHEqzd9AHUgBrOOtTU1IMyVetewgLdb5_FsxPRqElTUZDsbQMflfse-vgar-io-z=w825-h1125-s-no?authuser=0', actions:[{label: 'Quantifoam Canister 1'}, {label: 'Quantifoam Canister 2'}], selected: false, refreshed: true, charge:0},
    {name: 'Reboot Gloves', description: "Reboot Gloves [dank matter] Wiggle your fingers to create floating hands. \n Action 1: Defeat 1 'kaboom pod' that is attacking your room. \n Action 2: Activate any ship system. Repair that system first if it is damaged.", picture:'https://lh3.googleusercontent.com/u4FNddsA4VR8ZlC2XeBKuqA67e_JeqVM89NpZlqzn3LXsHGmEvunm3ipPI2x4-OdkIfDYEfZ8oFMM_v8TiUOpaVf8GroJX5PJfP8WxTyU0_JgFREm_zjtRxiJ_mKkssCo0D0TsJLQLzGrWazh-9FQze74StyJ2q2x_XU9Ig_KhXjDs0rHa1WGxUhXC7D-roJYkEZ7J7cA_ugUqcP-zxCPY3obwgWIz-WthARzN7Eolm9zOvwuzWG99ShSLN5ygTkWWIxN8FOU7hElBQDP5F6t7agYEji_uN0DERVcHez1mPqLf3p0H146iDwEB3zLjWkd6yjW1sYZiBTdvbxdAaogO1ZeW2Dz6FlIQ4CssBdogKTSE1m9bJdxq1hIVTFAHT3UThFNMgw7Nu8vdKJWjYhYa9QNv4wOMlLrdrSfWeTesRmu8e9Y-F7eS7EBONpSEDjmy-bSOjM37SX4LH2_Qn5xyw5EO5LQhAcCdVSPAmWTYWboV691HY9R_m2TT5PB1O5AlRTzm1LRTmnrH_Ktkji_S61qucmEs0ND4ANc8dPZRWv-dNi_w2MiXd0GzoV2P-FdHhy_OGOTCBlrJZgd8g55SWyDfdeddPLrVXHTq-cvCF0n_Sh5s3z5QRfsBL7SiPxskTZvgqds3A8O9acFPLJkpc-b45WMtOEuzc9lvTjpjTGzIqkGWF_FskyLEyGjZShricaGBFPHw510pdBuD5QtK6f1VIVclIAwPJo4RITauHAY9GDBvQ_XJjSZzG3pm11nZKwBuDABmX3Koh127YG2bEdo_GeNcaMLCKIzWfpfx3MB_Eb44mwDHhxq1x6_agv4VTHor1SQLm1vNFDquGnEqm8yCpq3PHevnwfu_9MIDkkv3TLsYFwx6xkI25jHgLZjVXNpaGANjnFFKVmhnWeT_1nSL2xGjvSkAiJHPANbMYNIC_i=w825-h1125-s-no?authuser=0', actions:[{label: 'Reboot Gloves 1'}, {label: 'Reboot Gloves 2'}], selected: false, refreshed: true, charge:0},
    {name: 'Temporal Loop', description: "Temporal Loop [consumable] This again?! \n Action: Defeat 1 kludde that is attacking any room of the ship.", picture:'https://lh3.googleusercontent.com/gSCElcMYVkCRpu8lJCjPVpu7Sz7IfFsQF4YDaJ8p1RohfhMy351klxjZFGuF8VJXzm_ddfrCp3KvdesiBRtsyFlNCeGtomnkSqeYou5J0qrLAJ50L_JlqIJnxM2l-hWyFxPZEYiKWDlpwk0ooIkyYZw-6wDq2-wDVL546eXKJwiGrEKhMMmsdE9J0-5fudr41xItnJ6-uKNRoro5DiUg61YDjCniEVc_y7Jp_m_mEbvBrCQJk226OzXF_3XABDxKEMhA4wu75PM_-EIqa7N_p_Irt4G7t06eHjvBdD0McgWBv24rKus-B3iN3Oklyk6fvKVlx_M4pnsrjnF7jZbHtX_YrRWp4-zG6-xt-bICznRlo-4jrXXb9rsRrTnTHA-R33TBEaZFRVMc9Fn5wqS85ybf1CsrfZT0XpCdV87ts1zGNF1EQ6mKBV_BNZXQPRJXwamFnzQIxmGgjf_Mgh_ow8LQ22ynCIcO4k4OimHmAZySoMntph4X8cZ2NJb7KlcyVQd5HQwo2EBfGVmsVo1_np2qK4y9MNZfSrcJDaVlLqt3BBgLL0reGzUeka7KoGF_JmDOIXaVvz-ZC6BM6gO_COAzTiJeySYjyNvzOI27e9nfnEFlh5oBUa0Fm_LUe5yTdZWj0QDeN592bCciTl2AHDkFHlNaXho37BgXrpD8zRVVUQ9PW-j05u732EVNgyYAkc8eMcz-67sD0AtGhchpLwpia8sH5KJd98oZiHn-S2A7tumRiLwjp_fd4fIfWSiiMUIfMtE_KRCkVJo7MA3OcQZoCgvxDQZ3iRpha6c0gmg_XWy_WuYl7psjbz0i1oz_wfWEIGjO1IAJDfLcAgHpp9b5qET1zB9PpyffB7VmGTaIS7wy5glgAP5Tcm3M9b9QijENqDS6r8244BS9ShulLzhvVcbFisXgwwp7XZepyj97sGGv=w825-h1125-s-no?authuser=0', actions:[{label: 'Temporal Loop'}], selected: false, refreshed: true, charge:0},
    {name: 'Viral Erasure Tool', description: "Viral Erasure Tool [nanites] Click the box open and let the nanites fix things. \n Action 1: Defeat 1 'green matter blob' that is attacking your room. \n Action 2: Remove all infections from all players in your room.", picture:'https://lh3.googleusercontent.com/fkas3kpk-17BV3HcYOKQJvY1OyJ3Ztagi9gWP-H5vima7GhxC5oMuOTDog50cqcQ1OA4Gv59l6B0TkQezxQ8lLxKzRsABDvWWl_xn-PV4jtjuWCalp-SDucUZy0OvPGMRDrTj16RB6REEnsmDBcO9Cl5qxjUXrtFOHS9nOUjnZG-3XZqYNN9mqFuMjf2o0CWUFPUd3OqZdsBT_ieBRSlQEv5c4gr4WgWJcT1D5NCf5dPPkqh6fxnSlqQ5Cm24QYDyiiSVdh1aBwdjBF3ex9-FbLZpcryh5SdceeeK5_j-ExTADiJ3i4kNZJK9wAfpsmLowDXBKqwnA24XzT2S9raFLN4lofUbu_O3kGfIl0DlxK0j2YDz9-nlVhl5r-tDcZFsBl6NWKiUjZGAYtrCF7aQQipAnP_MTIH3e2G-XLahAAc3Q9POjiJl--BfnlXMrAlRROSPruy9_lf5TlQ1JxDDaQVS-PHZEf_keDvNm3O25TDuX6kk3W-Ip79reyHm4pUayddLLWgz9YcatmKQwt2508VO0KkrgzQV6twGBVj0J6j3S7p_6Ttal4O2kYw1vkZsmResGucdUuSblrZbfxsY3-zPGg4H6f5b0LdSrnUfC-aXHqKJTkF44CrCD1AoU1XO8DhK5yM7SykOeWQVs7K4Rj5ncSraMTl5CZnmxVG4Tst7xUCIxgKfxIZTHzPt_93R0S4MH58v24Kmitmu2MkevO-wE33bwtTr0X4Sjl563ER-51fyA8W7IqfcJXD5k0odBT6vDgZDfq4od80Gws_-0xaSrkFXmCJsxBzFiRK2xsRaC6fATA_oJNE76eHHCz9uU5zTCjxvCSHL3WvCjMZxPeutp7Hz72xZi6YkLB9-TEUMGi3nIVVSOujBtWiKku0Pc3yUkX1jI9QTNEcSI_n_MUtzoSE2n_GVaWPQASccD3i41IQ=w825-h1125-s-no?authuser=0', actions:[{label: 'Viral Erasure Tool 1'}, {label: 'Viral Erasure Tool 2'}], selected: false, refreshed: true, charge:1},
  ]

// kluddeDeck is an array of objects with 60 Kludde. Each kludde represents a threat to the katundian ship.
// 'name' is used to refer to the kludde in text. 
// 'fleet' is the value of the kludde when it is defeated. Think victory points. The player(s) wins the game when they defeat a total fleet count equal to the difficulty set at the beginning.
// 'clockwise' is used to determine where the kludde will attack next. The attacks move clockwise around the ship by an amount of rooms equal to the clockwise value.
// there are 3 'types': 'defeatable' kludde remain in the space zone when they are revealed, and can be defeated using the appropriate item. 'event' means that something happens when the kludde is revealed, and then the event is gone. 'infection' cards infect the active character when they are revealed (ex: If it's the captain's turn, the captain gets infected.)
// 'icon' points to a small image that appears in a space zone.
// 'picture' points to a card image which appears when the icon is clicked.
// 'revealed' is a boolean value of whether or not the player knows what the kludde is.
  kluddeDeck = [
    {name: 'Big Bamboo', fleet: 3, clockwise: 1, type: 'defeatable', picture: bigBambooPicture, icon: bigBambooIcon, revealed: false},
    {name: 'Big Bamboo', fleet: 3, clockwise: 2, type: 'defeatable', picture: bigBambooPicture, icon: bigBambooIcon, revealed: false},
    {name: 'Big Bamboo', fleet: 3, clockwise: 3, type: 'defeatable', picture: bigBambooPicture, icon: bigBambooIcon, revealed: false},
    {name: 'Big Bamboo', fleet: 3, clockwise: 4, type: 'defeatable', picture: bigBambooPicture, icon: bigBambooIcon, revealed: false},
    {name: 'Big Bamboo', fleet: 3, clockwise: 5, type: 'defeatable', picture: bigBambooPicture, icon: bigBambooIcon, revealed: false},
    {name: 'Electrostatic Shock', fleet: 0, clockwise: 1, type: 'event', picture: electrostaticShockPicture, revealed: false},
    {name: 'Electrostatic Shock', fleet: 0, clockwise: 2, type: 'event', picture: electrostaticShockPicture, revealed: false},
    {name: 'Electrostatic Shock', fleet: 0, clockwise: 3, type: 'event', picture: electrostaticShockPicture, revealed: false},
    {name: 'Electrostatic Shock', fleet: 0, clockwise: 4, type: 'event', picture: electrostaticShockPicture, revealed: false},
    {name: 'Electrostatic Shock', fleet: 0, clockwise: 5, type: 'event', picture: electrostaticShockPicture, revealed: false},
    {name: 'Glare', fleet: 0, clockwise: 1, type: 'event', picture: glarePicture, revealed: false},
    {name: 'Glare', fleet: 0, clockwise: 2, type: 'event', picture: glarePicture, revealed: false},
    {name: 'Glare', fleet: 0, clockwise: 3, type: 'event', picture: glarePicture, revealed: false},
    {name: 'Glare', fleet: 0, clockwise: 4, type: 'event', picture: glarePicture, revealed: false},
    {name: 'Glare', fleet: 0, clockwise: 5, type: 'event', picture: glarePicture, revealed: false},
    {name: 'Green Matter Blob', fleet: 2, clockwise: 1, type: 'defeatable', picture: greenMatterBlobPicture, icon: greenMatterBlobIcon, revealed: false},
    {name: 'Green Matter Blob', fleet: 2, clockwise: 2, type: 'defeatable', picture: greenMatterBlobPicture, icon: greenMatterBlobIcon, revealed: false},
    {name: 'Green Matter Blob', fleet: 2, clockwise: 3, type: 'defeatable', picture: greenMatterBlobPicture, icon: greenMatterBlobIcon, revealed: false},
    {name: 'Green Matter Blob', fleet: 2, clockwise: 4, type: 'defeatable', picture: greenMatterBlobPicture, icon: greenMatterBlobIcon, revealed: false},
    {name: 'Green Matter Blob', fleet: 2, clockwise: 5, type: 'defeatable', picture: greenMatterBlobPicture, icon: greenMatterBlobIcon, revealed: false},
    {name: 'Kaboom Pod', fleet: 2, clockwise: 1, type: 'defeatable', picture: kaboomPodPicture, icon: kaboomPodIcon, revealed: false},
    {name: 'Kaboom Pod', fleet: 2, clockwise: 2, type: 'defeatable', picture: kaboomPodPicture, icon: kaboomPodIcon, revealed: false},
    {name: 'Kaboom Pod', fleet: 2, clockwise: 3, type: 'defeatable', picture: kaboomPodPicture, icon: kaboomPodIcon, revealed: false},
    {name: 'Kaboom Pod', fleet: 2, clockwise: 4, type: 'defeatable', picture: kaboomPodPicture, icon: kaboomPodIcon, revealed: false},
    {name: 'Kaboom Pod', fleet: 2, clockwise: 5, type: 'defeatable', picture: kaboomPodPicture, icon: kaboomPodIcon, revealed: false},
    {name: 'Lashing Root', fleet: 3, clockwise: 1, type: 'defeatable', picture: lashingRootPicture, icon: lashingRootIcon, revealed: false},
    {name: 'Lashing Root', fleet: 3, clockwise: 2, type: 'defeatable', picture: lashingRootPicture, icon: lashingRootIcon, revealed: false},
    {name: 'Lashing Root', fleet: 3, clockwise: 3, type: 'defeatable', picture: lashingRootPicture, icon: lashingRootIcon, revealed: false},
    {name: 'Lashing Root', fleet: 3, clockwise: 4, type: 'defeatable', picture: lashingRootPicture, icon: lashingRootIcon, revealed: false},
    {name: 'Lashing Root', fleet: 3, clockwise: 5, type: 'defeatable', picture: lashingRootPicture, icon: lashingRootIcon, revealed: false},
    {name: 'Shadow Seeder', fleet: 2, clockwise: 1, type: 'defeatable', picture: shadowSeederPicture, icon: shadowSeederIcon, revealed: false},
    {name: 'Shadow Seeder', fleet: 2, clockwise: 2, type: 'defeatable', picture: shadowSeederPicture, icon: shadowSeederIcon, revealed: false},
    {name: 'Shadow Seeder', fleet: 2, clockwise: 3, type: 'defeatable', picture: shadowSeederPicture, icon: shadowSeederIcon, revealed: false},
    {name: 'Shadow Seeder', fleet: 2, clockwise: 4, type: 'defeatable', picture: shadowSeederPicture, icon: shadowSeederIcon, revealed: false},
    {name: 'Shadow Seeder', fleet: 2, clockwise: 5, type: 'defeatable', picture: shadowSeederPicture, icon: shadowSeederIcon, revealed: false},
    {name: 'Snake Vine', fleet: 3, clockwise: 1, type: 'defeatable', picture: snakeVinePicture, icon: snakeVineIcon, revealed: false},
    {name: 'Snake Vine', fleet: 3, clockwise: 2, type: 'defeatable', picture: snakeVinePicture, icon: snakeVineIcon, revealed: false},
    {name: 'Snake Vine', fleet: 3, clockwise: 3, type: 'defeatable', picture: snakeVinePicture, icon: snakeVineIcon, revealed: false},
    {name: 'Snake Vine', fleet: 3, clockwise: 4, type: 'defeatable', picture: snakeVinePicture, icon: snakeVineIcon, revealed: false},
    {name: 'Snake Vine', fleet: 3, clockwise: 5, type: 'defeatable', picture: snakeVinePicture, icon: snakeVineIcon, revealed: false},
    {name: 'Spicy Air', fleet: 0, clockwise: 1, type: 'event', picture: spicyAirPicture, revealed: false},
    {name: 'Spicy Air', fleet: 0, clockwise: 2, type: 'event', picture: spicyAirPicture, revealed: false},
    {name: 'Spicy Air', fleet: 0, clockwise: 3, type: 'event', picture: spicyAirPicture, revealed: false},
    {name: 'Spicy Air', fleet: 0, clockwise: 4, type: 'event', picture: spicyAirPicture, revealed: false},
    {name: 'Spicy Air', fleet: 0, clockwise: 5, type: 'event', picture: spicyAirPicture, revealed: false},
    {name: 'Bio Rage', fleet: 1, clockwise:1, type: 'infection', picture: 'https://lh3.googleusercontent.com/pw/AJFCJaUTjg300ZtC1R7QG9mAz3xi3hYtOQoTn9KzKz_o7ba3bAcV1MQNp4hjJfpEvlFxBjtY2oT3hcoR3U6-P3xyDcGo2viRFJgBrxPbR_wB-rmU9gRbWXdS0AmPR-M4oHzgBs4YiBTiNPASnqInIl0AMKVEHvisbpMU-n3MGYE_az2_xQPMXyw76qRw3Ch6sc2j02rh-els0zHEToRacvIrxyntRpmyYhQ5Gpd1KD9MXfUoR8pJyX5s8Nn9kIzSRRn_Y60yg344sI1ULCfu9iIdkGDH6oXU5UBmPA17M_sWXcY7VGO5Db8tkCIWyN56RRPbWkZ9TgHHnwJOhyNToWICuoh6iwIBHki4o2jRVCxqRfbp6B-6BsjnIpP485mVGgirvzjia2G8LmuJwtwHxszzap-ey-zJNPLHRR6Kgrn-cNycLh3-juNB4vuzo5QvZGpJhkMBSQ_ui9Vl51TLfqVj4y85LuTnH9KOzneF0QrZ-TxhLytpSxZHavwSZ_mj4B_OBgAG2BzKfU0YPjwl57fP2751jjISWxY6eLhlnTjRO88UJsvmbQe2P6ISsH_tDzKkNGdHLy4MBnCy1zyqhTm-wyjg4eUroB8Ujq0B6z5373rby14dwua-OGyq68V747SwjwQ_4pl-5CIe44NonwoJWtAKB3_s-O6K9jtDwCNgy7HuUDdlIoILPBDSNTY3VzadaCqXKQRmvqp3DWRAoae5NTXAaHQaD-el9XL7VDa_0uIrN9nTSJRoeLerEw788tv1Y4ztEBKonuxq7JRWChMP3eOXBgUaGGe18oyMTj5zXoppzOFVWA6kNtDZjFsEYNqgmOeuu7hhT_cgamk20GBBGYyeC0CGMgoq0xUdagoZnNEEJ1s1CCjricJohSYMQMiFJ8uUibIejnwh7VUB-Ox0wcaaQUjDQa6EJI89IcdJjkO6uEik2I8hVbSdI6EkytAy6iMjno0=w825-h1125-s-no?authuser=0&authuser=0', revealed: false},
    {name: 'Botanophobia', fleet: 1, clockwise:2, type: 'infection', picture: 'https://lh3.googleusercontent.com/Huw09GXEgsK-HjSTScyzGvQRLf7wYS7Q08MMgEefPyz1oRzpTrBtp68Ok9vlpcIkLqFNq4fxwGiYZSZx7YUaY6iQMt5K5ZQB5mxVa2CZulw4pGjXQt7YC7qjCrImXbhgX677RT4PhRidZGkXlTpDMpA3MUsazKuFg6OzIJI-9Jg7segKR2kE5xa9leeaYUDsRQrdSIxI5wY7Cu88HWtXwKWAXmvvVMViKxLqO6-UtYsxgQD3xfaMPP_4f-Ujjhrs5-tgXn3qO5PW-Wb1Ty9u8qVu0lHsOlHfefmH8FePPg26FyaPB_dRHK61BaF1zRNtwfzQBcjUP7jKm13Io3EQ3J4VJTXJN0sI_f9lWdicUFUXNkaAOeSClT4yiW3U43C4XCMJsP9uZNdqsCtf1hQ4S0SQjWJQWmI0SMXbsYN2o1JfILStr7_xfI_nuVk2usjlnCHWRF_Rrn3GsFXDfiajMiHuK65uCn-GTD7zQ9zp91YPkL8LkbUD51VqDBiLXNvQZypiGW6W2tnCrHrrrw7f63DqQMb-CTlsi3-vvmosGpb68ex4Pg595YlsEKuul5ecfUYv7Hy0WnN6muVyMEds9v3UAM5-jhGockGSHNPEVd5xITcY2mBnOpPA-LyfVx0epg1AJbRNocrB2B7B_duj4KRRtkdCnSJ4Ptc-jzWNts4L4AC42GMo1UFXV0fbH54_7p-zHvy9SOMpOmWbOSGvRqL6XaamYr3uheofeSUGnQpwBfGkL_eJG0jYPQnHsoSe20bEU5N-9zE7QypiPq5hWcgwOlkX-cSbr42uGJ2a1RLZfxHddiYyCQ-sLrNnEk-BxOfmKXmJdHgTUg681wv4z0CGFUZTfjt3pbdMBIHEpUJNqV44ioBjDGbpt6AsOZAKGH5F6p2jtB36PrvD9nLX8Hkb9nYX1sK9LUTJRCnJhGD5q7oW=w825-h1125-s-no?authuser=0', revealed: false},
    {name: 'BTD Visions', fleet: 1, clockwise:3, type: 'infection', picture: 'https://lh3.googleusercontent.com/RvpVkiRo3-dKIGJyce47tk7Dtq7QNGePHKrN4A3LsFFEfPHZR8Nvw-N-BA0DFeWOcPgqVpMwiwyoFL-Vr8GWFv3_r8kwq1k1FmvfESTrW2XhyV-Nm1mzjQCqk1KFLFBOxEAueXOIA6i0_16u0Xk1zhw2bYb6FMiJ3OJj2PXpYb7p7TTtVT8H3o_6afRqzbYXA4QuxvJz3bd377mtxGRPcF8NNWrSsXPXRvvlrIn8D3wpcqgY0WPwYkSKDTiGMDVZHHXSSeWvpFawwORiEfQIxHW8O_kE5iJ-JYSkrQAflwAwi0WGErZkfU5z3Ph1XqYcvxMKY1yod-fPYb6Eh3GsylrDIytxFv9VqzylDIU_9myEBJLdASrVOUNHAYFJJtEfNbgae6Wryb4GBHMuvZxa0wmS9n8f-S0J7XEMkBBXwEqyojDKMy8REXLM8m8kXdwijfhHX0KWudrTKM4VhaYHSqWxgrHDS8qc1f_KIKZkPQbOH_qoiv2yXqFXC0BdmitvNvHVWgKltTko1MIXG_81MCLdhyRMBgYoVfsPRxUxNXsewM1_LhpZedvl8I6aMQxICjAQHb2pjwElJ4BaVusSH28jxSL81H_KWisJRSY8rji0ls0EetEPbYfdjf5gxlsMqlww3mk2OAOn7v7FUrMXyh4IsUgbYHefhRyfhEivYyejnXc8YAbekWpRdy2z3AnGeiZqNd3q7Cluj0cM0M1eIDJfs4Hrcg9eTmwx9Ftde0kEEuvJ0Zv52IMo1Gcghl_638E3_1L3yGYrizmKv7o4ZB4KwuLHlYDrRevyNO-jxh40ec1lZb_5nk5QUjxA4dhczsTprHFydDy-70zVfDvXBPUNo1CZhEGpvQjK0bXIZp2Sc6IH8CQGoJCFiQMX9hFdQ4BeuA01TzCTvqwBAW0WAt0bGvDjgF3OEMHWJGvzLbYFF0VO=w825-h1125-s-no?authuser=0', revealed: false},
    {name: 'Crop Duster', fleet: 1, clockwise:4, type: 'infection', picture: 'https://lh3.googleusercontent.com/nMudrfeQykz23tQMWOiCtKWLsoT7g7AMUFXk2miNClZrHi0S7lm6tXGetX7efxOXvUQOZZEHnhXUcVBagyHTp7tnCFz6KU1ah2ldOkKUo82hNPWijYuJDhxQEi6ARmJRfDEML9y0TDEf4tqXyXkgT3JdlH20rnpCEANRB_5dnGY_XwXGm2kWhdo1bJgJxckvV1SR3yAgI6Bd5PtK-1NeCvtpDD4F07yJzwyqjaofkuoQh14IBk6j6L47gA27GuTn2I5WuOwgfmkVLaBsDF3R8a24F8QaxZhjZ-Ng9mpEmN7Lg-kOQidNjFL_jibW70jolnabCf-gSKNGjPiXh-BHj3XsU18hjCyAuDQxVDOtGpJQJPb8v6TlFJDMIL7H6Pm4W3X23J0i67FlOjtojqsQcZE6tCvcVLmTBqP2OjQ5cYUi_qEe3UutMRGWMS_g29JPwJPw3uL-IYX080vxtSpNXGNHP9O_TsGX5b1OknkmQuQ-MxMTxOJNY1Bwus9XfoMxJEq7Wx460AN-7o5uVRJdCOIr90fLLsEx8UTpXAZJ4KV_o17KImW4uJqlv4LIz5de9Q1Wo-cz6_DTa47RX_2Jl3JoYVe-2b3dK90JYmRsdrG6ISTAtAU_Bw0ruUTlRLve5nWo-GqIrii0W1IrdZA4C2Dd1ujyPf4Dx_I5s-cL-Rah-zfHWkrtBdOpR6J7Gl1foON90ZVJtmCkigIMiAmU6ymIya_ikidZEpgj2Do2p1Cme8FGzwWVtm1-NZ9nN45wn0WUbF8Vv9dETCprcXtbeMyPF7EeB5px-Gw8Ww0F6ACKU6EHzC4pB0micSxAwHX3HJADC5Cq4Q5HYq3OvjeNg5H0zs6TVIHn4jR3yXHMYZvq10QPWdbDFgo6At0h-EJcSvXtkBXn4jAuHjOy3Y9SQuqre2Tdybc95GnveeD_h2M1I_9z=w825-h1125-s-no?authuser=0', revealed: false},
    {name: 'Frazzled', fleet: 1, clockwise:5, type: 'infection', picture: 'https://lh3.googleusercontent.com/4yo3kcQxPpZxcm6u6Yqwu-7ELJCDXfXirxH4c_6Pr6vzeKUc9Vv7PkWZ68GnU3qqS3AHGLAx4ndPhETMgB4CeIchpbqk0k77FpTh2dtUBxY49t7hXxmJXPsu4DpKCxt6DiM2aMuVl5IeRjmmbZRGxeHYeqbjtStpPOuS8LEBY1w1ktMbGD4eNFh8salrRIImumNi5SRpORP_3jyGhFzjMcGI-pF5Mm1DP61WX4BbjmIrUxsduu-sD2YdFUIAZmujLtBga_Xv6lpRrdljAXv6ClC9cmmnTiv1U-QaX-Yjwq1Jp6b17MzJ8OTp09nJItL1DztgPyq1816SVA7FITuO35Z1qMBjob7VSg7TKJ2n4xvAkTTK-cr-zcS3nkV4yIAIGIwR5eAq3kzkhCxiK4kEzC-7MHneV0WJvCKZ-ge4KqUbvC6AP1QjRjm-zP0QHFSgy-o06S7XZOjQSq-OfoBK9flZWD4e7pJSleD3QOx1CSlFuVbtFlOT6p7wKz4XlR8Vn37asfq8aAMsZW0FqEiBYJgtlUEDCIPWtQOh3mf2BCD7PCTs6HMSinKL-pziCloFHNd22vBK0DE_Hho4zU4i6IweBRqFrWmPUVdsXa6SySTDwwmrHS4uintHI4ZOeEHrSaHxgbL_AC3hFXJm98bDLqWihHhVXiUw_unb-gmpSQb2_TQhkHmFuPw8S1p-PsHefvZ8WDGgty-9rCjoWtTb0C8pr13joLGLLbRw5FdPNRxg8JN8oLR4h9R9QXYgzirMFTAU6igXKKK1unlo-5ncGg3Wkl7ExWQjRid2_JWne9HVdTVliH9pUqNVOmhzBuBMjCjv6UGXYdXvqsd-zzV-nU3lbAoiuxS7HaPnCNFS9T5VZEFBkAss9PZp3Zrh_U3hSxHrkUlHaQ65ie_VobCLFDYkU-f55ygmolDwEnhI1Idwwz1O=w825-h1125-s-no?authuser=0', revealed: false},
    {name: 'Fung Eye', fleet: 1, clockwise:1, type: 'infection', picture: 'https://lh3.googleusercontent.com/pw/AJFCJaUz44yv5eXGhu6i0jSqRjJhQbbyOWdsKEg4XWt00SCrtzsstfY6pVr1v1tHJGTwLo1vOe18cMw3L7uYc3qgPIIYj3D9GeinOcAeL3xT1389HbneXxaqTW54LPXhJDIPNIEeLjsGsQ9k5sgZRN12S9DalS1MwF8mEORw3VSpPB4-fDquoMkIgB2S3KaOM4eygbbe94hwBJfSqeVaOS1rV0upWrb6e2yB9Cu7QR_xzQxPlBzGMspfbJvFfLyApuSyPcMsgecQjrX8jaes7kTW8N2buosSEK5fgp5n2J-ICg7RY4Ns2zRg6Dcqb3VGYTUVYkYpUslrr9ta7yTQay0hQZ2slJKQ7MsoZXL9L7eHo02jUw4-U4iPUwfR_XV8y1H14CyngndhKb-vK8LOSbZKVcsmu3NhdUwP116l-g6T8UyovG5r7x9oNr0_jAbT7qW0d2zCgaYF7Jtzc0-GxnpGAiOg0d9RX5H1LCB1VkuQ7j5XYYbmuWyIJV2ZCuVlaKund4O9iRqvLZXGUx1E04DhCF4oO5RAiOcESDVy6ickNignNfKUodadnpbvAX4DZw3MafHH-zQHvO1GA5OB05PtcD2XXUGPU-YV-lRsM-W08uhIU6Hx1no0qR2FgXje6VpXfx1g5lRsASHTBHg3vqPl-hw3SmV4woe2rT8mrWcje4WHJrrDa2ugg97X4TIeGHgLjWogQ-kYvhN2J3XQStueQoX3v2TCNDvyRXEie6s3Et5MSLZAHFyGuohN52gMpdtstRAiMKdiklGkEL_PIc4lzJ4G3EIKNU1JfbC2IElwRXK4z6t376ak4RHKZkozezHJPgHCQL5drUfLxk-17rEqAAqzgfQDMyr-iwpNSf_uqJpELzKFzFwLcztecOJRtUk6fchZjbjk_bW6E5lmItu0zig5zI3_W5m88IOud1XeGXFVAqnjzSAfbDGRexgL4XvrQqqbmX0=w161-h220-no?authuser=0', revealed: false},
    {name: 'Intoxicated', fleet: 1, clockwise:2, type: 'infection', picture: 'https://lh3.googleusercontent.com/uDDlTzK-F5ThtxR8_CoEW-c0OLJs3plFn-IY6GLenEuRRYIrWpzVRjYs1-W83mpcyXcf0nqybAMtcTxOUo1GWZh05Oo1_aXRxg1lvwmhHPGV7nnEMfM1fo8wDXqAut_-OQ1oXLdpK-5GvyOHiGeP9qfX9Hin0aHQTvIwWdXxaUUjXWDP2Y-AOFtwiCHSMJWxMg1qO98aueJ-hud4zIlJRWKeQO17ilJHnr4vBfhgZBjwKeaOfm9BU08A1nStVB4QiHcxPw9YZQ2C4uckmCZXrN9ZmO9HqBGUsU9VqngVgrAhw1n6g9od-cA_iANKHALflu9ycvsbtYXTksaV9KYdeOxQwju06FYPjLIyz0UxexVtVhpzZBQSnq_rjXugfFm1nOwSnjv1UYME7XAZMDFpOPKUJnyfLDVljFwkwyUGoVqH5q-4xVyV8RVTX84LTIPTL2Z1rgL2RvdZwfrwSxe1MQRU7fHDmRk_tCoBFwSNvgbmadiMbMr9OyvgReHIDso04DYPYw8hhQtbtQJ23Ni5V1XL_QajRGUGCz8q9pIv7t62LECvlBzwz-Y5WlWkNqR3ayJAj9GCjsH_jNnkMb9A3_grnDbrPvwY9SOL7HWv4CZUVJdOtkK3Q38_3_bYb6Y7pD5-1HrY6I8DXyBc-rjFRGyWcYC0wiWAjsku-6BDnfYW-NjpU9lPjMwg6ar7MvXbf95cVnIWGCngyuSh1CiyeewDo-xoa1sNWZ_4oBlcgQ6i6PsTf5tIuAYQwD_6UfNRaSpGGOvygaNW8VdmGNObS8szC073Dl7YKh4LLLIqYF-har-aZDjLwxLd8V0EPsBUh_DnBrG4ejJU9_9mmmRc1kzBeJ1e4jyGbBhv2RsXpxsUZHVFZi8Gl6f4Y6r3-ESdd8euNBKBrVh7B1MsA5uVvkD94nl7FVdGL0KDGewCtE-LflKP=w825-h1125-s-no?authuser=0', revealed: false},
    {name: 'Destruction', fleet: 1, clockwise:3, type: 'infection', picture: 'https://lh3.googleusercontent.com/bIxU8HCkB73g46TV0WIVk76um9KMdiIze5S2o2jX5KRhX2nofaaB_t_4D5CRQpaxaTGjtgzU94Obr9YRvEYfvGd3LJFfooyURQOQgAcM3wHliGvalYziDK0WSHxGKwSZMq6K4wu68-V7imxeL91vY2HDxFvE9_Y7b9fQ1YSVeSlHsLAqnVXQvGuVXM8pasGsn9Wd4iR3logMBHKgE6hyGzHAJTDqSjAhEjCDhzXiq0JeDBTVtXMVQwSQOBisP9nTc0lmgQYYUnAzz-wzamKUml0lX9oEjqJo-Vx5nQoeDmAiZrXjetwe3gnZZFHb1MVtZKIALufgHHm4cqg_CiwOjpZ1ontTBDmix5LInfePejxUad8uo9xBeeheXJx1gXCPf4W-c5M15AAWYOZhLhx-a5N3EyPZXtAVeLBy7czVMEnd14nPgQEBnqfkqX3lltiIzRQzuKISg1pOZ4Vs7FpXgNuh74p2O1kXqbCtOLIGpunlyC5YGrnXKs-5h0W6AoXxwGt_6vZh8DDfuZi3jmM_eOK40l6QGPZiGbu5ihVWx3Q_BMfH1GCjvtXsQzrO7k9H8yuqOrXN29O6b3sUccZp_af42MKcS7fk6f_2WaUXwD7kzBxlsNCgo7ji00zFhtxlqTcHKfbAOAQKtfgWUA36WTxoVKFiuxWmIMyy6QWIolbLZ78hgjRlXTiNDbT6EiAku1XpP895iuhpiuxY3EO9ablXk1duWvzEuOxs4rl6v1w-F7z0nucB96rnJrqQrBLQxDcgXTY3NnEvmJjmL1RNrpaW7StFcjxoeIo83ysM8QKJNKmekcLZzZS62NrO-7TPZ-n2y2SYxEqSstsPIhAulrFMTjmLwVEehXT8j5Hi2X_CzY7wL9gGldyMN1h5-8VdwMCIMh0Gguibx_uA4D4PRknAJUKwpQELrCdeq3bY9jYFs_3D=w825-h1125-s-no?authuser=0', revealed: false},
    {name: 'Kludde Poisoning', fleet: 1, clockwise:4, type: 'infection', picture: 'https://lh3.googleusercontent.com/GOqZNoUG6vNPWo5uFqZ1xGBLyVUTieOF7a2GLeUUZCW3DRt6qRJnzEmbqSNGYvhXmL5YBfDArDdAFOh6jmtc_wu_uFoxda5NS5MoSDZ8EzEcDwTMd133JbLZWypbzIlcTV1i5I1lYhon2Rdfp3oyn03ho9t-RxAc6rbKkN7-xyBKR4j6FXqZFYas5FpiF2Q5jpW2e34hOkWprV_jaFvc8CongUPrwbK2Gf8uUtPmgOwped0hYvwbbmoz5SoCBnLRp4uDshGvo95Xf85gDQZ8luWAsaIOnSGpK9w4Cj7Ci9iTA-Q6KbsMVvGSCG93rP7cPWNeeCeekKLFlB7nkOxmXNwYsvZQELrmsol6bARhQod4ej2hWcbmutMQkg4lsh4GNPIzGLcG5tFZIZgj1juq2WlR6napwUe3V7kDlPvvbPnnefosGyYq39tKIDoJq_LbrwFUgdg7UwtmOEJSgiAw5bNLbqezeg2thK7ziFjpjxxb73Wgs0rI1AVjvBmM9g9dkPOZTL5wblAxp60yT2okrAo_XKlzNcVBFKIFfYFkVXGx5w5ZbvFlJPGY5oJTm0Z9lNDFAU8IT24aHVvI31Fjg0HCnLGQT4-He81ROup3B9XgOKXM5vLcBD1QkDszzavgUKf_uyByCTtf4BXJ8I_kLjvW-FnwuDDaKd6g5JasEUN657qy5QNF8aWohk5Z3eOAvqwyV6OotkPzmACvK2UVh-GyalBTCwaklG-SF9ZrpnJeBWuk1kmu7c_upekaGvLcKyYdoB_gACbmzi7IYAMxKW3RMfFIeqqBkSE7ioszMA3ZtndU2FIM8WtpH-Kng31HfGdwSgs2ONp8O6fy5lVn4gcsT2rivOxooRxfTqzAmHeDdfUYWFEGUl4ez4CE8T-iytbUpnfawNevweRybJCk-pxM2WfGTril5q0v-OoYaPp_fwXe=w825-h1125-s-no?authuser=0', revealed: false},
    {name: 'Kludde Sensitivity', fleet: 1, clockwise:5, type: 'infection', picture: 'https://lh3.googleusercontent.com/l6M3sC2qi7Hq9mKFkUCcMALgeBG0rOgs2_yFzpFC5Q0ZmxpXFt-Kqs_jgLo7KCU5lImL4aL9r9oVFTRAG8fRmclhJ_CaKLYmFH3L9w8ZZ-qwbjmsSfwSER2XQ2bRwactTitFBwFHwreRXBRGsEHeArssoZu1Irl9HkxHsZm7pX2gkW2wL3KLb4mUw-dlpw259zhP8eUmVn6_z0Jy_iHqzdManfVNfM1YfPe-IVtsvTtazqRE1fouOHP7vRWV_5sLq15thvoretExyLl3NjEw6S7qoKg7h6s61htCChUWwxff-2tbTCszXkidPolpUkTIhdeucAJI7z74bPw0SQuGFaohsV2N4rO9qP8SbjKxXoQUbA4mMhjBBN6JRWHN77y_3YLiOlQRsDcPYYQ7mzatP5w0f-tzMV4G8S4Fdp7ppckSbtig_ClEsGeIP280kQdeLdKflWfH_ehlXJsgW4pKuGEFWMr2Sd2f8xtOfC7yGE4PTM9ZsDYoDHG2x3cNy1QnDsGbIv5c4KNULCAQv2QrniKCShn6OW7uqOQ7tueu9c7gZqG-ic7vdjKijF41NXZNLAD3CO2gCSL2Bl8zY3qTxL9RFtjXOAE_BJEuiqlRwRK77PMfFKm1wwZLqyETUxQb8ZCS1TXmHr2gLx9ozyKAshh25KLsiutXVkXx1BpxSta2rrbn52D9BmsS3KKAJTUk22SrnvOfdGnHm8wGYYruDvjuq2p0NguAs_8gE_3sDdlXGB0KTE_6soTeAbvjAsUevl-qN5eZdJJbqISkFL-AlcHVKwblg0kRC7afsm9zBpIP-CdoUX94edGDgSOLa_f3vUbVwMsEfTMpGcxlkrM9ID23S_cwMJx78gr83L6D7PzP8gjMtjiyfFmarwlIV1j0oMDruwXnHZRJZUZHI372NvlKKu9I-NVEFxZwWppVBrEAIzgG=w825-h1125-s-no?authuser=0', revealed: false},
    {name: 'Kludde Vengence', fleet: 1, clockwise:1, type: 'infection', picture: 'https://lh3.googleusercontent.com/cR_tsWmGWYjBMMH5Tu-6FwcAnnkUoFkbnXqPN5f61BeoyJec0YDeKSFdljvXLw5wuNNZstQzJQL9eTvSjir7Cxmf_QO0ASAlMfgFQ65Rr1FeDSvVOmSB9p21pezyqOJE8fWiEBYY-9vJNCxJN-mwcRBxQOsQ7mHDpfqrykdqCgkFnFLceC6hocHAy2p3fHovLYI2TzXeFJs3wDt7IIgP6yuIYEfKUEmdRLTBYQkrT9GoIbS7Us-SVYDPDke3VTrIqOG3EAL5eHV1qmcDqG6u3Z_lRJZSer_G852RBU43c8y9EIkmpPkXzTmJAu-bg1EFNsSmYggurJbnMERDrtI0UiimzRRA3wx0jDKBcgVTS5WT2pylive8LCYqrtJzuOvaD6n6jJiiQSKowEeV6FOwVGNZG-rmxedYjSTlAU5zCyaT0SD538xmrl6ZfSWfbeTt5UkNdy4gUaf9-FT5WwbmNhGK7D3TKG03NElVamSndiI2JW-dcXWRDdxrQU4eCg7CkxvV3y4skfrya_ws1ndqQoQ3bOuoHDRR1M9IJL5PanXiBqWXacUQyGcNpa9XRPpf992hN71kb4ov9GsZjAVu0D7B4zZz-2WXaEHWnLZTX30G0e9Vdd3DKru8vfBFBDceVHDvycQ402i2S3OWKuCBEVBakBQSAh1o3fePKqCyT0PdGAP_4fQfqV3OsLMBri8fRyjE9pKwyw6xhKbZPYpMoy9AbDuXFkQnShuKLv3HUgmnER_NZPfw9Zq6JvwImwR_io-0nRRfO2q3sckeHl9spN975NGxV-QcVrALHVgHPguvsxLDVxmTmm2dLYrFIHcRepGeYpPXaCQNW-STiBNIESZIOoILCVtssnYFfEHlxwV4RM4qVCgoaEV2aUWfV9tvAW-ChIvARw9h6A1B6x48w9WXkAqpU4hxdjkKrGQk7w5nFnmi=w825-h1125-s-no?authuser=0', revealed: false},
    {name: 'Kluddefused', fleet: 1, clockwise:2, type: 'infection', picture:'https://lh3.googleusercontent.com/AWGjxm3E5rLcV8y_4MBdOudSnPX6J-BSypD2l2OJw49FS_JXLoy6-tbZKeieHIj33ihY8WVmh1UsasVu4EVUTUfEqLlyxB5126hV9MNNFreIoBNZXXnfGx7rL6GS6x1Jf2sqjLULn6N7paN5Hoj3zTmxC_taEpDyNfZMAnRQqllBogxnki11AP57OQnUh04-cvQIBh5pOen_SKm6MBvAKVXJ6UJl9N7JEuRGyv6jJt3RflSJsxVvfTWb-bUDo7Me54iGz2D7jqNhHkF3qRaFYE_noMAqoe9uiUDpP9lzPMd2apHdzJ1-hOr7Hv6-TK67aN_zL1bhSvlqg0Qmz6bRX_MIw_hjyVXReQ-ZiuK9S7OBSvet3fwlah8Nuf7SVDnvegd7yXQma2rDVlNlLQw-oYhRVeDUJ-SH6ZZAClEFE6VWH8FWwdaHl9Csxrm-kBQTrB42VTvSZAi024g7SRx5W8NNrkCgSRL6Y929K6qbD7yljtFHjtHSYKKhrZ1E5pN7AdNsXF5iDnZBsA0OPTEmf60VhTftQOQj0pmIUP7QgxzSygB4avvDE8AjUyn-t1y2bfgT8wUf60-Ivwnri8XDGc-d7j7gIoVTb6Ya8sd6N7FxK4DJOUtCIiAUmjoWdp-tipRnQONXEZBwLWrG3flSiy3FdBVjp3cQ19ifIZ9lIDM6T6jsdXV6OszYMZ5dFyDkQUBtnhTW2ztB20B_qimoHgumdbalZm9hEE7yMwydPyAelGI2-HgR3Vz-yGY5IRRHtF5OVLkXJTYBtPOLZ4T3GBqkc8P-ydY1O-01aSerXUOYiIwCUt5g71oWDlIJ47oq6XNUYOC4whZAF7DjxGcvMhhWzVCJTma3VarlA2mv6Gc9xWFqmOdnUdf3El24we3IczTOuFRG3DtyEJCA2QWQn7R4Xt-LALGTMxkzvYLNc2YP_SWF=w825-h1125-s-no?authuser=0', revealed: false},
    {name: 'Overwhelmed', fleet: 1, clockwise:3, type: 'infection', picture: 'https://lh3.googleusercontent.com/rzMpq2T5pXWXVw6x65if3Y2g2KNlo1nHN1SyeihLORmeLSmWmjQ2p_ZGIF_nEx1qmmsA8jTr_h25z9UeMWv9iVvzh6p-0conyn1tf7-THpzR8M06Am1xuUIjFJOLXEf-wPix8_LbMNlIG8GIfgH9OeC8hCesBGV9cZbKmBemRh6XhKPKQ4DSjyJS2_wsYNODjH-6rWfxOn_xRHfWQN6psUdgpWDqZEExRv1UKKiEo6sMDrqKLgxCIgqo1LLP8XVr5XVtdgF6ezXjmbZwH9to14YbtuJm1paZyYV4olfaF8euwK9a62a8PfGUmIyLMOQR2o7msHK6Mc0Xh5gjskfrsmMP7HusISNQG0pgYQ3QjBtj10hZiHxee432UWMCJXHAzcgjbVTHR4GFumgeqiMrjoMYHTfJOrwZP-iL3FGmVXmZRbwT1CziiD35ErxfcMVz-ivxEv56UvaJSLXWJovv3RO2NRcF0I_rQLTQIap5GkX345mwWSy8arvdEGuPqlGv8AemfrKc4l2swrkrHf06ZuAC1yZqGqWMKIMomp3SIwyzvMYGOS5p9IGKB4nRR73kvVjJQXmheGaFqk1MZ-430t37xICSWeWzU6qrqr9mb8z2LOaRDtALBiBJo6_apRtm1US3g5y2dqksFXUP6BldWnhDNM8odWiba05x2-Z_dQTEsOJIzgfnOIVbelKaqZk11hh00340D8wme_rYIQ9ruJkzglpzvO4dYMvetXSppaEQwj1cAP7OF4Ya_EZvcrM7vS5zIPILkF6oDLQlHr-tYB0yd665igUJ_6Mco3uGvOMmn4WObhs_UUlJ-oQFBaMWHq72AblCLmcfp1Vhx5BIPXR4CMnxR1zkcDw47SqKGLgg9YBrGuX88V2CT-J9UW7YW4T67C7_asVFnsN9dZW0BwAMJNf-zPCRwE8spX1FZngvjLdY=w825-h1125-s-no?authuser=0', revealed: false},
    {name: 'Turning Green', fleet: 1, clockwise:4, type: 'infection', picture: 'https://lh3.googleusercontent.com/G2hZwW9HsHJ9t-fwmJtqYIZXS0gLMuMdFGd8j3JsZG-EHoj4OqWV5gn-TJ815hxd5hsvSFzN6yGKBnmXP5APESgxUOVJ0W05n0LT6KSzmSINU7r63avLEPwijTWA_e3C3HhTqIF_2nJicqm0nkuqvo-zQOBORFgmUW99wvRKiojwD0JFqpXDweTjdADu_PeB9N3iJqKsabZxB4uW8MmLTitOl8ktMbB-E4lVqp7XtOFcQzL7jHDH_VGhCYkDQXpy8FjeZTTbKex-6VQx5hXjvZTlhDqjBLoj2E2lcvtWoNoy1S3qbthCNUbqnSFC0pJrIHGtD1NwjVl4ngIOeK0Ht4eFSmQL9xYrbbWuS05Q_B9XgswA1k1j62Jv1FoAM2bDuKQOGiKpFCILAAI6LTCw64ZnEDYo3lmrQWukpjE136-pKaScIWeaGDss-5qjv8tWuGhEwiSBJ5w2ZoVqs0aeY0Bmd40DN2h70h5mEI-bj5VL44BUp7joBwLtlGmTY8MtB455Zk9w52B2xM7nglnrSrl3_YLv-MY5AGNlCIVBtv7y5PShA5a5AjdgZIrKMn5QLh1vKjAbtR_yUN2TPQ4qzcZ6KxT9kcQpNU21uKGMw4T-tVO4qlKSFF8U_UbAYcM_T6SYN_E9PqGdUp2r_9jOxQlEwsreG_ljyxuJJUiXWKn4WnxOs3sk9c1OhONe5XQNBqN6_1aRaqhP8cMYkqQI1bqqF3BnqVonbmfzcnTY5WjJ1pwXFvFE9OjPbw-mSusz4EhA3AXSXHd36o6XqHeAWG5tM5e0G11kJSM8xlnpIP8j6752XdRyecyNaqn4j8j8qDwlPFntlYg_di_3EzBWXb7BhdS71LCgLBr5XoV1auaFThXKjlNRde2UyRRrR-VyJymXsMUwpXs7aT4feUMpofphac7QZ8ysmOQeTucmws84Y_VU=w825-h1125-s-no?authuser=0', revealed: false},
    {name: 'Whiplash', fleet: 1, clockwise:5, type: 'infection', picture: 'https://lh3.googleusercontent.com/pw/AJFCJaXaQdyvEhNdyaG_lqiJqoBZ35DDi_4Fck9FA4bsV1_lIuZ6xKHG7ry6qUEun_2CHNJdsvf2-qUq2TvY6wSLo4N83_n03dZKSH5-2i3gjekyv1PFdFD8OgywNRNv7kwGvN3wVmZtfO-NvYNAuhL-8ExubgaYApM5-KhVDfN-Qwjs9_HXbRP3U4T-TygE-xXOhjcYHBo8_dALsTX6oJqkRdU_kJqxz9U6UiuZDHBcfG8fMzb16edotS3q3By18VPnq8pnihPlHaiNp805mbZGnYiL0N4rDeYD_uZFDKLFeOYUSv69cLR-sYLCAPid1EFaIXgMUgEapWqCCuWMdH3DzGYuKY0CybTz-Ugn4RpsQE16das_-aFXMn_WX34p9Wo_Qyy9L5qzBk1Ki98B770WximMC4VD02FArXQMYEdBMNtiEm07EMV7iO4M_679nDqKd2L4jpTYFpijlZ_4SRbUOR20rp0KkBGh1A0jtwic6SEgWplrwbATS-ZUh-o4bPfjdJjThe11DDZhQtcP-A6bxFCzMWwXkyCo6loxWQwS2675WZ9a8SU_-a1gpfr7Vef2HYznVhwWmvzF4S4XcEONu65uf3b7-o8t-OaL3LCQcCYwTOILuhWyZFY2hP_FD18J7UC5o7wrz61qKqfoF2hjQik818Y-_V1hQEn56R3evkTprsYhmMq-gjhrIb9Tz02F_sGD8rzsssuG771SsWAmQninVUVpBcNmj9cKUwaCE80-O-JRzPULsT4ZlZoLIOz1kMvRoUpo0fuxwkxO4lTikkvx67mpTELHzjxmoAdSM2LXCc7bc3QMpPelVyIaUypfThObbIVNCdsEsyvUXh5cIraDicEcUo8P0YN-bWieTWBj_YauQfsicRVqs2Oy6KFWLSDQZuKYcD9DISCUFkSNy8SPh7pMtqfOG_h8P7DT6QxK5Hv7nFuoVi9sA3kUUDjjDMaWuHI=w157-h214-no?authuser=0', revealed: false}
  ]

  // damage is an array of 19 boolean values. Positions 0 through 6 represent the systems in each room of the ship. Positions 7 through 18 represent the doors leading between the room. A value of true means that particular door or system has been damaged. 
  damage = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  for (z=0;z<19;z++){
    z < 7 ? document.getElementById(`damagePicture${z}`).src = systemDamage : document.getElementById(`damagePicture${z}`).src = doorDamage;
    document.getElementById(`damagePicture${z}`).style.display = 'none';
  }
  crewSize(4);
  showSelect();
}

const bigBambooPicture = 'https://lh3.googleusercontent.com/mkDnY1pRl3Ps7In6suW6N5pKFYPKWDEoXkhOReOL5PM-dzb_Alx9uSD1xLW66snUtnEyrS-Mfbinzh3eOSGWszXYbRAnzXR-1gNIAE_c57wD1_MxHQK8WfLhgo3IjkF2m4Am5EadDLQJfx3l0VDQJ95ZiF2ttAwVLnvCsSWG1ZrddHdcJPAtE3IRwsYqILIKrM_Y5O-_dmG8q1eT_8O0f_sC_TzBVVxTxFRvcyp5VPBAFjSLib00Eb8_HfgoCfbNtyT4Feum7dUNJ5xOtJ2oNqvLnAYFLU9QSDJI2dAtE5r0Cyn_Xsn_c9ljG0Mh6359iNXkqBADdgzNsE7nKAkR5ccHGy1s1K05VImKllCaw_u1RWlHKRqZ978T18jCHzwUgsjJ7pypGDRnBE3uJgzfbFjKw1utzIftNlYXHX1hWquymCk4dYr7atY0pUd2o3cgu3QS7uKQoPCDdaHu-Dkizc1SvtAZx0sXw8iOrgzfzYiR_ERpSEeT_e-GAvpYXdR9cUW8toion-z-5759KOBPShvw7Fn0qE09EbVeeBiWgmRDIgmGIKy2vr0Wpmk8FFuNdlsfpNrFgyEXgvE5EHIla2LEI6RWQ9ZZ_scg-lqutLptcYqaD_r3g0C6K1IBvawJoYpQ3PpA9UostljNXbfJ2UdlgchTmwBG_OWyUBFBlYnMNqvQVj89IVHrN74TLT-OqARM_oUKHiVBQsq0fBxBLz-i4a7j3LR-O_LI1GijqiVy5o3nJjQNDktUrIbLrbcf8dMrGGKh5IZFYNMtmCreYclGzwTbicYHHhJ7HciQFYbb9HD9yiNC4t2nDfC89chorMGgdgwpWoVlYvePL5AH0tZ1NeoSJ9myBbQQ8ui_kA7QncBDElZsYltjkAPVKsUyJ__UqY0MptWVzljGga4dI0iNiiM_Hc_dekQl1cxkZpfQz56P=w825-h1125-s-no?authuser=0';
const bigBambooIcon = 'https://lh3.googleusercontent.com/5U0TsMDJ6Yj5JikJcXcjNmGVz6pa4bE59tQ9aLdmtTA7jRWsjeMhbGFRQnZKp0XAODGFdPyPdOm5OEl3HPdsb4fDQxhz15v6xOW36cdEhcosRe4S1Qb7s_CftSUNnmfxoeOJ00lvWSqPqy-IN-xszZNanewVVLheaomvGym2m8nRti9JinYDt7QWBTU1x5XQCql2pxLXbjJKNlrW6y5jjALJ7p6nRnLaM8xgiE2nBDrhglCGT8XKXoG8E3-Kt2v8gUNgTyGCc55ABG2tVJHdTZJh0BlGqpJNziSiqEwq4PlC_p-7ZmaaNcMjLcsksaDvVQ6WR__p44yKgedB1PP6oWFI00u2KgRBJXSXLaQv8fd9avMBNljgehlxQVRuXADxM1O0yjVVDWl0Bu0kvA6LQAbS0J-2O_5nYj7pByBC_Xh3L9T2BuPeRuSpja8nu3bzw03JYTrrZeE-sCtYmJtDSg7Mm8-4zTD-ZU9AJS_4nvzL3qjr0oxwpLo7H4tJII5788wyLwCaMabsEqgF_I4YoIDJ28FFHb_MdhR0zjeqznEDVnrjYi0BwL-VU1auuZAvYA-I8iAuIHFhtDp7HcqwPlcW-Dc2BqB2o4w-EYOD-vbgG60caWeIO4wsqnTB9DH4MNew8cRz9YrN7GrZpWRiPDtNCXK8nHNWplaRXstbwd8EbOMc2VM7Z_gH4l5I0NNGu35tXiTYCFqQDL7-LbTkOXt3sdLZDwl5XS7R8E0erchnJ0VF8c0HPJd5oT0vPvznVvaILdPSZHmeMMLSVWuRIANhvG-n_cci7gQknzVYrWyDRiU-tTGwHjn9jUUSMqkuGrU0R7bSQyr-p3GohP_RHdvMrTJmAnpMKtXWK6eIuO0A2pkh7sUbs7Z09km9ug9S3ibnvgsd26KwL3apZBJAbBd544K26Y_MftBuY2zAixUEopEh=w100-h100-s-no?authuser=0';
const greenMatterBlobPicture = 'https://lh3.googleusercontent.com/VoH98IkM4x4uu5Dn0Zw35QmNXFi72DBQzDFHwE6HIwDSHF9JRWsKL8WbGSZzfsX3xpz6BVRH6FYvG3ItO0GR3mTv6YCydU3pg9kaI59ukZwqj5AhqFo3qPShAmk9M8hFkXkBYXJnzq8UsXUQ4kB4sUuk2j0lJYzeOk_ESTtqze3fwn_eoYlTCXoKXE8gkJnBvhj-m79m7PThCzUsh7BlZ9tT1G3DitCWSXY11tJb7g92UI7Ab53Huz4EFOFXKIZbmc7mvINppQGkUpTGiiN96IL_T9MD1-3o8ueLNxJ4H3x8kPOOT4IQ1qlHf7723EhStiK2k3ilW1DI1dA7Ew8PkB57FV4F8v_MhYWwcPtD398KQWy2YiAVATyW-t50bS756aPggRjSu4wv7Mys4-BiiYso5x7QqpVeHWU1tYCog-J8IbvnY8r-fvV02ZWYLuq8jlU3Iz48H2YOmH5smTYeRXK5U0XiuEKYMyQ6KifZYC9Z0RZr4uYmZczFEFpFowVpQgGTvgsRN9cUFtgRu2cT7Ph5_sxly6zoeDefywfqWhYsdqDGkic2ul3pmtYSypS6XECizJMkaEnxoHG39Za0va-2cHNsIFuW8pM-WJobohxjFYEwHFskHF5Vw0OLVHLKGiuHoPDz__8iC0dBOKgiZGvmPfrXVDolan7hY585umo1H8GZ3UgqfTPDJaI188P4P51sEXGPCUpZ1mall-_Oh30Bx4zP_QCwE29qEB2DOosYPDNefxbVs60rgVDkdW0sXzk68n-qJx9DQ-P_Qsai-sjAbOpMAUqh7cPM_Tb9hylKxFuQOvwDpb-XcdTSreNcWhO5sCw0SM3XA9493I5CGnklHmvlppgAOJq5AsAXSoflttjepwLmxFjquKmYzudiDsAFLNivKSP9YfOphX6fUEOmaxtkilIIt2rI0aRzZxrQqqKF=w825-h1125-s-no?authuser=0';
const greenMatterBlobIcon = 'https://lh3.googleusercontent.com/W3aHJdxgebMgovk_edb6dqvzWNZYfs3_pA-EyQAIljC5ApusfUsAzkpobYaqJn1QVUmY9hAvmJog_wACfI9L48H_AomL_c3Rgfr51BvS8KJcnfRhZsvuYBWI-IZcFMcDmU84-IguDESsakmebAw5cYzO5n0DjrpBtwSCVdhBPxv0DHMu08dOwceKVrQs3xmG0OF-OKq6j9QglQaU0kw36cdq5OeiVNlXGLcCREBqmm9bKPkXZ8MWrcfy4l6NWYW9Ivj7p-pbNFcVh7E1t9E5cPA8VzX7qbEo6m2twHiqck21zYewRC8yS7r8zWuV4_WeS15rGjfOgysMMO7_HzsGBHmLUs2UfH1fauTeEVRXn27WF80TSWDxYcRwP4eOfNmolgMSs3iEcdX3e8GCUiriPHFyoPipUMNjkkwE2Y8ogm1NOPGhmDEIKbPLTJ5vrjS8ByyPdbkSkr-pc8j9_pjT37UlCdO-ckOl9qu102YBUpjLOHyBfdwp8hHZ3svD-f5izsvcPQGOObPP6ts2NQzJkR3KkBFs3ikZErOsxNOedvZpWMzTxjmR6AUzaSyjRM8a1WoSc1OXmW0nafO9t-1a_S0CUrkQkhznBk-fmk8KI1YX5mCVSjsIJO4ugqz_vISmhnhOwh-FYOYJPl20c0hMVIlDUx-24-nC5aOJln5QlQuP883CEdUMPY73JL10wa34xk9UASprkHA7m6oToaF3M5cZrEE96m0nm4zA9QxsatnhtM18w8SHGV0h0LB5jEfWPk6HAhjMeNyFzOJo2SgfxOYcl1WoDKZ9CUsNKFsCq9RwRH94rRPB9vfVjmYlLVqnspR4aDJMhddookfX_iq3PiFpMIvHnRi12v9QhLWMjsMQ41IN9umUuSce-Mf2HP129XB7O6anPt7hrSqcsUYs4d05O4yMsz-or7bHIIaVU-bBa6n8=w100-h100-s-no?authuser=0';
const kaboomPodPicture = 'https://lh3.googleusercontent.com/aP6znM4vz75JeEZ2E7VbHyjnp04xYf2bgh-4UiWoYFrqfN0EgJ0Sd68muiUrJBxRvIpjIW8GoOma11_xUWq2_-ei25vjQenktNRyprcEKKMbef8r4pel2o38KNzBW3OIR-6omPbNiz4FLnrjz_IMkPp7pkCAiQKMz-6FP-0CffzrresCRXPHdtarxcJShZ3MDLKV20_c4_6qVonyldEB0xEv2u2zGbGYdZwdtjEBuWRP6OSwwIoIHt8Gt3Dol8PL3OpAPEMldo0fuKAoo9mUfXfvVYxgR06P71vLOuXPQ9wM3CMJovuSFbR3iNzTmhgFXBoC9wwEBpSwGt0ZrbclHksUMmpHijSHja3-O7e01M6xe44jurMflR03ymZ6GcJgvrPjHFoYv9rTTWEF7eheND8L20O2ceDAuvPoshGfhlkOAyNPIALcIrXuwW5YCfEle7_y36GhxRTF7lIQKzWIBSTwU1oMEsyw-xxMkcZkk8CcE-22EEostzZCy9XsfbD6ZQilCe4LL_9ssTfYPo7_NxyiC4R07jk6zdRkaZS8LC_SqZKOtl8z3jVLusHe__B0Jnx4U4PrXpFX_zuuCrbKCDKLOMZY69lELMcNGsqAMBvz2fYg-nCYpytWC4DR7OZv69ZvyGc7y5VHPeHO03F8ku97trBDhC9rvjUH7Yo8_gkzZELglRlW07ERg8m5I0sa7juuGqWkoHZlpFuSSlx5wWkQwVTV6RKsqpUBSOEXhkiRxxHpBlVoxAUH4AOUZTMvBnNv7_w9MQIUKgmKPIVasiVDw0mo6F8tF3qGrS5eM0TaZZ7YxoeiRxNWb9MJNWPLH8AGORkHJPcl4M-pcc0g7kuQEqdjqU_TwOY-83RNQYXMx-PxUK4oAMSxXRZ4VLQtGDj0nhZ24sCfEhcYs7QOtD2nvbggw6eWKv2Te3wVeR1_uPqY=w825-h1125-s-no?authuser=0';
const kaboomPodIcon = 'https://lh3.googleusercontent.com/sRMVk58dCs26USL3gddyhmPulFvbIC82TM6vSNR5OYYRtRoP0K1k_h0r9hyemcKKx87_Etlym21QLOpceiS4jP21knXFHQ3gq_eYoImyiHuoSqvNRabzQtEy7jASNigy1-I9KF44G67AOmUMncS2Nh9mxBgcQw8Ve_1b8mholcQLq7dmYHpt-uMe6pAxmC6uO8qW0-HkKfWm-qVfbTyj2p43sXNo5D3xg0oC1lsSh1QgkjZB_zEuC7qvN4ASLvJb2Yk33iOC78eYvGYH77QGI9u5uEKDDjSQLwxSEkzcOvFstVgyYln5F1nkji841cSqQuGof5d6TcyJCT5IziP1Muqt6gyIiPQXEtPuLj4CY7J500n1GkQIjGac99Ai4p9vUQCAA3h-JwIambOVXI2azLUCAOxeUQObviAfPDmKEGkxA0ZVV4GWfmx6bjqMTG6sg25ow_rlbC2g5DdC9s6ov51zar5yCUhbcOXP1I9mJbKW9dDtyNpVKOuh3GQOWldtFupQqmdthmtkTNb1aOtJKnNboyVBL7U28L-hFaKJEIRoQwOnrHb07UCxp-kfQFv2JuyGqlV3hQCSONP239_SFc0HmmucSPhPIcBaNtdyWkHePvNUbRlrGe9kuPT0lyxzKbwOVW9_wCAIkXiDCGIw0Jjzz-fuxdnKTBu5Z5H3LiCuSn9Z2QrVS6MPry5a2ME5CFNtn5QOIKv5x-MfUqTn92AeCdIkcG-I5UKcQTU8ySMLAxFXhmT_e5mfesULuTdnd7htxdl-IZ9CuZJkp0lAB24BlRXExqQt8Xol6kbY5Ew66ZtImm5TQA9t3kSxN3Og3gSJKVcVhxvuKR7mO1ZAz7fR_PgI6zE-B85xdtgyc9xcqX_r0hxDgAHO95SK6Q75ZxFMRPnQ59k2l_XEsyYZaGVj27YZqMO5adEcidwzoMgGqxAv=w100-h100-s-no?authuser=0';
const lashingRootPicture = 'https://lh3.googleusercontent.com/p51MDXTrH-r0vpjco5OslJC6RO-sG6NJqeBBdBoLuXFuE_-DKeLFcfYLBNA2MRDsCVg0xPKoyfRAPTBt-tgyBManOaJ1RYnEzwY4YcMyIrNIGO5uNjdfxkfIfuYkap6JP6J548YuGdZeb1xCQlQi0BsWTUP_TPK8MSfnksQIEjlb87S91zPf479AmxSespTz4sU5B__SZ9mYYvYXS5nvrTdjc3BIjwl-wJyOhXbVF-0j0sMzqKo8I3sNsUGegSVcq1UFwm25JCnu08W9cFQ5b2nAKAZ0lSlA0q7xL6TNcb-NoEaSl6lWTqQ5y66H1nuSHWeWm3ZPOpi02V4XlVi16tnPp6wi7arZUqD1EllHrDka7xPsSPWu-x4PcqGQsFcxj6dWDNQVG-ATXK7C-mo4OK7VEVbQ1m6WNyxDCo-fzxRxHGIhcPhBwGmGsutEhNY1MjqWKumwOI2V_-ngAqMCgFUMrXYI91l9a2DJw2HDIXgozcXE_5RQSBgyi0hWEB1Z5CcbK38lw5bmchTvZjZpJTSQFXUG1MZQrqB43mlMjhxl4KcS7zxENvBNdGMyqGfpdI_z7RwW_2hp-YAxpFCQQXcRLiRtS5jdy6DXN0HPfUnncn_RvJW4yfPZZBOB9bUc7INlp7gKA1gJQ8y5AhKysi28s9OPz8juIfnqAJwrFfY-JpfWLM7nY-zpt8RoC3qqg1uSLBiPcu9cbS5HoFMICH8YoxXQ06JDSB5T97m4NEy_SA9awMjLafq4hzS6Pv3KJk_G4udBom0acheky9amHWHVdajw33eEiSfHO-dZIC9p11HdBxD86NMCEGPNwbcGvr8uAt2WBozZ1fVG66WR_aIPWldKC2WzCUFDejBDPoI22NFbYeulVLZSao-BxkVMmk9BnAgeEYkGgbCTMR9oXuak3oP1f__Td84FnOdIHiOP0zOM=w825-h1125-s-no?authuser=0';
const lashingRootIcon = 'https://lh3.googleusercontent.com/CUEQiaE89v_GICpG4WWGiUW311Sf7O0pPYP7278u9NG5uJPZCXH5DSrhRjRslVUaRpmKrV_dtqwVM0hT2vRSsIJQxK5ek5OnE8xhFucHZGOm1Mdo9PUODYLEVT7sdbJZ9CFvqT4eoGV93xDu8zxHUfL52A2VqMxML2ccc-dR_oetivMj2QqiATWKtEtfiuptTBiGQGTv8nselwxxuBZTepPQdVJCZudnJWV1l_vhvW3gI7Ca7OMjJqrzBF2p0hY07JXpGZu3FnKDPuz3KRno34RflZxvF69tAc2z3NqKN7bOA650CU7i2YkP_mAz-EpCqERZAvzoyvFvwqjUrnaKzmletwnzvdLkMopf45xtXJ8gXncI1TRPzqZCgN3gU0I82nTiTGt40kClhkBA7WMZ_1Tlc1yb8SphgINngKjhcTS7qiDCF0kFgZqHc4tTdkSbg-D7YmtNDukQhCM2kRD8coeytbd4iU3J6_3Xo0B9ly5wfZUARuhO5x02tuzEwklgrKhVbn3E0o3ocoy94OEQkirYLplPqs2am6luZ_HsLZYsFLx6K4PrJLUTf08qp2Fni2d3TpjYSdOxbZANZrUApAVXfR51oB9Tmbg6fjcCZUfuLWFrrUNOppsM60WlST2neD1U9r3owO0mQPqfXJ-rG_2eTaE2Jq7zgxRtc0fwCnRwwS0NXDIm1GBf1Yz-Blp2pbPud_uL62rAq1AxcbEZsno6OAF2QS5V2BKLmk8HbNEe0VqSuz0AtehsqQQH_ZOJizrALHKoJuNa5-uaXUAzJyw9Ln-n9um-z3uT2hA9ZsurXmZDfa6isDndpYrhswVjMU_jsNbVk2__Na1fISHSQVMeXaye7MFvueRbgrzm4PJDJgyfLCub-p7R208D72mhAigI1_0pZ9fSSjBZ2g9A6mO9sIdczJ-xdaGyj_GHCC8uKLXC=w100-h100-s-no?authuser=0';
const shadowSeederPicture = 'https://lh3.googleusercontent.com/ehAJNi6zfx-nqfdkgmAvjEi5rjrOA-ewax3V9Y3blBaNuKgrWOXcCSN3qpWcfv6vdykScTnCAjB7cGf58ChuarjJvNREn2haA6lj7lw4Usrp2t_tRL6jx9mllnJ5Wv1X5d4nt64RG-m1E-gJbLONxRyIyFTjEzEPiv_NeDvvntchQREAXkdUW60s4AjruH3TSenRENU2SSS7qY6tRvaYeQ_fB0FkEtqJNi73_7FXj0OdsI7ckWO2Ka4QL_T6_mNpfHrhqwj8Zc7mp-Jk1cO9VibUcitYK9DtaOO7mmjiJwF2_K_TVkpX-oMkSjZdvL6MuqhyEgK8W1SOsAYLsQ8klb0cNqZLZD7oxbQsJfQ7hvl2MaVhDQZI6K7Q9fZoGfnSewGNW1b40Z7Mtm5inF1RbBXEQORkoQ2zolTCP4PMiE7n3m-QHRWcW3sO4ypAQjccJwQOHooVjXkp6BeX48xnkWGwoh93LohidgtT964zXlT09pjvY347Nwq6J9ib1Pijrg4YZJwX87AU8Ak0yJk535qPAfSXstWHGAE898oFv3BKi-R2ZyxkcaK5lMiLJZN8TVgHa2MKobnPLAk0mimcwvKFE-qY961aX0ZOunhiNtEC8xRMdox7EiRkFGiPX0KdUlLt4MVWwY4LwniGxnOebSzLzPZpLOvOTQYGRRHrd7ibHV88hAN-phWTrKIclVSz2cVVixvkDDyuDqwVDzpZzxW2awZwy0pZOXj043PnTUzxrc1cclHtANzCHx8x-NzQfoGk2UwrvruhSpROZhgNA9Ma15XQc87Yk_1dezDmOMSWUyfsbLmhzYEJUcNOGFsA9G12YilI2WYepT7CWd6IImTnRWtScG9-BlYjOHhd1GpAELNr3u7SOPweZLFItTwBqMqGDe_MAw9CLT7uB4U7Cm0eorseS3g3SDyBThxYHzAgAzq0=w825-h1125-s-no?authuser=0';
const shadowSeederIcon = 'https://lh3.googleusercontent.com/7y1BIdbVG35ZmUO7ipzRenbrwXMZ2_ksRZ2KW85IKpQIoMkVktLGXH-AHSv1p5BKDUfOLff3yrBZ9raxCdaw03Z_fN8f0lH-NvV7Q1pFy1Su6etjWczowQdSqSdacW1HoGvLwQ9lbkAk11pTaXk1ybP9vNCJG0djIcDDdRXUBdF2b6zx0t4ixwzu0CiK1BWHbQoU_Ta_nUl-c5H-0_PCyodNtQhUv4g2zdGrUpmqXi0PTBS4C-gmC6b7zxCESIlLxDjcEPejcmr-y9G_u634p5RDzn72QtOOdGwSpn60Kp_O9B_L77WrTE_gARKhcfkbKLxQKKLS9BeTenkRKWs8dc0uTUsMHRaWJjEN4uauET60UFhDkr9AjwP48ylWSa1dz4LCkb6FJcWiU410jmE_rQQ43F7EAvvdEqhCWrfhzvHsVfSAscf77l8R0oVDG5pabckH2QCMcS9LHRqdFxctFYc5DwFmkSSVJVyo7z_BH9N6tb-5NYML-7s9lkKojhRj-Bm7nOof309RMXaR2jQEBT7QPtmwGfsgvrZtcYRh36j5yxsdm6KFyy32Gdo7kH4YZGjm9vlXwfeXxn3woJZSk6s3mBf9qhsafIquG1Upn04ivOiZPiPVT16D8aS0R7bj4yN9mDi5tX8bGAFb10PnIrPDfwAxN4x7ZkhUsvqlrezETF-MjBYFveD9i0-OHwmvEDARZ8e94yqXwPgq2B9UmTAq3PZnU6BEmI3RLnUOGrJYmMcwR5z2E1jv6aRNhZK9nDAvmJDc5ifucoWa_7JV6vHxldOzhyZ-5KKCvx-KvsL3VIPtyaLVK0B0gWswqFYpwt7cYYB12j1K8UY7F6BobDzwJZRo2B0bXkGZZU3wYAU0PxSuv9oQUCuq9z4ExBcVPcDAbgL_9TwpmF8L9_SECOwRQdkBCDJQxYDT0eD5nsvTjjp0=w100-h100-s-no?authuser=0';
const snakeVinePicture = 'https://lh3.googleusercontent.com/1i0EgRVNJohEelVo9BxzsEOh4ojQGBsgh5rYG7yFT3o_zdt9ZckRLdHVS7j2aJjxWAfuZZqoratFn8B7D0QdFcyzUJyLKjkHMPvMnp10cH-C7JZ-3tHY1wzBW4XxrROVlP43ZtlOkDgIKxXItNSbZHY5UGC8j2gYt9NKJeNodclNnTorFYuckF99kGr1BN_AaZVTKz0uqSBGpBst71g8QUiOAmk3AOsIZz5fifmPaVJ5YZf6hJzx3Bn8E0pJ6kBJyogduB5GoYlPj3UAxiJfHuJpxC4_CxyXMsP6sJBUUqGNX84VgSLrd41dQUVwYM5Bey6eMGGeNcwHOP34EIeVQ5sv6lNLJ8O9L86EItas-k32xO_EmCzV667HALX0BbbQfsT1kzjpTvLpwgbrbQzbyXSoUKEjzKvyx8OrbyD7m4E0z57TRFfbH_PHYN_QNuJZWRnd-oi6e9xFkbuCvzwt8KFYH8eNL_IuhoKRQv-U_xVZT9Zfk5lB524cg5LnrLxFdXoHhgkywnkIXQ4d1whAi1FsuE6dOmgJW_cYBCO_WaEvkBTSVYgyB-hZZeeufwj_BXu556QezYGXYY07pr5nE4y5wQPS0iH5na93wff6FS6ADPR2OLPkT-xviID4eX5HqqLMvigsXNDK_xJ7QoBqJbe01G0B7hL9z8KvtrvNH7ihQGiMdfVjz5JluIAQ8_QSk9oVPhgQtpvwvlOYIXlpsjCFgDlbX-7TxqhF3Sz8TR-NYIwd0IBzLqs6yikM9YZKX-XlBbQoUJUPBQuOugI2LX71hJR-EZWwhvkVWNR6qchbrWR2ltBnhjUY7SIUAkQREkXFg7NuLrN1xHMsIX0-u7T0Mwj6B3ypTkOgIPvDu8rto4iL8S4rugTT-BGgeJ3Qqpm6HYry2ebuwDza-q5zUhaAI6c9bb_Y356ldY3jh5T8FPAo=w825-h1125-s-no?authuser=0';
const snakeVineIcon = 'https://lh3.googleusercontent.com/tO-RiYNlpcorbhTfZeqHuopyCMpqiP75mB_mxAafjrkNt4h8ix6BOjT52l0zx2T5kzBK9IZTGgr5eQYUsLvUNU8M8EbmHRigulgs59xIvk24oMwJVJxnPU_68b4Vvz20GbBa62Jdd244BenAuKNH54Jry1FdhkPMSVIjOFCf13LAA1CWg3hSxWCgwQv0jzfylAOMxcpfzh0XDKHVxyK_ubVlHYzA_Yu8IA_x9Y1Rzt-a4in8ofzUCicISTfBWbSCOX2s0CubSkJYh4bFSsgLUqoRGt7LfPvCZDR-y_m8Fph2i_UtiGJbjCAnyExptTtu0Twz1E4vJUS0X8DnxVgPP123_VBgBFaJfQmZmFfknwPg4F8AG6BtlxWiirEwBVe-7zC4vEZAfzcNfmi47q4558eeRq_q3cSANhmxrvPXDXnGUoksu_GG6dSSq9G_jL7RhJGapNAlBKKX9lw4-pVdlDtHIZkX1CuaFrhDXRcoKXr5Ncweh6rm-W8wJXhFAIbAStOoFTNmLi-i7zWthLngyaMuYLWInEoZ42v-lC-mZ1vTmY8q5UQqhZZ4Yd1gd3GGKABX_XbgoVIUzMUGtCc6_s91qG-Ppl7gJY4BGiGDkfdM6Ds7AMcZBDNXQXngJv3DTsWZjBT9cGzjgQg_IYCrXXk4uR6TnOIriDGO0UTv9s8hPXyWhQzgEqOWQIDtv5DQkMFZzphqsut8431bXAqpc2d5jvjNVgS3MXkvMbWnzsUDjTYfqOHZ15x182JSGT213rPek9SCo7CGvqPRN9C4thy6808Cs8AHktHUprSAiy2wpXX6Yf7IJWv4DeaunOczGqZOBk0_8aEIjPbSrhZb8TaF1-z_Ksw8Fu6_QRFDlaHPN0PQfGHSnoophI3nbuI8vLFQNZGU_g2x0PXK-PlSFd3ZgWnXu7Cvqc-ChKroRFml1Q-V=w100-h100-s-no?authuser=0';
const electrostaticShockPicture = 'https://lh3.googleusercontent.com/dldDLIklXVFh0lwWiDdRrwek2vgehNwb1OsvLM2UkEUjzfWQBc3eEYi8Jj190GGJQKdUsseTfyWzYQ08-_jIICErULdyjm_YdRZgPI_BLKaq-BZ7YvFfuKicGax-wIXQ3BsObI1OOYwEzELvMBv0sK3z-1b0Yfm-XuCkzKiwTpAEgjQ28TO3dnfZmToVWTAKSgyO6XbqLzE-iP6xQlaCKc1DZK50SNd7I9d8eHDOvP7X9z9n0_45wZJquSJsWIUwIBhqkh6qu9dnisEwLdqVMcS0gV-G2cdujs2YCeZcSsRbEjKWaOkZv-UIf7u1xnnVtZSlPRgc4voDzZgnyVQPClHNtpcn90Uk0_tbH-a9Q-kS1UbFX3D-QxlEJEfsWJ2xTstmN-xbxBbbaGnbrVl4vPmkAIIqVe6sN2DfxUE2G_cgZ_t4jppDgZwt2UWy3_Tjbl9bB393GNwn4-RWsplW8hU45zDNeafHDlTR5mz0Y8m5-fnqc5hKkRTs3yfWGrKenzirBjPuz7zQPxHp8m6zaTfeooaod0k81zELNKlkHoH3LIrtFEGy7KBimc-JjfB3oo_wa-RlD4WE33I6K_LeQj1R0cp1U3CGqp0erlI9PkEFBRVr_y36KoGB0sLNjLuqrEnszo2YqUkVumCFrJ2MUv8Ie2IcrNBjph-3STE8H9Mzp-h1H4jBJuTg7KiMjL6AVQum3rY_7dcZGT6CAeA508AY8tnFI5WN12-5stDVbvZDtp0xeCwyHYAt44To8gviYFsVij12OhvLFzxuEic6gsf5WisUxqfQHlL-jWO0cKKpGbZjdPXGEGtdCMuXq12SDeePGHZq-6KTxl8EbcwNWU0kZP2sa_TCgvwXqaF2Bm8Zpiwfg_HwXTd4w6YntbfGYyZVa2VL2xybDQiYWZ-wFRBK06nFSdHPeSYRSS9WYvGPu8tX=w825-h1125-s-no?authuser=0';
const glarePicture = 'https://lh3.googleusercontent.com/GicCd7ofY1FAM4KXrjrKF0lrgEmDd2f3MD1luj8okqXn8xKNwRt1F3iyeeSMIVKXhVV4QLa37NFAsGFu3i79AhD7eE-xTDoqqTijU2xqVLXivBalgMlnL9I0Y7FmRJmBQ31_nESluHRmVjyTV80k3JNel2EKBIhMEK7-i07SmFxtuy6HSjG2JojFH6w2tSXchyFGad5BNGCpjfqUlTJPtCqSJ3b7otmmxUBCfsX3UObf5rR-Cp2qInLp7NEQkCdyCdBbpL-C0Yjc4Z0bWG-gOyKV31nd_VSR8cOaZMvNlH9SFDgUR8Fto6pemMf9JCTv8dDL8ii_TFeSGDoL0gFzH0N5hEhzU3f9DPA4xyOjtyaeBTny1wgC40uEO5_1zbgN-xnffTw5LCZ7wqtT6IGn8lV7fFKZEE-lIT2qrJvf_a_BXbzqIGSzfxDF7h6VQ9p51xQEdOhNSPaMnNchyJJJlJVsfIrcoOpbJ5kqPm6cY69PIwfuVR8nYC0viO67W6gpLQQFOXhBDYYCwDECWtgl-ap39t9sIFj0hav5pUHr6hJ63dnLO-D6Gi_DQz_T7clZUojGrxEDTIMQ6y_0oZ_r9ON4GIXTHXTjd-fFKhHFcmE4PWQVgVq8jms5B6_NNH7w0EfOBFNKgw3gaIjCFFgJnRznrdHBeCb5hmcJr4nxTFHWKcauWTiIqbTgkS2kMJBdd6F-JJ0mfsKlw96aMOhrqD3cMEop5sYUM5iYQXdN9hNPEVfTVgWpJVFSb9yH3F5WclQ5qI2CpUOWu5NQvcpXY5hmdaNXQZaaU3ve9rQ9qQL4sOYMUzbO1WvgJwObYJoXJ-wJ1VwAeIEubPLMvA17_YUhRWoYabSAPsVT6MsfzTvLprZrpK6bm1T7jJSH4EzfM9f5s__D1yOwRwoX7xXD2V8N2bTr1SVNfqPgoehodCXyAWo6=w825-h1125-s-no?authuser=0';
const spicyAirPicture = 'https://lh3.googleusercontent.com/EdyhwC2khdPSOikw-zQGJljEv5rO9bfGU_4PKKaajEMialuT2zYChozknyYZy41WZviYjRuHCyWM-ada6XSD1I-MuED6v_dzT6fazwVwWvMrc5vkqfzB5IACjECJP5pizzvzSuyOHkkl_WVWZYLpwgAJu9YLRmaw6t2sc_H7tS_5SGSbSuJ7B0KQI2bCffXpxW6umwtjSrRcVTMxyPLXvkwufNLY4LRNYRmKfe5nUqVYx9B2zMALe9A3LIEuoM4VkezsX5HwsDBic_cLiAu1xZAFQrKERObURJHnhdg3OcfFJ1NPtcCgkg5KFhPBWt12pSzZ35IFmygN3Ah5t6o7Sc7VvYMuBK4VEfkmadiHi6cK166hhLe8m2Hp2WxhNc-YWJOQJ2vy4H62DswGOWaECPggeLH_I1ffMAVDzGDai0e4TwBNqcy18WKLDPaD5Y1HCd5_6fMuuq_dEI29nXlmz8xYAq5fjW6jD5Tlti--th6Av4TihzJRBniSUT0mPeThrLq0im94lFxaBXzJ6OvD5A12nq38bow-oM-2wKW9y2b6eeXSiYhVUAFeXMiU1I1MmgVX2jAOv_9oHQqRcu0-m1LGxcNunEe9eBaKIB33slDuA2XfTpqDN1DB4agmhGkCq-7OChBGkJqU7WTeHQ_Ap28Y9aacefD0VitX3r4ZyNDJV38jacFWPA9XgNmzHg827FwfnyadMRKdw615Wq_FH9pArzURwTc3UV9cBsaDYS8s4uPaxq2vpiLb0KGOd0OPe2mbg9fta53TMjL9dybZMeyUWafRGToYvCT3YA7PJPqd0feCzhp_QgbVTMrSkvUlPXHBA_OvzHeaLrphf0_y5MHgovMXCB2Rayip_gv3RFKEWKshI89uSQ3FUeDwYLz8gygi5g15YeBCI0sC6Y2cKHozpEH1D11dFuPBP8nns5r0S8nh=w825-h1125-s-no?authuser=0';

// emptyImage is used for <img id='messageImage'> which changes src values constantly. I could set messageImage to style.display="none" instead of displaying an empty image, but then I would need to change the style.display value back to block every single time that the src is changed. I prefer how the code looks with an empty image for this particular <img>.
const emptyImage = 'https://lh3.googleusercontent.com/LTUdt5t07CJrCU53mmtGbGsrBuInK8PwRFhx9wFVzDtncT2oMB2CYc7HLBxEJm9ygpdZIW124m7sNU7vlKAYRgwo_8zrsebWNqRLDNg2Ul6TeUK3vlYxLiaSZwPG_XAwtZLv21S27ERd4zQATbfvN4uNy3Mdbx2nlcTx6FUr4Rd3uRaBcFwEVy9kHo5eF52hk1h5NMtOYfLJqOm6AzdUROX8aAot553Tfvo21nAufILZu0E7_3F9PCeDiu3RvMlHfIUf5oUpHnKJMjof-FAHU8iB06G2BTADsPxBiumGZ9IQuD2pVPIh9bkXngTlkPTnYLBGwJPE0tvy7CkUjhV61jgtsYfA1aImy5JroJ8ANBLUza5A3ieWt-OMgTvDhI246VloiUenR7O14clLZQShFO2FB3jSf2a7VbfLBWc6Sk2pGJVSBJx4D5eiOxs4XksHUWqSFrrt3CDAohfxhmB0FNXZWQI1XJ3geLl0SD2wczOaPHyXpa3C1YS6WLfoxrffIc5VF85ngvMHehmIjBBpf9Z9uZkBM97ZDXJ7WM3kL_4YxZQbuU2W0iHKdSx4cX5T85ifOcS84752IMK1uBOoFHI-5Y8-NUgeCRhcodFUc2aLrjmBMUHwojQj5R2Etdv_SuPEFeOTuHgrHB96cOovltHwJ-lLxr026xByrGnVLNW7ktwn7U05uQ72geTWYzMHTXyJOnBje4gBJBg69zFe3IEmU7xWbG9aFtmgz7B9gGoGHXrd1qUG8I13jNsLeyXfW8pVHAI3MM0K5N2H95herAR8mtG1zprv4_oZ3rOA0Kc4AIRzioG8-RURNYbllQ3msPksF_D7bB5-_fJYFA3Yz25cZfsSTwyY-3H1qm4j8RfpGzB-DiOCkHZi0tAYx3bcOpew9KJn0S8a2hTBHM6rN0PoudqeSazoiqXukRZdhJY-V2hc=w100-h100-s-no?authuser=0';

// systemDamage and doorDamage point to images which show the damage the katundian ship has taken. 
const systemDamage = 'https://lh3.googleusercontent.com/iMpMIODUdXbTWyD0-Bd0zINarrC5PyPPNxe8D0b7TwwtIZXQrRRkX2E3Ux4W5K22UhsmRRqfQwFvpORqAaE9ZpjzV59RvzLPxrCzcfHUvh21izYpZBNwvnS4hoc7bUFbHd7F5Q32i2CBeCb60QmIkwKJR5YPffTHnsZB_umQtM2qRw-IzMbio4gYgPzTBLvAKDyYufDhHDcGBEs1rBFF06xnHTf9rdqhNpD2Nc6hS2LeqB9o2Je5iYhVT2ow-d6BRgSm5f7oR6QgA5BsTjH52zmOEOHyOZGic9YG6mqNLhkWmH7sovVhUro8wcWqVt04Jucx8hZh9oA5Bs_B70aiyKwxDRwJNVZRo5lUM-NSRlu5FlCW8iEoD2UnOTX5484rRvJJ6XGkqH2w31bmGYzm14REtrkhcz2POkEcuKLLwyvlgn1ZdvoDxGMHBsPI40hISyDMxjbX41NUgB6oJkuXShzcCX22DISqNTcDr1Vte34NOJkBlaQFBY6VIXG7JEF7ghelH1Paqd_e2hBXIMloRj51vwQpfjyQvjVfeRnlSx_Bx3D-wpjk2wNprqSSHs53FhQrkIBuDV-_gOshfhYy1uoC9V-3jRbFobGsjkaMDaih4DKEWL_q3E7ordAdGNXeq6IKuMIlWzq6U-TNTu23VGx00S2feWfsIkY3uwgbUtL9q07visjV5skfFcY3TEl06nkASPWh9T2HQNRMq1D-YWtRiffXXsqZ49l8dotVfu6ro5a9Truv6q1mRSPVA51U1n6WX5sMkcLMuzYaExF1c-5rq4bMpEu5LIIheS-qT0YuAaW6pSQgwoDH0BTLbQCH7C6zNvIr4aVMbtYgK3Dyv8Esr3eMH-gV0T4lzilswz744uZAbonLdEoM8vy0v_A-1NwKEyaymSiOoV4ZMI2Odv-tmV2Ksg_z30PGI8_nwKcS5xGH=w100-h100-s-no?authuser=0';
const doorDamage = 'https://lh3.googleusercontent.com/zkbB2YRMbRi0jawynafqCisJE-amjT1lyfdQIPXXqukEbXT4y42GXO1Qd5L4wf8kUhjVwlt19HeoDVAJqfsIrJcvt-RPE96uWhDmEDxBE0YoVXjRDja27JEBwCI6-DceUkcIauxln9HWSJkpIgJnUW8NpZdHJqKpxQ72vIyL-wgXcbKGJchKLnIM66UH6CLKT4vwpnr0_dmjYA7IOGXrqZsosZ-un0Fu2KV7xvk13kqb79cE0cp31iX-3t6OhVrvbds3o5UHjyJKK7yRB61ani5PIsjD1fqpTewuE8ZCVQpnQYAVLLXfKEUXZY09ThW_uKLv7gw6bulMQRkkUJdq62p5dKGjwsXH_3RuQwBnpotdIMRyXc5_gKrSIgScRKvn0zZOFhbAFr2B-HiBCxRVpDls4-LDlIhLhxD0tpSr1puQuUoeLA3jcH5luPBMqoRp9T1gpQAxKLd9c-5U2zgidEe1mgmdf9kwsbIG11U4_thjKTtCQjUsRqQ73ilBu5cMfg5wAkA8G3PeD4u_Bm3jQ9qPYDO1g05mMrFimKOdc4oMCnbPDaiqRcV5CLYIgyyCPvrptWjj6uyKISoM1AEQm1bcNAL1T3NeXad9jPVUSnxI5p21io3hSjCgNFqIOfPiVZIdUHutOkvsX3qiFIFCobTM6BW1MeHFFDe3hFF8jrvb9LOHsRaWr8T--siMmoLuDwPSDvRD08fA-tSiUpn8cqjIicFMKbbrmuy5eHQ90vpMNOo5LKcr_02sUy7rsjduUoUunk10yrDagW7zM8Tzh1y1U5vtlnjYeM2P3p0blSHpmIGA_umi9e29RIQXmZ0SZhccUkZFKU2joapnhkqd9Ie_PpmtiwzT-sQIrAdmXSDXXG8Ood32tGaEuvI2LrtMDtlUyNMDy4Vb5aZ4vcv3oljgoRmqWOx6q_sWpjWASPJOKXhV=w100-h100-s-no?authuser=0'; 

// show functions are used to display different sections of html to the user: main menu, load screen, start selection screen, or the game itself. 
function showMainMenu (){
  document.getElementById('mainMenu').style.display="block";
  document.getElementById('loadScreen').style.display="none";
  document.getElementById('selectionScreen').style.display="none";
  document.getElementById('theGame').style.display="none";
  document.getElementById('userMessage').innerText = 'Your M30W class space cruiser, the H.I.S.S. Ender Paws, is ambushed by a dreadfuly deadly Kludde mothership. OH NO!!! She exhales a cloud of infectious spores that press up against your clear coat shield as her viscious fleet swarms in like a hive of omnivorous space plants preparing to devour a delicious meal. It will take courage, wit, and cooperation to get out of this mess alive.';
}
function showLoad (){
  document.getElementById('userMessage').innerText = 'The code for loading and saving has not been written yet. Try new game instead.';
  /*
  document.getElementById('loadScreen').style.display="block";
  document.getElementById('mainMenu').style.display="none"; 
  document.getElementById('selectionScreen').style.display="none";
  document.getElementById('theGame').style.display="none";
  */
}
function showSelect (){
  document.getElementById('selectionScreen').style.display="block";
  document.getElementById('mainMenu').style.display="none";
  document.getElementById('loadScreen').style.display="none";
  document.getElementById('theGame').style.display="none";
  document.getElementById('userMessage').innerText = 'Select game difficulty and crew size. \n Then select characters, starting items, and starting rooms.';
}
function showGame (){
  document.getElementById('theGame').style.display="block";
  document.getElementById('mainMenu').style.display="none"; 
  document.getElementById('loadScreen').style.display="none";
  document.getElementById('selectionScreen').style.display="none";
}

// 
function showInstructions (){
  document.getElementById('userMessage').innerText = 'Each character gets 3 actions on their turn. \n "peak" at kludde cards to reveal them, then use items to defeat them. \n "paw" to gain new items \n "scamper" to move. \n \n After each character turn, the kludde attack. \n kludde will damage your ship and reduce ship energy. \n \n Win the game when kludde fleet reaches zero. \n Lose the game when ship energy reaches zero.';
}
//hideActionOptions() is a function that hides several radio buttons, checkboxes, drop down menus. These buttons let the user select different options for their actions. Only certain options are possible. The rest need to stay hidden. 
function hideActionOptions(){
  for (x=0;x<19;x++){
    if (x < 7){
      document.getElementById(`moveTo${x}`).style.display="none";
      document.getElementById(`moveTo${x}`).checked = false;
    }
    if (x < 6){
      document.getElementById(`spaceZone${x}`).style.display="none";
      document.getElementById(`spaceZone${x}`).checked = false;
    }
    document.getElementById(`dmg${x}`).style.display="none";
    document.getElementById(`dmg${x}`).checked = false;
  }
}

// sendMessage() prints a message at the bottom of the screen, by changing the inner text of a <p> element called userMessage.
function sendMessage(msg){
  document.getElementById('userMessage').innerText = msg;
  console.log('beep boop');
}

// crewSize(num) shows or hides the character selection inputs based on the num. 
function crewSize(num){
  for (z=0;z<num;z++){
    document.getElementById(`character${z}Start`).style.display="block";
  }
  for (y=num;y<7;y++){
     document.getElementById(`character${y}Start`).style.display="none";
  }
}

// Description functions are used on the selection screen at the start of a new game. When the user selects a character, item, or room from the dropdown menu, a Description function is used to provide them information about that character, item or room.
function characterDescription(num){
  num < 7 ? document.getElementById('userMessage').innerText = allCharacters[num].description : document.getElementById('userMessage').innerText = 'Character will be chosen randomly.';
  document.getElementById('messageImage').src = emptyImage;
}
function roomDescription(num){
  num < 7 ? document.getElementById('userMessage').innerText = allRooms[num].description : document.getElementById('userMessage').innerText = 'Starting room will be chosen randomly.';
  document.getElementById('messageImage').src = emptyImage;
}
function itemDescription(num){
  if (num < 24){
    document.getElementById('userMessage').innerText = itemDeck[num].description;
    document.getElementById('messageImage').src = itemDeck[num].picture;
  } else {
    document.getElementById('userMessage').innerText = 'Starting item will be chosen randomly.';
    document.getElementById('messageImage').src = emptyImage;
  }
}

// checkItems() is called when the user presses the start game button. It gathers all the information from the form and checks whether the starting choices are valid. If the choices are not valid, the user gets a message. otherwise the starting choices get passed into the startTheGame() function.
function checkItems(){
  let msg = ''
  let num = 1;
  num = document.getElementById('crew').value;
  let itemsValid = true;
  itemsValid = true;
  let itemList = [];
  itemList = [];
  let charList = [];
  charList = [];
  let roomList = [];
  roomList = [];
  for (z=0;z<num;z++){
    itemList.push(document.getElementById(`item${z}`).value);
    charList.push(document.getElementById(`character${z}`).value);
    roomList.push(document.getElementById(`room${z}`).value);
  }
  for (let y=1; y<num; y++){
    for (let x=0; x<y; x++){
      if (itemList[y] === itemList[x] && itemList[y] < 24){
        itemsValid = false;
        msg = `You have too many ${itemDeck[itemList[y]].name}'s! \n Each character and each item is unique.'`;
      }
      if (charList[y] === charList[x] && charList[y] < 7){
        itemsValid = false;
        msg = `You have too many ${allCharacters[charList[y]].role}'s! \n Each character and each item is unique.'`;
      }
    }
  }
  itemsValid ? startTheGame(charList, itemList, roomList) : document.getElementById('userMessage').innerText = msg;
}

// activePlayer, actionsRemaining, kluddeFleet, shipEnergy, and katundianCrew are all global variables used for the main game.  
let activePlayer = 0;
let actionsRemaining = 3;
let kluddeFleet = 20;
let shipEnergy = 20;
let katundianCrew =[];

// startTheGame() takes the users choices from the select menu, and applies them to the "katundianCrew" array. Extra steps are necessary if the user choses "random", because each character and each item are unique. Two characters cannot be the same, nor can they hold the same item, but they can be in the same room. For random characters, first I remove all the selected characters from the allCharacters array and then I randomly choose a character from what remains. Random items are done the exact same way, except they need to be done after the characters. This is because the items are held by the characters. Random characters need to be assigned before those characters can be given an item.
// random character: charList[u]=7. || random room: roomList[u]=7. || random item: itemList[x]=24 
function startTheGame(charList, itemList, roomList){
  for (z=0; z < charList.length; z++){
    if (roomList[z] > 6){
      roomList[z] = Math.floor(Math.random()*7);
    }
    if (charList[z] < 7){
      katundianCrew.push(allCharacters[charList[z]]);
      allCharacters[charList[z]].selected = true;
    } else {
      katundianCrew.push({});
    }
  }
  for (y=6; y>=0; y--){
    if (allCharacters[y].selected){
      allCharacters.splice(y,1);
    }
  }
  for (x=0; x<charList.length; x++){
    if (charList[x]>6){
      charList[x] = Math.floor(Math.random()*allCharacters.length);
      katundianCrew[x] = allCharacters[charList[x]];
      allCharacters.splice(charList[x],1);
    }
  }
  for (w=0; w < itemList.length; w++){
    katundianCrew[w].room = parseInt(roomList[w]);
    if (itemList[w] < 24){
      katundianCrew[w].items.push(itemDeck[itemList[w]]);
      itemDeck[itemList[w]].selected = true;
    }
  }
  for (v=23; v>=0; v--){
    if (itemDeck[v].selected){
      itemDeck.splice(v,1)
    }
  }
  itemDeck = shuffle(itemDeck);
  kluddeDeck = shuffle(kluddeDeck);
  kluddeFleet = document.getElementById('difficulty').value;
  for (u=0; u < itemList.length; u++){
    if (itemList[u]>23){
      katundianCrew[u].items.push(itemDeck[0]);
      itemDeck.shift();
    }
  }
  possibleActions('The game begins!');
  activePlayer = -1;
  hideActionOptions(); 
  showGame();
  assignImages();
  document.getElementById('kluddeNumber').innerText = kluddeFleet;
  for (t=0;t<6;t++){
      drawKluddeCard(t);
  }
  document.getElementById(`kluddeAmount${targetRoom}`).style.outline= "3px solid red";
  nextPlayerTurn('');
}

// shuffle(deck) takes an array and shuffles the order of the elements in that array.
function shuffle(deck){
  let newDeck = [];
    let randInt = 0;
    while(deck.length>0){
      randInt = Math.floor(Math.random()*deck.length);
      newDeck.push(deck[randInt]);
      deck.splice(randInt,1);
    }
    return newDeck;
}

// characterImages() assigns the src value for the character images which move about on the game board. 
function assignImages(){
  let elemId = 'characterImage';
  for (x=0;x<katundianCrew.length;x++){
    elemID = `characterImage${x}`;
    document.getElementById(elemID).src = katundianCrew[x].picture;
    characterPosition(x);
  }
}

// characterPosition(x) assigns the style.top and style.left values of a character image. character images are the colored circles with the character image inside. This function moves 1 image to the appropriate spot on the board, based on the room and the position within the katundianCrew array. 
function characterPosition(x){
  let elemId = 'characterImage';
  const roomPositions = [
    [[400,240], [600,230], [560,320], [450,320], [470,210], [530,210], [505,315]],  //Bridge
    [[690,280], [785,460], [635,375], [680,460], [730,320], [735,445], [660,330]],  //Infirmary
    [[680,540], [690,720], [620,630], [790,550], [730,670], [670,670], [730,550]], //Loading Bay
    [[460,670], [610,770], [400,770], [560,670], [560,780], [450,780], [510,790]],  //Engine Room
    [[220,550], [325,730], [330,545], [385,640], [275,560], [270,680], [330,670]],  //Hold
    [[320,280], [335,430], [215,460], [350,330], [280,320], [255,430], [295,465]],  //Galley
    [[450,410], [550,590], [560,410], [480,590], [600,500], [410,480], [425,570]]];  //Hub
    
  elemID = `characterImage${x}`;
  document.getElementById(elemID).style.left = `${roomPositions[katundianCrew[x].room][x][0]}px`;
  document.getElementById(elemID).style.top = `${roomPositions[katundianCrew[x].room][x][1]}px`;
}

// possibleActions(msg) populates a drop down menu with a list of possible choices. These are the actions that the user can take on their turn. First the action list is created. Action list has peak, paw, scamper, plus the character action, room action, and item actions. A while loop is used to remove all of the previous actions from the "actionSelector" dropdown menu. Then a for loop is used to add new options from actionList to "actionSelector." Lastly the userMessage is updated.
function possibleActions(msg){
  document.getElementById('shipNumber').innerText = shipEnergy;
  document.getElementById('kluddeNumber').innerText = kluddeFleet;
  document.getElementById('userMessage').innerText = `${msg} \n \n ${katundianCrew[activePlayer].role}'s turn. \n ${allRooms[katundianCrew[activePlayer].room].room} \n Stagger:${katundianCrew[activePlayer].stagger} \n Infections: ${katundianCrew[activePlayer].infections.length} \n ${actionsRemaining} actions remaining.`;
  if(msg===''){document.getElementById('messageImage').src = emptyImage;}
  while (document.getElementById('actionSelector').options.length > 0){
    document.getElementById('actionSelector').options.remove(0);
  }
  let actionList = [];
  actionList = [{label: "-select an action-"}, {label:'nap (end turn)'}, {label: 'peak'}, {label: 'paw'}, {label: 'scamper'}];
  actionList.push(katundianCrew[activePlayer].charAction);
  actionList.push(allRooms[katundianCrew[activePlayer].room].action);
  for (x=0; x < katundianCrew[activePlayer].items.length; x++){
    if (katundianCrew[activePlayer].items[x].refreshed){
      actionList.push(katundianCrew[activePlayer].items[x].actions[0]);
      if (katundianCrew[activePlayer].items[x].actions.length > 1) {
        actionList.push(katundianCrew[activePlayer].items[x].actions[1]);
      }
    } 
  }
  if (shipEnergy < 1){
    document.getElementById('userMessage').innerText = `${msg} \n \n Your ship ran out of energy. \n Game over, the kludde win.`;
    actionList =[{label: "new game"}];
  }
  if (kluddeFleet < 1){
    document.getElementById('userMessage').innerText = `${msg} \n \n The kludde fleet has been defeated. \n You win!!`;
    actionList =[{label: "new game"}];
  }
  for (y=0; y < actionList.length; y++){
    var act = document.createElement('option');
    act.value = actionList[y].label;
    act.innerHTML = actionList[y].label;
    document.getElementById('actionSelector').appendChild(act);
  }
}

// actionDescription(act) is called when the user selects an action from the "actionSelector". The name of that actions is passed into the function as "act" a switch is used with different cases for every possible action. The user is given instructions on how to finish that action. Any necessary controls for that action are set to style.display="block". All the unecessary controls get set to style.display="none" by the hideActionOptions() function.
const roomConnection = [[[1,9],[5,7],[6,8]],[[0,9],[2,11],[6,10]],[[1,11],[3,13],[6,12]],[[2,13],[4,15],[6,14]],[[3,15],[5,17],[6,16]],[[0,7],[4,17],[6,18]],[[0,8],[1,10],[2,12],[3,14],[4,16],[5,18]]];
function actionDescription(act){
  const systemList = ['Grabby Paws', 'Dank Fusion Reactor', 'Sustinance Replicator', 'Nanite Nest', 'Power Core', 'Wellness Enforcer', 'Quantifoam Tank'];
  document.getElementById('messageImage').src = emptyImage;
  document.getElementById('confirmAction').style.display = 'inline'
  hideActionOptions();
  let num = 0;
  switch(act){
    case '-select an action-':
      possibleActions('');
      break;
    case 'nap (end turn)':
      document.getElementById('userMessage').innerText = 'Nap: Press confirm to end your turn.';
      break;
    case 'peak':
      num = 0;
      for (z=0; z<allRooms[katundianCrew[activePlayer].room].kludde.length; z++){
        if (!allRooms[katundianCrew[activePlayer].room].kludde[z].revealed){
          num++;
        }
      }
      num > 0 ? document.getElementById('userMessage').innerText = `There are ${num} hidden kludde attacking your room! \n Press confirm to reveal 1 kludde.` : document.getElementById('userMessage').innerText = 'Peak: You cannot peak. There are no hidden Kludde attacking your room.';
      break;
    case 'paw':
      itemDeck.length > 0 ? document.getElementById('userMessage').innerText = 'Paw: Press confirm to draw an item.' : document.getElementById('userMessage').innerText = 'You cannot paw. There are no items left to draw.';
      break;
    case 'scamper':
      document.getElementById('userMessage').innerText = 'Scamper: Select a room on the ship. Then click confirm to move to that room. \n If you scamper through a damaged doorway, you will be staggered.';
      for (z=0;z<roomConnection[katundianCrew[activePlayer].room].length;z++){
        document.getElementById(`moveTo${roomConnection[katundianCrew[activePlayer].room][z][0]}`).style.display="block";
      }
      break;
    case 'Computer':
      if (shipEnergy < 2){
        document.getElementById('userMessage').innerText = 'The ship does not have enough energy to activate the computer.'
        break;
      }
      while (document.getElementById('actionSelector').options.length > 0){
    document.getElementById('actionSelector').options.remove(0);
      }
      for (z=0; z<7; z++){
        if(!damage[z]){
          var act = document.createElement('option');
          act.value = systemList[z];
          act.innerHTML = systemList[z];
          document.getElementById('actionSelector').appendChild(act);
        }
      }
      var act = document.createElement('option');
      act.value = 'Back';
      act.innerHTML = 'Exit computer';
      document.getElementById('actionSelector').appendChild(act);
      document.getElementById('userMessage').innerText = 'Computer: select any undamaged system to activate'
      break;
    case 'Back':
      possibleActions('');
      break;
    case "Captain's Orders":
      while (document.getElementById('actionSelector').options.length > 0){
    document.getElementById('actionSelector').options.remove(0);
      }
      for (y=0;y<katundianCrew.length;y++){
        if (!(y===activePlayer)){
          var act = document.createElement('option');
          act.value = y;
          act.innerHTML = katundianCrew[y].role;
          document.getElementById('actionSelector').appendChild(act);
        }
      }
      var act = document.createElement('option');
      act.value = 'Back';
      act.innerHTML = 'Belay that';
      document.getElementById('actionSelector').appendChild(act);
      break;
    case 'Chow Time':
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room === katundianCrew[activePlayer].room){
          num += katundianCrew[z].stagger;
        }
      }
      document.getElementById('userMessage').innerText = `Chow Time: Remove all stagger from all characters in your room. \n Press confirm to remove a total of ${num} stagger.`
      break;
    case "Quick Fix":
      num = 0;
      for (z=0;z<damageMatrix[katundianCrew[activePlayer].room].length;z++){
        if (damage[damageMatrix[katundianCrew[activePlayer].room][z]]){
          document.getElementById(`dmg${damageMatrix[katundianCrew[activePlayer].room][z]}`).style.display="block";
          num++;
        }
      }
      num > 0 ? document.getElementById('userMessage').innerText = `Quick Fix: Select up to 2 damage tokens in your room. \n Press confirm to repair the selected tokens.` : document.getElementById('userMessage').innerText = `Quick Fix: Repair up to 2 damage in your room. \n There is no damage in your room.`;
      break;
    case "Treat":
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room === katundianCrew[activePlayer].room){
          num += katundianCrew[z].infections.length;
        }
      }
      document.getElementById('userMessage').innerText = `Treat: Remove all infections from all characters in your room. \n Press confirm to remove a total of ${num} infections.`
      break;
    case 'Spot':
      for (z=0;z<6;z++){
        for (y=0;y<allRooms[z].kludde.length;y++){
          if (!allRooms[z].kludde[y].revealed){
            document.getElementById(`spaceZone${z}`).style.display="block";
          }
        }
      }
      document.getElementById('userMessage').innerText = 'Select a space zone with a hidden kludde to spot.';
      break;
    case "Blip":
      document.getElementById('userMessage').innerText = 'Blip: Select a room on the ship. Then click confirm to move to that room.';
      for (z=0;z<7;z++){
        if (!(katundianCrew[activePlayer].room===z)){
          document.getElementById(`moveTo${z}`).style.display="block";
        }
      }
      break;
    case "Grabby Paws":
      clickedKludde =[];
      document.getElementById('userMessage').innerText = `Grabby Paws: Spend 1 Energy to defeat any 1 revealed kludde. \n Click on a kludde then click Confirm.`;
      break;
    case "Dank Fusion Reactor":
      num = 0;
      for (x=0;x<katundianCrew.length;x++){
        for (y=0;y<katundianCrew[x].items.length; y++){
          if (!katundianCrew[x].items[y].refreshed && katundianCrew[x].items[y].charge === 2){
            num++;
          }
        }
      }
      document.getElementById('userMessage').innerText = `Dank Fusion Reactor: Spend 1 Energy to refresh all Dank Matter items for all players. \n Click confirm to activate the Dank Fusion Reactor. \n ${num} items will be refreshed.`;
      break;
    case "Sustinance Replicator":
      num = 0;
      for (x=0;x<katundianCrew.length;x++){
        num += katundianCrew[x].stagger;
      }
      document.getElementById('userMessage').innerText = `Sustinance Replicator: Spend 1 Energy to remove all stagger from all characters. \n Click confirm to activate the Sustinance Replicator. \n ${num} Stagger will be removed.`;
      break;
    case "Nanite Nest":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0;y<katundianCrew[z].items.length; y++){
          if (!katundianCrew[z].items[y].refreshed && katundianCrew[z].items[y].charge === 1){
            num++;
          }
        }
      }
      document.getElementById('userMessage').innerText = `Nanite Nest: Spend 1 Energy to refresh all Nanite items for all players. \n Click confirm to activate the Nanite Nest. \n ${num} items will be refreshed.`;
      break;
    case "Power Core":
      num = 0;
      for (z=0; z<7; z++){
        if (damage[z]){
          num++;
        }
      }
      document.getElementById('userMessage').innerText = `Power Core: Spend 1 Energy to repair every system on the ship. \n Click confirm to activate the Power Core. \n ${num} systems will be repaired.`;
      break;
    case "Wellness Enforcer":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        num += katundianCrew[z].infections.length;
      }
      document.getElementById('userMessage').innerText = `Wellness Enforcer: Spend 1 energy to remove all infections from all characters. \n Click confirm to remove ${num} infections.`;
      break;
    case "Quantifoam Tank":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0;y<katundianCrew[z].items.length; y++){
          if (!katundianCrew[z].items[y].refreshed && katundianCrew[x].items[y].charge === 3){
            num++;
          }
        }
      }
      document.getElementById('userMessage').innerText = `Quantifoam Tank: Spend 1 Energy to refresh all Quantifoam items for all players. \n Click confirm to activate the Quantifoam Tank. \n ${num} items will be refreshed.`;
      break;
    case "Kludde attack":
      document.getElementById('userMessage').innerText = `The kludde are attacking ${allRooms[targetRoom].room}! \n Each character in the ${allRooms[targetRoom].room} will take 1 stagger. \n The ship will take 1 damage for each attacking kludde. \n Press confirm to continue.`
      break;
    case "Shields up":
      document.getElementById('userMessage').innerText = 'Shields up: Prevent all damage and stagger from the kludde attack. \n Spend ship energy equal to the number of attacking kludde.'
      break;
    case "Alkashitzer":
      num = [0,0];
      for (y=0;y<katundianCrew.length;y++){
        if (katundianCrew[y].room===katundianCrew[activePlayer].room){
          num[0] += katundianCrew[y].stagger;
          num[1] += katundianCrew[y].infections.length;
        }
      }
      document.getElementById('userMessage').innerText = `Alkashitzer: Remove all stagger and infections from all characters in your room. \n ${num[0]} stagger and ${num[1]} infections will be removed.`;
      break;
    case "Atomic Deconstructor 1":
      scanFor('Snake Vine', 'Atomic Deconstructor');
      break;
    case "Atomic Deconstructor 2":
      scanFor('Green Matter Blob', 'Atomic Deconstructor');
      break;
    case "Atomic Reconstructor 1":
      scanFor('Kaboom Pod', 'Atomic Reconstructor');
      break;
    case "Atomic Reconstructor 2":
      num = 0;
      for (y=0;y<damageMatrix[katundianCrew[activePlayer].room].length; y++){
        if (damage[damageMatrix[katundianCrew[activePlayer].room][y]]){
          num++
        }
      }
      document.getElementById('userMessage').innerText = `Atomic Reconstructor: Press confirm to repair all damage in your room. \n Press confirm to repair ${num} damage.`
      break;
    case "BFGG 1":
      scanFor('Lashing Root', 'BFGG');
      break;
    case "BFGG 2":
      scanFor('Lashing Root', 'BFGG');
      break;
    case "Battle Biscuits":
      num = 0;
      for (y=0; y<katundianCrew.length; y++){
        num += katundianCrew[y].stagger;
      }
      document.getElementById('userMessage').innerText = `Battle Biscuits: Remove all stagger from all characters. /n Press confirm to remove ${num} stagger.`;
      break;
    case "Dank Nugget 1":
      num = 0;
      for (y=0; y<katundianCrew.length; y++){
        for (x=0; x<katundianCrew[y].items.length; x++){
          if (!(katundianCrew[y].items[x].refreshed) && katundianCrew[y].items[x].charge===2){
            num++
          }
        }
      }
      document.getElementById('userMessage').innerText = `Dank Nugget: Refresh all dank matter items for all characters. /n Press confirm to refresh ${num} items.`;
      break;
    case "Dank Nugget 2":
      document.getElementById('userMessage').innerText = `Dank Nugget: Press confirm to gain 3 ship energy.`;
      break;
    case "Dimensional Scanner 1":
      scanFor('Shadow Seeder', 'Dimensional Scanner');
      break;
    case "Dimensional Scanner 2":
      num = 0;
      for (y=0; y<allRooms[katundianCrew[activePlayer].room].kludde.length; y++){
        if(!(allRooms[katundianCrew[activePlayer].room].kludde[y].revealed)){num++;}
      }
      document.getElementById('userMessage').innerText = `Dimensional Scanner: Reveal all hidden kludde attacking your room. \n Press confirm to reveal ${num} kludde.`;
      break;
    case "Eye Drone 1":
      scanFor('Shadow Seeder', 'Eye Drone');
      break;
    case "Eye Drone 2":
      for (z=0;z<6;z++){
        for (y=0;y<allRooms[z].kludde.length;y++){
          if (!allRooms[z].kludde[y].revealed){
            document.getElementById(`spaceZone${z}`).style.display="block";
          }
        }
      }
      document.getElementById('userMessage').innerText = 'Eye Drone: Reveal up to 2 kludde in any 1 space zone. \n Select a space zone with a hidden kludde to reveal.';
      break;
    case "Fixit Grenade":
      num = 0;
      for (y=0; y<7; y++){
        for (x=0; x<damageMatrix[y].length; x++){
          if (damage[damageMatrix[y][x]]){
            document.getElementById(`moveTo${y}`).style.display="block";
            num++
          }
        }
      }
      num > 0 ? sendMessage ('Fixit Grenade: Repair all damage in any 1 room. \n Select a room with damage to repair.') : sendMessage ('You cannot use the Fixit Grenade because the ship has no damage to repair. \n Fixit Grenade: Repair all damage in any 1 room.');
      break;
    case "Handi Boots 1":
      scanFor('Kaboom Pod', 'Handi Boots');
      break;
    case "Handi Boots 2":
      for (y=0; y<roomConnection[katundianCrew[activePlayer].room].length; y++){
        document.getElementById(`moveTo${roomConnection[katundianCrew[activePlayer].room][y][0]}`).style.display="block";
      }
      document.getElementById(`moveTo${katundianCrew[activePlayer].room}`).style.display="block";
      num = 0;
      for (x=0; x<damageMatrix[katundianCrew[activePlayer].room].length; x++){
        if (damage[damageMatrix[katundianCrew[activePlayer].room][x]]){num++}
      }
      document.getElementById('userMessage').innerText = `Handi Boots: Repair all doorways in your room. Then move through 1 doorway. \n Select a room to move to then press confirm. \n ${num} doorways will be repaired.`;
      break;
    case "Hypersonic Wrench 1":
      scanFor('Kaboom Pod', 'Hypersonic Wrench');
      break;
    case "Hypersonic Wrench 2":
      for (y=0; y<19; y++) {
        if (damage[y]) {document.getElementById(`dmg${y}`).style.display="block";}
      }
      document.getElementById('userMessage').innerText = `Hypersonic Wrench: Repair up to 4 damage anywhere on the ship. \n Select up to 4 damage then press confirm.`;
      break;
    case "Implosion Launcher 1":
      scanFor('Lashing Root', 'Implosion Launcher');
      break;
    case "Implosion Launcher 2":
      for (y=0; y<6; y++){
        if(!(targetRoom===y)){
          document.getElementById(`spaceZone${y}`).style.display="block";
        }
      }
      document.getElementById('userMessage').innerText = `Implosion Launcher: Choose where the kludde will attack next. \n Select a space zone then press confirm.`;
      break;
    case "Inferno Blaster 1":
      scanFor('Big Bamboo', 'Inferno Blaster');
      break;
    case "Inferno Blaster 2":
      scanFor('Green Matter Blob', 'Inferno Blaster');
      break;
    case "KEM Spray 1":
      scanFor('Green Matter Blob', 'KEM Spray');
      break;
    case "KEM Spray 2":
      num = 0;
      for (y=0; y<katundianCrew.length; y++){
        if (katundianCrew[y].room===katundianCrew[activPlayer].room){
          num += katundianCrew[y].stagger;
        }
      }
      break;
    case "Lumination Stick":
      for (y=0; y<6; y++){
        for (x=0; x<allRooms[y].kludde.length; x++){
          if (!(allRooms[y].kludde[x].revealed)) {document.getElementById(`spaceZone${y}`).style.display="block";}
        }
      }
      document.getElementById('userMessage').innerText = `Lumination Stick: Reveal all hidden kludde in any 1 space zone. \n Select a space zone then press confirm.`;
      break;
    case "Nanite Cluster 1":
      num = 0;
      for (y=0; y<katundianCrew.length; y++){
        for (x=0; x<katundianCrew[y].items.length; x++){
          if (!(katundianCrew[y].items[x].refreshed) && katundianCrew[y].items[x].charge===1){
            num++
          }
        }
      }
      document.getElementById('userMessage').innerText = `Nanite Cluster: Refresh all nanite items for all characters. /n Press confirm to refresh ${num} items.`;
      break;
    case "Nanite Cluster 2":
      document.getElementById('userMessage').innerText = `Nanite Cluster: Press confirm to gain 3 ship energy.`;
      break;
    case "NIP":
      sendMessage('NIP: Press confirm to gain 3 actions.');
      break;
    case "Photon Emitter 1":
      scanFor('Shadow Seeder', 'Photon Emitter');
      break;
    case "Photon Emitter 2":
      num = 0;
      for (y=0; y<allRooms[katundianCrew[activePlayer].room].kludde.length; y++){
        if (!(allRooms[katundianCrew[activePlayer].room].kludde[y].revealed)) {num++;}
      }
      document.getElementById('userMessage').innerText = `Photon Emitter: Reveal up to 2 kludde attacking your room. Treat any infections revealed this way. \n Press confirm to reveal ${num} kludde.`;
      break;
    case "Pounce Suit 1":
      scanFor('Snake Vine', 'Pounce Suit');
      break;
    case "Pounce Suit 2":
      document.getElementById('userMessage').innerText = 'Pounce Suit: Move to any room. \n Select a room on the ship. Then click confirm to move to that room.';
      for (z=0;z<7;z++){
        if (!(katundianCrew[activePlayer].room===z)){
          document.getElementById(`moveTo${z}`).style.display="block";
        }
      }
      break;
    case "Power Suit 1":
      scanFor('Big Bamboo', 'Power Suit');
      break;
    case "Power Suit 2":
      sendMessage('Power Suit: Press confirm to gain 2 actions.');
      break;
    case "Quantifoam Canister 1":
      num = 0;
      for (y=0; y<katundianCrew.length; y++){
        for (x=0; x<katundianCrew[y].items.length; x++){
          if (!(katundianCrew[y].items[x].refreshed) && katundianCrew[y].items[x].charge===3){
            num++
          }
        }
      }
      document.getElementById('userMessage').innerText = `Quantifoam Canister: Refresh all quantifoam items for all characters. /n Press confirm to refresh ${num} items.`;
      break;
    case "Quantifoam Canister 2":
      sendMessage('Quantifoam Canister: Press confirm to gain 3 ship Energy.');
      break;
    case "Reboot Gloves 1":
      scanFor('Kaboom Pod', 'Reboot Gloves');
      break;
    case "Reboot Gloves 2":
      while (document.getElementById('actionSelector').options.length > 0){
    document.getElementById('actionSelector').options.remove(0);
      }
      for (z=0; z<7; z++){
        var act = document.createElement('option');
        act.value = systemList[z];
        act.innerHTML = systemList[z];
        document.getElementById('actionSelector').appendChild(act);
      }
      var act = document.createElement('option');
      act.value = 'Back';
      act.innerHTML = 'Exit computer';
      document.getElementById('actionSelector').appendChild(act);
      document.getElementById('userMessage').innerText = 'Reboot Gloves: Activate any ship system. Repair that system first if it is damaged. \n Select a system then click confirm.'
      break;
    case "Temporal Loop":
      clickedKludde =[];
      document.getElementById('userMessage').innerText = `Temporal Loop: Defeat any 1 revealed kludde. \n click on a kludde then click Confirm.`;
      break;
    case "Viral Erasure Tool 1":
      scanFor('Green Matter Blob', 'Viral Erasure Tool');
      break;
    case "Viral Erasure Tool 2":
      num = 0;
      for (y=0; y<katundianCrew.length; y++){
        if (katundianCrew[y].room===katundianCrew[activePlayer].room) {num += katundianCrew[y].infections.length;}
      }
      document.getElementById('userMessage').innerText = `Viral Erasure Tool: remove all infections from all characters in your room. \n Click confirm to remove ${num} infections.`;
      break;
  }
}

// takeAction(act) performs the action the user selected. If the action is not possible, it updates the "userMessage" to explain why.
// This function is called when the user clicks the submit button.
let captainCommanding = false;
let captainsActions = 0;
function takeAction(act){
  let msg = '';
  document.getElementById('confirmAction').style.display = 'none'
  let num = 0;
  var roomOpts = document.getElementsByName('moveToRoom');
  let acted = false;
  acted = false;
  switch(act){
    case 'nap (end turn)':
      msg = `The ${katundianCrew[activePlayer].role} takes a nap`
      if (captainCommanding){
        captainCommanding = false;
        actionsRemaining = captainsActions;
        for (z=0; z<katundianCrew.length; z++){
          if (katundianCrew[z].role==='captain'){
            activePlayer = z;
          }
        }
        actionsRemaining > 0 ? possibleActions(msg) : kluddeAttack(msg);
      } else {
        kluddeAttack(msg);
      }
      break;
    case 'Back':
      possibleActions('');
      break;
    case 'peak':
      for (z=0; z<allRooms[katundianCrew[activePlayer].room].kludde.length; z++){
        if (!allRooms[katundianCrew[activePlayer].room].kludde[z].revealed && !acted){
          acted = true;
          document.getElementById('messageImage').src = allRooms[katundianCrew[activePlayer].room].kludde[z].picture;
          msg = revealAKludde(allRooms[katundianCrew[activePlayer].room].kludde[z], katundianCrew[activePlayer].room, z);
          }
        }
      if (!acted){document.getElementById('userMessage').innerText = 'You cannot peak. There are no hidden Kludde attacking your room.'};
      break;
    case 'paw':
      if(itemDeck.length > 0){
        katundianCrew[activePlayer].items.push(itemDeck[0]);
        msg = `The ${katundianCrew[activePlayer].role} finds the ${itemDeck[0].name}.`
        document.getElementById('messageImage').src = itemDeck[0].picture;
        itemDeck.shift();
        acted = true;
      } else{
        document.getElementById('userMessage').innerText = 'There are no items to draw. Choose a different action.';
      }
      break;
    case 'scamper':   
      for (z = 0; z<roomOpts.length; z++){
        if(roomOpts[z].checked){
          msg = `The ${katundianCrew[activePlayer].role} scampers to the ${allRooms[z].room}`;
          for (y=0;y<roomConnection[katundianCrew[activePlayer].room].length;y++){
            if(z===roomConnection[katundianCrew[activePlayer].room][y][0] && damage[roomConnection[katundianCrew[activePlayer].room][y][1]]){
              katundianCrew[activePlayer].stagger++;
              msg = `The ${katundianCrew[activePlayer].role} scampers to the ${allRooms[z].room} \n The doorway is damaged, they are staggered as they scamper through.`
            }
          }
          katundianCrew[activePlayer].room = z;
          characterPosition(activePlayer);
          acted = true;
        }
      }
      if (!acted){document.getElementById('userMessage').innerText = 'Select a room to move to, before you click confirm.'}
      break;
    case 'Computer':
      document.getElementById('userMessage').innerText = 'Select a system from the list.'
      break;
    case '0': //"captain's Orders"
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6': 
      captainCommanding = true;
      captainsActions = actionsRemaining-1;
      activePlayer = act;
      actionsRemaining = 1;
      possibleActions(`The captain commands the ${katundianCrew[act].role}.`)
      break;
    case 'Chow Time':
     num = 0;
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room === katundianCrew[activePlayer].room && katundianCrew[z].stagger>0){
          num += katundianCrew[z].stagger;
          katundianCrew[z].stagger = 0;
          acted = true;
        }
      }
      if (acted){
        msg = `The cook makes a delicious meal. \n ${num} stagger is removed.`;
      } else{
        document.getElementById('userMessage').innerText = 'No one in your room is hungry. Chose a different action.';
        }
      break;
    case "Quick Fix":
      num = 0;
      for (z=0; z<19; z++){
        if(document.getElementById(`dmg${z}`).checked) {num++;}
      }
      if (num > 2){
        document.getElementById('userMessage').innerText = 'You selected too much damage. \n Quick Fix can only repair 2 damage at a time.'
      } else {
        if (num > 0){
          for (y=0; y<19; y++){
            if (document.getElementById(`dmg${y}`).checked){
              repairDamage(y);
            }
          }
          msg = `The mechanic repairs ${num} damage.`
          acted = true;
        } else {
            document.getElementById('userMessage').innerText = 'No damage selected. \n Select up to 2 damage, before you click confirm.'
          }
        }
      break;
    case "Treat":
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room === katundianCrew[activePlayer].room && katundianCrew[z].infections.length>0){
          kluddeFleet -= katundianCrew[z].infections.length;
          katundianCrew[z].infections = [];
          acted = true;
        }
      }
      acted ? msg = `The medic treats the ${num} infections.`: document.getElementById('userMessage').innerText = 'No one in your room is infected. Chose a different action.';  
      break;
    case 'Spot':
      for (z=0; z<6; z++){
        if (document.getElementById(`spaceZone${z}`).checked){num = z;}
      }
      for (y=0; y<allRooms[num].kludde.length; y++){
        if (!allRooms[num].kludde[y].revealed && !acted){
          acted = true;
          document.getElementById('messageImage').src = allRooms[num].kludde[y].picture;
          msg = revealAKludde(allRooms[num].kludde[y], num, y);
          }
        }
      break;
    case "Blip":
      for (z = 0; z<roomOpts.length; z++){
        if(roomOpts[z].checked){
          msg = `The teleporter blips to the ${allRooms[z].room}`;
          katundianCrew[activePlayer].room = z;
          characterPosition(activePlayer);
          acted = true;
        }
      }
      if (!acted){document.getElementById('userMessage').innerText = 'Select a room to move to, before you click confirm.'}
      break;
    case "Grabby Paws":
      if (clickedKludde.length>0){
        kluddeFleet -= clickedKludde[0].fleet;
        msg = `The ${katundianCrew[activePlayer].role} activates the Grabby Paws to defeat a ${clickedKludde[0].name}.`
        removeKluddeIcon(clickedKludde[0],clickedKludde[1],clickedKludde[2]);
        shipEnergy--;
        acted = true;
      } else {
        document.getElementById('userMessage').innerText = 'Click on a kludde to defeat, before you click confirm.';
      }
      break;
    case "Dank Fusion Reactor":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0;y<katundianCrew[z].items.length;y++){
          if (!(katundianCrew[z].items[y].refreshed) && katundianCrew[z].items[y].charge===2){
            katundianCrew[z].items[y].refreshed = true;
            acted = true;
            num++;
          }
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} activates the dank fusion reactor. \n ${num} items have been refreshed.`;
        shipEnergy--;
      } else {
        document.getElementById('userMessage').innerText='There are no dank matter that need to be refreshed. \n Choose a different action.';
        }
      break;
    case "Sustinance Replicator":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].stagger > 0){
          num += katundianCrew[z].stagger;
          katundianCrew[z].stagger = 0;
          acted = true;
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} activates the sustinance replicator \n ${num} stagger has been removed.`;
        shipEnergy--;
      } else {
         document.getElementById('userMessage').innerText='Nobody is hungry. \n Choose a different action.';
      }
      break;
    case "Nanite Nest":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0; y<katundianCrew[z].items.length; y++){
          if (!(katundianCrew[z].items[y].refreshed) && katundianCrew[z].items[y].charge===1){
            katundianCrew[z].items[y].refreshed = true;
            acted = true;
            num++;
          }
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} activates the nanite nest. \n ${num} items have been refreshed.`;
        shipEnergy--;
      } else {
        document.getElementById('userMessage').innerText='There are no nanite items that need to be refreshed. \n Choose a different action.';
        }
      break;
    case "Power Core":
      num
      for (z=0; z<7; z++){
        if (damage[z]){
          repairDamage(z);
          acted = true;
          num++;
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} activates the power core. \n ${num} systems have been repaired.`;
        shipEnergy--;
      } else {
        document.getElementById('userMessage').innerText='There are no quanitifoam items that need to be refreshed. \n Choose a different action.';
      }
      break;
    case "Wellness Enforcer":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].infections.length > 0){
          num += katundianCrew[z].infections.length;
          katundianCrew[z].infections = [];
          acted = true;
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} activates the wellness enforcer \n ${num} infections have been treated.`;
        kluddeFleet -= num;
        shipEnergy--;
      } else {
         document.getElementById('userMessage').innerText='Nobody is infected. \n Choose a different action.';
      }
      break;
    case "Quantifoam Tank":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0; y<katundianCrew[z].items.length; y++){
          if (!(katundianCrew[z].items[y].refreshed) && katundianCrew[z].items[y].charge===3){
            katundianCrew[z].items[y].refreshed = true;
            acted = true;
            num++;
          }
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} activates the quatifoam tank. \n ${num} items have been refreshed.`;
        shipEnergy--;
      } else {
        document.getElementById('userMessage').innerText='There are no quanitifoam items that need to be refreshed. \n Choose a different action.';
        }
      break;
    case "Kludde attack":
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room===targetRoom){katundianCrew[z].stagger++}
      }
      msg = `The Kludde attack ${allRooms[targetRoom].room}!`
      attackDamage(allRooms[targetRoom].kludde.length+1);
      drawKluddeCard(targetRoom);
      nextPlayerTurn(msg)
      break;
    case "Shields up":
      num = allRooms[targetRoom].kludde.length + 1;
      shipEnergy -=num;
      msg = `The kludde attack ${allRooms[targetRoom].room}! \n ${num} energy is spent on shields.`
      document.getElementById(`kluddeAmount${targetRoom}`).style.outline= "none";
      drawKluddeCard(targetRoom);
      nextPlayerTurn(msg)
      break;
    case "Alkashitzer":
      num = [0,0];
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room===katundianCrew[activePlayer].room){
          if (katundianCrew[z].stagger > 0 || katundianCrew[z].infections.length > 0){
            num[0] += katundianCrew[z].stagger;
            num[1] += katundianCrew[z].infections.length;
            katundianCrew[z].stagger = 0;
            katundianCrew[z].infections = [];
            acted = true;
          }
        }
      }
      kluddeFleet -= num[1];
      if(acted){
        exhaustItem('Alkashitzer');
      } else {
        document.getElementById('userMessage').innerText = "Nobody needs Alkashitzer yet. \n choose a different action.";
      } 
      break;
    case "Atomic Deconstructor 1":
      [acted, msg] = defeatKludde('Snake Vine', katundianCrew[activePlayer].room, 'Atomic Deconstructor');
      break;
    case "Atomic Deconstructor 2":
      [acted, msg] = defeatKludde('Green Matter Blob', katundianCrew[activePlayer].room, 'Atomic Deconstructor');
      break;
    case "Atomic Reconstructor 1":
      [acted, msg] = defeatKludde('Kaboom Pod', katundianCrew[activePlayer].room, 'Atomic Reconstructor');
      break;
    case "Atomic Reconstructor 2":
      num = 0;
      for (z=0; z<damageMatrix[katundianCrew[activePlayer].room].length; z++){
        if (damage[damageMatrix[katundianCrew[activePlayer].room][z]]){
          repairDamage(damageMatrix[katundianCrew[activePlayer].room][z]);
          num++
          acted = true;
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} uses the Atomic Reconstructor to repair ${num} damage.`;
        exhaustItem('Atomic Reconstructor');
      } else{
        document.getElementById('userMessage').innerText = `There is no damage in the ${allRooms[katundianCrew[activePlayer].room].room}. \n Choose a different action.`;
      }
      break;
    case "BFGG 1":
      [acted, msg] = defeatKludde('Lashing Root', katundianCrew[activePlayer].room, 'BFGG');
      break;
    case "BFGG 2":
      [acted, msg] = defeatKludde('Lashing Root', katundianCrew[activePlayer].room, 'BFGG');
      break;
    case "Battle Biscuits":
      num = 0;
      for (z=0; z<katundianCrew.length; z++){
        num += katundianCrew[z].stagger;
        katundianCrew[z].stagger = 0;
      }
      if (num > 0){
        acted = true;
        msg = `The ${katundianCrew[activePlayer].role} opens the Battle Biscuits. \n Everyone hears the bag opening. \n ${num} stagger is removed.`
        exhaustItem('Battle Biscuits');
      } else {
        sendMessage('Nobody is hungry. \n Choose a different action.')
      }
      break;
    case "Dank Nugget 1":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0;y<katundianCrew[z].items.length;y++){
          if (!(katundianCrew[z].items[y].refreshed) && katundianCrew[z].items[y].charge===2){
            katundianCrew[z].items[y].refreshed = true;
            acted = true;
            num++;
          }
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} uses the dank nugget. \n ${num} items have been refreshed.`;
        exhaustItem('Dank Nugget');
      } else {
        document.getElementById('userMessage').innerText='There are no dank matter items that need to be refreshed. \n Choose a different action.';
        }
      break;
    case "Dank Nugget 2":
      shipEnergy += 3;
      acted = true;
      msg = `The ${katundianCrew[activePlayer].role} uses the Dank Nugget to add 3 energy to the ship.`;
      exhaustItem('Dank Nugget');
      break;
    case "Dimensional Scanner 1":
      [acted, msg] = defeatKludde('Shadow Seeder', katundianCrew[activePlayer].room, 'Dimensional Scanner');
      break;
    case "Dimensional Scanner 2":
      num = 0;
      msg = `The ${katundianCrew[activePlayer].role} uses the Dimensional Scanner.`
      for (z=0; z<allRooms[katundianCrew[activePlayer].room].kludde.length; z++){
        if (!(allRooms[katundianCrew[activePlayer].room].kludde[z].revealed)){
          msg += '\n'
          msg += revealAKludde(allRooms[katundianCrew[activePlayer].room].kludde[z], katundianCrew[activePlayer.room], z);
        }
      }
      if (num>0){
        acted = true;
        exhaustItem('Dimensional Scanner');
        msg += `\n ${num} kludde were revealed.`
      } else {
        document.getElementById('userMessage') = `There are no hidden kludde attacking the ${allRooms[katundianCrew[activePlayer].room].room} \n Choose a different actions.`
      }
      break;
    case "Eye Drone 1":
      [acted, msg] = defeatKludde('Shadow Seeder', katundianCrew[activePlayer].room, 'Eye Drone');
      break;
    case "Eye Drone 2":
      num = 0;
      for (z=0; z<6; z++){
        if (document.getElementById(`spaceZone${z}`).checked){
          for (y=0; y<allRooms[z].kludde.length; y++){
            if (!(allRooms[z].kludde[y].revealed) && num < 2){
              revealAKludde(allRooms[z].kludde[y], z, y);
            }
          }
        }
      }
      acted = true;
      exhaustItem('Eye Drone');
      msg = `The ${katundianCrew[activePlayer].role} uses the Eye Drone to reveal ${num} hidden kludde.`;
      break;
    case "Fixit Grenade":
      num = 0;
      for (z=0; z<7; z++){
        if (document.getElementById(`moveTo${z}`).checked){
          for(y=0; y<damageMatrix[z].length; y++){
            if (damage[damageMatrix[z][y]]) {
              repairDamage(damageMatrix[z][y]);
              num++;
            }
          }
        }
      }
      if (num > 0) {
        acted = true;
        exhaustItem('Fixit Grenade');
        msg = `The ${katundianCrew[activePlayer].role} uses the Fixit Grenade to repair ${num} damage.`;
      } else {
        sendMessage('Select a room to repair, before you click confirm. \n If the ship has no damage, choose a different action.')
      }
      break;
    case "Handi Boots 1":
      [acted, msg] = defeatKludde('Kaboom Pod', katundianCrew[activePlayer].room, 'Handi Boots');
      break;
    case "Handi Boots 2":
      num = [0,0];
      num[0] = katundianCrew[activePlayer].room;
      for (y=0; y<7; y++){
        if (document.getElementById(`moveTo${y}`).checked) {
          katundianCrew[activePlayer].room = y;
          characterPosition(activePlayer);
          acted = true;
        }
      }
      if (!acted) {
        sendMessage('Select a room to move to, before you click confirm.');
        break;
      }
      for (z=1; z<damageMatrix[num[0]].length; z++){
        if (damage[damageMatrix[num[0]][z]]){
          repairDamage(damageMatrix[num[0]][z]);
          num[1]++;
        } 
      }
      if (num[0]===katundianCrew[activePlayer].room){
        if (num[1]>0) {
          msg = `The ${katundianCrew[activePlayer].role} uses handi boots to repair ${num} damage.`;
          exhaustItem('Handi Boots');
        } else {
          acted = false;
          sendMessage('There is no daamge to repair. \n Choose a different action.');
        }
      } else {
        if (num[1]>0){
          msg = `The ${katundianCrew[activePlayer].role} uses handi boots. \n They repair ${num[1]} damage on the way to the ${allRooms[katundianCrew[activePlayer].room].room}.`;
          exhaustItem('Handi Boots');
        } else {
          msg = `The ${katundianCrew[activePlayer].role} tries to use the handi boots. \n There is no damage to repair, so they scamper to the ${allRooms[katundianCrew[activePlayer].room].room} instead.`;
        }
      } 
      break;
    case "Hypersonic Wrench 1":
      [acted, msg] = defeatKludde('Kaboom Pod', katundianCrew[activePlayer].room, 'Hypersonic Wrench');
      break;
    case "Hypersonic Wrench 2":
      num = 0;
      for (z=0; z<19; z++){
        if (document.getElementById(`dmg${z}`).checked){
          num++;
        }
      }
      if (num > 4) {
        sendMessage('The hypersonic wrench can only repair 4 damage at a time. \n You have selected too much damage to repair.');
        break;
      } 
      if (num===0){
        sendMessage('Select up to 4 damage to repair, before you click confirm.');
        break;
      }
      for (y=0; y<19; y++){
        if (document.getElementById(`dmg${y}`).checked){
          repairDamage(y);
        }
      }
      msg = `The ${katundianCrew[activePlayer].role} uses the hypersonic wrench to repair ${num} damage;`
      exhaustItem('Hypersonic Wrench');
      acted = true;
      break;
    case "Implosion Launcher 1":
      [acted, msg] = defeatKludde('Lashing Root', katundianCrew[activePlayer].room, 'Implosion Launcher');
      break;
    case "Implosion Launcher 2":
      for (z=0; z<6; z++){
        if (document.getElementById(`spaceZone${z}`).checked){
          acted = true;
          document.getElementById(`kluddeAmount${targetRoom}`).style.outline= "none";
          document.getElementById(`kluddeAmount${z}`).style.outline= "3px solid red";
          targetRoom = z;
          msg = `The ${katundianCrew[activePlayer].role} uses the Implosion Launcher to divert the kludde's attention towards the ${allRooms[z].room}`;
        }
      }
      if (!acted) {sendMessage('Select a space zone before you click confirm. \n The next kludde attack will target that space zone.');}
      break;
    case "Inferno Blaster 1":
      [acted, msg] = defeatKludde('Big Bamboo', katundianCrew[activePlayer].room, 'Inferno Blaster');
      break;
    case "Inferno Blaster 2":
      [acted, msg] = defeatKludde('Green Matter Blob', katundianCrew[activePlayer].room, 'Inferno Blaster');
      break;
    case "KEM Spray 1":
      [acted, msg] = defeatKludde('Green Matter Blob', katundianCrew[activePlayer].room, 'KEM Spray');
      break;
    case "KEM Spray 2":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room === katundianCrew[activePlayer].room && katundianCrew[z].stagger>0){
          num += katundianCrew[z].stagger;
          katundianCrew[z].stagger = 0;
          acted = true;
        }
      }
      if (acted){
        msg = `The ${katundianCrew[activePlayer].role} uses KEM Spray. \n ${num} stagger is removed.`;
      } else{
        document.getElementById('userMessage').innerText = 'No one in your room is hungry. Chose a different action.';
        }  
      break;
    case "Lumination Stick":
      for (z=0; z<6; z++){
        if (document.getElementById(`SpaceZone${z}`).checked){
          acted = true;
          for (y=0; y<allRooms[z].kludde.length; y++){
            if(!(allRooms[z].kludde[y].revealed)){
              revealAKludde(allRooms[z].kludde[y], z, y);
            }
          }
        }
      }
      break;
    case "Nanite Cluster 1":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0;y<katundianCrew[z].items.length;y++){
          if (!(katundianCrew[z].items[y].refreshed) && katundianCrew[z].items[y].charge===1){
            katundianCrew[z].items[y].refreshed = true;
            acted = true;
            num++;
          }
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} uses the nanite cluster. \n ${num} items have been refreshed.`;
        exhaustItem('Nanite Cluster');
      } else {
        document.getElementById('userMessage').innerText='There are no nanite items that need to be refreshed. \n Choose a different action.';
      }
      break;
    case "Nanite Cluster 2":
      shipEnergy += 3;
      acted = true;
      msg = `The ${katundianCrew[activePlayer].role} uses the Nanite Cluster to add 3 energy to the ship.`;
      break;
    case "NIP":
      actionsRemaining += 3;
      acted = true;
      msg = `The ${katundianCrew[activePlayer].role} uses NIP`;
      exhaustItem('NIP');
      break;
    case "Photon Emitter 1":
      [acted, msg] = defeatKludde('Shadow Seeder', katundianCrew[activePlayer].room, 'Photon Emitter');
      break;
    case "Photon Emitter 2":
      msg = `The ${katundianCrew[activePlayer].role} uses the Photon Emitter`;
      num = [0, [], 0];
      num[1] = JSON.parse(JSON.stringify(katundianCrew[activePlayer].infections));
      for (z=0; z<allRooms[katundianCrew[activePlayer].room].kludde.length; z++){
        if (!(allRooms[katundianCrew[activePlayer].room].kludde[z].revealed) && num[0] < 2){
          msg += '\n';
          msg += revealAKludde(allRooms[katundianCrew[activePlayer].room].kludde[z], katundianCrew[activePlayer].room, z);
          num[0]++;
        }
      }
      if (num[0] === 0){
        document.getElementById('userMessage').innerText = `There are no hidden kludde attacking the ${allRooms[katundianCrew[activePlayer].room].room}. \n Photon Emitter: reveal up to 2 hidden kludde attacking your room. Treat all infections revealed this way.`;
      } else {
        acted = true;
        exhaustItem('Photon Emitter');
        num[2] = katundianCrew[activePlayer].infections.length - num[1].length;
        kluddeFleet -= num[2];
        katundianCrew[activePlayer].infections = num[1];
        msg += `\n ${num[0]} kludde were revealed and ${num[2]} infections were treated.`;
      }
      break;
    case "Pounce Suit 1":
      [acted, msg] = defeatKludde('Snake Vine', katundianCrew[activePlayer].room, 'Pounce Suit');
      break;
    case "Pounce Suit 2":
      for (z=0; z<7; z++){
        if (document.getElementById(`moveTo${z}`).checked){
          katundianCrew[activePlayer].room = z;
          characterPosition(activePlayer);
          acted = true;
          msg = `The ${katundianCrew[activePlayer].role} uses the Pounce Suit to move to the ${allRooms[katundianCrew[activePlayer].room].room}.`
        }
      }
      break;
    case "Power Suit 1":
      [acted, msg] = defeatKludde('Big Bamboom', katundianCrew[activePlayer].room, 'Power Suit');
      break;
    case "Power Suit 2":
      actionsRemaining +=2;
      msg = `The ${katundianCrew[activePlayer].role} uses the Power Suit to move to gain 2 extra actions.`
      break;
    case "Quantifoam Canister 1":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0;y<katundianCrew[z].items.length;y++){
          if (!(katundianCrew[z].items[y].refreshed) && katundianCrew[z].items[y].charge===3){
            katundianCrew[z].items[y].refreshed = true;
            acted = true;
            num++;
          }
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} uses the quantifoam canister. \n ${num} items have been refreshed.`;
        exhaustItem('Quantifoam Canister');
      } else {
        document.getElementById('userMessage').innerText='There are no quantifoam items that need to be refreshed. \n Choose a different action.';
      }
      break;
    case "Quantifoam Canister 2":
      shipEnergy += 3;
      acted = true;
      msg = `The ${katundianCrew[activePlayer].role} uses the Quantifoam Canister to add 3 energy to the ship.`;
      break;
    case "Reboot Gloves 1":
      [acted, msg] = defeatKludde('Kaboom Pod', katundianCrew[activePlayer].room, 'Reboot Gloves');
      break;
    case "Reboot Gloves 2":
      break;
    case "Temporal Loop":
      if (clickedKludde.length>0){
        kluddeFleet -= clickedKludde[0].fleet;
        msg = `The ${katundianCrew[activePlayer].role} uses the temporal loop to defeat a ${clickedKludde[0].name}.`;
        removeKluddeIcon(clickedKludde[0],clickedKludde[1],clickedKludde[2]);
        exhaustItem('Temporal Loop');
        acted = true;
      } else {
        document.getElementById('userMessage').innerText = 'Click on a kludde to defeat, before you click confirm.';
      }
      break;
    case "Viral Erasure Tool 1":
      [acted, msg] = defeatKludde('Green Matter Blob', katundianCrew[activePlayer].room, 'Power Suit');
      break;
    case "Viral Erasure Tool 2":
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room === katundianCrew[activePlayer].room && katundianCrew[z].infections.length>0){
          kluddeFleet -= katundianCrew[z].infections.length;
          katundianCrew[z].infections = [];
          acted = true;
        }
      }
      if (acted){
        msg = `The ${katundianCrew[activePlayer].role} uses the Viral Erasure tool to treats ${num} infections.`
        exhaustItem('Viral Erasure Tool')
      } else {
        sendMessage ('No one in your room is infected. \n Chose a different action.');
      }
      break;
  }
  document.getElementById('confirmAction').style.display = 'inline';
  if (acted){
    hideActionOptions();
    actionsRemaining--;
    if (actionsRemaining>0) {
      possibleActions(msg);
    } else {
      if (captainCommanding){
        actionsRemaining = captainsActions;
        captainCommanding = false;
        for (z=0; z<katundianCrew.length; z++){
          if (katundianCrew[z].role==='captain'){
            activePlayer = z;
          }
        }
      }
      actionsRemaining > 0 ? possibleActions(msg) : kluddeAttack(msg);
    }
  }
}

function nextPlayerTurn(msg){
  activePlayer++;
  if (activePlayer >= katundianCrew.length){
    activePlayer = 0;
  }
  document.getElementById('messageImage').src = emptyImage;
  if (katundianCrew[activePlayer].stagger < 3){
    actionsRemaining = 3;
    possibleActions(msg)
  } else {
    katundianCrew[activePlayer].stagger = 0;
    msg = msg + `\n The ${katundianCrew[activePlayer].role} is completely staggered.`
    kluddeAttack(msg);
  }
}

//kluddeAttack(msg) happens at the end of every player turn, when actionsRemaining = 0. actionsRemaining is set to 4 for the next player ;p. Active player is advanced by 1. The actionSelector is set so that the only possible actions is 'Kludde attack' (later I will add a second option, 'Shields up'). userMessage tells where the kludde will attack. msg is passed from the takeAction function, telling the player what they just did before the attack. 
//The actual attack doesn't happen until the user clicks confirm, which triggers the 'Kludde attack' case in the 'takeAction' function.
function kluddeAttack(msg){ 
  while (document.getElementById('actionSelector').options.length > 0){
    document.getElementById('actionSelector').options.remove(0);
  }
  document.getElementById('userMessage').innerText = `${msg} \n The kludde are attacking ${allRooms[targetRoom].room}! \n Each character in the ${allRooms[targetRoom].room} will take 1 stagger. \n The ship will take 1 damage for each attacking kludde. \n Press confirm to continue.`
  document.getElementById('shipNumber').innerText = shipEnergy;
  document.getElementById('kluddeNumber').innerText = kluddeFleet;
  document.getElementById('confirmAction').style.display = 'inline';
  const attackList = ["Kludde attack", "Shields up"];
  if (kluddeFleet < 1){
    document.getElementById('userMessage').innerText = `${msg} \n \n The kludde fleet has been defeated. \n You win!!`;
    attackList =[{label: "new game"}];

  }
  for (z=0; z<2; z++){
    var act = document.createElement('option');
    act.value = attackList[z];
    act.innerHTML = attackList[z];
    document.getElementById('actionSelector').appendChild(act);
  }
}

// drawKludeCard(x) shifts 1 kludde from the "kluddeDeck" array and pushes that kludde into "allRooms[x].kludde". Target room is advanced by the new kludde's ".clockwise" value, to determine which room will be attacked next. The number next to the red arrow is updated to be equal to the number of kludde attacking the room.
let targetRoom = 0;
const spacePositions =[
    [[380,130], [440,130], [560,130], [620,130], [370,50], [425,50], [480,50], [535,50], [590,50], [645,50]], //Bridge
    [[900,380], [900,270], [900,210], [900,150], [980,400], [980,345], [980,290], [980,235], [980,180], [980,125]],  //Infirmary
    [[900,650], [900,770], [900,830], [900,890], [980,625], [980,680], [980,735], [980,790], [980,845], [980,900]],  //Loading Bay
    [[380,900], [440,900], [560,900], [620,900], [370,980], [425,980], [480,980], [535,980], [590,980], [645,980]],  //Engine Room
    [[130,650], [130,770], [130,830], [130,890], [50,625], [50,680], [50,735], [50,790], [50,845], [50,900]],  //Hold
    [[130,380], [130,270], [130,210], [130,150], [50,400], [50,345], [50,290], [50,235], [50,180], [50,125]]   //Galley
]
function drawKluddeCard(z){
  document.getElementById(`kluddeAmount${targetRoom}`).style.outline= "none";
  allRooms[z].kludde.push(kluddeDeck[0]);
  document.getElementById(`kluddeAmount${z}`).innerText = allRooms[z].kludde.length;
  var kld = document.createElement('img');
  kld.src ='https://lh3.googleusercontent.com/YjB2-2WPmvtEfTs6IXKDGHNQzFYpw7Eas5WEgghq96_OeH00JiM5dSVBu2nQ1zz-ALz_AqlipeFbZLlQJNgfkzWG2GsvBXFi4-LwHORc2kxFtwvyb2EwQcIOA5mEd5DA4c2SbRxZtDSW7OhBucS7MuaBehfAL35G4UNZ08y-RxeUuHbuKigh9_2v3clmbp4wI3dk81-_7n1IkKJPduRqKycvpugnPyaYHp5sClyzsP5q6bbzfJt67jJwkwxMC8_85Hx43MpH4eGuCIvFLMd206ceDV-if7vXUtjjawR2z0YPNV0B3sdz-v8pOUvRAdFaBfyrHF14ZJJ1Tu_tC-RMVm3GXYQRN7nKe1fWnF5VPmGP2974JeUrW5tnbMmUTceyVqHnHxflJyJdfnlcEZk5DamZrUV29eL3FJlSc1T_2OrUB4vFL0xa2ttHMxlYqiC2ov1Bt6RNJ9eELM5oDTKPrNYWHfcI4Z-LT-tU2CKfS4bpkFNjsAGTtq4BmvGMJELxQqpSISkJ4ua870FU9HduscEMygLLF4jnI9XrSqCLeATLOPRkf2MYLlQPYyRqnta8NByd-qHmJ8wVc-6S5MUPOZ6KEgg_EmKh1EETFzJ3Fq5QGhP56nWPIo7sXlG9iWmZnrUG43C-aIScJJnycUObFEWYHrENOWW90kbOHmSEF1IXshtHptPFqwk-duiJTL0TWOstBMNEeL4PYngx1Lk8bpuD6U_EEzMjFCuoAw3QKcCqUKG2Oyy4GRbAQfb9RyYaYNuA9BGYb3CKhncOlQL27QnTMlek07ryDxLaylxz1oWjgr07h5weNPldXg_0rlUVB7GC7iTcSM7BhlnPt14Z46XIyNgwp2JgEPfq3QwP0reZgj2bOMMVfN1w1tmPIJ4qU_gYj34QACe1Wa6g_K_3MbnPp9k64PhuxsxVzniTr72GWQN6=w100-h100-s-no?authuser=0';
  kld.style.position = 'absolute';
  kld.style.left =`${spacePositions[z][allRooms[z].kludde.length-1][0]}px`
  kld.style.top =`${spacePositions[z][allRooms[z].kludde.length-1][1]}px`
  kld.style.height = '50px';
  kld.style.width = '50px';
  kld.id= JSON.parse(JSON.stringify(`${z}${kluddeDeck[0].name}${kluddeDeck[0].clockwise}`));
  kld.addEventListener('click', () => {kluddeDescription(kld.id)} ); 
  document.getElementById('kluddeOverlay').appendChild(kld);
  targetRoom += kluddeDeck[0].clockwise;
  targetRoom > 5 ? targetRoom -= 6 : null;
  document.getElementById(`kluddeAmount${targetRoom}`).style.outline= "3px solid red";
  kluddeDeck.shift();
}

// revealAKludde(kld) takes a hidden kludde and reveals it. kld is a specific kludde inside allRooms[z].kludde. 
function revealAKludde(kld, rmNum, z){
  switch (kld.type){
    case ('defeatable'):
      kld.revealed = true;
      document.getElementById(`${rmNum}${kld.name}${kld.clockwise}`).src = kld.icon;
      msg = `you reveal a ${kld.name} outside the ${allRooms[rmNum].room}.`;
      break;
    case ('infection'):
      katundianCrew[activePlayer].infections.push(kld);
      msg = `The ${katundianCrew[activePlayer].role} reveals a cloud of infectious spores. \n The ${katundianCrew[activePlayer].role} is infected with ${kld.name}.`;
      removeKluddeIcon(kld, rmNum, z);
      break;
    case('event'):
      switch(allRooms[rmNum].kludde[z].name){
        case('Glare'):
          msg = `The ${katundianCrew[activePlayer].role} reveals a glare. \n The kludde mothership looks away akwardly when they lock eyes.`;
          break;
        case('Electrostatic Shock'):
          if (damage[katundianCrew[activePlayer].room]){
            shipEnergy--;
            msg = `The ${katundianCrew[activePlayer].role} reveals an electrostatic shock. \n The ship loses 1 energy.`;
          } else{
            takeDamage(katundianCrew[activePlayer].room);
            msg = `The ${katundianCrew[activePlayer].role} reveals an electrostatic shock. \n ZAP! It damages the ${allRooms[katundianCrew[activePlayer].room].action.label}.`;
          }
          break;
        case('Spicy Air'):
          katundianCrew[activePlayer].stagger++;
          msg = `The ${katundianCrew[activePlayer].role} reveals spicy air. \n The ${katundianCrew[activePlayer].role} is staggered.`;
          break;
      }
      removeKluddeIcon(kld, rmNum, z);
      break;
  }
  return(msg);
}

// kluddeDescription(kldID) is called when the player clicks on a kludde icon. It gives the player information about the kludde they clicked.
let clickedKludde =[];
function kluddeDescription(kldID){
  let rmNum = 0;
  let kldClock = 0;
  let kldName = '';
  rmNum = +kldID.charAt(0);
  kldClock = +kldID.charAt(kldID.length-1);
  kldName = kldID.substr(1,kldID.length-2);
  for (z=0; z<allRooms[rmNum].kludde.length; z++){
    if (kldName===allRooms[rmNum].kludde[z].name && kldClock===allRooms[rmNum].kludde[z].clockwise){
      if(allRooms[rmNum].kludde[z].revealed){
        document.getElementById('userMessage').innerText = `You clicked on a ${allRooms[rmNum].kludde[z].name} that is attacking the ${allRooms[rmNum].room}.`
        document.getElementById('userMessage').src = allRooms[rmNum].kludde[z].picture;
      clickedKludde[0] = allRooms[rmNum].kludde[z];
      clickedKludde[1] = rmNum;
      clickedKludde[2] = z;
      } else{
        rmNum===katundianCrew[activePlayer].room ? document.getElementById('userMessage').innerText = `You clicked on a hidden kludde outside the ${allRooms[rmNum].room}\n You can "Peak" at this kludde to reveal it.` : document.getElementById('userMessage').innerText = `You clicked on a hidden kludde outside the ${allRooms[rmNum].room}\n If you were in the ${allRooms[rmNum].room} you could "Peak" at this kludde to reveal it.`
      }
    }
  }
}

// defeatKludde(kld, rmNum, z) defeats 1 specific kludde with the name 'kldName' in the space zone given by rmNumb
function defeatKludde(kldName, rmNum, itmName){
  let msg = '';
  for (z=0; z<allRooms[rmNum].kludde.length; z++){
    if (allRooms[rmNum].kludde[z].name=== kldName && allRooms[rmNum].kludde[z].revealed){
      kluddeFleet -= allRooms[rmNum].kludde[z].fleet;
      removeKluddeIcon(allRooms[rmNum].kludde[z], rmNum, z);
      msg = `The ${katundianCrew[activePlayer].role} uses the ${itmName} to defeat a ${kldName}.`
      exhaustItem(itmName);
      return [true, msg];
    }
  }
  document.getElementById('userMessage').innerText = `There are no revealed ${kldName} attacking the ${allRooms[rmNum].room} \n Choose a different action.`;
  return [false, ''];
}

// removeKluddeIcon removes the kludde images from the space zone and removes the kludde from the allRooms[rmNum].kludde. This is separate from the defeatKludde function because certain kludde icons can be removed without defeating the kludde.
function removeKluddeIcon(kld, rmNum, z){
  allRooms[rmNum].kludde.splice(z,1);
  document.getElementById(`${rmNum}${kld.name}${kld.clockwise}`).remove();
  for (y=0;y<allRooms[rmNum].kludde.length;y++){
    document.getElementById(`${rmNum}${allRooms[rmNum].kludde[y].name}${allRooms[rmNum].kludde[y].clockwise}`).style.left = `${spacePositions[rmNum][y][0]}px`;
    document.getElementById(`${rmNum}${allRooms[rmNum].kludde[y].name}${allRooms[rmNum].kludde[y].clockwise}`).style.top = `${spacePositions[rmNum][y][1]}px`;
  }
}

// 'damageMatrix' is an array of rooms where each room has 4 posible 'damage' index's. 'damage' is an array of boolean values which indicates whether each system or door of the ship is damaged. damage[0] is the 'Grabby Paws'. damage[7] through damage[9] are the doors leading out of the bridge. damageMatrix[0] represents the Bridge, hence [0,7,8,9]
const damageMatrix = [[0,7,8,9], [1,9,10,11], [2,11,12,13], [3,13,14,15], [4,15,16,17], [5,17,18,7], [6,8,10,12,14,16,18]];
function attackDamage(num){
  let rand = Math.floor(Math.random() *3);
  let spotsLeft = 4;
  spotsLeft = 4;
  for (z=0;z<4;z++){
    if(damage[damageMatrix[targetRoom][z]]){spotsLeft--};
  }
  if (num < spotsLeft){
    while (num > 0) {
      if (rand>=4){rand=0};
      if(damage[damageMatrix[targetRoom][rand]]){
        rand++;
      } else{
        takeDamage(damageMatrix[targetRoom][rand]);
        rand++
        num--;
      }
   }
  } else{
    for(y=0;y<4;y++){
      takeDamage(damageMatrix[targetRoom][y]);
    }
    num -= spotsLeft;
    shipEnergy -= num;
  }
}

// takeDamage(x) puts damage onto the ship, first by setting damage[x] = true, then by displaying the damagePicture. repairDamage(x) removes damage from the ship, by doing the inverse.
function takeDamage(x){
  damage[x] = true;
  document.getElementById(`damagePicture${x}`).style.display = 'block';
}
function repairDamage(x){
  damage[x] = false;
  document.getElementById(`damagePicture${x}`).style.display = 'none';
}

//exhaustItem(itmName) exhausts a specific item, by setting .refreshed to false
function exhaustItem(itmName) {
  for (z=0; z<katundianCrew[activePlayer].items.length; z++){
    if(itmName===katundianCrew[activePlayer].items[z].name){
      katundianCrew[activePlayer].items[z].refreshed = false;
    }
  }
}

function scanFor(kldName, itmName){
  let num = 0;
  num = 0;
  let msg = '';
  for (z=0; z<allRooms[katundianCrew[activePlayer].room].kludde.length; z++){
    if (kldName===allRooms[katundianCrew[activePlayer].room].kludde[z].name && allRooms[katundianCrew[activePlayer].room].kludde[z].revealed){
      num++;
    }
  }
  num > 0 ? msg = `${itmName}: Press confirm to defeat 1 ${kldName}` : msg = `There are no revealed ${kldName}s attacking the ${allRooms[katundianCrew[activePlayer].room].room}. \n \n ${itmName}: defeat 1 revealed ${kldName} that is attacking your room.`;
  document.getElementById('userMessage').innerText = msg;
  for (y=0; y<katundianCrew[activePlayer].items.length; y++){
    if (itmName === katundianCrew[activePlayer].items[y].name){
      document.getElementById('messageImage').src = katundianCrew[activePlayer].items[y].picture;
    }
  }
}
