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
case 1799:
case 3637:
case 3245:
case 2886:
case 3116:
case 2464:
case 2518:
case 188:
case 634:
case 2618:
case 3180:
case 369:
case 311:
case 674:
case 1346:
case 2071:
case 276:
case 1040:
case 455:
case 441:
case 3686:
case 206:
case 1431:
case 705:
case 463:
case 3720:
case 1592:
case 2060:
case 794:
case 3083:
case 1841:
case 294:
case 3953:
case 4056:
case 1420:
case 1562:
case 3755:
case 2691:
case 1926:
case 437:
case 575:
case 3946:
case 2489:
case 1852:
case 3456:
case 734:
case 3428:
case 2099:
case 3617:
case 735:
case 1509:
case 2276:
case 2934:
case 3430:
case 973:
case 2109:
case 2011:
case 1127:
case 601:
case 3459:
case 80:
case 47:
case 2818:
case 2616:
case 3251:
case 3909:
case 3184:
case 2112:
case 1021:
case 3128:
case 2089:
case 873:
case 2918:
case 12:
case 759:
case 3448:
case 2766:
case 1635:
case 2944:
case 659:
case 1512:
case 141:
case 3301:
case 1073:
case 2420:
case 4021:
case 3910:
case 976:
case 741:
case 1953:
case 90:
case 62:
case 514:
case 958:
case 1654:
case 2367:
case 2244:
case 3510:
case 829:
case 3663:
case 3313:
case 509:
case 868:
case 1910:
case 1786:
case 3210:
case 1122:
case 60:
case 2876:
case 2996:
case 2711:
case 1470:
case 2024:
case 1210:
case 1409:
case 3400:
case 2168:
case 3512:
case 2962:
case 1129:
case 3437:
case 1113:
case 4043:
case 3246:
case 967:
case 3857:
case 2302:
case 2908:
case 3577:
case 2563:
case 1672:
case 2587:
case 2961:
case 3582:
case 4049:
case 2462:
case 1136:
case 1233:
case 1661:
case 3647:
case 1135:
case 431:
case 2125:
case 519:
case 1968:
case 1627:
case 961:
case 3700:
case 1334:
case 1010:
case 2546:
case 687:
case 3799:
case 2347:
case 4073:
case 310:
case 2613:
case 3212:
case 3850:
case 1768:
case 937:
case 981:
case 3481:
case 2744:
case 1223:
case 469:
case 1704:
case 2893:
case 2212:
case 2552:
case 1465:
case 424:
case 3534:
case 644:
case 3985:
case 1515:
case 2873:
case 793:
case 1269:
case 2186:
case 2759:
case 3525:
case 3008:
case 274:
case 1887:
case 2325:
case 3529:
case 2271:
case 984:
case 2454:
case 852:
case 2225:
case 4007:
case 127:
case 3528:
case 3725:
case 1176:
case 1400:
case 2331:
case 1264:
case 799:
case 472:
case 902:
case 1143:
case 2513:
case 866:
case 3345:
case 314:
case 2531:
case 3785:
case 3262:
case 3659:
case 3572:
case 3106:
case 283:
case 3049:
case 126:
case 2093:
case 3494:
case 2231:
case 2294:
case 3439:
case 1097:
case 144:
case 4003:
case 114:
case 2624:
case 1256:
case 870:
case 2322:
case 1529:
case 77:
case 1908:
case 43:
case 1094:
case 1158:
case 1547:
case 925:
case 1597:
case 3586:
case 2851:
case 261:
case 1785:
case 2175:
case 2381:
case 3533:
case 1563:
case 365:
case 2683:
case 265:
case 1546:
case 458:
case 3764:
case 492:
case 2931:
case 849:
case 193:
case 3096:
case 439:
case 1701:
case 1952:
case 1322:
case 34:
case 1903:
case 24:
case 3031:
case 1198:
case 55:
case 2025:
case 2570:
case 1251:
case 1035:
case 1468:
case 3618:
case 1937:
case 2952:
case 749:
case 2111:
case 3034:
case 84:
case 2369:
case 511:
case 3971:
case 237:
case 1773:
case 1448:
case 865:
case 2385:
case 2907:
case 356:
case 939:
case 2100:
case 3994:
case 3287:
case 2999:
case 1007:
case 2218:
case 1353:
case 3921:
case 106:
case 1689:
case 626:
case 3858:
case 267:
case 3383:
case 2157:
case 3146:
case 2328:
case 743:
case 2682:
case 2473:
case 1464:
case 855:
case 769:
case 646:
case 1238:
case 2317:
case 589:
case 2954:
case 357:
case 1830:
case 3885:
case 1467:
case 1170:
case 2771:
case 1866:
case 3870:
case 3584:
case 985:
case 3701:
case 1809:
case 3746:
case 3148:
case 1964:
case 2676:
case 2867:
case 616:
case 3735:
case 3781:
case 3856:
case 3790:
case 284:
case 848:
case 2122:
case 1140:
case 2846:
case 2522:
case 3487:
case 1229:
case 2528:
case 2765:
case 882:
case 3172:
case 645:
case 665:
case 3705:
case 256:
case 564:
case 2732:
case 2239:
case 150:
case 3959:
case 380:
case 2183:
case 864:
case 3724:
case 1813:
case 1854:
case 1408:
case 277:
case 4035:
case 1698:
case 3346:
case 1451:
case 1797:
case 2637:
case 857:
case 1556:
case 1110:
case 2742:
case 1707:
case 1540:
case 1154:
case 1025:
case 1624:
case 2427:
case 3844:
case 1133:
case 3545:
case 3080:
case 3509:
case 2487:
case 396:
case 1986:
case 29:
case 2468:
case 262:
case 1805:
case 2850:
case 3564:
case 1446:
case 995:
case 3518:
case 1761:
case 758:
case 891:
case 2922:
case 779:
case 3645:
case 773:
case 710:
case 1173:
case 1235:
case 2670:
case 2362:
case 3561:
case 2083:
case 3291:
case 2704:
case 3845:
case 3598:
case 3651:
case 2001:
case 772:
case 3118:
case 3241:
case 1049:
case 594:
case 954:
case 3167:
case 305:
case 3334:
case 1013:
case 2067:
case 3816:
case 2158:
case 239:
case 892:
case 1756:
case 805:
case 3977:
case 1314:
case 597:
case 3719:
case 115:
case 2446:
case 1839:
case 2783:
case 765:
case 1687:
case 63:
case 662:
case 2713:
case 3294:
case 2199:
case 231:
case 1538:
case 573:
case 3951:
case 2498:
case 3902:
case 3305:
case 51:
case 2898:
case 3325:
case 3312:
case 326:
case 1008:
case 1604:
case 3295:
case 3149:
case 3772:
case 1741:
case 2355:
case 226:
case 2273:
case 2855:
case 1614:
case 177:
case 3938:
case 171:
case 537:
case 2712:
case 2062:
case 4025:
case 1357:
case 2635:
case 244:
case 1216:
case 1558:
case 1609:
case 1141:
case 699:
case 3806:
case 3620:
case 1433:
case 2274:
case 3597:
case 2289:
case 1352:
case 2586:
case 3307:
case 2981:
case 2725:
case 2409:
case 2450:
case 684:
case 567:
case 3551:
case 3337:
case 2511:
case 328:
case 994:
case 3156:
case 2299:
case 1028:
case 3488:
case 2720:
case 4069:
case 700:
case 2124:
case 657:
case 3780:
case 3848:
case 2255:
case 1017:
case 2372:
case 2847:
case 1245:
case 2667:
case 2869:
case 97:
case 1344:
case 2465:
case 1622:
case 2366:
case 1474:
case 118:
case 131:
case 1798:
case 672:
case 123:
case 3021:
case 3841:
case 2555:
case 3830:
case 877:
case 3108:
case 1124:
case 1171:
case 3922:
case 911:
case 240:
case 2002:
case 3003:
case 3122:
case 530:
case 135:
case 1976:
case 173:
case 2443:
case 3679:
case 3893:
case 1727:
case 2415:
case 1973:
case 1306:
case 3068:
case 2859:
case 3013:
case 2395:
case 3777:
case 2378:
case 822:
case 1845:
case 2375:
case 800:
case 1105:
case 381:
case 214:
case 2841:
case 516:
case 926:
case 3249:
case 208:
case 927:
case 1424:
case 3599:
case 1865:
case 3843:
case 2061:
case 3316:
case 506:
case 1039:
case 3698:
case 212:
case 2885:
case 471:
case 3535:
case 1884:
case 3201:
case 3733:
case 442:
case 3926:
case 4080:
case 3767:
case 1895:
case 2185:
case 2423:
case 4011:
case 1469:
case 2026:
case 2351:
case 159:
case 1075:
case 3236:
case 3018:
case 797:
case 474:
case 3900:
case 1090:
case 1536:
case 1775:
case 247:
case 1818:
case 3812:
case 1189:
case 2319:
case 94:
case 2537:
case 1089:
case 767:
case 3807:
case 2068:
case 3914:
case 2694:
case 3560:
case 2461:
case 1291:
case 2392:
case 1183:
case 349:
case 2138:
case 3088:
case 1054:
case 3159:
case 3434:
case 1703:
case 1820:
case 2172:
case 2324:
case 3974:
case 3446:
case 65:
case 3585:
case 2633:
case 2978:
case 3:
case 3412:
case 650:
case 638:
case 1285:
case 3670:
case 3706:
case 1694:
case 3090:
case 949:
case 3677:
case 1415:
case 1505:
case 2763:
case 255:
case 1803:
case 69:
case 2110:
case 3965:
case 1984:
case 1735:
case 470:
case 1480:
case 1565:
case 3552:
case 3483:
case 372:
case 290:
case 98:
case 510:
case 935:
case 428:
case 3134:
case 1239:
case 2143:
case 2269:
case 3229:
case 2894:
case 1585:
case 339:
case 997:
case 484:
case 497:
case 3935:
case 2678:
case 945:
case 915:
case 593:
case 787:
case 3206:
case 279:
case 3155:
case 1272:
case 72:
case 3683:
case 2751:
case 175:
case 1300:
case 2875:
case 3250:
case 928:
case 2833:
case 4038:
case 3189:
case 4005:
case 205:
case 1473:
case 2716:
case 2576:
case 1436:
case 321:
case 681:
case 3625:
case 2049:
case 416:
case 1930:
case 452:
case 1653:
case 2630:
case 2619:
case 2179:
case 482:
case 3196:
case 3516:
case 2254:
case 580:
case 940:
case 528:
case 3623:
case 523:
case 2338:
case 2756:
case 1569:
case 1757:
case 3937:
case 1862:
case 3219:
case 2253:
case 1241:
case 410:
case 213:
case 1991:
case 3541:
case 2642:
case 327:
case 1918:
case 2092:
case 577:
case 932:
case 3975:
case 1476:
case 2772:
case 3203:
case 2664:
case 3571:
case 3614:
case 3290:
case 1099:
case 3308:
case 3727:
case 1774:
case 42:
case 663:
case 3274:
case 3998:
case 3961:
case 2617:
case 2126:
case 3398:
case 2222:
case 2161:
case 18:
case 2527:
case 1658:
case 3943:
case 716:
case 160:
case 1093:
case 694:
case 2514:
case 714:
case 1523:
case 3840:
case 3422:
case 4068:
case 3878:
case 2920:
case 2479:
case 1849:
case 2284:
case 2128:
case 1572:
case 3170:
case 1032:
case 3138:
case 1487:
case 1109:
case 3286:
case 1626:
case 1043:
case 246:
case 3218:
case 2715:
case 1777:
case 1511:
case 1298:
case 2491:
case 221:
case 1795:
case 2429:
case 833:
case 493:
case 2544:
case 300:
case 3162:
case 844:
case 2530:
case 3419:
case 2668:
case 1787:
case 3242:
case 840:
case 1519:
case 1651:
case 3544:
case 3689:
case 2301:
case 504:
case 651:
case 628:
case 888:
case 3329:
case 2079:
case 1313:
case 1969:
case 2675:
case 102:
case 1336:
case 3536:
case 2724:
case 885:
case 130:
case 1652:
case 1740:
case 2621:
case 210:
case 955:
case 736:
case 1095:
case 2731:
case 3734:
case 2494:
case 3756:
case 3335:
case 648:
case 1358:
case 2838:
case 3147:
case 1338:
case 690:
case 1250:
case 2899:
case 847:
case 2743:
case 1301:
case 1188:
case 2549:
case 983:
case 3992:
case 2707:
case 3447:
case 3749:
case 2197:
case 766:
case 3331:
case 2242:
case 1445:
case 3969:
case 1485:
case 481:
case 1670:
case 3176:
case 1042:
case 3253:
case 1369:
case 21:
case 2458:
case 3350:
case 2341:
case 1677:
case 1716:
case 1637:
case 529:
case 3990:
case 3415:
case 201:
case 2506:
case 3521:
case 209:
case 2181:
case 1423:
case 3547:
case 1498:
case 1351:
case 3378:
case 2402:
case 1048:
case 2826:
case 1399:
case 3916:
case 1100:
case 3119:
case 3423:
case 480:
case 2436:
case 2028:
case 1081:
case 3942:
case 1414:
case 3104:
case 495:
case 2993:
case 1736:
case 2307:
case 3268:
case 3326:
case 756:
case 2698:
case 611:
case 3338:
case 508:
case 2430:
case 2384:
case 3407:
case 1161:
case 1848:
case 633:
case 1038:
case 1856:
case 1542:
case 421:
case 170:
case 1764:
case 2127:
case 2404:
case 1442:
case 1132:
case 3621:
case 3482:
case 3038:
case 1343:
case 2256:
case 806:
case 1056:
case 1178:
case 4044:
case 3365:
case 379:
case 3315:
case 3032:
case 203:
case 3760:
case 1724:
case 1193:
case 2205:
case 3530:
case 562:
case 2979:
case 1102:
case 3643:
case 1906:
case 1330:
case 2120:
case 4037:
case 1863:
case 788:
case 2169:
case 2053:
case 1449:
case 4059:
case 96:
case 2889:
case 1649:
case 3284:
case 449:
case 2710:
case 532:
case 2095:
case 678:
case 559:
case 3211:
case 2773:
case 2267:
case 3640:
case 178:
case 887:
case 764:
case 2373:
case 3085:
case 3127:
case 2890:
case 23:
case 2748:
case 2329:
case 2985:
case 1844:
case 1989:
case 2154:
case 804:
case 550:
case 1257:
case 1119:
case 3461:
case 2155:
case 3420:
case 448:
case 2097:
case 3635:
case 561:
case 695:
case 3399:
case 3440:
case 3192:
case 2164:
case 3130:
case 2940:
case 1734:
case 2718:
case 2778:
case 3000:
case 851:
case 2320:
case 3037:
case 3417:
case 3592:
case 1792:
case 2123:
case 2297:
case 2371:
case 340:
case 1892:
case 2878:
case 3940:
case 2807:
case 2638:
case 3405:
case 2237:
case 1331:
case 2819:
case 271:
case 733:
case 3939:
case 3690:
case 2708:
case 2524:
case 3695:
case 2584:
case 1958:
case 2019:
case 337:
case 858:
case 146:
case 3814:
case 3678:
case 3967:
case 2598:
case 2840:
case 404:
case 1857:
case 3668:
case 2974:
case 1502:
case 3957:
case 728:
case 2208:
case 3589:
case 413:
case 1590:
case 1407:
case 3791:
case 2438:
case 1606:
case 3200:
case 190:
case 921:
case 2023:
case 2545:
case 1058:
case 791:
case 968:
case 1728:
case 552:
case 222:
case 680:
case 2812:
case 2780:
case 676:
case 2490:
case 2007:
case 1387:
case 3636:
case 139:
case 636:
case 2722:
case 2747:
case 2583:
case 591:
case 3497:
case 4094:
case 1648:
case 1265:
case 2986:
case 795:
case 351:
case 347:
case 2152:
case 2997:
case 461:
case 2387:
case 1471:
case 3002:
case 373:
case 1202:
case 977:
case 1605:
case 1810:
case 1252:
case 3304:
case 1439:
case 382:
case 121:
case 1905:
case 412:
case 3101:
case 2804:
case 2064:
case 1697:
case 3947:
case 4041:
case 966:
case 3818:
case 3876:
case 483:
case 574:
case 1146:
case 3500:
case 3813:
case 1791:
case 1706:
case 2193:
case 1668:
case 3846:
case 604:
case 2493:
case 807:
case 1826:
case 2891:
case 248:
case 2414:
case 2803:
case 3892:
case 2485:
case 950:
case 467:
case 2298:
case 3613:
case 1037:
case 2813:
case 1500:
case 1994:
case 2031:
case 2316:
case 3745:
case 3973:
case 656:
case 1349:
case 2315:
case 4064:
case 1493:
case 3044:
case 2663:
case 3737:
case 3884:
case 964:
case 2228:
case 2133:
case 2408:
case 570:
case 3157:
case 880:
case 3324:
case 3932:
case 2677:
case 1720:
case 2360:
case 1742:
case 2113:
case 3332:
case 2117:
case 3276:
case 1640:
case 3102:
case 2344:
case 1023:
case 2957:
case 3473:
case 3368:
case 3341:
case 2726:
case 3804:
case 3086:
case 2159:
case 401:
case 560:
case 677:
case 363:
case 3064:
case 2500:
case 2094:
case 1927:
case 916:
case 621:
case 344:
case 2314:
case 3382:
case 1024:
case 1593:
case 3822:
case 750:
case 32:
case 1328:
case 3059:
case 2346:
case 777:
case 3717:
case 13:
case 2137:
case 1885:
case 2147:
case 503:
case 1305:
case 3477:
case 959:
case 68:
case 1680:
case 1932:
case 3709:
case 447:
case 2762:
case 592:
case 154:
case 1850:
case 2008:
case 2811:
case 3506:
case 2467:
case 3370:
case 1745:
case 522:
case 2455:
case 1551:
case 2839:
case 2463:
case 1363:
case 2209:
case 2604:
case 918:
case 3991:
case 3198:
case 859:
case 3852:
case 1575:
case 1752:
case 2200:
case 1312:
case 1900:
case 1963:
case 3784:
case 2661:
case 3158:
case 1566:
case 545:
case 3012:
case 435:
case 3361:
case 3605:
case 2658:
case 1951:
case 1249:
case 3472:
case 2293:
case 323:
case 3209:
case 3594:
case 1394:
case 218:
case 2370:
case 4051:
case 3282:
case 1191:
case 1732:
case 1205:
case 2665:
case 3188:
case 41:
case 1432:
case 3443:
case 3872:
case 688:
case 1954:
case 440:
case 3053:
case 1147:
case 2103:
case 1382:
case 3712:
case 2471:
case 1633:
case 1481:
case 275:
case 3554:
case 384:
case 1271:
case 3100:
case 3575:
case 2714:
case 1827:
case 1393:
case 635:
case 1:
case 2480:
case 2788:
case 1366:
case 2799:
case 2374:
case 1092:
case 1179:
case 518:
case 3550:
case 3004:
case 2760:
case 1068:
case 2406:
case 3952:
case 39:
case 2857:
case 4075:
case 1568:
case 1418:
case 2989:
case 1837:
case 889:
case 478:
case 920:
case 3123:
case 4033:
case 1598:
case 2444:
case 3753:
case 487:
case 1166:
case 3050:
case 316:
case 3061:
case 2540:
case 1392:
case 1120:
case 252:
case 3048:
case 453:
case 1543:
case 3819:
case 2483:
case 1018:
case 1855:
case 2087:
case 2192:
case 2746:
case 2695:
case 1186:
case 1696:
case 2615:
case 1375:
case 1248:
case 1029:
case 1450:
case 3379:
case 3020:
case 3067:
case 2592:
case 3344:
case 3912:
case 2160:
case 1961:
case 409:
case 1206:
case 2136:
case 1144:
case 2016:
case 1086:
case 3886:
case 3699:
case 2227:
case 1731:
case 1876:
case 568:
case 235:
case 1459:
case 2059:
case 3471:
case 1101:
case 1549:
case 2547:
case 2393:
case 1800:
case 2791:
case 3919:
case 296:
case 227:
case 3243:
case 1462:
case 1867:
case 3014:
case 1974:
case 1832:
case 3183:
case 982:
case 2336:
case 1526:
case 38:
case 1788:
case 2383:
case 512:
case 2622:
case 2107:
case 3235:
case 2938:
case 1115:
case 2151:
case 3740:
case 842:
case 9:
case 3835:
case 1461:
case 2567:
case 1377:
case 179:
case 3681:
case 2140:
case 2013:
case 2919:
case 1904:
case 538:
case 668:
case 1941:
case 2990:
case 1923:
case 3076:
case 2651:
case 2660:
case 1861:
case 1682:
case 2334:
case 125:
case 2874:
case 2349:
case 165:
case 2964:
case 1722:
case 3842:
case 3851:
case 3980:
case 3177:
case 2686:
case 3877:
case 2010:
case 1416:
case 3394:
case 2848:
case 2696:
case 3161:
case 40:
case 2656:
case 2916:
case 3074:
case 1254:
case 655:
case 394:
case 3539:
case 3658:
case 360:
case 2105:
case 225:
case 2027:
case 168:
case 1177:
case 2669:
case 1725:
case 2306:
case 1713:
case 341:
case 4024:
case 3230:
case 3519:
case 70:
case 948:
case 1708:
case 1676:
case 2504:
case 988:
case 917:
case 1793:
case 3871:
case 93:
case 3862:
case 3925:
case 368:
case 3193:
case 420:
case 1460:
case 1571:
case 4086:
case 697:
case 3661:
case 2566:
case 3051:
case 2690:
case 2844:
case 1715:
case 590:
case 1510:
case 3504:
case 3825:
case 2014:
case 2836:
case 825:
case 2252:
case 1999:
case 1896:
case 4089:
case 856:
case 1009:
case 2602:
case 2233:
case 1782:
case 3629:
case 2396:
case 2308:
case 1738:
case 774:
case 1817:
case 27:
case 2043:
case 1118:
case 230:
case 1996:
case 2102:
case 1315:
case 2210:
case 3142:
case 1320:
case 2006:
case 1267:
case 2932:
case 924:
case 3626:
case 2440:
case 2864:
case 1858:
case 333:
case 3143:
case 143:
case 3097:
case 1504:
case 2815:
case 3431:
case 2887:
case 1767:
case 1134:
case 163:
case 2196:
case 167:
case 1997:
case 1457:
case 465:
case 3411:
case 3403:
case 1938:
case 1458:
case 2634:
case 2596:
case 992:
case 1150:
case 3441:
case 1619:
case 953:
case 385:
case 1130:
case 438:
case 3216:
case 388:
case 3319:
case 2457:
case 1168:
case 176:
case 544:
case 1874:
case 113:
case 1483:
case 2866:
case 1091:
case 3673:
case 2832:
case 263:
case 99:
case 2795:
case 1533:
case 957:
case 1553:
case 1586:
case 2032:
case 3499:
case 3374:
case 3354:
case 2608:
case 3462:
case 2401:
case 3224:
case 2343:
case 473:
case 3113:
case 1199:
case 2332:
case 3303:
case 2854:
case 249:
case 477:
case 1825:
case 1085:
case 3343:
case 1766:
case 3015:
case 3987:
case 2950:
case 1853:
case 990:
case 2428:
case 2496:
case 370:
case 3570:
case 876:
case 583:
case 3757:
case 375:
case 775:
case 898:
case 2951:
case 3824:
case 1302:
case 894:
case 352:
case 2802:
case 1681:
case 1634:
case 3567:
case 2207:
case 149:
case 3195:
case 2038:
case 2849:
case 893:
case 3490:
case 622:
case 1175:
case 1995:
case 2481:
case 2823:
case 1184:
case 3915:
case 278:
case 1879:
case 1987:
case 1359:
case 3839:
case 3728:
case 2655:
case 2241:
case 989:
case 3691:
case 1403:
case 1388:
case 3894:
case 3568:
case 2435:
case 298:
case 0:
case 342:
case 3039:
case 786:
case 2189:
case 2631:
case 3317:
case 2213:
case 8:
case 2870:
case 2459:
case 1218:
case 3197:
case 4014:
case 1559:
case 489:
case 1641:
case 3435:
case 1570:
case 286:
case 2620:
case 3930:
case 1577:
case 2108:
case 3696:
case 533:
case 2282:
case 2692:
case 1889:
case 1052:
case 1589:
case 1026:
case 2220:
case 1287:
case 3256:
case 85:
case 872:
case 355:
case 3966:
case 459:
case 2790:
case 4083:
case 1691:
case 1581:
case 3233:
case 2171:
case 1692:
case 2084:
case 1076:
case 541:
case 2484:
case 1878:
case 1607:
case 789:
case 2770:
case 3750:
case 1125:
case 3095:
case 353:
case 104:
case 1632:
case 3675:
case 4012:
case 2881:
case 3563:
case 579:
case 1690:
case 2541:
case 2926:
case 1255:
case 3187:
case 346:
case 3722:
case 930:
case 500:
case 1164:
case 1671:
case 608:
case 2310:
case 3934:
case 3152:
case 1437:
case 3231:
case 720:
case 3703:
case 4013:
case 1103:
case 4023:
case 1069:
case 1683:
case 4029:
case 2681:
case 312:
case 2991:
case 1274:
case 3865:
case 3007:
case 2082:
case 2810:
case 2942:
case 1275:
case 2879:
case 3401:
case 4065:
case 3017:
case 88:
case 841:
case 4082:
case 371:
case 1234:
case 2072:
case 2662:
case 3217:
case 4088:
case 1828:
case 3269:
case 1138:
case 4010:
case 770:
case 2982:
case 1087:
case 996:
case 1083:
case 505:
case 507:
case 20:
case 1535:
case 86:
case 1916:
case 402:
case 1851:
case 2903:
case 3298:
case 2098:
case 2723:
case 3517:
case 3667:
case 3371:
case 1550:
case 4095:
case 3826:
case 4062:
case 1116:
case 1114:
case 494:
case 2644:
case 3409:
case 3741:
case 2394:
case 1411:
case 993:
case 2469:
case 3581:
case 1907:
case 1282:
case 2300:
case 1152:
case 1292:
case 2980:
case 2091:
case 1801:
case 3011:
case 2557:
case 1925:
case 486:
case 2517:
case 3436:
case 2399:
case 3714:
case 3491:
case 3754:
case 2573:
case 3738:
case 366:
case 762:
case 4079:
case 3588:
case 3264:
case 1111:
case 2561:
case 1755:
case 2892:
case 233:
case 1333:
case 3847:
case 1729:
case 2697:
case 2649:
case 531:
case 2114:
case 3801:
case 2004:
case 2761:
case 2643:
case 128:
case 3054:
case 1560:
case 1945:
case 808:
case 3362:
case 2389:
case 3684:
case 4078:
case 3687:
case 2361:
case 3498:
case 1931:
case 199:
case 2048:
case 536:
case 148:
case 781:
case 2995:
case 223:
case 19:
case 2532:
case 811:
case 2076:
case 3829:
case 1650:
case 2055:
case 1886:
case 3672:
case 2330:
case 259:
case 2654:
case 696:
case 1534:
case 3035:
case 260:
case 3005:
case 1617:
case 2050:
case 1360:
case 2774:
case 450:
case 2600:
case 1611:
case 191:
case 3467:
case 3650:
case 2666:
case 1699:
case 1557:
case 1356:
case 1965:
case 1814:
case 2279:
case 2523:
case 3832:
case 3302:
case 1425:
case 1871:
case 1532:
case 2445:
case 1247:
case 120:
case 1712:
case 174:
case 253:
case 969:
case 3632:
case 3204:
case 1924:
case 3776:
case 3169:
case 2828:
case 1316:
case 722:
case 960:
case 618:
case 3311:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1652356801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,];
var gg_b = "1652356801/";

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
