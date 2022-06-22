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
case 892:
case 2032:
case 3838:
case 1018:
case 700:
case 2413:
case 21:
case 841:
case 2964:
case 2814:
case 3097:
case 3271:
case 2392:
case 2598:
case 2494:
case 265:
case 2882:
case 240:
case 1043:
case 2104:
case 984:
case 182:
case 1910:
case 1055:
case 967:
case 3648:
case 833:
case 758:
case 501:
case 3438:
case 1835:
case 3175:
case 1872:
case 3533:
case 1881:
case 3506:
case 1733:
case 1107:
case 2697:
case 317:
case 1547:
case 1952:
case 917:
case 2980:
case 272:
case 1454:
case 2946:
case 43:
case 2619:
case 490:
case 1446:
case 3033:
case 3071:
case 2023:
case 3036:
case 881:
case 788:
case 3765:
case 3225:
case 3493:
case 1374:
case 2188:
case 376:
case 3543:
case 281:
case 2573:
case 3060:
case 1741:
case 1830:
case 3987:
case 2711:
case 3397:
case 1437:
case 3871:
case 329:
case 701:
case 3179:
case 2451:
case 3193:
case 4021:
case 2316:
case 1882:
case 1653:
case 48:
case 3807:
case 2639:
case 3749:
case 3777:
case 347:
case 2311:
case 372:
case 3967:
case 1540:
case 2373:
case 3631:
case 2467:
case 2886:
case 1343:
case 1364:
case 2150:
case 3559:
case 3228:
case 504:
case 1080:
case 2813:
case 2139:
case 3873:
case 856:
case 1450:
case 768:
case 2694:
case 3755:
case 2887:
case 3839:
case 1820:
case 927:
case 1296:
case 2634:
case 982:
case 3906:
case 2065:
case 3068:
case 1485:
case 3591:
case 3200:
case 2036:
case 1946:
case 1309:
case 1840:
case 1471:
case 1672:
case 983:
case 366:
case 2262:
case 1475:
case 336:
case 3058:
case 129:
case 542:
case 2386:
case 3420:
case 632:
case 941:
case 1083:
case 196:
case 2701:
case 516:
case 2983:
case 2840:
case 3061:
case 41:
case 3774:
case 3013:
case 482:
case 2303:
case 1622:
case 1878:
case 1848:
case 1301:
case 1329:
case 37:
case 2752:
case 1603:
case 3406:
case 3191:
case 2765:
case 3475:
case 2327:
case 3120:
case 679:
case 747:
case 2405:
case 108:
case 2627:
case 2959:
case 578:
case 3212:
case 3197:
case 2629:
case 3185:
case 3291:
case 883:
case 2574:
case 1130:
case 2462:
case 1694:
case 127:
case 1774:
case 3407:
case 1167:
case 1211:
case 42:
case 153:
case 419:
case 2293:
case 609:
case 2743:
case 2325:
case 776:
case 3532:
case 2944:
case 1959:
case 2492:
case 3867:
case 1755:
case 2192:
case 2495:
case 3515:
case 4093:
case 143:
case 465:
case 1817:
case 2811:
case 3074:
case 950:
case 1293:
case 2774:
case 3235:
case 1359:
case 236:
case 2275:
case 1003:
case 2073:
case 3341:
case 396:
case 637:
case 1849:
case 1899:
case 3541:
case 3732:
case 2225:
case 3677:
case 2250:
case 1822:
case 3740:
case 687:
case 3324:
case 2387:
case 216:
case 2513:
case 455:
case 3154:
case 3983:
case 3690:
case 1936:
case 1842:
case 2671:
case 2796:
case 663:
case 2388:
case 3659:
case 973:
case 3711:
case 3492:
case 3963:
case 2347:
case 3348:
case 1615:
case 2406:
case 3281:
case 807:
case 3405:
case 1574:
case 1175:
case 3263:
case 832:
case 1365:
case 848:
case 1556:
case 1116:
case 2908:
case 3598:
case 3277:
case 3375:
case 2161:
case 3530:
case 1036:
case 1502:
case 2114:
case 850:
case 1710:
case 2090:
case 2936:
case 1461:
case 1544:
case 3948:
case 1377:
case 2461:
case 2508:
case 3589:
case 1251:
case 4019:
case 2746:
case 1650:
case 3048:
case 2665:
case 1875:
case 725:
case 3921:
case 1775:
case 2004:
case 3528:
case 3392:
case 2621:
case 2177:
case 2391:
case 1877:
case 2071:
case 627:
case 3091:
case 3156:
case 999:
case 1347:
case 4067:
case 3301:
case 3739:
case 840:
case 996:
case 382:
case 2957:
case 2991:
case 3220:
case 1110:
case 3218:
case 1267:
case 1512:
case 751:
case 970:
case 1140:
case 1221:
case 167:
case 3390:
case 740:
case 2558:
case 2572:
case 1777:
case 3468:
case 1370:
case 3045:
case 3238:
case 3151:
case 3743:
case 3304:
case 31:
case 995:
case 3109:
case 581:
case 1891:
case 946:
case 2873:
case 650:
case 981:
case 3216:
case 2547:
case 3183:
case 3396:
case 1585:
case 803:
case 345:
case 1015:
case 958:
case 1764:
case 2253:
case 3100:
case 654:
case 1259:
case 2016:
case 518:
case 3673:
case 1070:
case 2277:
case 1079:
case 1780:
case 2817:
case 555:
case 1483:
case 937:
case 1384:
case 2924:
case 1451:
case 1342:
case 1178:
case 312:
case 2799:
case 2911:
case 75:
case 3529:
case 1557:
case 930:
case 839:
case 2529:
case 1336:
case 559:
case 3979:
case 3424:
case 3150:
case 2106:
case 3485:
case 2261:
case 3891:
case 2190:
case 965:
case 2072:
case 3196:
case 123:
case 1808:
case 3889:
case 3671:
case 1734:
case 1646:
case 1607:
case 1407:
case 1698:
case 942:
case 3883:
case 3107:
case 621:
case 1060:
case 3504:
case 2654:
case 3017:
case 1387:
case 4027:
case 1951:
case 193:
case 4043:
case 684:
case 3561:
case 2486:
case 1856:
case 3560:
case 2725:
case 2724:
case 70:
case 3295:
case 2454:
case 2141:
case 3710:
case 224:
case 2297:
case 3856:
case 2777:
case 260:
case 3328:
case 91:
case 920:
case 51:
case 1610:
case 3190:
case 2426:
case 797:
case 2687:
case 2515:
case 335:
case 3186:
case 3747:
case 1731:
case 3534:
case 2317:
case 2028:
case 4044:
case 1689:
case 3024:
case 558:
case 3108:
case 1908:
case 3944:
case 2998:
case 210:
case 1324:
case 4007:
case 1360:
case 3005:
case 1573:
case 2550:
case 1141:
case 3289:
case 2452:
case 626:
case 3972:
case 22:
case 2519:
case 393:
case 2695:
case 2174:
case 3133:
case 2487:
case 231:
case 3539:
case 1160:
case 1867:
case 2551:
case 1441:
case 1666:
case 2415:
case 760:
case 3557:
case 3629:
case 3553:
case 1605:
case 731:
case 2744:
case 1002:
case 2254:
case 286:
case 692:
case 2433:
case 3920:
case 977:
case 1833:
case 3879:
case 4016:
case 2476:
case 978:
case 250:
case 1902:
case 1302:
case 1933:
case 1108:
case 3521:
case 1794:
case 1325:
case 531:
case 1828:
case 1785:
case 1892:
case 458:
case 1432:
case 125:
case 307:
case 3821:
case 3959:
case 2657:
case 2594:
case 2590:
case 3723:
case 1088:
case 3769:
case 3372:
case 2051:
case 290:
case 1392:
case 1067:
case 3985:
case 357:
case 3497:
case 2728:
case 1664:
case 2818:
case 3098:
case 2719:
case 3022:
case 2453:
case 3104:
case 3580:
case 3960:
case 2168:
case 3359:
case 2849:
case 39:
case 238:
case 2576:
case 2942:
case 1859:
case 1145:
case 1361:
case 2418:
case 2830:
case 3573:
case 3275:
case 2989:
case 2475:
case 734:
case 2052:
case 276:
case 2180:
case 960:
case 3101:
case 3381:
case 2082:
case 1588:
case 1864:
case 17:
case 339:
case 2169:
case 1963:
case 1751:
case 1131:
case 29:
case 2436:
case 2083:
case 2472:
case 2907:
case 3916:
case 2404:
case 1298:
case 2766:
case 889:
case 1217:
case 407:
case 2194:
case 2960:
case 3645:
case 1724:
case 2326:
case 136:
case 3806:
case 2220:
case 3051:
case 2755:
case 3057:
case 3119:
case 4059:
case 1758:
case 3947:
case 2420:
case 4054:
case 690:
case 334:
case 931:
case 3980:
case 3736:
case 3080:
case 2610:
case 3662:
case 3274:
case 617:
case 2182:
case 2741:
case 3881:
case 3540:
case 1397:
case 2569:
case 2679:
case 661:
case 1493:
case 966:
case 2483:
case 3457:
case 161:
case 1553:
case 1119:
case 2853:
case 450:
case 1883:
case 1685:
case 1092:
case 955:
case 4082:
case 3386:
case 249:
case 346:
case 1430:
case 3118:
case 2383:
case 468:
case 3692:
case 2102:
case 1344:
case 2414:
case 1394:
case 939:
case 2704:
case 204:
case 3373:
case 3180:
case 2635:
case 3922:
case 2617:
case 665:
case 3699:
case 3872:
case 1098:
case 1572:
case 111:
case 2837:
case 2132:
case 2876:
case 3859:
case 2858:
case 940:
case 2715:
case 2274:
case 2530:
case 2202:
case 3273:
case 40:
case 1208:
case 1028:
case 1295:
case 662:
case 71:
case 3474:
case 467:
case 187:
case 3432:
case 1870:
case 3429:
case 4041:
case 3445:
case 1294:
case 2737:
case 1005:
case 2760:
case 3262:
case 3909:
case 2680:
case 545:
case 718:
case 135:
case 3837:
case 2318:
case 158:
case 985:
case 1164:
case 1560:
case 870:
case 1895:
case 2331:
case 2893:
case 1209:
case 1340:
case 3472:
case 3914:
case 90:
case 285:
case 1091:
case 1591:
case 3014:
case 2423:
case 3550:
case 421:
case 2079:
case 2803:
case 1010:
case 3689:
case 2916:
case 2010:
case 61:
case 1014:
case 2543:
case 2029:
case 3860:
case 1459:
case 752:
case 1778:
case 885:
case 2504:
case 56:
case 2171:
case 389:
case 1567:
case 3246:
case 3556:
case 3623:
case 2597:
case 2534:
case 638:
case 580:
case 12:
case 3884:
case 1769:
case 2344:
case 390:
case 2273:
case 1216:
case 1979:
case 3260:
case 3713:
case 1307:
case 1843:
case 602:
case 3634:
case 2252:
case 2063:
case 77:
case 997:
case 192:
case 1546:
case 104:
case 956:
case 2206:
case 2112:
case 2982:
case 3794:
case 2257:
case 2706:
case 800:
case 2608:
case 2961:
case 95:
case 3664:
case 2226:
case 469:
case 426:
case 795:
case 1286:
case 3394:
case 3988:
case 1526:
case 2403:
case 1405:
case 3925:
case 552:
case 3302:
case 1421:
case 1771:
case 1187:
case 3717:
case 4050:
case 536:
case 3290:
case 1803:
case 2012:
case 1431:
case 1831:
case 827:
case 1680:
case 1804:
case 1901:
case 1149:
case 954:
case 46:
case 1183:
case 2713:
case 3249:
case 1389:
case 3826:
case 2067:
case 32:
case 2585:
case 3423:
case 2808:
case 3940:
case 2361:
case 1351:
case 618:
case 1705:
case 3949:
case 3892:
case 232:
case 2208:
case 1508:
case 2048:
case 4086:
case 257:
case 1263:
case 1479:
case 142:
case 2025:
case 328:
case 3414:
case 3622:
case 2153:
case 3926:
case 291:
case 184:
case 2498:
case 471:
case 3656:
case 1026:
case 2061:
case 1616:
case 528:
case 2432:
case 1390:
case 1782:
case 2824:
case 1660:
case 3880:
case 2127:
case 962:
case 2017:
case 3030:
case 3330:
case 1958:
case 3864:
case 282:
case 1978:
case 780:
case 1744:
case 1465:
case 4080:
case 1436:
case 1058:
case 2571:
case 3364:
case 1812:
case 790:
case 2708:
case 707:
case 1762:
case 47:
case 3336:
case 2583:
case 101:
case 38:
case 628:
case 330:
case 3128:
case 906:
case 2767:
case 2615:
case 709:
case 1559:
case 3799:
case 157:
case 1057:
case 239:
case 3520:
case 1654:
case 4039:
case 1584:
case 1643:
case 3171:
case 2365:
case 3945:
case 289:
case 932:
case 1695:
case 1598:
case 1199:
case 3126:
case 1193:
case 3654:
case 4010:
case 2561:
case 1090:
case 1105:
case 1238:
case 530:
case 1284:
case 1168:
case 1941:
case 8:
case 459:
case 266:
case 1188:
case 353:
case 3340:
case 128:
case 2371:
case 3229:
case 2897:
case 2458:
case 2124:
case 636:
case 2563:
case 3870:
case 2089:
case 1855:
case 0:
case 3714:
case 783:
case 3630:
case 737:
case 1186:
case 2130:
case 1841:
case 666:
case 3494:
case 1862:
case 508:
case 1363:
case 1807:
case 1358:
case 3551:
case 2040:
case 360:
case 1256:
case 1663:
case 2471:
case 4009:
case 3592:
case 98:
case 874:
case 2952:
case 3049:
case 2236:
case 1065:
case 568:
case 2070:
case 253:
case 2974:
case 519:
case 1604:
case 2643:
case 3316:
case 3642:
case 1922:
case 223:
case 2825:
case 3707:
case 2815:
case 4073:
case 1897:
case 2242:
case 243:
case 2092:
case 1129:
case 340:
case 1636:
case 27:
case 976:
case 3297:
case 432:
case 3991:
case 2776:
case 1197:
case 2399:
case 2826:
case 2489:
case 2364:
case 3161:
case 3025:
case 3851:
case 809:
case 2456:
case 3226:
case 3177:
case 1386:
case 1893:
case 1980:
case 2626:
case 3734:
case 1845:
case 3199:
case 1673:
case 2058:
case 913:
case 3378:
case 1261:
case 1470:
case 2196:
case 3221:
case 159:
case 819:
case 3309:
case 3857:
case 2642:
case 2339:
case 2862:
case 2324:
case 209:
case 2427:
case 2269:
case 550:
case 921:
case 1476:
case 585:
case 1974:
case 3619:
case 1120:
case 3939:
case 1505:
case 2899:
case 3155:
case 3778:
case 2670:
case 2263:
case 3679:
case 916:
case 4:
case 2005:
case 858:
case 3655:
case 2111:
case 3930:
case 3966:
case 1101:
case 1950:
case 3696:
case 4047:
case 386:
case 3625:
case 2342:
case 2167:
case 861:
case 137:
case 4005:
case 2906:
case 3538:
case 1545:
case 814:
case 1885:
case 3828:
case 2900:
case 573:
case 4013:
case 381:
case 642:
case 152:
case 2500:
case 685:
case 2398:
case 59:
case 4046:
case 1678:
case 1626:
case 631:
case 1917:
case 2441:
case 50:
case 2868:
case 1810:
case 3935:
case 1703:
case 3084:
case 3965:
case 3029:
case 2509:
case 1949:
case 2376:
case 1781:
case 3907:
case 3236:
case 126:
case 1790:
case 1477:
case 2781:
case 675:
case 2447:
case 2205:
case 3389:
case 2933:
case 964:
case 3535:
case 2749:
case 4029:
case 1739:
case 2829:
case 2602:
case 349:
case 2986:
case 3065:
case 1198:
case 1943:
case 3759:
case 418:
case 2782:
case 2915:
case 456:
case 1166:
case 1717:
case 2000:
case 20:
case 2268:
case 3709:
case 1381:
case 3657:
case 2290:
case 3158:
case 1416:
case 1708:
case 3054:
case 2474:
case 2748:
case 2019:
case 3733:
case 613:
case 1510:
case 1225:
case 72:
case 2267:
case 3731:
case 1174:
case 567:
case 3954:
case 112:
case 234:
case 2081:
case 1800:
case 2034:
case 1143:
case 2524:
case 2322:
case 3377:
case 2464:
case 1025:
case 377:
case 576:
case 4014:
case 2446:
case 2606:
case 4012:
case 3241:
case 3269:
case 2560:
case 1458:
case 434:
case 1029:
case 477:
case 1240:
case 2313:
case 792:
case 2956:
case 1931:
case 2060:
case 2165:
case 89:
case 2155:
case 2979:
case 3766:
case 141:
case 2656:
case 109:
case 683:
case 3361:
case 3640:
case 3651:
case 1914:
case 2091:
case 202:
case 544:
case 410:
case 2138:
case 670:
case 2889:
case 3214:
case 2658:
case 3604:
case 52:
case 1255:
case 398:
case 3342:
case 2491:
case 896:
case 3712:
case 1419:
case 2022:
case 1665:
case 138:
case 3660:
case 492:
case 2185:
case 616:
case 2756:
case 3379:
case 2934:
case 2239:
case 3587:
case 2637:
case 2787:
case 1335:
case 3565:
case 1113:
case 13:
case 1102:
case 509:
case 2710:
case 1779:
case 3784:
case 1173:
case 2810:
case 3845:
case 2301:
case 1981:
case 759:
case 2528:
case 922:
case 4057:
case 1592:
case 1388:
case 3471:
case 2272:
case 641:
case 2088:
case 1571:
case 2735:
case 3667:
case 3170:
case 2021:
case 3484:
case 3256:
case 2976:
case 427:
case 3910:
case 1721:
case 341:
case 3374:
case 2521:
case 1730:
case 304:
case 3989:
case 1725:
case 1169:
case 1453:
case 275:
case 2997:
case 866:
case 3319:
case 4002:
case 959:
case 2122:
case 380:
case 1575:
case 3404:
case 2407:
case 603:
case 284:
case 1042:
case 2925:
case 1863:
case 324:
case 1618:
case 582:
case 1621:
case 4071:
case 2276:
case 2802:
case 3728:
case 2320:
case 63:
case 1202:
case 1278:
case 717:
case 1796:
case 1310:
case 358:
case 2965:
case 3499:
case 1657:
case 3563:
case 1580:
case 3306:
case 735:
case 3147:
case 945:
case 2721:
case 480:
case 82:
case 2367:
case 1838:
case 3635:
case 3964:
case 2098:
case 4028:
case 1521:
case 900:
case 449:
case 2173:
case 3862:
case 1332:
case 453:
case 1236:
case 311:
case 799:
case 1700:
case 1711:
case 261:
case 2913:
case 1542:
case 2844:
case 3416:
case 2903:
case 2377:
case 566:
case 1017:
case 2408:
case 1561:
case 205:
case 1993:
case 4051:
case 491:
case 2233:
case 26:
case 3217:
case 483:
case 4008:
case 2053:
case 470:
case 1597:
case 3073:
case 2310:
case 2298:
case 2975:
case 2289:
case 3882:
case 3044:
case 2354:
case 1391:
case 134:
case 212:
case 813:
case 2466:
case 4076:
case 181:
case 1410:
case 1999:
case 1283:
case 4037:
case 2264:
case 2374:
case 269:
case 2678:
case 943:
case 3371:
case 3682:
case 3950:
case 3741:
case 1061:
case 3513:
case 179:
case 713:
case 2385:
case 1328:
case 1776:
case 1961:
case 825:
case 2878:
case 2284:
case 3975:
case 2379:
case 2703:
case 3367:
case 1686:
case 2613:
case 3129:
case 1281:
case 3139:
case 694:
case 1478:
case 2809:
case 2445:
case 2740:
case 168:
case 3409:
case 94:
case 494:
case 359:
case 778:
case 227:
case 2146:
case 3075:
case 2618:
case 1629:
case 1929:
case 2163:
case 3788:
case 2564:
case 1201:
case 2329:
case 1968:
case 1320:
case 2690:
case 3938:
case 3144:
case 868:
case 2:
case 2493:
case 2086:
case 442:
case 2144:
case 2096:
case 1082:
case 1136:
case 887:
case 1:
case 395:
case 1276:
case 117:
case 1191:
case 1684:
case 2525:
case 131:
case 2624:
case 1714:
case 1911:
case 3568:
case 3767:
case 473:
case 1104:
case 865:
case 575:
case 1519:
case 3887:
case 1748:
case 1681:
case 2125:
case 3382:
case 3079:
case 3412:
case 2663:
case 3125:
case 3555:
case 1913:
case 2556:
case 1624:
case 527:
case 2158:
case 2396:
case 3182:
case 2888:
case 3814:
case 2147:
case 1578:
case 1444:
case 1190:
case 2281:
case 2282:
case 1737:
case 1272:
case 2510:
case 789:
case 1323:
case 3431:
case 2785:
case 3735:
case 926:
case 194:
case 3267:
case 3189:
case 1965:
case 3779:
case 3449:
case 2424:
case 3572:
case 183:
case 1662:
case 3775:
case 2850:
case 2909:
case 2644:
case 2851:
case 1445:
case 2397:
case 3312:
case 3507:
case 2535:
case 2722:
case 944:
case 1214:
case 635:
case 1801:
case 3476:
case 3251:
case 1315:
case 1427:
case 1599:
case 2922:
case 258:
case 915:
case 1134:
case 822:
case 2118:
case 219:
case 2490:
case 2235:
case 7:
case 2994:
case 387:
case 3813:
case 3296:
case 1953:
case 2497:
case 3594:
case 122:
case 2460:
case 2481:
case 2620:
case 3195:
case 991:
case 371:
case 3835:
case 1675:
case 1628:
case 2306:
case 3721:
case 2611:
case 1415:
case 2172:
case 2109:
case 3021:
case 3844:
case 3083:
case 3681:
case 2794:
case 2240:
case 1258:
case 3663:
case 2103:
case 394:
case 323:
case 3166:
case 2296:
case 3327:
case 3800:
case 3697:
case 1111:
case 2353:
case 1716:
case 3861:
case 3811:
case 3335:
case 4024:
case 583:
case 3307:
case 3240:
case 119:
case 1827:
case 2786:
case 1076:
case 3936:
case 2217:
case 4074:
case 2874:
case 3919:
case 1613:
case 3633:
case 2488:
case 570:
case 1231:
case 1860:
case 3688:
case 1277:
case 2685:
case 1330:
case 1994:
case 2511:
case 4058:
case 611:
case 292:
case 2793:
case 2156:
case 361:
case 1971:
case 3661:
case 2539:
case 3466:
case 600:
case 3627:
case 397:
case 3738:
case 824:
case 2248:
case 2919:
case 1011:
case 2831:
case 714:
case 3878:
case 3208:
case 1203:
case 3001:
case 3134:
case 2201:
case 1406:
case 1850:
case 3102:
case 3636:
case 1514:
case 1223:
case 676:
case 3792:
case 1200:
case 2636:
case 3124:
case 4048:
case 1447:
case 1805:
case 3994:
case 2338:
case 3524:
case 1715:
case 1753:
case 2117:
case 2676:
case 3893:
case 2902:
case 608:
case 1467:
case 222:
case 1819:
case 1889:
case 1784:
case 1669:
case 226:
case 1854:
case 2183:
case 3942:
case 3043:
case 3318:
case 3488:
case 414:
case 2968:
case 979:
case 3207:
case 245:
case 3571:
case 3742:
case 2739:
case 1331:
case 3727:
case 4077:
case 2393:
case 220:
case 3842:
case 1024:
case 3978:
case 1440:
case 3751:
case 3184:
case 2750:
case 1742:
case 3665:
case 3399:
case 3958:
case 3087:
case 2834:
case 385:
case 3292:
case 247:
case 1907:
case 2692:
case 2457:
case 3205:
case 2030:
case 384:
case 1035:
case 2801:
case 2116:
case 439:
case 2360:
case 2958:
case 3748:
case 1094:
case 3172:
case 378:
case 2795:
case 3971:
case 3518:
case 3487:
case 1923:
case 25:
case 3427:
case 1759:
case 3810:
case 362:
case 3459:
case 1171:
case 3046:
case 2442:
case 405:
case 1697:
case 3700:
case 3913:
case 876:
case 598:
case 1569:
case 4069:
case 431:
case 3037:
case 3242:
case 1438:
case 164:
case 3368:
case 2285:
case 888:
case 2107:
case 1146:
case 3917:
case 2609:
case 2210:
case 3337:
case 2699:
case 259:
case 1793:
case 1701:
case 1127:
case 3232:
case 3285:
case 2835:
case 2162:
case 1824:
case 3162:
case 3829:
case 586:
case 130:
case 2237:
case 770:
case 791:
case 3441:
case 577:
case 254:
case 373:
case 3345:
case 2883:
case 3350:
case 2230:
case 3194:
case 3094:
case 2518:
case 1181:
case 3310:
case 1720:
case 834:
case 3833:
case 3865:
case 2198:
case 974:
case 242:
case 2305:
case 301:
case 1619:
case 606:
case 1904:
case 1998:
case 1260:
case 2160:
case 1464:
case 1051:
case 2962:
case 4045:
case 2512:
case 1987:
case 2575:
case 875:
case 2221:
case 710:
case 2299:
case 58:
case 4070:
case 1285:
case 1957:
case 3353:
case 2712:
case 2013:
case 3676:
case 648:
case 1403:
case 2757:
case 1995:
case 4084:
case 3477:
case 1550:
case 2049:
case 3998:
case 2434:
case 1648:
case 2973:
case 507:
case 3283:
case 3322:
case 2502:
case 3495:
case 1555:
case 297:
case 3525:
case 1879:
case 3095:
case 3103:
case 1297:
case 2677:
case 2578:
case 3927:
case 3287:
case 3116:
case 417:
case 891:
case 2375:
case 4078:
case 4036:
case 879:
case 1114:
case 2026:
case 1402:
case 2212:
case 3702:
case 2031:
case 2896:
case 2857:
case 678:
case 252:
case 3038:
case 2154:
case 2691:
case 3650:
case 3545:
case 677:
case 1185:
case 1484:
case 441:
case 2485:
case 3990:
case 5:
case 3331:
case 4032:
case 4091:
case 313:
case 2660:
case 3890:
case 1668:
case 10:
case 746:
case 2745:
case 1354:
case 1280:
case 2764:
case 3113:
case 2522:
case 669:
case 3072:
case 667:
case 2482:
case 537:
case 2266:
case 4089:
case 1679:
case 3370:
case 543:
case 2178:
case 3105:
case 208:
case 2355:
case 2229:
case 3503:
case 1126:
case 877:
case 541:
case 564:
case 2967:
case 81:
case 2775:
case 4088:
case 2443:
case 1268:
case 2345:
case 415:
case 55:
case 2314:
case 864:
case 907:
case 871:
case 1081:
case 1945:
case 3785:
case 1096:
case 1487:
case 175:
case 3311:
case 3582:
case 3805:
case 845:
case 3146:
case 1632:
case 3440:
case 1001:
case 18:
case 3579:
case 2231:
case 160:
case 3470:
case 140:
case 2332:
case 1956:
case 1501:
case 165:
case 3500:
case 739:
case 2251:
case 1408:
case 741:
case 810:
case 2763:
case 1075:
case 1044:
case 3850:
case 3905:
case 1311:
case 1699:
case 872:
case 2027:
case 3995:
case 3435:
case 3388:
case 3066:
case 2421:
case 3547:
case 557:
case 2496:
case 1176:
case 1647:
case 612:
case 3706:
case 859:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1655874001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,];
var gg_b = "1655874001/";

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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
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
