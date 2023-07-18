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
var o = 1;
switch (g) {
case 3661:
case 1623:
case 1264:
case 156:
case 508:
case 2362:
case 2460:
case 3250:
case 242:
case 3471:
case 3056:
case 2139:
case 3797:
case 3581:
case 4094:
case 3845:
case 2010:
case 1433:
case 312:
case 88:
case 1340:
case 1407:
case 3044:
case 2383:
case 1020:
case 2512:
case 191:
case 876:
case 382:
case 2374:
case 1554:
case 3409:
case 1822:
case 3548:
case 3465:
case 1755:
case 348:
case 3406:
case 2796:
case 2258:
case 465:
case 1495:
case 1080:
case 2225:
case 3838:
case 581:
case 614:
case 2864:
case 2115:
case 872:
case 3785:
case 1162:
case 1296:
case 3261:
case 3476:
case 1784:
case 3182:
case 753:
case 1301:
case 3114:
case 1667:
case 3908:
case 992:
case 597:
case 2597:
case 3461:
case 3322:
case 2419:
case 667:
case 1950:
case 285:
case 3175:
case 183:
case 945:
case 1401:
case 76:
case 2675:
case 528:
case 3764:
case 2973:
case 3148:
case 313:
case 2416:
case 1485:
case 1705:
case 862:
case 499:
case 1947:
case 2711:
case 1584:
case 1146:
case 1613:
case 3596:
case 369:
case 1286:
case 1994:
case 2990:
case 934:
case 1986:
case 3955:
case 3008:
case 3856:
case 541:
case 415:
case 2983:
case 1927:
case 3340:
case 3632:
case 1788:
case 737:
case 2769:
case 1159:
case 993:
case 40:
case 388:
case 392:
case 1799:
case 1105:
case 1411:
case 318:
case 2862:
case 222:
case 4033:
case 52:
case 1893:
case 1275:
case 2531:
case 1387:
case 3936:
case 1100:
case 1382:
case 3853:
case 1040:
case 2776:
case 67:
case 3966:
case 660:
case 1595:
case 48:
case 1095:
case 2603:
case 724:
case 686:
case 3559:
case 949:
case 64:
case 939:
case 1853:
case 441:
case 1677:
case 1072:
case 3582:
case 1748:
case 784:
case 3358:
case 70:
case 1386:
case 2177:
case 3282:
case 2015:
case 1224:
case 715:
case 1716:
case 1471:
case 2308:
case 3281:
case 3539:
case 1981:
case 3677:
case 4042:
case 875:
case 1065:
case 1138:
case 2719:
case 3451:
case 4085:
case 211:
case 2532:
case 745:
case 336:
case 1199:
case 1297:
case 495:
case 645:
case 770:
case 2804:
case 920:
case 2527:
case 1207:
case 1048:
case 565:
case 1347:
case 894:
case 1935:
case 2643:
case 1550:
case 3939:
case 2201:
case 2846:
case 2230:
case 700:
case 1209:
case 3220:
case 3377:
case 3048:
case 344:
case 2514:
case 2086:
case 2528:
case 1992:
case 439:
case 1941:
case 3795:
case 31:
case 2114:
case 942:
case 2434:
case 2371:
case 740:
case 3981:
case 3186:
case 253:
case 171:
case 181:
case 2126:
case 282:
case 1292:
case 1946:
case 2449:
case 1596:
case 947:
case 3351:
case 416:
case 3121:
case 964:
case 2019:
case 1984:
case 3486:
case 2342:
case 3506:
case 467:
case 2594:
case 1302:
case 221:
case 3078:
case 2439:
case 2227:
case 2908:
case 1453:
case 529:
case 3815:
case 2552:
case 2133:
case 3550:
case 573:
case 3251:
case 685:
case 2070:
case 4058:
case 4036:
case 1844:
case 1228:
case 1632:
case 766:
case 3599:
case 2827:
case 2080:
case 204:
case 1580:
case 650:
case 1959:
case 2812:
case 3314:
case 3738:
case 1653:
case 2607:
case 791:
case 3165:
case 3545:
case 3093:
case 3001:
case 3843:
case 3807:
case 2400:
case 877:
case 511:
case 361:
case 1305:
case 1429:
case 134:
case 3915:
case 3749:
case 1713:
case 3227:
case 225:
case 3865:
case 39:
case 2962:
case 820:
case 531:
case 1245:
case 2003:
case 3082:
case 582:
case 2707:
case 3558:
case 916:
case 3062:
case 960:
case 1562:
case 1728:
case 1834:
case 1711:
case 1551:
case 3191:
case 3536:
case 4089:
case 3628:
case 443:
case 3118:
case 1510:
case 2189:
case 1306:
case 378:
case 2932:
case 1063:
case 2077:
case 571:
case 3653:
case 2188:
case 303:
case 2440:
case 519:
case 2942:
case 2501:
case 3170:
case 3874:
case 841:
case 4040:
case 2784:
case 3782:
case 1611:
case 1750:
case 477:
case 510:
case 1885:
case 2020:
case 2940:
case 4047:
case 598:
case 3293:
case 1062:
case 2825:
case 2184:
case 2092:
case 3804:
case 2880:
case 3529:
case 1628:
case 3909:
case 2590:
case 2754:
case 2892:
case 3504:
case 3400:
case 1328:
case 3553:
case 260:
case 1236:
case 2726:
case 3693:
case 3453:
case 1110:
case 3642:
case 3683:
case 2457:
case 3840:
case 3975:
case 2444:
case 2215:
case 1415:
case 3696:
case 164:
case 1709:
case 1960:
case 1585:
case 1419:
case 3321:
case 2462:
case 509:
case 3424:
case 3208:
case 3252:
case 8:
case 2422:
case 603:
case 2748:
case 3721:
case 2918:
case 2129:
case 984:
case 1570:
case 2887:
case 3391:
case 3019:
case 3698:
case 3299:
case 2548:
case 2750:
case 2551:
case 1576:
case 2606:
case 2122:
case 270:
case 3095:
case 3657:
case 1256:
case 773:
case 3099:
case 3925:
case 3224:
case 394:
case 3301:
case 50:
case 2104:
case 1664:
case 421:
case 1486:
case 3514:
case 1908:
case 1957:
case 3866:
case 2692:
case 2891:
case 258:
case 3328:
case 1989:
case 28:
case 196:
case 795:
case 2456:
case 1497:
case 1652:
case 3468:
case 946:
case 985:
case 640:
case 3660:
case 1963:
case 3775:
case 1388:
case 792:
case 259:
case 1627:
case 2097:
case 3705:
case 1473:
case 3212:
case 3233:
case 636:
case 2368:
case 3269:
case 1721:
case 249:
case 929:
case 2823:
case 3334:
case 3666:
case 255:
case 1458:
case 1384:
case 287:
case 825:
case 210:
case 2673:
case 2276:
case 2615:
case 1734:
case 2982:
case 3232:
case 856:
case 1243:
case 3214:
case 1308:
case 1185:
case 532:
case 3829:
case 3869:
case 2338:
case 3680:
case 377:
case 671:
case 414:
case 17:
case 166:
case 3292:
case 1097:
case 322:
case 3211:
case 143:
case 203:
case 290:
case 2951:
case 351:
case 2325:
case 2648:
case 3139:
case 4057:
case 1965:
case 2381:
case 3905:
case 2406:
case 3338:
case 4069:
case 789:
case 1248:
case 1657:
case 3923:
case 3758:
case 2253:
case 2142:
case 786:
case 981:
case 1594:
case 475:
case 2350:
case 2471:
case 2596:
case 725:
case 1051:
case 840:
case 1843:
case 1238:
case 1891:
case 1583:
case 2738:
case 982:
case 3725:
case 2016:
case 323:
case 6:
case 2562:
case 683:
case 10:
case 1045:
case 1723:
case 2071:
case 3502:
case 1656:
case 513:
case 1410:
case 2515:
case 542:
case 1509:
case 2037:
case 1028:
case 1449:
case 1809:
case 1654:
case 297:
case 2447:
case 1680:
case 118:
case 3153:
case 2224:
case 3189:
case 2347:
case 2586:
case 1548:
case 2044:
case 3633:
case 1091:
case 2285:
case 189:
case 167:
case 3806:
case 2835:
case 2916:
case 239:
case 2841:
case 3731:
case 2960:
case 3318:
case 3268:
case 1687:
case 2518:
case 2610:
case 3601:
case 2136:
case 1928:
case 2926:
case 1634:
case 2924:
case 442:
case 1552:
case 2496:
case 3485:
case 4044:
case 3571:
case 1234:
case 389:
case 1266:
case 2329:
case 3039:
case 38:
case 1952:
case 3650:
case 2156:
case 218:
case 867:
case 3084:
case 1582:
case 1856:
case 3985:
case 3992:
case 124:
case 306:
case 1679:
case 973:
case 1791:
case 3824:
case 2649:
case 1459:
case 376:
case 2741:
case 3538:
case 3917:
case 65:
case 4091:
case 1117:
case 3225:
case 605:
case 1938:
case 3616:
case 3123:
case 1801:
case 2995:
case 3339:
case 1123:
case 2657:
case 2697:
case 554:
case 1358:
case 832:
case 22:
case 703:
case 2239:
case 3394:
case 3618:
case 830:
case 1645:
case 923:
case 3587:
case 1479:
case 479:
case 3457:
case 2351:
case 2627:
case 751:
case 3747:
case 2961:
case 1726:
case 130:
case 1847:
case 2599:
case 208:
case 1004:
case 1565:
case 3024:
case 3937:
case 27:
case 1059:
case 957:
case 3913:
case 1431:
case 184:
case 806:
case 3137:
case 4025:
case 1208:
case 1557:
case 1618:
case 302:
case 4045:
case 3167:
case 224:
case 2577:
case 1357:
case 1991:
case 2549:
case 129:
case 449:
case 3912:
case 523:
case 1846:
case 3053:
case 2695:
case 245:
case 2872:
case 368:
case 525:
case 3360:
case 3073:
case 2529:
case 3470:
case 1896:
case 2465:
case 2716:
case 1500:
case 1990:
case 1710:
case 2933:
case 1621:
case 459:
case 2159:
case 755:
case 941:
case 3090:
case 1889:
case 2791:
case 1430:
case 909:
case 2566:
case 2877:
case 2497:
case 1201:
case 2268:
case 2221:
case 2083:
case 7:
case 131:
case 1686:
case 1813:
case 2945:
case 450:
case 1771:
case 3289:
case 277:
case 2935:
case 1663:
case 3414:
case 265:
case 2608:
case 3585:
case 2929:
case 2118:
case 1514:
case 437:
case 372:
case 1034:
case 3882:
case 1456:
case 3248:
case 551:
case 1772:
case 701:
case 2573:
case 3274:
case 2483:
case 1230:
case 3639:
case 9:
case 2335:
case 2571:
case 2653:
case 2545:
case 114:
case 4068:
case 1420:
case 2377:
case 298:
case 896:
case 2428:
case 3819:
case 3537:
case 3518:
case 2323:
case 922:
case 1815:
case 861:
case 1278:
case 2847:
case 2059:
case 746:
case 903:
case 3381:
case 2631:
case 575:
case 199:
case 2644:
case 1912:
case 326:
case 2762:
case 3135:
case 3011:
case 2760:
case 969:
case 2953:
case 503:
case 2127:
case 4062:
case 162:
case 468:
case 2790:
case 871:
case 3689:
case 1742:
case 1101:
case 3177:
case 1237:
case 1058:
case 3434:
case 3022:
case 3712:
case 2008:
case 1327:
case 1901:
case 3930:
case 2213:
case 1930:
case 2311:
case 1796:
case 3505:
case 1493:
case 2279:
case 284:
case 3241:
case 13:
case 3641:
case 2706:
case 1904:
case 310:
case 3357:
case 3826:
case 3748:
case 2445:
case 4082:
case 3665:
case 2629:
case 566:
case 1218:
case 4010:
case 1661:
case 240:
case 2978:
case 1205:
case 452:
case 3801:
case 748:
case 3954:
case 2871:
case 3154:
case 1239:
case 390:
case 1871:
case 3288:
case 3425:
case 4064:
case 2307:
case 308:
case 3574:
case 1718:
case 3817:
case 3034:
case 2357:
case 1380:
case 2638:
case 2116:
case 2405:
case 2663:
case 1450:
case 651:
case 884:
case 1131:
case 3899:
case 669:
case 2536:
case 2216:
case 4014:
case 294:
case 3717:
case 2181:
case 3119:
case 1351:
case 2364:
case 3615:
case 2093:
case 1900:
case 3015:
case 1494:
case 2217:
case 3180:
case 1265:
case 341:
case 2332:
case 3798:
case 1861:
case 1295:
case 4092:
case 2783:
case 3897:
case 3730:
case 3891:
case 1669:
case 2141:
case 3002:
case 2906:
case 1470:
case 3110:
case 706:
case 3515:
case 2257:
case 1892:
case 708:
case 1561:
case 3173:
case 1026:
case 2376:
case 1368:
case 271:
case 357:
case 1532:
case 3136:
case 1756:
case 1775:
case 2345:
case 2745:
case 1393:
case 1923:
case 4061:
case 2575:
case 577:
case 3441:
case 300:
case 140:
case 3174:
case 1432:
case 2119:
case 2725:
case 3464:
case 553:
case 1221:
case 4080:
case 307:
case 4020:
case 3294:
case 169:
case 3267:
case 1399:
case 2393:
case 4077:
case 1745:
case 3420:
case 3507:
case 2331:
case 1629:
case 1196:
case 681:
case 486:
case 2355:
case 648:
case 1112:
case 1604:
case 1564:
case 16:
case 4035:
case 1409:
case 2696:
case 2834:
case 1374:
case 487:
case 2226:
case 518:
case 1103:
case 1840:
case 2411:
case 1603:
case 2533:
case 760:
case 1864:
case 1985:
case 2786:
case 3320:
case 915:
case 904:
case 3885:
case 2161:
case 346:
case 275:
case 2736:
case 2063:
case 1168:
case 142:
case 505:
case 1712:
case 2595:
case 1251:
case 3809:
case 1818:
case 2263:
case 3463:
case 684:
case 3296:
case 2290:
case 734:
case 1640:
case 1180:
case 3481:
case 576:
case 434:
case 3003:
case 2852:
case 622:
case 2867:
case 3106:
case 2688:
case 2108:
case 924:
case 1273:
case 1777:
case 2470:
case 3079:
case 451:
case 412:
case 491:
case 2458:
case 1702:
case 3004:
case 3238:
case 1190:
case 3789:
case 3013:
case 3025:
case 1398:
case 1949:
case 1703:
case 1132:
case 2330:
case 2151:
case 2537:
case 3437:
case 401:
case 1587:
case 1174:
case 2124:
case 231:
case 1725:
case 3590:
case 1571:
case 2507:
case 1760:
case 1085:
case 743:
case 996:
case 2660:
case 1352:
case 972:
case 3397:
case 1643:
case 3286:
case 1015:
case 635:
case 454:
case 1636:
case 2397:
case 3184:
case 900:
case 500:
case 269:
case 2423:
case 86:
case 827:
case 3786:
case 58:
case 3501:
case 2034:
case 3820:
case 1321:
case 3887:
case 1694:
case 5:
case 1024:
case 3658:
case 496:
case 2637:
case 4015:
case 1304:
case 1011:
case 1446:
case 1145:
case 107:
case 526:
case 215:
case 3423:
case 3988:
case 1865:
case 2839:
case 3092:
case 905:
case 813:
case 466:
case 2941:
case 695:
case 774:
case 1704:
case 3458:
case 2896:
case 1049:
case 3972:
case 4051:
case 1770:
case 4017:
case 563:
case 1084:
case 1899:
case 1630:
case 1094:
case 3805:
case 3104:
case 1568:
case 4049:
case 3744:
case 2052:
case 2271:
case 739:
case 2721:
case 3568:
case 3094:
case 2024:
case 2145:
case 159:
case 2287:
case 3672:
case 1819:
case 1042:
case 2925:
case 3146:
case 3058:
case 2231:
case 1276:
case 2574:
case 2943:
case 2881:
case 3017:
case 2530:
case 1516:
case 3757:
case 1936:
case 481:
case 2408:
case 3991:
case 1149:
case 814:
case 41:
case 1244:
case 374:
case 3370:
case 852:
case 2164:
case 1106:
case 560:
case 3317:
case 4072:
case 3794:
case 2298:
case 630:
case 3669:
case 1890:
case 2493:
case 688:
case 600:
case 455:
case 1575:
case 1714:
case 2991:
case 136:
case 246:
case 217:
case 986:
case 811:
case 317:
case 1413:
case 2294:
case 1681:
case 3152:
case 3948:
case 1261:
case 1350:
case 2567:
case 2212:
case 1127:
case 1522:
case 860:
case 106:
case 2555:
case 3600:
case 545:
case 71:
case 1676:
case 1134:
case 2626:
case 2273:
case 3172:
case 1881:
case 3278:
case 3477:
case 1437:
case 4006:
case 3859:
case 3967:
case 1416:
case 2454:
case 584:
case 1389:
case 564:
case 3526:
case 1283:
case 3783:
case 168:
case 2247:
case 1592:
case 3569:
case 1252:
case 3916:
case 1786:
case 3796:
case 3636:
case 599:
case 2977:
case 608:
case 3745:
case 1232:
case 1540:
case 1202:
case 2149:
case 1017:
case 3978:
case 968:
case 350:
case 2262:
case 3772:
case 254:
case 2904:
case 3333:
case 2624:
case 1436:
case 3132:
case 3659:
case 1738:
case 3407:
case 4018:
case 2197:
case 349:
case 1691:
case 3877:
case 3687:
case 2076:
case 1647:
case 2111:
case 1454:
case 2204:
case 288:
case 1223:
case 1824:
case 3442:
case 1012:
case 3176:
case 4029:
case 1002:
case 1511:
case 3207:
case 1272:
case 2254:
case 2358:
case 1599:
case 2974:
case 1197:
case 1116:
case 1046:
case 647:
case 3433:
case 888:
case 1768:
case 57:
case 3979:
case 723:
case 2158:
case 2091:
case 771:
case 1926:
case 375:
case 1434:
case 3849:
case 347:
case 530:
case 3532:
case 2057:
case 3323:
case 831:
case 1114:
case 3157:
case 1250:
case 4079:
case 3243:
case 2984:
case 3940:
case 3327:
case 690:
case 539:
case 2343:
case 1821:
case 2923:
case 2915:
case 2437:
case 1588:
case 2321:
case 15:
case 3722:
case 353:
case 783:
case 516:
case 352:
case 2815:
case 2654:
case 1349:
case 2588:
case 1334:
case 1326:
case 1782:
case 3255:
case 2260:
case 3837:
case 2832:
case 1215:
case 1279:
case 3290:
case 3010:
case 2195:
case 2799:
case 1943:
case 2641:
case 1850:
case 2243:
case 432:
case 987:
case 2155:
case 3260:
case 2365:
case 897:
case 2125:
case 2502:
case 2435:
case 965:
case 1178:
case 457:
case 3335:
case 1047:
case 1620:
case 1140:
case 3622:
case 293:
case 868:
case 81:
case 135:
case 1602:
case 1032:
case 3410:
case 1189:
case 948:
case 2849:
case 4074:
case 2425:
case 2547:
case 358:
case 3348:
case 1608:
case 3310:
case 2081:
case 2676:
case 2229:
case 2099:
case 2584:
case 2570:
case 2732:
case 398:
case 417:
case 296:
case 2431:
case 3926:
case 3127:
case 2443:
case 935:
case 3557:
case 1543:
case 3482:
case 3547:
case 2064:
case 474:
case 3760:
case 1763:
case 546:
case 3108:
case 2418:
case 2966:
case 2297:
case 744:
case 380:
case 43:
case 1542:
case 291:
case 1021:
case 1403:
case 3614:
case 2144:
case 2969:
case 1247:
case 3012:
case 1056:
case 3907:
case 3491:
case 2572:
case 3203:
case 1089:
case 2095:
case 1670:
case 1317:
case 1229:
case 2998:
case 1263:
case 2385:
case 2344:
case 3375:
case 1720:
case 3635:
case 342:
case 1464:
case 980:
case 2810:
case 2324:
case 1961:
case 643:
case 1054:
case 66:
case 2985:
case 3900:
case 3875:
case 2103:
case 1903:
case 1895:
case 2495:
case 1096:
case 2729:
case 3066:
case 3266:
case 3813:
case 3990:
case 3111:
case 149:
case 1502:
case 2965:
case 2975:
case 1810:
case 2617:
case 2180:
case 515:
case 2698:
case 1179:
case 2632:
case 3938:
case 2884:
case 3634:
case 1804:
case 2662:
case 3300:
case 175:
case 4027:
case 2479:
case 2174:
case 236:
case 3305:
case 2875:
case 1315:
case 988:
case 3676:
case 1966:
case 3946:
case 3361:
case 3304:
case 2251:
case 1642:
case 2062:
case 2690:
case 858:
case 3387:
case 2169:
case 3708:
case 2011:
case 1043:
case 2366:
case 3503:
case 2190:
case 1951:
case 4086:
case 2682:
case 2703:
case 3554:
case 2420:
case 2625:
case 1526:
case 1746:
case 1997:
case 1104:
case 3467:
case 1858:
case 3247:
case 3578:
case 3325:
case 1242:
case 87:
case 3970:
case 2542:
case 1113:
case 279:
case 1754:
case 339:
case 1183:
case 821:
case 2060:
case 3460:
case 1826:
case 1147:
case 393:
case 3890:
case 3697:
case 1260:
case 84:
case 1581:
case 1022:
case 2794:
case 3649:
case 3452:
case 1115:
case 3555:
case 3898:
case 1829:
case 3871:
case 1729:
case 3365:
case 890:
case 403:
case 1187:
case 2473:
case 641:
case 2157:
case 3188:
case 1164:
case 1929:
case 2401:
case 2630:
case 95:
case 3443:
case 1598:
case 3313:
case 979:
case 1854:
case 73:
case 1143:
case 619:
case 3235:
case 1030:
case 2744:
case 2820:
case 2399:
case 3494:
case 2084:
case 1880:
case 1339:
case 2844:
case 74:
case 1102:
case 3037:
case 438:
case 1333:
case 857:
case 1323:
case 666:
case 2033:
case 2646:
case 3040:
case 1547:
case 154:
case 3541:
case 3605:
case 2958:
case 4004:
case 77:
case 4039:
case 2782:
case 1635:
case 1848:
case 3949:
case 3577:
case 1139:
case 233:
case 674:
case 621:
case 4021:
case 3373:
case 2110:
case 874:
case 3479:
case 319:
case 1198:
case 2463:
case 1271:
case 1699:
case 3684:
case 2516:
case 2132:
case 176:
case 3980:
case 732:
case 2936:
case 1088:
case 1163:
case 2619:
case 583:
case 321:
case 141:
case 3065:
case 3009:
case 3112:
case 2185:
case 1195:
case 2541:
case 533:
case 2787:
case 2042:
case 672:
case 1897:
case 1751:
case 494:
case 2888:
case 2890:
case 798:
case 3383:
case 833:
case 2730:
case 1915:
case 1303:
case 2322:
case 3081:
case 3732:
case 2109:
case 668:
case 1270:
case 1902:
case 408:
case 2061:
case 2524:
case 1577:
case 3265:
case 3773:
case 1797:
case 2417:
case 2193:
case 3670:
case 950:
case 731:
case 1490:
case 777:
case 121:
case 68:
case 186:
case 607:
case 3736:
case 1274:
case 2850:
case 340:
case 2481:
case 1972:
case 1867:
case 3329:
case 2027:
case 3331:
case 3563:
case 3576:
case 2436:
case 2123:
case 1444:
case 3254:
case 3533:
case 126:
case 2568:
case 3692:
case 3075:
case 556:
case 3718:
case 1934:
case 882:
case 3444:
case 3020:
case 3767:
case 3947:
case 2758:
case 2409:
case 3974:
case 1887:
case 4000:
case 537:
case 483:
case 2326:
case 1906:
case 4001:
case 778:
case 3006:
case 954:
case 2214:
case 765:
case 595:
case 1069:
case 1363:
case 1165:
case 3052:
case 14:
case 3691:
case 2809:
case 4002:
case 2971:
case 3416:
case 2955:
case 3401:
case 3960:
case 3163:
case 2979:
case 3343:
case 1203:
case 1978:
case 1171:
case 2412:
case 2209:
case 458:
case 803:
case 3743:
case 2987:
case 337:
case 2739:
case 2828:
case 1501:
case 1172:
case 1993:
case 2348:
case 917:
case 3752:
case 2665:
case 2482:
case 3489:
case 3197:
case 3432:
case 3724:
case 549:
case 3363:
case 3630:
case 1148:
case 1122:
case 2640:
case 2621:
case 2976:
case 1700:
case 3790:
case 399:
case 116:
case 1233:
case 1761:
case 1175:
case 2196:
case 3841:
case 3206:
case 234:
case 1808:
case 3714:
case 3187:
case 2785:
case 1872:
case 2650:
case 932:
case 2578:
case 2269:
case 1665:
case 2429:
case 892:
case 1153:
case 3120:
case 174:
case 2079:
case 1873:
case 2792:
case 3245:
case 2069:
case 1504:
case 918:
case 2056:
case 3763:
case 280:
case 1563:
case 1219:
case 3113:
case 3867:
case 1071:
case 1879:
case 2370:
case 3218:
case 3087:
case 3353:
case 2664:
case 610:
case 4032:
case 1345:
case 550:
case 1325:
case 3784:
case 2780:
case 1405:
case 1346:
case 1508:
case 1226:
case 769:
case 2012:
case 2267:
case 328:
case 2535:
case 173:
case 3405:
case 673:
case 736:
case 1969:
case 1948:
case 3324:
case 1605:
case 762:
case 3886:
case 704:
case 971:
case 2309:
case 3277:
case 2426:
case 1338:
case 4066:
case 758:
case 504:
case 484:
case 2100:
case 103:
case 657:
case 46:
case 3158:
case 2517:
case 1268:
case 1173:
case 2582:
case 3216:
case 3080:
case 1360:
case 3131:
case 2556:
case 521:
case 2058:
case 4087:
case 3685:
case 940:
case 639:
case 2928:
case 37:
case 2764:
case 1962:
case 3493:
case 2505:
case 3750:
case 3408:
case 1213:
case 1076:
case 19:
case 1688:
case 1376:
case 2679:
case 3968:
case 498:
case 2814:
case 3977:
case 360:
case 3579:
case 1619:
case 1469:
case 1372:
case 1241:
case 4056:
case 2433:
case 3746:
case 3027:
case 4005:
case 3544:
case 908:
case 3803:
case 2970:
case 1727:
case 967:
case 2876:
case 3430:
case 1073:
case 2317:
case 2182:
case 4071:
case 1914:
case 586:
case 3733:
case 2301:
case 413:
case 1544:
case 145:
case 244:
case 652:
case 1795:
case 2565:
case 3800:
case 589:
case 1894:
case 1651:
case 548:
case 514:
case 423:
case 3204:
case 2727:
case 3194:
case 3811:
case 2341:
case 3551:
case 3534:
case 2274:
case 2162:
case 3624:
case 2687:
case 3816:
case 2167:
case 3449:
case 1785:
case 332:
case 1913:
case 3901:
case 955:
case 763:
case 1545:
case 615:
case 2252:
case 2947:
case 3395:
case 471:
case 3345:
case 741:
case 26:
case 3929:
case 718:
case 3117:
case 2000:
case 1435:
case 153:
case 1842:
case 1600:
case 1482:
case 2278:
case 2238:
case 1574:
case 2854:
case 2442:
case 3244:
case 331:
case 931:
case 958:
case 1496:
case 1267:
case 3362:
case 2187:
case 3832:
case 3125:
case 1133:
case 627:
case 2464:
case 33:
case 139:
case 3610:
case 2712:
case 962:
case 1395:
case 4019:
case 420:
case 823:
case 3473:
case 1119:
case 34:
case 588:
case 2831:
case 216:
case 3956:
case 1330:
case 609:
case 2829:
case 476:
case 3540:
case 846:
case 3808:
case 1845:
case 1344:
case 2680:
case 3520:
case 3446:
case 3088:
case 2005:
case 3:
case 3000:
case 3359:
case 1188:
case 655:
case 2403:
case 2767:
case 1361:
case 2833:
case 594:
case 2432:
case 2179:
case 2728:
case 492:
case 1440:
case 687:
case 2453:
case 1553:
case 1982:
case 2900:
case 2336:
case 3756:
case 3969:
case 151:
case 2208:
case 3426:
case 3287:
case 776:
case 2691:
case 2560:
case 3754:
case 1150:
case 2373:
case 3046:
case 2980:
case 2889:
case 3181:
case 2801:
case 921:
case 2946:
case 2763:
case 1556:
case 2313:
case 320:
case 2930:
case 3839:
case 117:
case 1472:
case 104:
case 325:
case 2999:
case 3435:
case 3821:
case 4013:
case 538:
case 1039:
case 2598:
case 844:
case 3210:
case 3906:
case 2805:
case 1128:
case 3933:
case 1427:
case 3283:
case 1253:
case 3921:
case 1098:
case 2131:
case 3914:
case 1136:
case 3356:
case 163:
case 733:
case 2346:
case 32:
case 3398:
case 809:
case 2863:
case 146:
case 1027:
case 1668:
case 2808:
case 4026:
case 1291:
case 2550:
case 2137:
case 3535:
case 2781:
case 3631:
case 3069:
case 761:
case 1404:
case 1379:
case 805:
case 3910:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1689642001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,];
var gg_b = "1689642001/";

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
