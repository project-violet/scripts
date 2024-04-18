// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 354:
case 966:
case 1732:
case 1968:
case 3565:
case 4049:
case 1916:
case 3710:
case 3946:
case 1211:
case 3740:
case 2247:
case 3441:
case 3930:
case 26:
case 2895:
case 3287:
case 1692:
case 2093:
case 351:
case 3863:
case 1630:
case 3173:
case 3984:
case 2022:
case 2673:
case 3828:
case 3825:
case 120:
case 987:
case 453:
case 368:
case 1009:
case 3104:
case 3172:
case 1491:
case 2474:
case 1338:
case 3751:
case 1773:
case 1836:
case 720:
case 1007:
case 2110:
case 1618:
case 3048:
case 3368:
case 1538:
case 2708:
case 1667:
case 2833:
case 3383:
case 1189:
case 2908:
case 873:
case 1150:
case 1260:
case 743:
case 192:
case 1551:
case 201:
case 270:
case 2584:
case 2002:
case 2200:
case 2585:
case 2639:
case 3252:
case 2973:
case 2983:
case 2783:
case 3388:
case 2732:
case 2577:
case 3140:
case 99:
case 1562:
case 2529:
case 2625:
case 3890:
case 2785:
case 1737:
case 194:
case 1034:
case 271:
case 2864:
case 3875:
case 339:
case 312:
case 3244:
case 1620:
case 3505:
case 3419:
case 3698:
case 3767:
case 2078:
case 3425:
case 1769:
case 3471:
case 4054:
case 1956:
case 3208:
case 2229:
case 1636:
case 3806:
case 504:
case 3061:
case 3331:
case 2136:
case 1717:
case 1522:
case 467:
case 3804:
case 2831:
case 2503:
case 3261:
case 2235:
case 3051:
case 3789:
case 3412:
case 1010:
case 3530:
case 2041:
case 3081:
case 1673:
case 3779:
case 2682:
case 3582:
case 1619:
case 1426:
case 3932:
case 2998:
case 246:
case 3742:
case 1223:
case 2982:
case 68:
case 2278:
case 1950:
case 3985:
case 3222:
case 3588:
case 3879:
case 717:
case 3354:
case 3650:
case 2373:
case 3712:
case 2508:
case 2678:
case 199:
case 2354:
case 1316:
case 2917:
case 570:
case 3216:
case 910:
case 361:
case 3744:
case 2744:
case 2063:
case 2328:
case 1815:
case 250:
case 1266:
case 563:
case 3286:
case 2417:
case 1994:
case 613:
case 3450:
case 3401:
case 2583:
case 1764:
case 3566:
case 3820:
case 868:
case 2131:
case 1035:
case 871:
case 1614:
case 2554:
case 2516:
case 468:
case 2537:
case 200:
case 3724:
case 965:
case 843:
case 1297:
case 1496:
case 3001:
case 1468:
case 2821:
case 3010:
case 84:
case 3011:
case 1329:
case 541:
case 1794:
case 2971:
case 3333:
case 1438:
case 705:
case 3631:
case 3343:
case 852:
case 3961:
case 3781:
case 2468:
case 193:
case 2126:
case 1265:
case 1631:
case 650:
case 2021:
case 3041:
case 2219:
case 1104:
case 119:
case 3988:
case 1154:
case 2509:
case 1356:
case 1088:
case 1911:
case 3552:
case 1296:
case 2505:
case 1703:
case 1383:
case 2301:
case 1989:
case 400:
case 2340:
case 1863:
case 299:
case 599:
case 3683:
case 3498:
case 3177:
case 4000:
case 807:
case 687:
case 1820:
case 1760:
case 1256:
case 2586:
case 1461:
case 1788:
case 1910:
case 3021:
case 715:
case 3703:
case 2377:
case 3734:
case 470:
case 1532:
case 2070:
case 413:
case 2742:
case 3560:
case 583:
case 1200:
case 1099:
case 381:
case 1686:
case 2306:
case 1975:
case 589:
case 6:
case 13:
case 759:
case 3659:
case 985:
case 1231:
case 666:
case 686:
case 2165:
case 3526:
case 2332:
case 2731:
case 3318:
case 2300:
case 1706:
case 3457:
case 1867:
case 3288:
case 2053:
case 3151:
case 1845:
case 1261:
case 1477:
case 3302:
case 2323:
case 1724:
case 2576:
case 938:
case 1498:
case 3803:
case 2641:
case 3075:
case 3959:
case 840:
case 538:
case 1872:
case 2445:
case 2012:
case 1937:
case 1050:
case 1342:
case 3349:
case 1871:
case 2385:
case 1110:
case 3568:
case 963:
case 2020:
case 2188:
case 1019:
case 3438:
case 3015:
case 1248:
case 2293:
case 2725:
case 3811:
case 4057:
case 1969:
case 2059:
case 2892:
case 3303:
case 2654:
case 325:
case 2873:
case 239:
case 2661:
case 2574:
case 1999:
case 2466:
case 3424:
case 1378:
case 3725:
case 1306:
case 1201:
case 3892:
case 1985:
case 831:
case 2249:
case 1507:
case 1085:
case 1624:
case 1324:
case 185:
case 1837:
case 2401:
case 1381:
case 893:
case 579:
case 1635:
case 3705:
case 1410:
case 3234:
case 182:
case 3130:
case 2699:
case 289:
case 483:
case 1825:
case 1604:
case 3371:
case 816:
case 2409:
case 2818:
case 2281:
case 3886:
case 1648:
case 1156:
case 3917:
case 2860:
case 3764:
case 2735:
case 2211:
case 2645:
case 3326:
case 546:
case 1903:
case 2366:
case 24:
case 3197:
case 1116:
case 3017:
case 774:
case 2761:
case 1391:
case 1676:
case 1574:
case 1293:
case 1789:
case 1735:
case 3855:
case 795:
case 2741:
case 2362:
case 223:
case 671:
case 3284:
case 3949:
case 2832:
case 3765:
case 2727:
case 993:
case 1951:
case 895:
case 2716:
case 3633:
case 1965:
case 3630:
case 744:
case 2981:
case 2261:
case 1798:
case 2339:
case 2115:
case 1462:
case 3472:
case 2861:
case 3628:
case 554:
case 3906:
case 3036:
case 2538:
case 3674:
case 2631:
case 841:
case 3563:
case 1981:
case 1571:
case 832:
case 3912:
case 2710:
case 2898:
case 2609:
case 765:
case 1731:
case 3096:
case 2711:
case 1992:
case 29:
case 154:
case 2903:
case 2656:
case 1629:
case 2775:
case 2675:
case 1668:
case 169:
case 3487:
case 1193:
case 1071:
case 55:
case 4034:
case 1533:
case 3612:
case 3307:
case 46:
case 1870:
case 1811:
case 2891:
case 4063:
case 2681:
case 2308:
case 3756:
case 496:
case 3649:
case 1530:
case 3427:
case 1896:
case 1606:
case 4020:
case 2225:
case 2363:
case 1874:
case 1880:
case 3200:
case 2875:
case 3145:
case 1693:
case 71:
case 2182:
case 2803:
case 2712:
case 547:
case 2019:
case 3134:
case 593:
case 3684:
case 1892:
case 2767:
case 1332:
case 3915:
case 3700:
case 3079:
case 3664:
case 76:
case 2911:
case 1586:
case 3355:
case 1644:
case 1929:
case 1640:
case 1028:
case 3019:
case 3996:
case 682:
case 293:
case 817:
case 3245:
case 2977:
case 3972:
case 36:
case 3018:
case 1980:
case 1890:
case 919:
case 333:
case 869:
case 1190:
case 3641:
case 1510:
case 3858:
case 520:
case 1417:
case 1561:
case 38:
case 2129:
case 1382:
case 2906:
case 377:
case 2343:
case 1756:
case 2217:
case 510:
case 1031:
case 1741:
case 3616:
case 1842:
case 3468:
case 1946:
case 3207:
case 3941:
case 1181:
case 1484:
case 2495:
case 2497:
case 2513:
case 3965:
case 3752:
case 1352:
case 1935:
case 2212:
case 2926:
case 2763:
case 2624:
case 3809:
case 1966:
case 989:
case 1768:
case 3308:
case 449:
case 3114:
case 624:
case 1176:
case 983:
case 3921:
case 2677:
case 876:
case 3356:
case 2650:
case 1251:
case 2311:
case 2331:
case 2255:
case 1742:
case 2183:
case 2790:
case 3430:
case 2350:
case 2176:
case 3790:
case 3692:
case 1823:
case 646:
case 1860:
case 1235:
case 1042:
case 2890:
case 427:
case 3540:
case 3553:
case 3914:
case 1208:
case 3384:
case 179:
case 3760:
case 1728:
case 2257:
case 608:
case 3262:
case 3359:
case 79:
case 369:
case 3016:
case 721:
case 2017:
case 446:
case 66:
case 132:
case 1891:
case 2289:
case 757:
case 2163:
case 1195:
case 3033:
case 3735:
case 3292:
case 3549:
case 1000:
case 1791:
case 145:
case 692:
case 1126:
case 2928:
case 448:
case 2759:
case 731:
case 673:
case 3685:
case 3557:
case 3609:
case 949:
case 3403:
case 2961:
case 2796:
case 921:
case 4095:
case 2032:
case 592:
case 2693:
case 1239:
case 2866:
case 596:
case 2491:
case 2953:
case 2629:
case 435:
case 1040:
case 1526:
case 3167:
case 2700:
case 3813:
case 3872:
case 1295:
case 2:
case 1821:
case 1547:
case 3576:
case 2545:
case 2254:
case 1819:
case 215:
case 474:
case 2936:
case 2514:
case 1730:
case 1524:
case 3237:
case 2480:
case 2627:
case 3655:
case 3782:
case 1942:
case 3928:
case 2157:
case 278:
case 3719:
case 2942:
case 2668:
case 1828:
case 3071:
case 2454:
case 497:
case 1471:
case 2635:
case 1187:
case 3274:
case 1926:
case 1691:
case 557:
case 3078:
case 3156:
case 2000:
case 1779:
case 2234:
case 1236:
case 2116:
case 2938:
case 3406:
case 189:
case 211:
case 280:
case 2912:
case 990:
case 3484:
case 3475:
case 1525:
case 3918:
case 3137:
case 1277:
case 4014:
case 670:
case 301:
case 3801:
case 4058:
case 794:
case 1269:
case 781:
case 2064:
case 3937:
case 2194:
case 1856:
case 2437:
case 1613:
case 3454:
case 837:
case 2859:
case 440:
case 2810:
case 2087:
case 3170:
case 1242:
case 2887:
case 2111:
case 886:
case 2569:
case 2997:
case 3129:
case 190:
case 1979:
case 1333:
case 2215:
case 2397:
case 173:
case 834:
case 269:
case 2773:
case 1082:
case 3014:
case 4071:
case 859:
case 2158:
case 2601:
case 556:
case 827:
case 430:
case 1959:
case 2391:
case 3600:
case 683:
case 1653:
case 1359:
case 860:
case 2596:
case 2957:
case 3206:
case 3603:
case 499:
case 516:
case 3496:
case 7:
case 23:
case 203:
case 2526:
case 2738:
case 255:
case 2231:
case 384:
case 854:
case 2464:
case 450:
case 3299:
case 689:
case 1441:
case 1425:
case 2958:
case 1944:
case 3217:
case 2830:
case 4026:
case 3541:
case 1502:
case 72:
case 462:
case 3774:
case 2185:
case 3605:
case 3846:
case 3423:
case 1351:
case 1036:
case 428:
case 1267:
case 2134:
case 2695:
case 1899:
case 1048:
case 1350:
case 2959:
case 702:
case 365:
case 2174:
case 3898:
case 1758:
case 2771:
case 936:
case 3927:
case 3646:
case 699:
case 1300:
case 407:
case 2268:
case 156:
case 1004:
case 3768:
case 2106:
case 147:
case 452:
case 2733:
case 3532:
case 3118:
case 2902:
case 2871:
case 3551:
case 3342:
case 3671:
case 2196:
case 2915:
case 3899:
case 1323:
case 106:
case 3115:
case 136:
case 905:
case 1605:
case 3420:
case 2663:
case 2865:
case 1320:
case 3939:
case 479:
case 2393:
case 3032:
case 1006:
case 2719:
case 148:
case 2138:
case 1513:
case 2691:
case 469:
case 409:
case 2858:
case 1681:
case 3005:
case 1027:
case 343:
case 1637:
case 994:
case 32:
case 1570:
case 2113:
case 1873:
case 1445:
case 2886:
case 890:
case 22:
case 3512:
case 457:
case 3:
case 1675:
case 772:
case 3897:
case 1993:
case 1030:
case 4017:
case 1672:
case 2518:
case 600:
case 195:
case 792:
case 165:
case 379:
case 1214:
case 2216:
case 836:
case 1439:
case 881:
case 1252:
case 2757:
case 3166:
case 1291:
case 75:
case 934:
case 1213:
case 647:
case 2845:
case 324:
case 2916:
case 2299:
case 3150:
case 3272:
case 4076:
case 1535:
case 3730:
case 2412:
case 3772:
case 359:
case 587:
case 1542:
case 659:
case 2455:
case 2504:
case 2259:
case 2322:
case 3404:
case 3867:
case 4080:
case 3202:
case 3936:
case 3003:
case 857:
case 2748:
case 3777:
case 3337:
case 933:
case 1220:
case 1592:
case 1229:
case 2403:
case 2618:
case 3590:
case 2307:
case 1487:
case 1895:
case 1141:
case 3240:
case 2348:
case 2570:
case 1429:
case 3092:
case 2159:
case 395:
case 1882:
case 1311:
case 3358:
case 835:
case 2685:
case 1941:
case 1632:
case 2383:
case 3769:
case 1839:
case 2214:
case 1120:
case 1224:
case 739:
case 2039:
case 1421:
case 3149:
case 1654:
case 95:
case 997:
case 3933:
case 1401:
case 1835:
case 3601:
case 3469:
case 2103:
case 1864:
case 3948:
case 2807:
case 3895:
case 1595:
case 1340:
case 3793:
case 3376:
case 3508:
case 3313:
case 3507:
case 3120:
case 562:
case 4082:
case 847:
case 1658:
case 2579:
case 2676:
case 1602:
case 1305:
case 1228:
case 3619:
case 2463:
case 493:
case 986:
case 856:
case 1465:
case 1539:
case 3586:
case 1683:
case 3123:
case 2862:
case 2435:
case 1817:
case 3100:
case 4085:
case 2987:
case 2360:
case 3201:
case 117:
case 3979:
case 603:
case 1878:
case 3212:
case 1319:
case 1146:
case 3243:
case 367:
case 2292:
case 1262:
case 3121:
case 800:
case 2291:
case 3241:
case 1117:
case 2220:
case 1375:
case 3008:
case 2990:
case 995:
case 1301:
case 3442:
case 3405:
case 914:
case 2338:
case 304:
case 3614:
case 3436:
case 3295:
case 1875:
case 2054:
case 1431:
case 3873:
case 633:
case 254:
case 376:
case 2336:
case 1191:
case 2023:
case 2433:
case 383:
case 1940:
case 3099:
case 1716:
case 1379:
case 3547:
case 1597:
case 2970:
case 1415:
case 3042:
case 4051:
case 3105:
case 2581:
case 1094:
case 2356:
case 224:
case 347:
case 1493:
case 1802:
case 3309:
case 1210:
case 2218:
case 3474:
case 4044:
case 4062:
case 2142:
case 3794:
case 3911:
case 718:
case 4087:
case 477:
case 238:
case 442:
case 1740:
case 4086:
case 3020:
case 3432:
case 1418:
case 3513:
case 2690:
case 3112:
case 2511:
case 3251:
case 2490:
case 3144:
case 3817:
case 1039:
case 1887:
case 652:
case 2202:
case 1472:
case 372:
case 456:
case 571:
case 292:
case 3749:
case 2572:
case 268:
case 19:
case 2994:
case 77:
case 615:
case 3856:
case 651:
case 2755:
case 422:
case 1132:
case 406:
case 964:
case 1374:
case 1914:
case 2407:
case 1287:
case 959:
case 3035:
case 3989:
case 220:
case 2456:
case 1353:
case 2835:
case 3428:
case 3057:
case 1428:
case 1045:
case 752:
case 1475:
case 235:
case 1897:
case 3922:
case 398:
case 2477:
case 521:
case 149:
case 2097:
case 2787:
case 1063:
case 3610:
case 1357:
case 1371:
case 3944:
case 3938:
case 576:
case 2058:
case 1659:
case 945:
case 2244:
case 1963:
case 3324:
case 1489:
case 252:
case 1625:
case 3728:
case 1600:
case 257:
case 488:
case 2145:
case 2991:
case 2389:
case 2358:
case 471:
case 2386:
case 1162:
case 3758:
case 3223:
case 3266:
case 2823:
case 707:
case 900:
case 917:
case 221:
case 380:
case 3743:
case 2530:
case 3521:
case 2666:
case 2714:
case 3139:
case 2114:
case 2793:
case 3535:
case 9:
case 3047:
case 248:
case 3189:
case 3410:
case 209:
case 1169:
case 2370:
case 737:
case 485:
case 560:
case 1377:
case 4040:
case 3361:
case 2901:
case 2758:
case 926:
case 3688:
case 3695:
case 3495:
case 12:
case 1349:
case 3669:
case 3426:
case 3229:
case 2476:
case 2955:
case 2425:
case 1234:
case 2125:
case 2193:
case 1022:
case 1747:
case 48:
case 2414:
case 1666:
case 437:
case 1013:
case 241:
case 1759:
case 622:
case 2797:
case 1095:
case 2927:
case 3073:
case 1931:
case 2413:
case 2170:
case 3791:
case 164:
case 3446:
case 3407:
case 907:
case 131:
case 1685:
case 1003:
case 2563:
case 2680:
case 787:
case 2395:
case 2430:
case 1665:
case 251:
case 3506:
case 726:
case 4046:
case 958:
case 1093:
case 3306:
case 1840:
case 564:
case 1641:
case 500:
case 2517:
case 2199:
case 2633:
case 2133:
case 518:
case 2309:
case 3860:
case 3731:
case 3642:
case 777:
case 3163:
case 1033:
case 375:
case 2123:
case 1827:
case 4068:
case 536:
case 1419:
case 2897:
case 1578:
case 3009:
case 370:
case 3310:
case 2048:
case 2406:
case 2085:
case 2816:
case 348:
case 1885:
case 3182:
case 728:
case 2483:
case 4022:
case 2304:
case 484:
case 3882:
case 245:
case 3275:
case 3064:
case 27:
case 2499:
case 940:
case 403:
case 2008:
case 161:
case 944:
case 815:
case 522:
case 1751:
case 1218:
case 2420:
case 3417:
case 2745:
case 3893:
case 708:
case 607:
case 811:
case 3615:
case 2262:
case 228:
case 1894:
case 3891:
case 1098:
case 2080:
case 2222:
case 1341:
case 1478:
case 1933:
case 103:
case 754:
case 1079:
case 1650:
case 2326:
case 1404:
case 1627:
case 3246:
case 956:
case 716:
case 2828:
case 3819:
case 1166:
case 2001:
case 555:
case 875:
case 1188:
case 1589:
case 1616:
case 2066:
case 2857:
case 2149:
case 3852:
case 2844:
case 768:
case 3346:
case 1934:
case 140:
case 2723:
case 916:
case 798:
case 676:
case 112:
case 1290:
case 3415:
case 1537:
case 2384:
case 1398:
case 290:
case 3393:
case 1796:
case 1147:
case 1247:
case 1647:
case 3357:
case 1047:
case 2558:
case 1991:
case 1002:
case 3476:
case 2438:
case 3931:
case 1101:
case 2241:
case 1309:
case 3625:
case 2421:
case 2026:
case 3479:
case 1202:
case 2811:
case 1115:
case 1409:
case 2018:
case 3226:
case 632:
case 616:
case 178:
case 2914:
case 2024:
case 3055:
case 2091:
case 553:
case 67:
case 3880:
case 2390:
case 1250:
case 2189:
case 517:
case 1080:
case 2930:
case 3271:
case 3997:
case 4012:
case 858:
case 2840:
case 102:
case 2276:
case 681:
case 3750:
case 1623:
case 904:
case 3488:
case 378:
case 3815:
case 1888:
case 3399:
case 2562:
case 3715:
case 2540:
case 3657:
case 3070:
case 1322:
case 2547:
case 1021:
case 1413:
case 2335:
case 167:
case 3198:
case 3461:
case 2210:
case 1622:
case 2375:
case 1463:
case 1430:
case 1344:
case 1753:
case 2669:
case 1990:
case 3596:
case 896:
case 1558:
case 894:
case 88:
case 1515:
case 1184:
case 1945:
case 1424:
case 2446:
case 3491:
case 2347:
case 980:
case 3279:
case 1609:
case 1813:
case 3978:
case 1607:
case 1771:
case 4037:
case 2889:
case 2492:
case 2555:
case 3124:
case 2434:
case 988:
case 1857:
case 796:
case 2297:
case 3871:
case 2946:
case 2011:
case 2150:
case 3687:
case 3480:
case 2806:
case 3775:
case 2034:
case 3748:
case 2950:
case 2094:
case 2320:
case 3293:
case 3531:
case 675:
case 801:
case 3205:
case 2743:
case 1364:
case 1016:
case 2027:
case 345:
case 1455:
case 741:
case 3810:
case 3339:
case 3520:
case 1909:
case 2999:
case 825:
case 3283:
case 3119:
case 142:
case 108:
case 2779:
case 3340:
case 183:
case 3059:
case 3584:
case 3109:
case 3194:
case 2353:
case 760:
case 4033:
case 3316:
case 1390:
case 3783:
case 2670:
case 935:
case 2777:
case 1938:
case 481:
case 1358:
case 2068:
case 1657:
case 913:
case 740:
case 788:
case 2127:
case 86:
case 3652:
case 25:
case 122:
case 1514:
case 2794:
case 410:
case 2155:
case 3267:
case 1011:
case 3209:
case 1384:
case 2100:
case 3975:
case 69:
case 2894:
case 4047:
case 402:
case 3746:
case 1552:
case 263:
case 3843:
case 2589:
case 1587:
case 2720:
case 1053:
case 2236:
case 656:
case 3780:
case 3562:
case 513:
case 3214:
case 3413:
case 1816:
case 3624:
case 770:
case 1345:
case 2007:
case 577:
case 626:
case 3176:
case 323:
case 1709:
case 2879:
case 2357:
case 3263:
case 498:
case 426:
case 627:
case 3701:
case 928:
case 3236:
case 2528:
case 3117:
case 3034:
case 3761:
case 1280:
case 581:
case 328:
case 357:
case 1343:
case 1923:
case 2431:
case 3281:
case 352:
case 2802:
case 2132:
case 3599:
case 621:
case 2519:
case 2659:
case 2750:
case 1580:
case 2764:
case 2501:
case 3723:
case 806:
case 2198:
case 247:
case 1171:
case 2233:
case 3861:
case 3829:
case 1258:
case 550:
case 134:
case 1060:
case 1907:
case 3907:
case 2033:
case 1414:
case 3353:
case 982:
case 1733:
case 127:
case 2846:
case 1056:
case 3280:
case 1148:
case 3519:
case 948:
case 3580:
case 1397:
case 789:
case 3577:
case 2993:
case 63:
case 2671:
case 3190:
case 3385:
case 2432:
case 703:
case 2765:
case 2756:
case 3227:
case 320:
case 2922:
case 3231:
case 2124:
case 2607:
case 3158:
case 3556:
case 3482:
case 2462:
case 3068:
case 1066:
case 1943:
case 1086:
case 3578:
case 2251:
case 3317:
case 4001:
case 2980:
case 511:
case 3097:
case 3694:
case 2632:
case 1399:
case 197:
case 1721:
case 778:
case 2615:
case 3559:
case 3452:
case 1556:
case 755:
case 1876:
case 3347:
case 3054:
case 2238:
case 2728:
case 98:
case 509:
case 2494:
case 3826:
case 2510:
case 2361:
case 418:
case 3397:
case 1029:
case 1702:
case 2005:
case 3367:
case 1936:
case 1851:
case 747:
case 1018:
case 2966:
case 283:
case 2571:
case 3093:
case 2937:
case 2561:
case 525:
case 237:
case 2718:
case 2426:
case 2636:
case 2931:
case 2428:
case 2594:
case 697:
case 2798:
case 310:
case 2863:
case 1328:
case 1163:
case 2315:
case 648:
case 322:
case 3352:
case 2471:
case 1723:
case 2722:
case 2520:
case 1699:
case 2096:
case 663:
case 714:
case 74:
case 3171:
case 2075:
case 2921:
case 3504:
case 3183:
case 2782:
case 3181:
case 791:
case 4030:
case 243:
case 1865:
case 1726:
case 3458:
case 2791:
case 3654:
case 3250:
case 2851:
case 3500:
case 300:
case 597:
case 3459:
case 2933:
case 2440:
case 3797:
case 3330:
case 4055:
case 1196:
case 2102:
case 820:
case 2187:
case 601:
case 297:
case 3604:
case 3822:
case 3865:
case 1304:
case 1518:
case 1626:
case 2372:
case 887:
case 979:
case 1362:
case 2679:
case 2896:
case 3122:
case 1809:
case 1755:
case 3418:
case 2947:
case 1226:
case 172:
case 3666:
case 750:
case 1651:
case 1241:
case 1696:
case 1939:
case 808:
case 2899:
case 899:
case 3193:
case 2653:
case 461:
case 133:
case 3056:
case 3076:
case 2082:
case 466:
case 2974:
case 3896:
case 2046:
case 1920:
case 2330:
case 3802:
case 1579:
case 2250:
case 3220:
case 3951:
case 1583:
case 2905:
case 3098:
case 233:
case 3023:
case 3665:
case 880:
case 3670:
case 3677:
case 1707:
case 305:
case 2451:
case 1216:
case 2550:
case 1434:
case 566:
case 90:
case 219:
case 1610:
case 3850:
case 821:
case 2952:
case 1140:
case 1443:
case 2868:
case 734:
case 3747:
case 3739:
case 1669:
case 3448:
case 3161:
case 1846:
case 729:
case 3908:
case 2706:
case 2995:
case 353:
case 2258:
case 865:
case 3620:
case 2379:
case 3807:
case 2227:
case 2715:
case 2318:
case 3230:
case 184:
case 2805:
case 2737:
case 3738:
case 507:
case 3966:
case 3862:
case 1442:
case 892:
case 1170:
case 1318:
case 3621:
case 3473:
case 915:
case 454:
case 1225:
case 1470:
case 93:
case 1677:
case 4025:
case 2035:
case 314:
case 45:
case 2050:
case 3788:
case 574:
case 1481:
case 1109:
case 2252:
case 1406:
case 2282:
case 3678:
case 2552:
case 3923:
case 1303:
case 1246:
case 1206:
case 2533:
case 1588:
case 1652:
case 2872:
case 207:
case 2613:
case 797:
case 3087:
case 1889:
case 658:
case 1645:
case 2590:
case 2956:
case 10:
case 2486:
case 227:
case 1458:
case 1893:
case 826:
case 3107:
case 2647:
case 1748:
case 3963:
case 2009:
case 2909:
case 2381:
case 1128:
case 2044:
case 416:
case 2246:
case 3116:
case 3558:
case 2778:
case 2305:
case 1886:
case 1832:
case 3157:
case 3101:
case 1346:
case 595:
case 3569:
case 2271:
case 3456:
case 3147:
case 818:
case 489:
case 3297:
case 1207:
case 1500:
case 3242:
case 2144:
case 2795:
case 3881:
case 1719:
case 1372:
case 2270:
case 1486:
case 3518:
case 3501:
case 4038:
case 3592:
case 653:
case 1850:
case 862:
case 3962:
case 2506:
case 4073:
case 168:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1713448801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,];
var gg_b = "1713448801/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
