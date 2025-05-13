// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

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
case 3254:
case 2470:
case 2048:
case 1288:
case 3222:
case 2335:
case 1950:
case 2188:
case 1820:
case 2638:
case 2505:
case 3291:
case 1135:
case 3446:
case 1529:
case 1093:
case 2008:
case 3322:
case 2953:
case 1473:
case 3354:
case 445:
case 1388:
case 2595:
case 1633:
case 2773:
case 3301:
case 1380:
case 2283:
case 690:
case 1043:
case 642:
case 2119:
case 3963:
case 43:
case 1958:
case 3341:
case 3587:
case 3512:
case 3984:
case 1280:
case 2383:
case 2040:
case 1319:
case 3817:
case 3882:
case 1770:
case 2866:
case 3201:
case 2098:
case 2180:
case 489:
case 694:
case 3223:
case 912:
case 158:
case 2891:
case 2356:
case 3699:
case 1794:
case 181:
case 512:
case 1092:
case 2822:
case 2854:
case 1472:
case 2256:
case 2952:
case 893:
case 3323:
case 1751:
case 1971:
case 2772:
case 3864:
case 1704:
case 1117:
case 712:
case 3962:
case 2801:
case 2217:
case 2282:
case 3266:
case 3366:
case 1744:
case 2494:
case 2841:
case 3039:
case 1611:
case 1684:
case 2660:
case 148:
case 1134:
case 2836:
case 3789:
case 3279:
case 822:
case 2544:
case 2947:
case 571:
case 0:
case 3255:
case 3710:
case 2907:
case 2427:
case 1572:
case 3985:
case 2551:
case 3718:
case 1727:
case 2265:
case 771:
case 237:
case 565:
case 888:
case 1626:
case 2594:
case 3650:
case 851:
case 117:
case 1057:
case 3069:
case 3506:
case 631:
case 2570:
case 3177:
case 3336:
case 4006:
case 3671:
case 3236:
case 1909:
case 372:
case 3546:
case 3932:
case 1429:
case 1662:
case 2879:
case 1745:
case 896:
case 2495:
case 652:
case 3596:
case 3431:
case 2075:
case 953:
case 1452:
case 1904:
case 2631:
case 4030:
case 162:
case 2972:
case 3398:
case 25:
case 534:
case 3695:
case 1802:
case 2041:
case 1337:
case 3839:
case 2874:
case 1237:
case 3240:
case 3064:
case 524:
case 1547:
case 2612:
case 2137:
case 934:
case 2376:
case 729:
case 530:
case 3605:
case 1892:
case 2022:
case 753:
case 939:
case 2054:
case 1994:
case 3290:
case 3308:
case 720:
case 539:
case 98:
case 2091:
case 3348:
case 3035:
case 2471:
case 2724:
case 734:
case 2973:
case 3142:
case 1610:
case 447:
case 3374:
case 2840:
case 3017:
case 3082:
case 3763:
case 2509:
case 2898:
case 1028:
case 1139:
case 1525:
case 1758:
case 3102:
case 3784:
case 1843:
case 674:
case 359:
case 1750:
case 1215:
case 2808:
case 3726:
case 3121:
case 1978:
case 546:
case 2458:
case 2115:
case 3460:
case 2848:
case 404:
case 350:
case 463:
case 1020:
case 1315:
case 418:
case 333:
case 2753:
case 457:
case 1553:
case 876:
case 2859:
case 2929:
case 4068:
case 2409:
case 307:
case 1425:
case 349:
case 3694:
case 2449:
case 3568:
case 2499:
case 3644:
case 344:
case 668:
case 2558:
case 3711:
case 3560:
case 613:
case 2725:
case 1367:
case 3869:
case 3604:
case 2055:
case 392:
case 1995:
case 791:
case 2696:
case 24:
case 1552:
case 3275:
case 814:
case 3359:
case 1447:
case 3678:
case 326:
case 767:
case 810:
case 743:
case 1077:
case 991:
case 2269:
case 2606:
case 567:
case 3670:
case 3910:
case 235:
case 2036:
case 591:
case 2571:
case 1816:
case 17:
case 2114:
case 2646:
case 3868:
case 61:
case 1443:
case 3152:
case 786:
case 602:
case 2400:
case 1923:
case 1748:
case 1790:
case 487:
case 2440:
case 2078:
case 675:
case 986:
case 2490:
case 355:
case 1740:
case 472:
case 3006:
case 1700:
case 2162:
case 3186:
case 586:
case 3271:
case 1073:
case 2858:
case 3860:
case 2743:
case 2928:
case 1493:
case 4069:
case 2792:
case 3153:
case 2665:
case 2368:
case 74:
case 1326:
case 1226:
case 525:
case 1954:
case 1557:
case 3715:
case 1402:
case 2474:
case 801:
case 1922:
case 1824:
case 1168:
case 2094:
case 2260:
case 1363:
case 3258:
case 725:
case 3980:
case 2634:
case 1901:
case 243:
case 1160:
case 2702:
case 1886:
case 94:
case 998:
case 2004:
case 2163:
case 1492:
case 54:
case 1263:
case 2742:
case 1384:
case 1941:
case 1936:
case 1311:
case 4039:
case 1232:
case 3349:
case 1847:
case 2132:
case 75:
case 583:
case 87:
case 1502:
case 229:
case 3013:
case 3767:
case 983:
case 119:
case 3309:
case 1807:
case 230:
case 114:
case 1416:
case 108:
case 95:
case 3299:
case 253:
case 2757:
case 2027:
case 234:
case 783:
case 2656:
case 3714:
case 2330:
case 1233:
case 2849:
case 3107:
case 389:
case 1619:
case 3031:
case 1543:
case 2475:
case 2683:
case 3576:
case 2133:
case 32:
case 2500:
case 1503:
case 246:
case 1130:
case 3147:
case 3601:
case 2230:
case 3087:
case 1688:
case 3622:
case 2005:
case 176:
case 2548:
case 2045:
case 3691:
case 2338:
case 2185:
case 2508:
case 1593:
case 2635:
case 1029:
case 3780:
case 2804:
case 937:
case 578:
case 2669:
case 1974:
case 1577:
case 1701:
case 2454:
case 3719:
case 978:
case 2071:
case 141:
case 3173:
case 927:
case 2246:
case 2296:
case 2992:
case 1791:
case 881:
case 3675:
case 858:
case 1024:
case 271:
case 3659:
case 3788:
case 193:
case 3915:
case 3464:
case 727:
case 2851:
case 3937:
case 3534:
case 2579:
case 2058:
case 1873:
case 3060:
case 628:
case 1998:
case 492:
case 2903:
case 1667:
case 3304:
case 906:
case 3204:
case 3456:
case 638:
case 1161:
case 2555:
case 2870:
case 3172:
case 2943:
case 2466:
case 3482:
case 1908:
case 449:
case 1428:
case 3565:
case 1053:
case 3068:
case 682:
case 3896:
case 1723:
case 3294:
case 1990:
case 4065:
case 1959:
case 2845:
case 4056:
case 1615:
case 318:
case 363:
case 3434:
case 304:
case 3327:
case 3227:
case 1218:
case 1520:
case 2805:
case 423:
case 2455:
case 2118:
case 3517:
case 3582:
case 2009:
case 3465:
case 1289:
case 3831:
case 4082:
case 2639:
case 347:
case 1025:
case 1310:
case 4035:
case 2827:
case 703:
case 3345:
case 2554:
case 3690:
case 2522:
case 3535:
case 760:
case 817:
case 3245:
case 2591:
case 969:
case 3305:
case 2231:
case 2676:
case 3583:
case 560:
case 122:
case 964:
case 848:
case 3813:
case 1681:
case 3295:
case 1007:
case 903:
case 212:
case 4083:
case 2501:
case 1637:
case 1187:
case 1112:
case 2212:
case 3030:
case 1047:
case 2916:
case 3967:
case 852:
case 2244:
case 3058:
case 3579:
case 3361:
case 705:
case 2304:
case 1144:
case 1616:
case 2846:
case 1272:
case 3943:
case 3728:
case 2172:
case 2806:
case 3261:
case 772:
case 1063:
case 1104:
case 1717:
case 1782:
case 3555:
case 3870:
case 2417:
case 2482:
case 3466:
case 3878:
case 1756:
case 572:
case 3720:
case 1026:
case 2351:
case 2896:
case 486:
case 3050:
case 1194:
case 821:
case 257:
case 1657:
case 3669:
case 3804:
case 3346:
case 2780:
case 3902:
case 365:
case 3454:
case 3422:
case 4036:
case 1939:
case 3206:
case 3071:
case 2435:
case 2370:
case 1273:
case 3844:
case 2719:
case 425:
case 3491:
case 3246:
case 3536:
case 3992:
case 2378:
case 498:
case 3441:
case 3894:
case 2675:
case 2915:
case 2788:
case 2659:
case 1178:
case 3396:
case 44:
case 266:
case 2464:
case 1480:
case 2278:
case 2648:
case 3827:
case 2038:
case 2690:
case 3554:
case 2345:
case 1105:
case 1588:
case 1085:
case 2129:
case 2535:
case 2608:
case 4054:
case 2600:
case 3387:
case 3312:
case 2583:
case 4001:
case 1519:
case 1643:
case 30:
case 2295:
case 2813:
case 4041:
case 1810:
case 2564:
case 3331:
case 2698:
case 1603:
case 2030:
case 3287:
case 2434:
case 263:
case 842:
case 96:
case 2327:
case 204:
case 3099:
case 56:
case 2227:
case 3118:
case 711:
case 200:
case 4023:
case 1127:
case 2517:
case 2582:
case 3313:
case 2:
case 2887:
case 3110:
case 1969:
case 209:
case 1734:
case 3213:
case 911:
case 195:
case 3189:
case 1011:
case 478:
case 2153:
case 3792:
case 736:
case 3051:
case 427:
case 3368:
case 2350:
case 1253:
case 1935:
case 3268:
case 437:
case 2439:
case 3721:
case 1353:
case 2715:
case 726:
case 3094:
case 3126:
case 619:
case 1567:
case 3871:
case 3260:
case 1862:
case 3702:
case 1415:
case 936:
case 2679:
case 3634:
case 926:
case 3004:
case 2358:
case 3360:
case 536:
case 3793:
case 868:
case 585:
case 813:
case 2096:
case 3575:
case 3850:
case 2124:
case 2868:
case 2476:
case 540:
case 3920:
case 4059:
case 1956:
case 985:
case 3498:
case 4075:
case 749:
case 940:
case 3440:
case 3078:
case 1437:
case 992:
case 3559:
case 549:
case 255:
case 2006:
case 2569:
case 744:
case 1863:
case 1776:
case 949:
case 2636:
case 3162:
case 3408:
case 2781:
case 1982:
case 3743:
case 1171:
case 11:
case 3475:
case 533:
case 102:
case 289:
case 3330:
case 3849:
case 2641:
case 3133:
case 1207:
case 923:
case 4040:
case 1811:
case 3683:
case 933:
case 3664:
case 346:
case 759:
case 554:
case 2012:
case 4000:
case 3230:
case 3459:
case 1934:
case 3540:
case 950:
case 523:
case 175:
case 3005:
case 3590:
case 197:
case 2622:
case 245:
case 723:
case 3548:
case 2197:
case 3238:
case 4008:
case 874:
case 1965:
case 3045:
case 2691:
case 4048:
case 1397:
case 3508:
case 161:
case 3185:
case 1010:
case 1325:
case 4074:
case 2209:
case 2666:
case 3617:
case 1109:
case 1628:
case 673:
case 329:
case 3574:
case 2309:
case 1149:
case 38:
case 3716:
case 2013:
case 1885:
case 1467:
case 2623:
case 1515:
case 353:
case 324:
case 464:
case 3027:
case 1018:
case 403:
case 816:
case 1837:
case 3840:
case 2374:
case 980:
case 584:
case 3973:
case 945:
case 1532:
case 2763:
case 2017:
case 2876:
case 1760:
case 2784:
case 580:
case 1511:
case 3800:
case 984:
case 3613:
case 1426:
case 259:
case 3450:
case 1906:
case 4009:
case 73:
case 2726:
case 3808:
case 223:
case 3023:
case 1221:
case 3599:
case 1768:
case 168:
case 113:
case 3458:
case 2121:
case 2627:
case 589:
case 2056:
case 2192:
case 3890:
case 2200:
case 1303:
case 3972:
case 35:
case 1019:
case 3276:
case 3631:
case 1961:
case 3786:
case 2762:
case 1100:
case 1533:
case 3041:
case 1080:
case 2064:
case 2103:
case 1343:
case 2240:
case 1198:
case 3137:
case 3612:
case 3687:
case 1190:
case 615:
case 2605:
case 1148:
case 1393:
case 1815:
case 2390:
case 67:
case 2035:
case 2348:
case 1108:
case 2193:
case 236:
case 2918:
case 662:
case 2275:
case 3797:
case 2375:
case 2259:
case 1738:
case 398:
case 1159:
case 2989:
case 325:
case 2670:
case 4071:
case 1730:
case 2733:
case 1562:
case 3646:
case 1485:
case 3707:
case 3369:
case 3571:
case 601:
case 3859:
case 1357:
case 3409:
case 897:
case 386:
case 170:
case 3929:
case 1432:
case 955:
case 1411:
case 174:
case 2694:
case 3449:
case 2116:
case 244:
case 3499:
case 2644:
case 1814:
case 81:
case 2034:
case 755:
case 802:
case 2560:
case 1912:
case 2711:
case 3055:
case 1931:
case 2732:
case 2869:
case 1316:
case 3661:
case 285:
case 3356:
case 3891:
case 420:
case 303:
case 3444:
case 364:
case 4027:
case 1123:
case 424:
case 1888:
case 2120:
case 2461:
case 3822:
case 453:
case 1220:
case 2323:
case 3952:
case 3924:
case 3527:
case 69:
case 1166:
case 1880:
case 2128:
case 2266:
case 3282:
case 3801:
case 3986:
case 1228:
case 2962:
case 1328:
case 2513:
case 439:
case 1819:
case 2366:
case 2883:
case 3074:
case 1625:
case 547:
case 131:
case 1968:
case 2222:
case 3470:
case 1697:
case 763:
case 2856:
case 2391:
case 9:
case 718:
case 3505:
case 3638:
case 3188:
case 947:
case 1796:
case 700:
case 2354:
case 909:
case 3235:
case 3953:
case 2322:
case 121:
case 4005:
case 2301:
case 3773:
case 3119:
case 2241:
case 2531:
case 1607:
case 918:
case 7:
case 3283:
case 3364:
case 3478:
case 3040:
case 2587:
case 4095:
case 747:
case 504:
case 1101:
case 2341:
case 1647:
case 3630:
case 3098:
case 2817:
case 2506:
case 2069:
case 3405:
case 2177:
case 4070:
case 1731:
case 2932:
case 2546:
case 895:
case 1014:
case 3879:
case 1686:
case 1136:
case 287:
case 190:
case 3729:
case 3075:
case 456:
case 142:
case 2596:
case 757:
case 3578:
case 2865:
case 838:
case 194:
case 3836:
case 566:
case 1179:
case 3660:
case 2355:
case 1067:
case 1713:
case 966:
case 2561:
case 3334:
case 2379:
case 2933:
case 1418:
case 3504:
case 3265:
case 2718:
case 2985:
case 1410:
case 1653:
case 337:
case 491:
case 2650:
case 3997:
case 3594:
case 766:
case 1938:
case 419:
case 1609:
case 2166:
case 3182:
case 3117:
case 2228:
case 1962:
case 637:
case 1266:
case 3042:
case 2819:
case 2328:
case 2589:
case 2625:
case 3611:
case 678:
case 1039:
case 2015:
case 3021:
case 1699:
case 2123:
case 3794:
case 381:
case 1461:
case 866:
case 3092:
case 3156:
case 1120:
case 2888:
case 3472:
case 3751:
case 2220:
case 2518:
case 928:
case 3183:
case 2141:
case 3043:
case 2607:
case 1531:
case 2746:
case 977:
case 1984:
case 2960:
case 2101:
case 3958:
case 1341:
case 795:
case 606:
case 1201:
case 782:
case 1817:
case 3319:
case 3828:
case 2706:
case 3003:
case 577:
case 2647:
case 3288:
case 2697:
case 3950:
case 728:
case 231:
case 1222:
case 2968:
case 777:
case 3820:
case 582:
case 1391:
case 476:
case 3135:
case 1291:
case 1446:
case 857:
case 2796:
case 738:
case 3473:
case 187:
case 804:
case 242:
case 1431:
case 818:
case 800:
case 1865:
case 1487:
case 3705:
case 2277:
case 1506:
case 299:
case 3949:
case 105:
case 2787:
case 2712:
case 1911:
case 1671:
case 2014:
case 3429:
case 1932:
case 2686:
case 2136:
case 3573:
case 3795:
case 3727:
case 2653:
case 3165:
case 3626:
case 1413:
case 2938:
case 317:
case 3057:
case 2179:
case 3134:
case 1658:
case 348:
case 1789:
case 3016:
case 2067:
case 2930:
case 4072:
case 1379:
case 2418:
case 2155:
case 3572:
case 3663:
case 3750:
case 575:
case 1726:
case 1121:
case 902:
case 2484:
case 2463:
case 761:
case 150:
case 2292:
case 975:
case 3618:
case 133:
case 3020:
case 3315:
case 2321:
case 502:
case 1056:
case 1142:
case 2837:
case 2242:
case 686:
case 2946:
case 3689:
case 3525:
case 3139:
case 2342:
case 1876:
case 3758:
case 3843:
case 1274:
case 1468:
case 2426:
case 2881:
case 2202:
case 1538:
case 1605:
case 3892:
case 2190:
case 625:
case 2393:
case 1290:
case 2148:
case 1308:
case 451:
case 2815:
case 1208:
case 1390:
case 1645:
case 1348:
case 2108:
case 2629:
case 1035:
case 3904:
case 1200:
case 1143:
case 3771:
case 3424:
case 1695:
case 2533:
case 3802:
case 3281:
case 1083:
case 1839:
case 1340:
case 1762:
case 2243:
case 3337:
case 1064:
case 2080:
case 2343:
case 3547:
case 3944:
case 1530:
case 1300:
case 3314:
case 441:
case 3497:
case 2913:
case 2673:
case 3586:
case 2562:
case 1733:
case 2867:
case 3816:
case 2485:
case 2175:
case 65:
case 3524:
case 1918:
case 3407:
case 493:
case 1430:
case 3447:
case 4024:
case 1259:
case 216:
case 4052:
case 126:
case 2159:
case 2814:
case 2987:
case 2912:
case 3267:
case 1604:
case 2931:
case 2316:
case 3367:
case 2563:
case 3709:
case 3995:
case 185:
case 83:
case 1065:
case 1651:
case 2432:
case 107:
case 3905:
case 1157:
case 4053:
case 3425:
case 2257:
case 1694:
case 274:
case 1568:
case 3284:
case 3363:
case 49:
case 3516:
case 2415:
case 3160:
case 3901:
case 1679:
case 3886:
case 624:
case 2862:
case 1655:
case 3072:
case 620:
case 916:
case 3263:
case 1153:
case 3991:
case 417:
case 1350:
case 639:
case 3402:
case 1715:
case 373:
case 3922:
case 1250:
case 1439:
case 716:
case 68:
case 3740:
case 1737:
case 155:
case 2863:
case 779:
case 1006:
case 1271:
case 1636:
case 3700:
case 1186:
case 2776:
case 570:
case 2286:
case 3262:
case 2171:
case 3493:
case 2917:
case 2514:
case 1124:
case 1868:
case 1096:
case 1152:
case 2224:
case 2956:
case 854:
case 1476:
case 979:
case 646:
case 2352:
case 833:
case 3923:
case 3748:
case 2324:
case 3403:
case 3790:
case 2437:
case 579:
case 3688:
case 2297:
case 3138:
case 713:
case 1622:
case 3759:
case 1197:
case 4093:
case 3385:
case 376:
case 3285:
case 1691:
case 2965:
case 261:
case 3029:
case 3775:
case 184:
case 2397:
case 1107:
case 3955:
case 913:
case 3543:
case 3825:
case 844:
case 1641:
case 513:
case 3503:
case 568:
case 13:
case 2307:
case 1147:
case 656:
case 3680:
case 4043:
case 2537:
case 3333:
case 3416:
case 1623:
case 2199:
case 314:
case 2885:
case 1299:
case 3521:
case 4092:
case 2515:
case 643:
case 2018:
case 826:
case 481:
case 1399:
case 310:
case 2620:
case 3592:
case 3311:
case 1209:
case 3936:
case 2628:
case 1666:
case 3502:
case 1249:
case 2833:
case 3332:
case 1767:
case 1013:
case 3807:
case 1309:
case 3908:
case 1417:
case 790:
case 3428:
case 1251:
case 999:
case 2756:
case 1068:
case 794:
case 2026:
case 1294:
case 157:
case 3990:
case 1534:
case 594:
case 2084:
case 942:
case 86:
case 1846:
case 2144:
case 799:
case 590:
case 3161:
case 3900:
case 542:
case 994:
case 1981:
case 3766:
case 2717:
case 1344:
case 1806:
case 1172:
case 1483:
case 3791:
case 2419:
case 1675:
case 60:
case 393:
case 2480:
case 1464:
case 166:
case 1278:
case 3106:
case 47:
case 3577:
case 3974:
case 2939:
case 1270:
case 2373:
case 3701:
case 3614:
case 1435:
case 3146:
case 1173:
case 3086:
case 1583:
case 2195:
case 1600:
case 2033:
case 2889:
case 1295:
case 671:
case 1813:
case 3681:
case 2519:
case 1640:
case 1395:
case 2810:
case 462:
case 3047:
case 332:
case 1564:
case 2580:
case 1648:
case 3097:
case 2329:
case 2105:
case 1345:
case 3477:
case 1129:
case 2693:
case 1245:
case 2085:
case 1305:
case 2145:
case 3528:
case 2032:
case 521:
case 1517:
case 1582:
case 1914:
case 3755:
case 2642:
case 931:
case 1465:
case 1887:
case 282:
case 109:
case 4028:
case 3113:
case 2969:
case 2011:
case 3779:
case 3025:
case 3310:
case 2602:
case 2621:
case 1434:
case 3615:
case 118:
case 3318:
case 3829:
case 731:
case 104:
case 238:
case 2765:
case 552:
case 2692:
case 3520:
case 3218:
case 2127:
case 1992:
case 59:
case 2024:
case 1894:
case 416:
case 803:
case 2052:
case 3419:
case 860:
case 1401:
case 99:
case 2722:
case 1851:
case 548:
case 3480:
case 1669:
case 1346:
case 3764:
case 165:
case 2974:
case 1071:
case 3273:
case 1844:
case 3062:
case 3783:
case 1942:
case 2741:
case 2428:
case 1466:
case 2908:
case 474:
case 1993:
case 3756:
case 1878:
case 2053:
case 1720:
case 2723:
case 647:
case 3657:
case 2873:
case 1058:
case 3084:
case 1579:
case 2940:
case 1423:
case 3144:
case 1903:
case 3372:
case 2998:
case 604:
case 2161:
case 3976:
case 1728:
case 3104:
case 1870:
case 2766:
case 1009:
case 2528:
case 1313:
case 1110:
case 3642:
case 3969:
case 2113:
case 1895:
case 2310:
case 1213:
case 3734:
case 2779:
case 1189:
case 1479:
case 3621:
case 377:
case 1099:
case 296:
case 2318:
case 1523:
case 2218:
case 1805:
case 3692:
case 468:
case 413:
case 1118:
case 2975:
case 1312:
case 1676:
case 1231:
case 2007:
case 3643:
case 112:
case 958:
case 2131:
case 1777:
case 3810:
case 1501:
case 581:
case 666:
case 4019:
case 3580:
case 1916:
case 1287:
case 558:
case 2047:
case 1827:
case 3329:
case 2097:
case 781:
case 3818:
case 758:
case 3588:
case 878:
case 251:
case 827:
case 288:
case 3229:
case 1591:
case 3386:
case 2740:
case 2362:
case 645:
case 1490:
case 3677:
case 2798:
case 1448:
case 2073:
case 3884:
case 1162:
case 2700:
case 3982:
case 3917:
case 2966:
case 1408:
case 3171:
case 1928:
case 499:
case 684:
case 3286:
case 689:
case 494:
case 2443:
case 1850:
case 1575:
case 3252:
case 1400:
case 3224:
case 442:
case 2403:
case 63:
case 2748:
case 2923:
case 2853:
case 1078:
case 1440:
case 1559:
case 2790:
case 1871:
case 2516:
case 3964:
case 2284:
case 1260:
case 2363:
case 715:
case 2774:
case 143:
case 3158:
case 1634:
case 1184:
case 2160:
case 77:
case 2072:
case 2384:
case 1360:
case 2941:
case 3983:
case 2442:
case 1792:
case 2991:
case 2326:
case 3935:
case 915:
case 1368:
case 1721:
case 3353:
case 2402:
case 3150:
case 3885:
case 214:
case 3199:
case 3467:
case 153:
case 962:
case 124:
case 210:
case 701:
case 134:
case 2897:
case 3018:
case 4015:
case 120:
case 562:
case 3010:
case 3325:
case 2936:
case 2542:
case 762:
case 1617:
case 2847:
case 139:
case 1111:
case 2502:
case 1574:
case 2211:
case 3225:
case 835:
case 18:
case 1716:
case 421:
case 1005:
case 1590:
case 397:
case 2138:
case 2688:
case 1548:
case 276:
case 1238:
case 1338:
case 1045:
case 2285:
case 3397:
case 2775:
case 361:
case 1185:
case 1635:
case 2593:
case 2619:
case 1475:
case 2543:
case 2955:
case 3347:
case 1849:
case 1500:
case 1095:
case 2825:
case 3811:
case 1683:
case 1133:
case 2680:
case 146:
case 3307:
case 452:
case 3247:
case 1230:
case 1459:
case 375:
case 3537:
case 2979:
case 3088:
case 3190:
case 1054:
case 891:
case 2994:
case 2597:
case 2821:
case 3462:
case 1091:
case 3293:
case 3815:
case 867:
case 1724:
case 1471:
case 201:
case 710:
case 3585:
case 3629:
case 1752:
case 3108:
case 2424:
case 2771:
case 908:
case 262:
case 1972:
case 2507:
case 1631:
case 1276:
case 2904:
case 1181:
case 3243:
case 2337:
case 3961:
case 2281:
case 3533:
case 719:
case 508:
case 3343:
case 2237:
case 3080:
case 1376:
case 1687:
case 1612:
case 910:
case 1137:
case 2215:
case 2893:
case 1599:
case 3221:
case 644:
case 438:
case 1458:
case 3484:
case 1115:
case 368:
case 3392:
case 640:
case 2618:
case 692:
case 3996:
case 1848:
case 428:
case 477:
case 685:
case 1753:
case 3321:
case 2315:
case 3302:
case 976:
case 495:
case 3532:
case 2803:
case 2028:
case 1509:
case 3242:
case 2758:
case 3342:
case 576:
case 2525:
case 2689:
case 2970:
case 3426:
case 3906:
case 1239:
case 379:
case 623:
case 3216:
case 2267:
case 1079:
case 1725:
case 1558:
case 3987:
case 3912:
case 3672:
case 3563:
case 650:
case 633:
case 1661:
case 846:
case 4084:
case 1859:
case 2553:
case 4026:
case 3432:
case 370:
case 3411:
case 2905:
case 374:
case 2799:
case 3257:
case 659:
case 4062:
case 125:
case 1747:
case 3730:
case 2314:
case 1036:
case 2214:
case 3562:
case 2586:
case 3673:
case 135:
case 88:
case 973:
case 1707:
case 1114:
case 3485:
case 829:
case 1646:
case 27:
case 2816:
case 1369:
case 3867:
case 2927:
case 2524:
case 3175:
case 820:
case 1797:
case 2447:
case 834:
case 3159:
case 687:
case 2219:
case 1773:
case 996:
case 3141:
case 2183:
case 352:
case 3746:
case 3607:
case 596:
case 1478:
case 3037:
case 2958:
case 3647:
case 402:
case 1098:
case 3706:
case 2828:
case 2770:
case 1866:
case 2319:
case 2950:
case 461:
case 1335:
case 1470:
case 2820:
case 1188:
case 1090:
case 1823:
case 2685:
case 2529:
case 1545:
case 2473:
case 2388:
case 321:
case 2704:
case 3166:
case 865:
case 588:
case 3880:
case 722:
case 1282:
case 1986:
case 3510:
case 4089:
case 3761:
case 3328:
case 169:
case 732:
case 1382:
case 3819:
case 2744:
case 951:
case 2611:
case 3589:
case 1841:
case 2002:
case 2021:
case 258:
case 532:
case 103:
case 3015:
case 281:
case 2794:
case 3123:
case 922:
case 1444:
case 3888:
case 1854:
case 788:
case 1822:
case 160:
case 1952:
case 2751:
case 1527:
case 1256:
case 2727:
case 1551:
case 2165:
case 3410:
case 541:
case 2626:
case 1594:
case 1997:
case 793:
case 3938:
case 1836:
case 812:
case 2684:
case 3930:
case 1544:
case 2016:
case 593:
case 2877:
case 1427:
case 741:
case 2572:
case 29:
case 993:
case 1504:
case 3418:
case 1729:
case 1075:
case 390:
case 342:
case 1059:
case 2705:
case 1578:
case 2999:
case 2949:
case 1570:
case 399:
case 1855:
case 3277:
case 1405:
case 3712:
case 1925:
case 2429:
case 2795:
case 1879:
case 1445:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747119602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,];
var gg_b = "1747119602/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
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
