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
case 4015:
case 1442:
case 672:
case 761:
case 3539:
case 1289:
case 890:
case 3911:
case 1370:
case 2971:
case 1749:
case 2336:
case 1232:
case 305:
case 3482:
case 2587:
case 340:
case 4064:
case 2517:
case 813:
case 3990:
case 1224:
case 3277:
case 1716:
case 3776:
case 3735:
case 2792:
case 2591:
case 2153:
case 372:
case 733:
case 1802:
case 1275:
case 1623:
case 3891:
case 3983:
case 2766:
case 1429:
case 1911:
case 3437:
case 2624:
case 3094:
case 1094:
case 1750:
case 2148:
case 1960:
case 220:
case 3099:
case 3873:
case 4021:
case 2903:
case 3653:
case 3299:
case 2535:
case 2163:
case 3854:
case 2472:
case 486:
case 1835:
case 518:
case 1850:
case 560:
case 3754:
case 3782:
case 2119:
case 1338:
case 3268:
case 1797:
case 3772:
case 2174:
case 3923:
case 1176:
case 3008:
case 3869:
case 2275:
case 3979:
case 2406:
case 22:
case 430:
case 773:
case 2024:
case 1265:
case 878:
case 3136:
case 3665:
case 2143:
case 2702:
case 2538:
case 1156:
case 3732:
case 3298:
case 1579:
case 985:
case 3477:
case 498:
case 3965:
case 1660:
case 2527:
case 2886:
case 38:
case 3734:
case 1386:
case 2138:
case 1084:
case 2085:
case 1200:
case 3811:
case 1133:
case 3863:
case 1446:
case 2867:
case 3308:
case 3820:
case 3582:
case 1789:
case 2354:
case 2058:
case 2942:
case 2523:
case 1237:
case 713:
case 1128:
case 2805:
case 1560:
case 364:
case 995:
case 925:
case 2307:
case 131:
case 144:
case 2790:
case 2051:
case 3427:
case 270:
case 962:
case 3508:
case 3698:
case 830:
case 3103:
case 561:
case 3498:
case 3361:
case 3619:
case 780:
case 2670:
case 1889:
case 4035:
case 2546:
case 3552:
case 3269:
case 2418:
case 164:
case 820:
case 600:
case 513:
case 3781:
case 1340:
case 1320:
case 160:
case 3898:
case 599:
case 2760:
case 31:
case 3722:
case 239:
case 2316:
case 3007:
case 483:
case 1584:
case 187:
case 3354:
case 3602:
case 2910:
case 1559:
case 2207:
case 973:
case 1280:
case 4033:
case 3450:
case 4084:
case 1049:
case 2578:
case 1196:
case 175:
case 3238:
case 2572:
case 319:
case 26:
case 1508:
case 4063:
case 3313:
case 2052:
case 94:
case 998:
case 1922:
case 3884:
case 3968:
case 3279:
case 303:
case 1318:
case 897:
case 2866:
case 702:
case 2428:
case 746:
case 2096:
case 161:
case 866:
case 3604:
case 2332:
case 292:
case 1495:
case 2493:
case 1775:
case 3888:
case 2222:
case 2414:
case 3461:
case 3871:
case 3988:
case 33:
case 3910:
case 3766:
case 2302:
case 1735:
case 2396:
case 3419:
case 2017:
case 3706:
case 574:
case 238:
case 3342:
case 2053:
case 3994:
case 3204:
case 1484:
case 2646:
case 2658:
case 2995:
case 1591:
case 102:
case 1466:
case 1917:
case 1123:
case 3532:
case 2240:
case 2635:
case 2094:
case 3270:
case 3559:
case 3561:
case 3178:
case 3111:
case 3333:
case 2795:
case 3890:
case 1481:
case 855:
case 1478:
case 571:
case 2223:
case 501:
case 1941:
case 204:
case 1119:
case 1526:
case 4036:
case 721:
case 447:
case 1978:
case 2615:
case 563:
case 1607:
case 1570:
case 1914:
case 2812:
case 2852:
case 3643:
case 3339:
case 2021:
case 1509:
case 1848:
case 135:
case 1620:
case 377:
case 2452:
case 2804:
case 1398:
case 2073:
case 1425:
case 1261:
case 2147:
case 2507:
case 284:
case 892:
case 278:
case 2351:
case 3505:
case 3703:
case 1103:
case 1209:
case 2341:
case 3302:
case 1106:
case 237:
case 1965:
case 454:
case 1141:
case 657:
case 8:
case 774:
case 2345:
case 929:
case 802:
case 660:
case 4001:
case 2304:
case 2070:
case 623:
case 2643:
case 602:
case 3657:
case 394:
case 2312:
case 3077:
case 1486:
case 2762:
case 272:
case 2940:
case 1992:
case 740:
case 4041:
case 121:
case 521:
case 918:
case 1075:
case 395:
case 2600:
case 3589:
case 46:
case 177:
case 1763:
case 2606:
case 400:
case 2550:
case 3616:
case 1879:
case 4006:
case 1947:
case 1080:
case 1105:
case 3129:
case 2103:
case 1563:
case 315:
case 734:
case 3773:
case 1897:
case 1616:
case 1771:
case 1102:
case 2740:
case 1849:
case 3071:
case 3672:
case 2612:
case 3723:
case 859:
case 4037:
case 3819:
case 2565:
case 116:
case 3690:
case 2566:
case 262:
case 145:
case 754:
case 2712:
case 877:
case 1360:
case 2691:
case 1577:
case 2563:
case 2911:
case 3609:
case 2453:
case 3699:
case 3777:
case 1670:
case 665:
case 4050:
case 1273:
case 3087:
case 1260:
case 720:
case 1765:
case 2863:
case 3900:
case 1540:
case 2229:
case 2465:
case 3229:
case 68:
case 3300:
case 4043:
case 2121:
case 1351:
case 3153:
case 1457:
case 21:
case 2300:
case 1057:
case 3301:
case 3700:
case 581:
case 3422:
case 158:
case 379:
case 1721:
case 3975:
case 2622:
case 2276:
case 1705:
case 3954:
case 4038:
case 2156:
case 2649:
case 1043:
case 3289:
case 3622:
case 254:
case 1675:
case 790:
case 2487:
case 2757:
case 3043:
case 1769:
case 1804:
case 4030:
case 3288:
case 1248:
case 3084:
case 1581:
case 2441:
case 3765:
case 1989:
case 2248:
case 698:
case 2630:
case 3310:
case 1489:
case 2120:
case 3163:
case 3886:
case 3399:
case 2434:
case 1826:
case 287:
case 119:
case 2751:
case 2611:
case 3408:
case 2849:
case 4017:
case 2502:
case 484:
case 3899:
case 2675:
case 1372:
case 342:
case 2319:
case 895:
case 120:
case 73:
case 1091:
case 52:
case 907:
case 202:
case 3879:
case 2547:
case 916:
case 406:
case 2099:
case 1110:
case 2209:
case 700:
case 1061:
case 3175:
case 760:
case 1599:
case 2912:
case 1882:
case 537:
case 3169:
case 1575:
case 953:
case 1829:
case 1214:
case 3992:
case 2391:
case 2330:
case 3018:
case 2237:
case 3211:
case 2548:
case 1752:
case 3729:
case 1405:
case 1078:
case 3617:
case 652:
case 1807:
case 2516:
case 2002:
case 3682:
case 692:
case 42:
case 2923:
case 2436:
case 419:
case 245:
case 1051:
case 2798:
case 1450:
case 47:
case 3124:
case 3805:
case 3525:
case 803:
case 2344:
case 307:
case 4066:
case 1145:
case 1878:
case 1428:
case 2951:
case 3060:
case 2438:
case 2926:
case 750:
case 675:
case 3263:
case 3470:
case 358:
case 3535:
case 1264:
case 3369:
case 2894:
case 438:
case 233:
case 3314:
case 968:
case 678:
case 1645:
case 3274:
case 2521:
case 3843:
case 1251:
case 3775:
case 3050:
case 2467:
case 2918:
case 875:
case 1447:
case 3981:
case 1186:
case 3971:
case 1993:
case 831:
case 1630:
case 3573:
case 3976:
case 2045:
case 2390:
case 838:
case 1673:
case 34:
case 2806:
case 4070:
case 3550:
case 296:
case 1994:
case 2097:
case 1041:
case 1746:
case 2825:
case 3377:
case 1548:
case 1629:
case 3262:
case 418:
case 1696:
case 3751:
case 4053:
case 4013:
case 1032:
case 1529:
case 3941:
case 1055:
case 1048:
case 1284:
case 1929:
case 3625:
case 1408:
case 1893:
case 2251:
case 3168:
case 3001:
case 1472:
case 1501:
case 1497:
case 3076:
case 1855:
case 1536:
case 1916:
case 2941:
case 2290:
case 471:
case 1713:
case 3128:
case 1367:
case 2661:
case 2010:
case 2041:
case 3785:
case 1473:
case 1693:
case 2601:
case 1315:
case 1923:
case 656:
case 1307:
case 3006:
case 2033:
case 1081:
case 3292:
case 3709:
case 840:
case 3220:
case 2407:
case 3249:
case 2409:
case 3926:
case 3401:
case 331:
case 3447:
case 1490:
case 3085:
case 1586:
case 1115:
case 337:
case 3780:
case 2574:
case 2693:
case 2695:
case 2408:
case 984:
case 190:
case 2113:
case 944:
case 4091:
case 2662:
case 3474:
case 2403:
case 2014:
case 1700:
case 2627:
case 2975:
case 787:
case 218:
case 3856:
case 4032:
case 3543:
case 661:
case 464:
case 3917:
case 373:
case 1657:
case 1827:
case 343:
case 3039:
case 366:
case 1004:
case 3739:
case 2177:
case 1517:
case 2544:
case 3095:
case 2269:
case 152:
case 3922:
case 2370:
case 2303:
case 566:
case 640:
case 3086:
case 461:
case 1073:
case 1788:
case 99:
case 107:
case 2625:
case 1832:
case 2126:
case 628:
case 2734:
case 1222:
case 2265:
case 1656:
case 2311:
case 1107:
case 523:
case 2803:
case 2920:
case 3763:
case 3414:
case 3380:
case 2858:
case 3042:
case 1725:
case 66:
case 771:
case 2477:
case 1220:
case 194:
case 3996:
case 586:
case 2066:
case 3367:
case 2356:
case 3157:
case 2966:
case 2948:
case 2062:
case 1690:
case 2165:
case 429:
case 857:
case 728:
case 1228:
case 2595:
case 2819:
case 3258:
case 3497:
case 3710:
case 924:
case 2137:
case 1327:
case 534:
case 369:
case 1708:
case 3360:
case 2247:
case 2897:
case 1770:
case 719:
case 1652:
case 184:
case 3715:
case 2875:
case 3460:
case 2139:
case 3875:
case 2814:
case 3595:
case 927:
case 2671:
case 126:
case 1023:
case 3771:
case 1116:
case 491:
case 1142:
case 2542:
case 434:
case 2293:
case 3631:
case 41:
case 150:
case 1247:
case 1594:
case 4007:
case 2236:
case 2219:
case 1122:
case 2709:
case 3464:
case 3737:
case 3674:
case 3362:
case 643:
case 1972:
case 2603:
case 1612:
case 3214:
case 4008:
case 1973:
case 948:
case 1474:
case 1479:
case 3592:
case 1487:
case 3804:
case 1503:
case 1243:
case 671:
case 153:
case 2999:
case 302:
case 3726:
case 2225:
case 1137:
case 2108:
case 288:
case 1825:
case 3743:
case 476:
case 827:
case 2686:
case 3037:
case 2614:
case 4040:
case 977:
case 2173:
case 65:
case 3469:
case 346:
case 2703:
case 397:
case 913:
case 2571:
case 310:
case 3334:
case 849:
case 2519:
case 1255:
case 2776:
case 2708:
case 2490:
case 1821:
case 2079:
case 3666:
case 4014:
case 2605:
case 3877:
case 3583:
case 2593:
case 3676:
case 3488:
case 3764:
case 3391:
case 1635:
case 577:
case 409:
case 2101:
case 2091:
case 1052:
case 2726:
case 2508:
case 3480:
case 614:
case 684:
case 2696:
case 110:
case 1838:
case 2865:
case 2946:
case 2455:
case 2647:
case 251:
case 630:
case 1193:
case 2186:
case 3650:
case 1077:
case 1918:
case 776:
case 1772:
case 1621:
case 2761:
case 3847:
case 1190:
case 1846:
case 2688:
case 2446:
case 2704:
case 79:
case 3489:
case 3389:
case 957:
case 1783:
case 2809:
case 2518:
case 140:
case 1622:
case 1587:
case 2398:
case 3521:
case 3793:
case 247:
case 3507:
case 2898:
case 2245:
case 341:
case 812:
case 3303:
case 285:
case 3189:
case 2817:
case 2127:
case 2368:
case 3162:
case 2943:
case 1588:
case 1042:
case 3712:
case 517:
case 1881:
case 2451:
case 1267:
case 39:
case 814:
case 2682:
case 979:
case 1805:
case 3436:
case 420:
case 2387:
case 11:
case 2170:
case 716:
case 3420:
case 1104:
case 203:
case 4058:
case 466:
case 1341:
case 2575:
case 2786:
case 3908:
case 1836:
case 2366:
case 936:
case 552:
case 2856:
case 198:
case 2924:
case 1985:
case 2668:
case 3928:
case 3407:
case 1233:
case 1589:
case 4085:
case 547:
case 1353:
case 1163:
case 2086:
case 1528:
case 775:
case 1981:
case 980:
case 1114:
case 981:
case 80:
case 2706:
case 1611:
case 297:
case 3335:
case 3499:
case 1530:
case 917:
case 45:
case 3216:
case 241:
case 3404:
case 1409:
case 3624:
case 833:
case 2423:
case 942:
case 1942:
case 976:
case 3828:
case 2573:
case 1557:
case 2651:
case 2235:
case 1172:
case 280:
case 1395:
case 2745:
case 1118:
case 1356:
case 920:
case 1784:
case 3745:
case 2973:
case 481:
case 2129:
case 673:
case 1625:
case 1365:
case 3102:
case 1305:
case 388:
case 1019:
case 3580:
case 1332:
case 3035:
case 91:
case 1498:
case 844:
case 3445:
case 2599:
case 3409:
case 112:
case 32:
case 3548:
case 1541:
case 3056:
case 2259:
case 444:
case 3632:
case 3770:
case 3502:
case 1953:
case 1313:
case 1921:
case 295:
case 1087:
case 1310:
case 440:
case 752:
case 1455:
case 1211:
case 2166:
case 2136:
case 439:
case 779:
case 3378:
case 2581:
case 2594:
case 1524:
case 1430:
case 3195:
case 3606:
case 2029:
case 1787:
case 1034:
case 3146:
case 390:
case 1609:
case 587:
case 2860:
case 3359:
case 2543:
case 1990:
case 3181:
case 874:
case 2463:
case 3808:
case 683:
case 2747:
case 2992:
case 3115:
case 2808:
case 4022:
case 2413:
case 867:
case 3518:
case 2972:
case 155:
case 1865:
case 1135:
case 368:
case 1423:
case 2539:
case 3809:
case 171:
case 1098:
case 2218:
case 1189:
case 1294:
case 3068:
case 1900:
case 3273:
case 1259:
case 544:
case 3967:
case 1304:
case 266:
case 3528:
case 83:
case 3916:
case 3885:
case 1840:
case 662:
case 3679:
case 2753:
case 3228:
case 4089:
case 2914:
case 753:
case 3984:
case 789:
case 1988:
case 3192:
case 2793:
case 1534:
case 3742:
case 3961:
case 1516:
case 474:
case 1154:
case 3889:
case 4077:
case 2128:
case 2499:
case 3430:
case 59:
case 1520:
case 2297:
case 2505:
case 106:
case 2394:
case 3668:
case 2404:
case 1177:
case 446:
case 1839:
case 452:
case 1513:
case 1997:
case 982:
case 2087:
case 4081:
case 3394:
case 749:
case 2298:
case 2038:
case 3515:
case 2386:
case 3738:
case 2717:
case 2159:
case 2023:
case 352:
case 2621:
case 4076:
case 3255:
case 1790:
case 633:
case 2532:
case 76:
case 612:
case 1949:
case 2346:
case 2836:
case 1552:
case 2315:
case 3614:
case 3887:
case 3213:
case 2607:
case 2367:
case 383:
case 493:
case 3636:
case 611:
case 2501:
case 1040:
case 1785:
case 1011:
case 3915:
case 313:
case 796:
case 2337:
case 257:
case 100:
case 3959:
case 3005:
case 538:
case 3752:
case 1299:
case 2737:
case 3381:
case 4042:
case 2584:
case 28:
case 3516:
case 751:
case 1216:
case 1699:
case 492:
case 1687:
case 580:
case 2025:
case 298:
case 2185:
case 2284:
case 679:
case 1024:
case 2492:
case 3623:
case 275:
case 3251:
case 1925:
case 1363:
case 290:
case 3423:
case 4020:
case 1471:
case 872:
case 1710:
case 1432:
case 3977:
case 1859:
case 2749:
case 2084:
case 2442:
case 2500:
case 2036:
case 1130:
case 2169:
case 3137:
case 594:
case 2123:
case 2264:
case 223:
case 1650:
case 3347:
case 2039:
case 3116:
case 353:
case 1688:
case 3630:
case 502:
case 891:
case 269:
case 2383:
case 443:
case 3803:
case 2353:
case 2310:
case 3366:
case 3656:
case 3705:
case 114:
case 870:
case 416:
case 380:
case 3217:
case 590:
case 3791:
case 1864:
case 769:
case 1053:
case 1038:
case 4057:
case 724:
case 1144:
case 3082:
case 1519:
case 208:
case 2133:
case 3412:
case 888:
case 2730:
case 2329:
case 3787:
case 265:
case 1008:
case 1126:
case 3400:
case 2400:
case 3494:
case 1866:
case 2829:
case 2131:
case 1651:
case 1748:
case 525:
case 828:
case 2816:
case 3861:
case 105:
case 3894:
case 1148:
case 618:
case 2117:
case 3669:
case 2478:
case 344:
case 4073:
case 1522:
case 2950:
case 1096:
case 3921:
case 3403:
case 3864:
case 3147:
case 1254:
case 1909:
case 1527:
case 1602:
case 3571:
case 1085:
case 2077:
case 1083:
case 3718:
case 737:
case 2896:
case 3753:
case 1510:
case 1885:
case 3091:
case 2533:
case 1712:
case 3909:
case 1271:
case 3338:
case 4044:
case 2489:
case 2721:
case 2483:
case 2318:
case 2697:
case 1624:
case 3974:
case 714:
case 1857:
case 2382:
case 333:
case 2362:
case 2078:
case 1234:
case 2644:
case 321:
case 494:
case 95:
case 2116:
case 3451:
case 1244:
case 879:
case 2260:
case 1420:
case 3324:
case 2844:
case 3607:
case 843:
case 2827:
case 1793:
case 3540:
case 1120:
case 3155:
case 1800:
case 3527:
case 1195:
case 1001:
case 960:
case 871:
case 92:
case 3615:
case 3930:
case 3433:
case 1896:
case 978:
case 232:
case 299:
case 2279:
case 3969:
case 2859:
case 1671:
case 674:
case 2154:
case 2494:
case 3:
case 2526:
case 3850:
case 3824:
case 1758:
case 2610:
case 3524:
case 3629:
case 3240:
case 3757:
case 2639:
case 2189:
case 2001:
case 125:
case 242:
case 363:
case 3560:
case 4002:
case 2597:
case 548:
case 345:
case 3293:
case 2727:
case 685:
case 1180:
case 3512:
case 2540:
case 2075:
case 1187:
case 1464:
case 1506:
case 3870:
case 2878:
case 2289:
case 1883:
case 407:
case 3132:
case 617:
case 3282:
case 324:
case 1505:
case 1303:
case 1554:
case 3857:
case 3459:
case 1966:
case 1811:
case 455:
case 2433:
case 3520:
case 1592:
case 2874:
case 1326:
case 294:
case 610:
case 2959:
case 1205:
case 3807:
case 1285:
case 863:
case 3271:
case 2280:
case 1580:
case 2098:
case 457:
case 181:
case 817:
case 472:
case 2325:
case 2797:
case 2234:
case 2301:
case 49:
case 881:
case 225:
case 1249:
case 1418:
case 641:
case 2388:
case 2111:
case 213:
case 185:
case 84:
case 1433:
case 3704:
case 3475:
case 1956:
case 974:
case 2335:
case 1345:
case 1822:
case 4047:
case 1160:
case 2220:
case 3517:
case 1015:
case 1593:
case 2987:
case 3720:
case 1402:
case 3689:
case 1217:
case 1996:
case 1894:
case 975:
case 1376:
case 398:
case 3371:
case 1681:
case 3411:
case 1270:
case 1907:
case 136:
case 1194:
case 88:
case 12:
case 1368:
case 2268:
case 1982:
case 339:
case 467:
case 694:
case 1175:
case 567:
case 1507:
case 2676:
case 1733:
case 2663:
case 3881:
case 3686:
case 1795:
case 215:
case 2978:
case 2848:
case 1379:
case 1951:
case 708:
case 1701:
case 3051:
case 3295:
case 3795:
case 510:
case 256:
case 3235:
case 704:
case 3949:
case 93:
case 898:
case 1958:
case 2560:
case 3651:
case 115:
case 3956:
case 2722:
case 3237:
case 3234:
case 1605:
case 3937:
case 1820:
case 267:
case 2589:
case 2496:
case 2007:
case 710:
case 1995:
case 1558:
case 1328:
case 1314:
case 2604:
case 4061:
case 1876:
case 3166:
case 1421:
case 75:
case 2482:
case 2689:
case 485:
case 3205:
case 651:
case 2216:
case 3509:
case 512:
case 2755:
case 2620:
case 589:
case 1549:
case 381:
case 3441:
case 1615:
case 146:
case 1074:
case 1364:
case 3840:
case 2384:
case 1221:
case 3373:
case 3176:
case 1963:
case 2006:
case 2724:
case 2534:
case 412:
case 4045:
case 3784:
case 1240:
case 2945:
case 1964:
case 2411:
case 2654:
case 127:
case 423:
case 0:
case 3564:
case 3684:
case 2204:
case 3164:
case 2296:
case 1782:
case 3972:
case 2421:
case 2457:
case 1924:
case 1817:
case 2666:
case 1571:
case 3577:
case 1723:
case 1380:
case 919:
case 2843:
case 3047:
case 588:
case 2640:
case 2996:
case 3935:
case 2617:
case 1203:
case 13:
case 699:
case 1595:
case 2009:
case 1798:
case 2427:
case 2161:
case 2215:
case 2323:
case 3126:
case 1399:
case 755:
case 3036:
case 3713:
case 3638:
case 856:
case 3944:
case 3392:
case 3134:
case 414:
case 2985:
case 3934:
case 226:
case 3398:
case 2837:
case 1157:
case 3687:
case 718:
case 2122:
case 2850:
case 958:
case 1806:
case 2146:
case 1161:
case 681:
case 1059:
case 997:
case 2333:
case 2763:
case 1013:
case 531:
case 4019:
case 2746:
case 2609:
case 1718:
case 3023:
case 103:
case 759:
case 3639:
case 3611:
case 837:
case 3202:
case 956:
case 1403:
case 477:
case 983:
case 1298:
case 758:
case 96:
case 1258:
case 2054:
case 603:
case 1082:
case 2954:
case 2226:
case 2032:
case 816:
case 332:
case 1325:
case 151:
case 3740:
case 2714:
case 3648:
case 375:
case 2471:
case 1532:
case 2305:
case 3027:
case 1219:
case 1470:
case 3386:
case 1724:
case 3510:
case 947:
case 1183:
case 1204:
case 1572:
case 1385:
case 3557:
case 654:
case 3987:
case 933:
case 2181:
case 162:
case 2818:
case 1547:
case 3257:
case 951:
case 222:
case 2374:
case 3641:
case 2628:
case 1449:
case 3816:
case 3073:
case 3198:
case 2655:
case 53:
case 2495:
case 3009:
case 3801:
case 546:
case 2257:
case 2994:
case 2480:
case 1037:
case 2088:
case 3033:
case 1159:
case 3425:
case 132:
case 1613:
case 1600:
case 2656:
case 1888:
case 163:
case 536:
case 1461:
case 3844:
case 3158:
case 990:
case 2417:
case 3368:
case 3815:
case 824:
case 1010:
case 3749:
case 876:
case 1352:
case 2151:
case 2981:
case 1862:
case 2464:
case 1253:
case 281:
case 3768:
case 3160:
case 3390:
case 1349:
case 1088:
case 1603:
case 4003:
case 4039:
case 1031:
case 2592:
case 224:
case 1238:
case 2752:
case 3260:
case 703:
case 801:
case 939:
case 670:
case 4055:
case 1542:
case 782:
case 626:
case 3138:
case 2919:
case 108:
case 647:
case 2401:
case 2953:
case 732:
case 2602:
case 3762:
case 3349:
case 595:
case 3337:
case 387:
case 4075:
case 2358:
case 371:
case 24:
case 2870:
case 1127:
case 954:
case 3075:
case 915:
case 2710:
case 1943:
case 994:
case 3363:
case 335:
case 1436:
case 3185:
case 235:
case 2525:
case 3627:
case 2190:
case 1178:
case 2679:
case 3799:
case 932:
case 1984:
case 1277:
case 90:
case 3081:
case 2241:
case 101:
case 2206:
case 2342:
case 3490:
case 1239:
case 2244:
case 3120:
case 3633:
case 2347:
case 1828:
case 1639:
case 3478:
case 2764:
case 3003:
case 2576:
case 417:
case 2939:
case 183:
case 3066:
case 154:
case 123:
case 3506:
case 3566:
case 2510:
case 2426:
case 3973:
case 3838:
case 3370:
case 2256:
case 308:
case 1050:
case 157:
case 3226:
case 249:
case 553:
case 1400:
case 3224:
case 3196:
case 448:
case 1281:
case 1971:
case 557:
case 756:
case 2055:
case 1779:
case 722:
case 2767:
case 1686:
case 3750:
case 625:
case 3943:
case 745:
case 4092:
case 3248:
case 839:
case 687:
case 3837:
case 964:
case 676:
case 1573:
case 15:
case 2840:
case 3343:
case 3496:
case 3605:
case 2363:
case 3065:
case 1677:
case 3621:
case 2:
case 999:
case 914:
case 1371:
case 4087:
case 130:
case 3487:
case 2425:
case 3122:
case 3325:
case 3223:
case 3239:
case 3855:
case 2586:
case 2028:
case 2060:
case 1297:
case 650:
case 317:
case 3384:
case 3187:
case 3026:
case 2167:
case 1886:
case 2965:
case 508:
case 1818:
case 1638:
case 3982:
case 4088:
case 3421:
case 1567:
case 428:
case 2718:
case 435:
case 693:
case 1873:
case 189:
case 2437:
case 2288:
case 3424:
case 1890:
case 2687:
case 1269:
case 3434:
case 3835:
case 1337:
case 2974:
case 1665:
case 2331:
case 2083:
case 2842:
case 2935:
case 378:
case 823:
case 3388:
case 810:
case 900:
case 1663:
case 1738:
case 1223:
case 3452:
case 606:
case 2278:
case 48:
case 701:
case 3259:
case 3774:
case 1422:
case 2067:
case 3929:
case 3514:
case 1875:
case 389:
case 2208:
case 4027:
case 479:
case 3832:
case 1026:
case 365:
case 3017:
case 3013:
case 3355:
case 327:
case 1139:
case 3575:
case 246:
case 2348:
case 682:
case 3019:
case 894:
case 442:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1675044001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,];
var gg_b = "1675044001/";

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
