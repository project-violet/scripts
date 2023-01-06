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
case 3162:
case 3135:
case 1715:
case 3738:
case 152:
case 3903:
case 3644:
case 1032:
case 975:
case 2913:
case 2818:
case 1693:
case 1855:
case 3932:
case 577:
case 3129:
case 2776:
case 624:
case 1918:
case 702:
case 1792:
case 3645:
case 2828:
case 489:
case 3952:
case 3779:
case 2432:
case 2152:
case 2680:
case 272:
case 2033:
case 1155:
case 1384:
case 3700:
case 2246:
case 1691:
case 1396:
case 784:
case 2704:
case 1207:
case 3943:
case 1840:
case 3378:
case 1914:
case 2239:
case 2199:
case 1023:
case 2750:
case 740:
case 1351:
case 3272:
case 1953:
case 654:
case 2498:
case 2731:
case 2952:
case 3306:
case 383:
case 2646:
case 2842:
case 3587:
case 4000:
case 3069:
case 420:
case 1615:
case 3666:
case 1109:
case 2184:
case 2204:
case 2404:
case 3610:
case 2040:
case 1571:
case 3353:
case 939:
case 581:
case 3225:
case 3418:
case 1152:
case 3886:
case 3434:
case 3543:
case 4026:
case 988:
case 1021:
case 1057:
case 501:
case 4019:
case 1174:
case 1883:
case 2180:
case 2288:
case 3048:
case 316:
case 3522:
case 1655:
case 21:
case 3879:
case 457:
case 677:
case 805:
case 1884:
case 173:
case 47:
case 3068:
case 2956:
case 1499:
case 586:
case 3598:
case 4066:
case 603:
case 1320:
case 3370:
case 3874:
case 3670:
case 4013:
case 3652:
case 2312:
case 3508:
case 685:
case 1316:
case 3383:
case 46:
case 742:
case 2030:
case 2255:
case 2603:
case 2456:
case 3371:
case 2153:
case 513:
case 1368:
case 733:
case 3297:
case 3572:
case 2168:
case 2730:
case 2315:
case 2571:
case 2549:
case 2438:
case 3414:
case 2994:
case 39:
case 2129:
case 1881:
case 2423:
case 3677:
case 2670:
case 1762:
case 2039:
case 438:
case 879:
case 4057:
case 2668:
case 390:
case 1170:
case 23:
case 2645:
case 1716:
case 908:
case 883:
case 1052:
case 963:
case 3016:
case 3188:
case 840:
case 1865:
case 2568:
case 1487:
case 2137:
case 3071:
case 1448:
case 2405:
case 2149:
case 1928:
case 606:
case 2654:
case 2732:
case 1899:
case 1208:
case 309:
case 1695:
case 1926:
case 4075:
case 949:
case 3650:
case 3075:
case 2295:
case 1831:
case 4043:
case 2686:
case 101:
case 1078:
case 3659:
case 53:
case 2075:
case 9:
case 209:
case 2469:
case 858:
case 326:
case 1288:
case 2470:
case 4023:
case 3481:
case 3410:
case 2582:
case 1302:
case 1328:
case 2381:
case 3027:
case 3569:
case 3772:
case 2037:
case 2835:
case 1045:
case 4070:
case 1521:
case 2907:
case 3794:
case 1798:
case 653:
case 63:
case 3046:
case 3282:
case 2478:
case 748:
case 1852:
case 3070:
case 2087:
case 3309:
case 2955:
case 1661:
case 3676:
case 1824:
case 1154:
case 2325:
case 3413:
case 108:
case 2357:
case 3649:
case 3148:
case 86:
case 905:
case 717:
case 3474:
case 102:
case 236:
case 1648:
case 2618:
case 728:
case 2489:
case 4017:
case 2574:
case 487:
case 3465:
case 3519:
case 2355:
case 3989:
case 1621:
case 1677:
case 218:
case 1998:
case 1790:
case 3219:
case 1294:
case 3782:
case 2682:
case 3447:
case 2544:
case 3848:
case 1676:
case 1945:
case 497:
case 2151:
case 2601:
case 3929:
case 1209:
case 356:
case 3858:
case 1896:
case 2557:
case 273:
case 3688:
case 2715:
case 4090:
case 1187:
case 391:
case 1546:
case 3000:
case 410:
case 3798:
case 4035:
case 1627:
case 3202:
case 2398:
case 2162:
case 1313:
case 1572:
case 3811:
case 1575:
case 3443:
case 990:
case 1460:
case 3973:
case 1768:
case 2495:
case 3609:
case 4085:
case 2480:
case 3362:
case 3253:
case 3151:
case 888:
case 1563:
case 2556:
case 220:
case 1166:
case 3324:
case 2660:
case 1982:
case 4038:
case 3992:
case 1106:
case 1886:
case 2196:
case 3037:
case 3275:
case 3633:
case 1468:
case 66:
case 2759:
case 722:
case 2434:
case 3009:
case 2948:
case 3997:
case 1418:
case 3204:
case 953:
case 2519:
case 600:
case 3822:
case 3419:
case 2220:
case 3176:
case 3862:
case 2111:
case 3706:
case 348:
case 1743:
case 154:
case 2491:
case 3638:
case 3506:
case 1350:
case 2206:
case 2530:
case 2366:
case 1401:
case 4011:
case 177:
case 3313:
case 370:
case 3509:
case 3571:
case 1906:
case 2525:
case 3851:
case 1088:
case 2387:
case 2135:
case 1591:
case 1515:
case 3741:
case 2851:
case 997:
case 1647:
case 783:
case 3495:
case 14:
case 469:
case 455:
case 266:
case 935:
case 3251:
case 1054:
case 3735:
case 792:
case 3756:
case 3450:
case 1196:
case 663:
case 3234:
case 1041:
case 3787:
case 876:
case 1399:
case 4009:
case 298:
case 122:
case 3814:
case 4016:
case 3831:
case 991:
case 602:
case 656:
case 613:
case 3795:
case 2935:
case 2892:
case 3381:
case 3461:
case 2260:
case 103:
case 3617:
case 4030:
case 1276:
case 833:
case 869:
case 1096:
case 2995:
case 454:
case 2125:
case 2685:
case 3420:
case 2693:
case 2183:
case 1224:
case 871:
case 4088:
case 24:
case 3763:
case 3020:
case 3723:
case 3685:
case 1755:
case 2066:
case 3270:
case 175:
case 3280:
case 1931:
case 416:
case 1592:
case 767:
case 1501:
case 3231:
case 2298:
case 741:
case 2446:
case 2451:
case 1425:
case 611:
case 4039:
case 1327:
case 3710:
case 1581:
case 3859:
case 305:
case 254:
case 2484:
case 2565:
case 2777:
case 927:
case 1658:
case 2771:
case 36:
case 1444:
case 2889:
case 84:
case 809:
case 1199:
case 4093:
case 1398:
case 3896:
case 3770:
case 1124:
case 650:
case 3469:
case 1266:
case 2195:
case 2007:
case 3246:
case 1878:
case 716:
case 1348:
case 40:
case 2624:
case 670:
case 286:
case 1684:
case 3850:
case 598:
case 1599:
case 2770:
case 2899:
case 2559:
case 165:
case 3636:
case 1672:
case 553:
case 957:
case 4047:
case 428:
case 1837:
case 1747:
case 3956:
case 1008:
case 1119:
case 421:
case 2537:
case 3967:
case 1333:
case 578:
case 1596:
case 509:
case 2347:
case 920:
case 419:
case 1534:
case 1660:
case 414:
case 1481:
case 1780:
case 3743:
case 2681:
case 3261:
case 1268:
case 1733:
case 2613:
case 2167:
case 1018:
case 2540:
case 2878:
case 3981:
case 2829:
case 636:
case 729:
case 2231:
case 481:
case 1426:
case 2166:
case 495:
case 1538:
case 2945:
case 575:
case 3673:
case 2721:
case 2518:
case 3744:
case 778:
case 1354:
case 3033:
case 222:
case 797:
case 2690:
case 2374:
case 2203:
case 3:
case 3846:
case 167:
case 3066:
case 3854:
case 2822:
case 3593:
case 830:
case 1083:
case 1765:
case 2847:
case 2881:
case 1746:
case 3196:
case 1145:
case 1169:
case 1656:
case 1722:
case 3209:
case 3881:
case 1071:
case 1213:
case 4024:
case 1957:
case 675:
case 1938:
case 2486:
case 3083:
case 3581:
case 4028:
case 1971:
case 1587:
case 3667:
case 3944:
case 3566:
case 2136:
case 588:
case 3126:
case 857:
case 535:
case 1251:
case 2388:
case 3142:
case 2043:
case 505:
case 1737:
case 3357:
case 2383:
case 802:
case 1301:
case 4004:
case 1898:
case 3724:
case 1708:
case 1271:
case 1417:
case 2578:
case 2752:
case 3249:
case 3834:
case 2931:
case 3812:
case 3490:
case 2174:
case 2543:
case 3985:
case 1758:
case 1652:
case 3589:
case 3499:
case 4079:
case 542:
case 1449:
case 3105:
case 1156:
case 3935:
case 662:
case 2442:
case 1244:
case 2925:
case 3448:
case 1435:
case 281:
case 1718:
case 3507:
case 3532:
case 3096:
case 135:
case 192:
case 1959:
case 940:
case 49:
case 923:
case 3658:
case 3689:
case 3501:
case 120:
case 1203:
case 1411:
case 3866:
case 1186:
case 3153:
case 2373:
case 3905:
case 2727:
case 432:
case 2297:
case 1431:
case 3487:
case 2397:
case 843:
case 253:
case 916:
case 1665:
case 1137:
case 1317:
case 2461:
case 3223:
case 2467:
case 1582:
case 1793:
case 3235:
case 3575:
case 476:
case 58:
case 159:
case 1164:
case 693:
case 2363:
case 2059:
case 19:
case 2914:
case 556:
case 1486:
case 3702:
case 753:
case 3595:
case 3980:
case 2228:
case 1310:
case 1104:
case 3971:
case 3001:
case 1447:
case 2772:
case 3800:
case 3505:
case 158:
case 1176:
case 2950:
case 2781:
case 417:
case 1714:
case 1612:
case 2349:
case 1889:
case 374:
case 3028:
case 1736:
case 2330:
case 1850:
case 2365:
case 689:
case 2131:
case 1593:
case 2343:
case 340:
case 3635:
case 3091:
case 1319:
case 2761:
case 3166:
case 1573:
case 1087:
case 839:
case 3346:
case 3538:
case 3946:
case 1511:
case 452:
case 3479:
case 3521:
case 2923:
case 3829:
case 571:
case 3158:
case 2286:
case 872:
case 2726:
case 2375:
case 42:
case 3467:
case 2796:
case 2475:
case 2249:
case 4032:
case 844:
case 3523:
case 3853:
case 758:
case 4048:
case 3056:
case 1713:
case 2242:
case 1094:
case 3960:
case 1916:
case 2124:
case 1993:
case 1079:
case 2024:
case 634:
case 168:
case 1535:
case 3035:
case 2769:
case 2795:
case 971:
case 2341:
case 180:
case 615:
case 1671:
case 3541:
case 3086:
case 3475:
case 1192:
case 1092:
case 3839:
case 1791:
case 1774:
case 1946:
case 2431:
case 134:
case 926:
case 3491:
case 837:
case 2896:
case 1073:
case 2477:
case 817:
case 547:
case 2883:
case 2871:
case 3526:
case 1325:
case 2940:
case 2748:
case 333:
case 2440:
case 2676:
case 2555:
case 2933:
case 585:
case 1299:
case 2014:
case 460:
case 672:
case 3220:
case 3817:
case 2608:
case 782:
case 548:
case 1802:
case 1851:
case 1778:
case 3466:
case 3766:
case 3292:
case 1033:
case 3586:
case 3928:
case 246:
case 574:
case 2130:
case 1451:
case 3372:
case 1231:
case 2900:
case 3618:
case 388:
case 3904:
case 1624:
case 2384:
case 759:
case 2449:
case 1888:
case 261:
case 1820:
case 2020:
case 3392:
case 259:
case 2323:
case 2695:
case 1044:
case 1861:
case 3379:
case 2650:
case 404:
case 828:
case 1915:
case 1952:
case 1620:
case 2517:
case 2583:
case 238:
case 2867:
case 2352:
case 2157:
case 3913:
case 3640:
case 3970:
case 3925:
case 1464:
case 1062:
case 2011:
case 1566:
case 966:
case 407:
case 699:
case 1010:
case 1148:
case 352:
case 2389:
case 631:
case 2641:
case 2607:
case 3979:
case 3005:
case 790:
case 3615:
case 1729:
case 132:
case 255:
case 930:
case 406:
case 1394:
case 3987:
case 1072:
case 2243:
case 1607:
case 2501:
case 4002:
case 1314:
case 1885:
case 826:
case 7:
case 1291:
case 1785:
case 15:
case 3190:
case 3616:
case 31:
case 1001:
case 925:
case 153:
case 11:
case 1393:
case 2743:
case 1149:
case 2606:
case 3104:
case 1387:
case 3561:
case 1753:
case 2420:
case 516:
case 2285:
case 82:
case 3260:
case 1651:
case 3168:
case 549:
case 166:
case 3737:
case 1360:
case 1623:
case 3950:
case 3555:
case 1136:
case 234:
case 1973:
case 2707:
case 151:
case 2902:
case 2973:
case 972:
case 2980:
case 632:
case 787:
case 2875:
case 2395:
case 3733:
case 936:
case 2887:
case 3665:
case 2418:
case 1089:
case 1748:
case 174:
case 3344:
case 3760:
case 2820:
case 2965:
case 1773:
case 2150:
case 285:
case 3160:
case 2963:
case 1876:
case 2419:
case 500:
case 3660:
case 3290:
case 2783:
case 763:
case 1262:
case 1670:
case 3456:
case 974:
case 1799:
case 4007:
case 3796:
case 3655:
case 534:
case 3119:
case 951:
case 3551:
case 3059:
case 2263:
case 1488:
case 1543:
case 1059:
case 652:
case 1416:
case 1130:
case 3792:
case 3720:
case 3442:
case 1994:
case 1277:
case 3518:
case 3015:
case 3888:
case 2447:
case 2735:
case 4078:
case 1236:
case 3031:
case 1375:
case 891:
case 3018:
case 3386:
case 674:
case 2547:
case 1585:
case 1666:
case 3227:
case 3473:
case 2986:
case 1894:
case 2081:
case 2103:
case 601:
case 2534:
case 2724:
case 3325:
case 1510:
case 463:
case 525:
case 1829:
case 382:
case 3021:
case 2597:
case 2001:
case 3590:
case 1494:
case 2448:
case 3163:
case 3471:
case 194:
case 294:
case 3549:
case 1131:
case 1081:
case 1725:
case 81:
case 3294:
case 1749:
case 3804:
case 3118:
case 71:
case 465:
case 240:
case 3576:
case 2042:
case 2832:
case 562:
case 172:
case 324:
case 3563:
case 873:
case 1126:
case 2958:
case 1204:
case 2278:
case 106:
case 1605:
case 125:
case 2554:
case 2402:
case 3927:
case 1517:
case 155:
case 1022:
case 2675:
case 3562:
case 94:
case 1724:
case 3039:
case 3254:
case 2814:
case 2991:
case 678:
case 3871:
case 2805:
case 541:
case 2427:
case 2380:
case 2532:
case 651:
case 3283:
case 91:
case 3976:
case 1342:
case 184:
case 112:
case 520:
case 2816:
case 2877:
case 3778:
case 3464:
case 1483:
case 243:
case 1424:
case 761:
case 307:
case 59:
case 2493:
case 681:
case 1911:
case 910:
case 3564:
case 714:
case 2736:
case 773:
case 1781:
case 2886:
case 451:
case 947:
case 2201:
case 93:
case 819:
case 1002:
case 418:
case 3594:
case 2118:
case 1439:
case 3110:
case 1960:
case 3462:
case 1012:
case 1954:
case 1249:
case 3180:
case 1500:
case 2524:
case 3242:
case 2292:
case 985:
case 1966:
case 2492:
case 1446:
case 3739:
case 962:
case 1315:
case 3139:
case 3692:
case 3535:
case 1280:
case 2105:
case 150:
case 1456:
case 928:
case 1825:
case 3278:
case 2483:
case 2648:
case 2843:
case 560:
case 2015:
case 2844:
case 2367:
case 1807:
case 3424:
case 136:
case 3614:
case 2063:
case 4082:
case 3138:
case 1115:
case 2115:
case 3210:
case 3512:
case 853:
case 3040:
case 3930:
case 931:
case 2161:
case 1845:
case 2775:
case 2299:
case 2967:
case 3776:
case 2526:
case 1947:
case 3993:
case 3936:
case 1838:
case 2336:
case 3111:
case 447:
case 2321:
case 884:
case 3488:
case 1808:
case 3797:
case 1682:
case 2257:
case 1353:
case 1767:
case 2947:
case 1293:
case 1473:
case 3783:
case 855:
case 2861:
case 3019:
case 1622:
case 2067:
case 3189:
case 3784:
case 1248:
case 1856:
case 221:
case 2219:
case 1246:
case 2942:
case 3922:
case 38:
case 1930:
case 3730:
case 1557:
case 3611:
case 462:
case 3440:
case 3517:
case 302:
case 755:
case 1839:
case 377:
case 2723:
case 415:
case 2122:
case 889:
case 754:
case 1560:
case 1895:
case 1419:
case 3951:
case 338:
case 3065:
case 379:
case 1082:
case 1034:
case 2671:
case 1403:
case 3600:
case 2289:
case 1545:
case 969:
case 3042:
case 1390:
case 2939:
case 2099:
case 3624:
case 3828:
case 3920:
case 627:
case 2870:
case 1950:
case 3263:
case 1619:
case 3999:
case 3994:
case 4036:
case 2629:
case 1772:
case 589:
case 1061:
case 3036:
case 3901:
case 3237:
case 3899:
case 1614:
case 2339:
case 3191:
case 1309:
case 893:
case 3687:
case 2187:
case 472:
case 2128:
case 2439:
case 2455:
case 3108:
case 3715:
case 3407:
case 3311:
case 1542:
case 1138:
case 363:
case 1343:
case 4022:
case 450:
case 2733:
case 1420:
case 1873:
case 2756:
case 3315:
case 1553:
case 1177:
case 1680:
case 145:
case 2833:
case 1910:
case 2728:
case 1028:
case 756:
case 461:
case 2798:
case 2983:
case 341:
case 2268:
case 2192:
case 3727:
case 532:
case 2399:
case 3597:
case 2509:
case 1409:
case 616:
case 3257:
case 523:
case 1161:
case 1544:
case 44:
case 50:
case 822:
case 2598:
case 2864:
case 1934:
case 284:
case 1040:
case 3030:
case 3530:
case 3578:
case 1432:
case 762:
case 2342:
case 229:
case 3422:
case 3255:
case 1190:
case 3995:
case 1134:
case 3393:
case 1471:
case 1955:
case 2334:
case 2609:
case 1366:
case 3511:
case 2258:
case 2880:
case 1233:
case 375:
case 1633:
case 3341:
case 1230:
case 3216:
case 2424:
case 48:
case 3136:
case 264:
case 2738:
case 100:
case 2926:
case 2595:
case 3230:
case 4018:
case 1241:
case 3457:
case 3214:
case 1063:
case 2390:
case 1269:
case 1700:
case 198:
case 3761:
case 1992:
case 2189:
case 179:
case 638:
case 2637:
case 785:
case 2092:
case 2551:
case 1036:
case 2127:
case 984:
case 1549:
case 1989:
case 644:
case 3377:
case 2570:
case 2372:
case 230:
case 1304:
case 290:
case 65:
case 2612:
case 323:
case 2579:
case 2626:
case 1687:
case 3808:
case 517:
case 2163:
case 3243:
case 2876:
case 2113:
case 2232:
case 2895:
case 3908:
case 2541:
case 2368:
case 2616:
case 3437:
case 1297:
case 2797:
case 1710:
case 1197:
case 3634:
case 1817:
case 137:
case 315:
case 269:
case 3752:
case 113:
case 3584:
case 2533:
case 1031:
case 1429:
case 2849:
case 2865:
case 1552:
case 1060:
case 1200:
case 866:
case 2437:
case 2146:
case 718:
case 3084:
case 2751:
case 596:
case 1352:
case 76:
case 2806:
case 2628:
case 3472:
case 1810:
case 1467:
case 922:
case 2729:
case 967:
case 609:
case 1811:
case 3536:
case 3218:
case 2218:
case 3602:
case 703:
case 1296:
case 1990:
case 400:
case 3267:
case 880:
case 3632:
case 1450:
case 2908:
case 2038:
case 2500:
case 3252:
case 92:
case 2677:
case 3969:
case 3900:
case 1211:
case 1006:
case 2188:
case 3064:
case 3833:
case 3296:
case 914:
case 2725:
case 3008:
case 1367:
case 1422:
case 2916:
case 2817:
case 3742:
case 731:
case 249:
case 4021:
case 1528:
case 1285:
case 3199:
case 791:
case 2885:
case 3073:
case 1972:
case 2687:
case 3363:
case 3079:
case 4064:
case 1981:
case 361:
case 3390:
case 242:
case 2623:
case 473:
case 2897:
case 2324:
case 2941:
case 2193:
case 1696:
case 745:
case 3206:
case 427:
case 3080:
case 412:
case 471:
case 1812:
case 4089:
case 3340:
case 2778:
case 992:
case 2003:
case 3771:
case 212:
case 1524:
case 1441:
case 695:
case 649:
case 4092:
case 2552:
case 3966:
case 3880:
case 1727:
case 639:
case 2722:
case 3179:
case 2527:
case 288:
case 1423:
case 3557:
case 0:
case 1787:
case 1111:
case 1306:
case 3657:
case 2132:
case 1469:
case 2807:
case 2134:
case 313:
case 2850:
case 3317:
case 1988:
case 3236:
case 3884:
case 477:
case 3697:
case 1212:
case 35:
case 1723:
case 1936:
case 3497:
case 1642:
case 393:
case 1816:
case 1103:
case 2310:
case 3050:
case 3387:
case 2683:
case 986:
case 1978:
case 1475:
case 789:
case 228:
case 3953:
case 2558:
case 2515:
case 2412:
case 1868:
case 217:
case 1150:
case 2209:
case 1751:
case 1153:
case 133:
case 3396:
case 3774:
case 4044:
case 1880:
case 2322:
case 1014:
case 4034:
case 860:
case 1264:
case 976:
case 3540:
case 1363:
case 706:
case 470:
case 3061:
case 376:
case 4077:
case 1834:
case 849:
case 3678:
case 2462:
case 3128:
case 2403:
case 491:
case 2435:
case 948:
case 2678:
case 475:
case 3641:
case 1646:
case 1253:
case 2140:
case 812:
case 3705:
case 3567:
case 1307:
case 121:
case 1963:
case 2096:
case 3375:
case 3972:
case 1443:
case 4040:
case 2178:
case 687:
case 850:
case 807:
case 367:
case 2643:
case 2369:
case 3113:
case 1452:
case 1026:
case 3622:
case 1519:
case 946:
case 1459:
case 1003:
case 781:
case 813:
case 3873:
case 1662:
case 989:
case 864:
case 3821:
case 2044:
case 799:
case 727:
case 2394:
case 357:
case 708:
case 3400:
case 2809:
case 449:
case 2253:
case 169:
case 719:
case 2272:
case 1956:
case 1730:
case 483:
case 216:
case 743:
case 2605:
case 3452:
case 669:
case 2464:
case 68:
case 2984:
case 3256:
case 2426:
case 934:
case 2787:
case 3074:
case 1193:
case 2542:
case 2874:
case 2536:
case 911:
case 435:
case 3305:
case 1105:
case 2046:
case 3537:
case 2535:
case 494:
case 3338:
case 142:
case 3827:
case 3391:
case 1490:
case 1786:
case 641:
case 147:
case 1463:
case 1388:
case 2659:
case 739:
case 3864:
case 1410:
case 2308:
case 3115:
case 2487:
case 3307:
case 2764:
case 3818:
case 3328:
case 1035:
case 2241:
case 3996:
case 1711:
case 2261:
case 1064:
case 1942:
case 3895:
case 1323:
case 1985:
case 1242:
case 1198:
case 1986:
case 2922:
case 1385:
case 3520:
case 552:
case 1867:
case 2815:
case 2911:
case 2507:
case 3832:
case 3455:
case 2589:
case 1970:
case 90:
case 1770:
case 3140:
case 1738:
case 353:
case 1586:
case 2709:
case 2271:
case 2156:
case 3288:
case 4095:
case 604:
case 492:
case 3183:
case 2306:
case 852:
case 2406:
case 1675:
case 2494:
case 1841:
case 1961:
case 2170:
case 564:
case 2801:
case 3240:
case 2938:
case 1958:
case 544:
case 3045:
case 657:
case 104:
case 2396:
case 355:
case 146:
case 3878:
case 3339:
case 1219:
case 3102:
case 114:
case 139:
case 1237:
case 1461:
case 75:
case 3258:
case 3762:
case 1579:
case 2247:
case 2050:
case 2057:
case 3187:
case 354:
case 2550:
case 306:
case 1492:
case 3213:
case 2512:
case 3430:
case 2391:
case 973:
case 2794:
case 2630:
case 2954:
case 2214:
case 3767:
case 1465:
case 537:
case 149:
case 1531:
case 1932:
case 3751:
case 2936:
case 291:
case 3988:
case 322:
case 2872:
case 771:
case 359:
case 3013:
case 1295:
case 912:
case 829:
case 1589:
case 1019:
case 3647:
case 2998:
case 1039:
case 1311:
case 235:
case 2093:
case 2784:
case 1606:
case 3654:
case 1344:
case 2266:
case 2035:
case 2108:
case 3837:
case 280:
case 3664:
case 1688:
case 3116:
case 2497:
case 945:
case 244:
case 1227:
case 2499:
case 579:
case 423:
case 2706:
case 1509:
case 1086:
case 2052:
case 3725:
case 232:
case 3680:
case 1222:
case 2531:
case 621:
case 3570:
case 720:
case 1525:
case 3125:
case 3376:
case 3515:
case 2760:
case 2845:
case 710:
case 691:
case 3133:
case 2856:
case 1858:
case 1255:
case 764:
case 1940:
case 3917:
case 2633:
case 1053:
case 2216:
case 2436:
case 1628:
case 3802:
case 1265:
case 1654:
case 262:
case 2080:
case 4094:
case 1847:
case 3855:
case 2746:
case 2863:
case 3300:
case 1757:
case 798:
case 899:
case 1965:
case 2225:
case 619:
case 2657:
case 2119:
case 3266:
case 834:
case 1015:
case 3902:
case 1407:
case 2577:
case 901:
case 801:
case 4053:
case 1616:
case 3408:
case 1163:
case 3299:
case 555:
case 1108:
case 2545:
case 2048:
case 2411:
case 29:
case 2200:
case 3335:
case 3382:
case 2793:
case 1000:
case 3714:
case 1178:
case 3122:
case 1415:
case 3159:
case 1226:
case 3211:
case 3606:
case 2051:
case 1027:
case 1181:
case 1922:
case 1434:
case 3444:
case 533:
case 3323:
case 808:
case 188:
case 3022:
case 1559:
case 337:
case 550:
case 4041:
case 599:
case 3803:
case 1157:
case 3062:
case 3374:
case 344:
case 366:
case 3545:
case 2811:
case 3809:
case 2825:
case 2191:
case 2957:
case 2026:
case 2055:
case 1853:
case 1826:
case 107:
case 697:
case 3088:
case 3359:
case 181:
case 3388:
case 1903:
case 1143:
case 3394:
case 210:
case 647:
case 3836:
case 327:
case 1256:
case 3842:
case 1371:
case 707:
case 3768:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1672974001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,];
var gg_b = "1672974001/";

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
