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
case 2245:
case 2951:
case 3653:
case 3738:
case 2865:
case 2819:
case 3269:
case 2979:
case 1080:
case 47:
case 755:
case 3443:
case 3669:
case 2076:
case 3974:
case 935:
case 2534:
case 315:
case 2200:
case 3813:
case 1031:
case 2969:
case 1771:
case 1141:
case 3962:
case 3384:
case 832:
case 496:
case 1920:
case 3107:
case 46:
case 1237:
case 4:
case 2694:
case 240:
case 1345:
case 3917:
case 946:
case 1866:
case 3195:
case 2575:
case 320:
case 2283:
case 549:
case 2502:
case 316:
case 1852:
case 3773:
case 1687:
case 1017:
case 2326:
case 1187:
case 1088:
case 3742:
case 696:
case 3545:
case 1446:
case 940:
case 604:
case 2695:
case 201:
case 1810:
case 519:
case 2451:
case 2469:
case 3259:
case 981:
case 3053:
case 1614:
case 473:
case 965:
case 209:
case 1435:
case 3075:
case 2579:
case 4064:
case 309:
case 470:
case 3002:
case 1640:
case 789:
case 2889:
case 4049:
case 3864:
case 2423:
case 3640:
case 1736:
case 3549:
case 1994:
case 3903:
case 3457:
case 3588:
case 304:
case 303:
case 3058:
case 738:
case 514:
case 3033:
case 2688:
case 2721:
case 82:
case 1422:
case 2829:
case 4017:
case 926:
case 2590:
case 2609:
case 835:
case 1331:
case 3229:
case 2511:
case 2587:
case 2596:
case 2280:
case 900:
case 56:
case 849:
case 2211:
case 143:
case 521:
case 2971:
case 2299:
case 688:
case 2155:
case 3687:
case 2962:
case 2090:
case 1371:
case 2340:
case 3498:
case 1083:
case 2714:
case 1654:
case 3971:
case 1002:
case 2939:
case 1505:
case 1721:
case 1261:
case 1764:
case 3705:
case 1605:
case 2792:
case 98:
case 956:
case 1128:
case 2525:
case 1839:
case 401:
case 1758:
case 1362:
case 1465:
case 3583:
case 276:
case 2170:
case 1589:
case 1539:
case 1705:
case 4031:
case 2439:
case 35:
case 1648:
case 2373:
case 1816:
case 1891:
case 1733:
case 3431:
case 790:
case 163:
case 156:
case 1175:
case 2292:
case 1324:
case 3959:
case 442:
case 3604:
case 595:
case 2055:
case 2845:
case 1639:
case 3788:
case 3782:
case 1869:
case 3485:
case 2523:
case 2999:
case 1936:
case 3489:
case 729:
case 2115:
case 1385:
case 3606:
case 874:
case 141:
case 635:
case 2174:
case 3026:
case 1078:
case 1220:
case 3196:
case 2201:
case 1835:
case 2360:
case 1055:
case 139:
case 1566:
case 3547:
case 3292:
case 848:
case 3617:
case 1022:
case 31:
case 2133:
case 1749:
case 2901:
case 1913:
case 2746:
case 2670:
case 634:
case 1776:
case 3689:
case 3484:
case 4091:
case 3915:
case 1490:
case 2897:
case 2636:
case 3867:
case 258:
case 1191:
case 3865:
case 2766:
case 2091:
case 3110:
case 2496:
case 1786:
case 1806:
case 2995:
case 668:
case 1643:
case 1341:
case 3542:
case 508:
case 2986:
case 1177:
case 2744:
case 3745:
case 2130:
case 3143:
case 2798:
case 3834:
case 2244:
case 449:
case 640:
case 157:
case 250:
case 2907:
case 2459:
case 345:
case 1871:
case 2768:
case 1887:
case 1171:
case 1006:
case 859:
case 2761:
case 2726:
case 3378:
case 978:
case 1205:
case 3991:
case 3894:
case 11:
case 2384:
case 3908:
case 3695:
case 2341:
case 941:
case 1514:
case 3111:
case 3440:
case 3743:
case 3436:
case 2804:
case 2637:
case 1843:
case 2908:
case 3839:
case 115:
case 979:
case 1939:
case 4080:
case 1419:
case 3350:
case 1012:
case 1130:
case 846:
case 3210:
case 2725:
case 3385:
case 3680:
case 2773:
case 3303:
case 1397:
case 690:
case 547:
case 1857:
case 2249:
case 2096:
case 1067:
case 2785:
case 703:
case 4027:
case 1754:
case 132:
case 2824:
case 2150:
case 1867:
case 487:
case 322:
case 2891:
case 3299:
case 2878:
case 150:
case 453:
case 2573:
case 3211:
case 553:
case 64:
case 3449:
case 1238:
case 2750:
case 3649:
case 266:
case 2807:
case 380:
case 2704:
case 77:
case 1890:
case 2828:
case 2922:
case 1948:
case 1646:
case 3645:
case 3540:
case 350:
case 2945:
case 1556:
case 3947:
case 4053:
case 3913:
case 3388:
case 1627:
case 3601:
case 53:
case 3138:
case 1277:
case 1351:
case 2077:
case 1451:
case 2154:
case 1520:
case 279:
case 1905:
case 414:
case 502:
case 1040:
case 364:
case 3335:
case 1880:
case 4010:
case 561:
case 531:
case 2305:
case 1133:
case 1645:
case 3094:
case 3037:
case 2359:
case 1612:
case 3230:
case 4005:
case 937:
case 1447:
case 4047:
case 273:
case 2661:
case 1502:
case 3454:
case 3567:
case 8:
case 3005:
case 3104:
case 793:
case 3241:
case 3250:
case 3106:
case 816:
case 3189:
case 3628:
case 4072:
case 218:
case 629:
case 3868:
case 1387:
case 3797:
case 1009:
case 2268:
case 2446:
case 2238:
case 3950:
case 3775:
case 3706:
case 1822:
case 2893:
case 257:
case 762:
case 744:
case 195:
case 4084:
case 1549:
case 417:
case 843:
case 3818:
case 1623:
case 1066:
case 1304:
case 2535:
case 2429:
case 1153:
case 1115:
case 198:
case 913:
case 3287:
case 1472:
case 3609:
case 564:
case 3404:
case 1222:
case 1475:
case 3056:
case 186:
case 1572:
case 222:
case 2242:
case 2195:
case 2034:
case 2206:
case 2099:
case 3558:
case 517:
case 1279:
case 3281:
case 3883:
case 3382:
case 373:
case 3831:
case 1221:
case 3619:
case 3463:
case 1559:
case 1229:
case 2652:
case 1768:
case 983:
case 1504:
case 3784:
case 2513:
case 2597:
case 1292:
case 3367:
case 3260:
case 3615:
case 425:
case 3826:
case 3696:
case 2866:
case 4081:
case 340:
case 1885:
case 2416:
case 29:
case 1498:
case 2903:
case 810:
case 2598:
case 503:
case 2754:
case 3234:
case 776:
case 105:
case 102:
case 2075:
case 680:
case 1850:
case 1217:
case 1251:
case 2300:
case 2818:
case 3790:
case 1892:
case 3700:
case 1379:
case 3627:
case 1774:
case 2952:
case 1401:
case 2989:
case 1682:
case 2135:
case 3543:
case 2564:
case 1929:
case 3412:
case 2760:
case 2074:
case 1673:
case 12:
case 1728:
case 2241:
case 1018:
case 3030:
case 2291:
case 1501:
case 172:
case 3435:
case 3481:
case 2674:
case 2209:
case 619:
case 1849:
case 3942:
case 1847:
case 1698:
case 428:
case 3200:
case 1352:
case 22:
case 355:
case 3027:
case 2387:
case 3236:
case 2392:
case 625:
case 1763:
case 2569:
case 94:
case 2313:
case 3048:
case 2185:
case 1996:
case 4009:
case 813:
case 2851:
case 518:
case 497:
case 2980:
case 290:
case 3636:
case 1564:
case 90:
case 314:
case 3501:
case 415:
case 2930:
case 2333:
case 2378:
case 691:
case 1834:
case 1720:
case 523:
case 1863:
case 439:
case 1483:
case 2874:
case 2510:
case 2160:
case 1192:
case 312:
case 962:
case 123:
case 704:
case 1434:
case 432:
case 1544:
case 3599:
case 2070:
case 539:
case 879:
case 1375:
case 1289:
case 1122:
case 2462:
case 963:
case 3747:
case 2400:
case 887:
case 821:
case 2998:
case 85:
case 2205:
case 3034:
case 2871:
case 1896:
case 3519:
case 3736:
case 199:
case 1072:
case 362:
case 3118:
case 3456:
case 2215:
case 1257:
case 2107:
case 2648:
case 1951:
case 1372:
case 2137:
case 1829:
case 1427:
case 3105:
case 3152:
case 318:
case 3419:
case 945:
case 182:
case 3045:
case 535:
case 1466:
case 2217:
case 1454:
case 2228:
case 1313:
case 3563:
case 58:
case 326:
case 191:
case 2304:
case 726:
case 2759:
case 2250:
case 2051:
case 3847:
case 1058:
case 307:
case 2456:
case 3063:
case 1429:
case 1870:
case 1711:
case 2668:
case 892:
case 3012:
case 2504:
case 1484:
case 3983:
case 3279:
case 1551:
case 3691:
case 500:
case 3923:
case 1747:
case 807:
case 902:
case 2660:
case 4020:
case 2544:
case 3988:
case 1431:
case 722:
case 2312:
case 3144:
case 3355:
case 2044:
case 970:
case 2322:
case 2671:
case 3550:
case 3672:
case 366:
case 1804:
case 898:
case 2428:
case 2:
case 562:
case 1716:
case 1962:
case 3277:
case 3842:
case 2642:
case 1932:
case 3495:
case 4073:
case 2600:
case 1872:
case 3137:
case 1978:
case 1093:
case 2607:
case 1883:
case 129:
case 1706:
case 1541:
case 3719:
case 242:
case 888:
case 2509:
case 2737:
case 4002:
case 324:
case 1296:
case 3346:
case 1594:
case 1165:
case 2545:
case 3166:
case 1322:
case 3597:
case 1398:
case 1342:
case 4019:
case 3086:
case 2836:
case 1271:
case 3032:
case 1348:
case 2080:
case 1267:
case 2624:
case 214:
case 733:
case 1230:
case 1390:
case 3885:
case 4008:
case 99:
case 734:
case 826:
case 560:
case 1900:
case 88:
case 1925:
case 1143:
case 1958:
case 3262:
case 577:
case 2277:
case 3861:
case 825:
case 259:
case 3967:
case 1772:
case 231:
case 3731:
case 573:
case 3076:
case 2376:
case 3961:
case 256:
case 1320:
case 3087:
case 658:
case 957:
case 920:
case 2386:
case 1082:
case 3207:
case 1567:
case 2500:
case 3071:
case 2143:
case 754:
case 855:
case 2017:
case 655:
case 171:
case 673:
case 3223:
case 972:
case 1089:
case 837:
case 2460:
case 558:
case 3486:
case 1036:
case 2517:
case 3966:
case 1975:
case 3097:
case 2771:
case 3124:
case 2602:
case 1543:
case 2393:
case 1272:
case 2449:
case 3354:
case 2735:
case 3417:
case 909:
case 1587:
case 382:
case 3733:
case 3941:
case 1814:
case 2690:
case 2495:
case 2837:
case 2006:
case 3249:
case 1901:
case 291:
case 3266:
case 1689:
case 1181:
case 3067:
case 7:
case 1532:
case 861:
case 3298:
case 1124:
case 3995:
case 480:
case 2706:
case 1686:
case 2639:
case 1613:
case 2191:
case 4092:
case 1731:
case 2876:
case 796:
case 1410:
case 1214:
case 2190:
case 565:
case 676:
case 3554:
case 609:
case 2461:
case 2375:
case 1337:
case 3693:
case 1902:
case 1817:
case 215:
case 3792:
case 2561:
case 3523:
case 3300:
case 213:
case 2594:
case 3537:
case 87:
case 3541:
case 15:
case 1295:
case 2289:
case 1471:
case 202:
case 3141:
case 2259:
case 1415:
case 3634:
case 284:
case 544:
case 155:
case 2823:
case 2782:
case 34:
case 3479:
case 2270:
case 3848:
case 2255:
case 1265:
case 3572:
case 872:
case 1560:
case 2357:
case 4085:
case 188:
case 2287:
case 3663:
case 1956:
case 1110:
case 3844:
case 2327:
case 216:
case 4013:
case 3472:
case 3508:
case 41:
case 1903:
case 574:
case 1652:
case 923:
case 1150:
case 1159:
case 3360:
case 3569:
case 2168:
case 824:
case 1121:
case 3231:
case 1050:
case 1780:
case 3409:
case 2050:
case 2401:
case 2853:
case 2701:
case 3046:
case 253:
case 1381:
case 1610:
case 3776:
case 858:
case 747:
case 3297:
case 1980:
case 1663:
case 3261:
case 918:
case 223:
case 2978:
case 254:
case 3218:
case 3626:
case 86:
case 665:
case 3586:
case 2052:
case 515:
case 3928:
case 4028:
case 3171:
case 1621:
case 3665:
case 1246:
case 3416:
case 4014:
case 831:
case 3488:
case 3801:
case 740:
case 1712:
case 2611:
case 39:
case 778:
case 2478:
case 3258:
case 4026:
case 2665:
case 2286:
case 2682:
case 1482:
case 1580:
case 2182:
case 493:
case 2649:
case 3781:
case 829:
case 626:
case 347:
case 1008:
case 3674:
case 1818:
case 3886:
case 287:
case 2353:
case 2066:
case 1628:
case 3025:
case 3605:
case 1346:
case 3400:
case 3723:
case 395:
case 2475:
case 3559:
case 3280:
case 2975:
case 2192:
case 1095:
case 134:
case 3557:
case 854:
case 2555:
case 2821:
case 1679:
case 2974:
case 2777:
case 3405:
case 2883:
case 1146:
case 2207:
case 3643:
case 4021:
case 1762:
case 3127:
case 3891:
case 2910:
case 2432:
case 1927:
case 117:
case 2938:
case 431:
case 286:
case 2089:
case 1139:
case 499:
case 1695:
case 714:
case 2032:
case 3536:
case 1992:
case 715:
case 3349:
case 620:
case 3810:
case 1723:
case 1577:
case 2793:
case 3139:
case 2371:
case 1573:
case 1805:
case 1864:
case 1986:
case 3709:
case 1719:
case 2426:
case 2048:
case 3892:
case 272:
case 348:
case 936:
case 589:
case 3375:
case 72:
case 911:
case 537:
case 313:
case 3992:
case 881:
case 1170:
case 1848:
case 1808:
case 3112:
case 2646:
case 2203:
case 2972:
case 1046:
case 536:
case 3430:
case 1746:
case 2909:
case 2612:
case 2730:
case 3512:
case 2503:
case 1961:
case 2514:
case 681:
case 2981:
case 1395:
case 3313:
case 1797:
case 3093:
case 159:
case 1444:
case 359:
case 895:
case 3998:
case 1117:
case 2527:
case 1655:
case 2516:
case 204:
case 2778:
case 4022:
case 3518:
case 1339:
case 546:
case 806:
case 2220:
case 1899:
case 3306:
case 1044:
case 3455:
case 3477:
case 62:
case 368:
case 1509:
case 2686:
case 184:
case 2139:
case 6:
case 1650:
case 97:
case 3381:
case 4077:
case 1966:
case 2940:
case 4038:
case 1542:
case 654:
case 71:
case 527:
case 3504:
case 1642:
case 3016:
case 566:
case 3213:
case 3502:
case 3973:
case 4068:
case 2234:
case 836:
case 1273:
case 3654:
case 4051:
case 1953:
case 641:
case 2526:
case 741:
case 4039:
case 283:
case 3175:
case 274:
case 3803:
case 3147:
case 3077:
case 1937:
case 996:
case 3394:
case 1486:
case 1145:
case 3866:
case 233:
case 1578:
case 2811:
case 3761:
case 2745:
case 3129:
case 2835:
case 2994:
case 3531:
case 295:
case 3527:
case 2924:
case 3533:
case 1285:
case 2732:
case 3220:
case 1092:
case 192:
case 21:
case 1462:
case 1858:
case 1815:
case 3833:
case 1209:
case 135:
case 2438:
case 2059:
case 2007:
case 2246:
case 3840:
case 1576:
case 3318:
case 1311:
case 606:
case 501:
case 3386:
case 247:
case 1098:
case 1332:
case 554:
case 3856:
case 4033:
case 3515:
case 3668:
case 3153:
case 2171:
case 372:
case 2068:
case 3291:
case 3999:
case 992:
case 3960:
case 1073:
case 1545:
case 236:
case 112:
case 3390:
case 792:
case 2314:
case 3904:
case 3285:
case 3879:
case 1007:
case 3326:
case 2111:
case 421:
case 3392:
case 3630:
case 2925:
case 2667:
case 1048:
case 1959:
case 3121:
case 1941:
case 3765:
case 1823:
case 2210:
case 3934:
case 4046:
case 731:
case 2027:
case 2345:
case 206:
case 3530:
case 175:
case 2303:
case 2783:
case 2672:
case 1259:
case 482:
case 1071:
case 189:
case 3546:
case 3228:
case 550:
case 2465:
case 346:
case 1428:
case 1393:
case 280:
case 1500:
case 976:
case 3571:
case 3080:
case 1552:
case 2697:
case 109:
case 4066:
case 2507:
case 1053:
case 2140:
case 1030:
case 2683:
case 853:
case 369:
case 2123:
case 164:
case 1104:
case 2005:
case 1047:
case 3482:
case 2720:
case 1035:
case 261:
case 330:
case 3237:
case 649:
case 3544:
case 2795:
case 644:
case 2223:
case 2873:
case 1908:
case 3155:
case 1101:
case 2108:
case 3729:
case 33:
case 1249:
case 3172:
case 1070:
case 2985:
case 2467:
case 3507:
case 2840:
case 3647:
case 360:
case 2374:
case 55:
case 3863:
case 2282:
case 3987:
case 3823:
case 110:
case 429:
case 2522:
case 630:
case 2447:
case 2056:
case 1644:
case 783:
case 2225:
case 2336:
case 144:
case 2417:
case 579:
case 1538:
case 3290:
case 1550:
case 2157:
case 2265:
case 2264:
case 3670:
case 748:
case 3205:
case 2208:
case 3741:
case 3901:
case 746:
case 2654:
case 2078:
case 1922:
case 1060:
case 1525:
case 3001:
case 1802:
case 818:
case 871:
case 2365:
case 3356:
case 951:
case 3716:
case 3579:
case 2396:
case 2961:
case 995:
case 293:
case 2919:
case 1844:
case 2885:
case 2968:
case 3327:
case 1583:
case 692:
case 1798:
case 2124:
case 3970:
case 3520:
case 2917:
case 750:
case 2982:
case 982:
case 2518:
case 3109:
case 1707:
case 2567:
case 2101:
case 1739:
case 975:
case 3650:
case 1553:
case 399:
case 919:
case 3487:
case 208:
case 2224:
case 2717:
case 1378:
case 1971:
case 2167:
case 1886:
case 292:
case 772:
case 3184:
case 3505:
case 3305:
case 3120:
case 1607:
case 1508:
case 3035:
case 2580:
case 3206:
case 490:
case 2172:
case 3981:
case 3807:
case 2832:
case 3503:
case 1223:
case 1416:
case 2181:
case 1984:
case 3445:
case 3494:
case 161:
case 245:
case 800:
case 3215:
case 725:
case 809:
case 2831:
case 1574:
case 1233:
case 720:
case 1409:
case 2681:
case 3855:
case 1489:
case 436:
case 2562:
case 1838:
case 1547:
case 2779:
case 2802:
case 1987:
case 1609:
case 3307:
case 987:
case 95:
case 1168:
case 1787:
case 391:
case 3446:
case 774:
case 3047:
case 3954:
case 3004:
case 591:
case 2838:
case 158:
case 988:
case 2126:
case 615:
case 1769:
case 2702:
case 3116:
case 443:
case 3470:
case 207:
case 638:
case 2492:
case 2752:
case 3126:
case 3408:
case 2134:
case 1599:
case 448:
case 2131:
case 3529:
case 3373:
case 3358:
case 2990:
case 1013:
case 3621:
case 2934:
case 2559:
case 1879:
case 17:
case 2912:
case 1188:
case 220:
case 2530:
case 3180:
case 4041:
case 1779:
case 1090:
case 96:
case 168:
case 901:
case 1949:
case 3311:
case 1491:
case 3065:
case 3151:
case 1189:
case 3052:
case 44:
case 1982:
case 960:
case 2870:
case 3480:
case 466:
case 2858:
case 907:
case 2868:
case 1306:
case 4055:
case 3068:
case 238:
case 964:
case 363:
case 2434:
case 1854:
case 3980:
case 478:
case 1127:
case 2887:
case 697:
case 1875:
case 2687:
case 1253:
case 3623:
case 1796:
case 735:
case 3555:
case 3:
case 2711:
case 2679:
case 947:
case 2445:
case 2463:
case 864:
case 3953:
case 1630:
case 1632:
case 1790:
case 757:
case 1767:
case 2588:
case 3830:
case 1248:
case 3022:
case 2808:
case 1476:
case 2572:
case 2708:
case 2943:
case 2558:
case 3294:
case 522:
case 2916:
case 1076:
case 3395:
case 775:
case 2489:
case 91:
case 1735:
case 2204:
case 2335:
case 83:
case 3013:
case 282:
case 675:
case 1182:
case 569:
case 512:
case 2733:
case 484:
case 2626:
case 850:
case 205:
case 1368:
case 2421:
case 3370:
case 1206:
case 1868:
case 3043:
case 3910:
case 2568:
case 128:
case 2578:
case 2013:
case 4082:
case 2803:
case 990:
case 4086:
case 3224:
case 1909:
case 2086:
case 3363:
case 1664:
case 65:
case 410:
case 2533:
case 140:
case 2272:
case 767:
case 4034:
case 1661:
case 3413:
case 814:
case 3772:
case 1528:
case 1432:
case 2213:
case 1109:
case 3822:
case 3548:
case 1136:
case 390:
case 2856:
case 333:
case 2864:
case 525:
case 2022:
case 1985:
case 3474:
case 1861:
case 1592:
case 3673:
case 3270:
case 1683:
case 3406:
case 2390:
case 2942:
case 3972:
case 2537:
case 1990:
case 2484:
case 782:
case 2308:
case 2391:
case 210:
case 1097:
case 1865:
case 4035:
case 763:
case 3794:
case 3676:
case 299:
case 1924:
case 3713:
case 2676:
case 2073:
case 1077:
case 2233:
case 2603:
case 1213:
case 3539:
case 1458:
case 1537:
case 1361:
case 2539:
case 2718:
case 1477:
case 3727:
case 705:
case 419:
case 2343:
case 2991:
case 516:
case 1303:
case 1319:
case 5:
case 798:
case 3273:
case 3714:
case 1933:
case 2054:
case 1512:
case 59:
case 2729:
case 1636:
case 2928:
case 1617:
case 1461:
case 3610:
case 3509:
case 406:
case 1386:
case 1800:
case 955:
case 2369:
case 3135:
case 1845:
case 3585:
case 3694:
case 3115:
case 3692:
case 2842:
case 3785:
case 3017:
case 1792:
case 751:
case 2640:
case 2618:
case 1513:
case 2855:
case 285:
case 1284:
case 1803:
case 1970:
case 3092:
case 3451:
case 2959:
case 557:
case 1536:
case 622:
case 1535:
case 3007:
case 1155:
case 506:
case 1151:
case 2666:
case 2747:
case 2033:
case 2366:
case 154:
case 1942:
case 3145:
case 2966:
case 3968:
case 631:
case 1204:
case 4095:
case 3575:
case 3828:
case 3082:
case 1210:
case 891:
case 423:
case 878:
case 2849:
case 3073:
case 3898:
case 1274:
case 3274:
case 1328:
case 912:
case 2605:
case 2114:
case 3912:
case 2309:
case 1696:
case 993:
case 2839:
case 2009:
case 700:
case 2454:
case 851:
case 1665:
case 226:
case 905:
case 3169:
case 797:
case 656:
case 137:
case 600:
case 269:
case 2047:
case 1160:
case 2178:
case 2350:
case 2709:
case 2288:
case 1099:
case 3238:
case 2997:
case 1518:
case 1244:
case 2424:
case 3862:
case 694:
case 2159:
case 1183:
case 661:
case 349:
case 1511:
case 3208:
case 3933:
case 780:
case 607:
case 2941:
case 1969:
case 435:
case 2806:
case 116:
case 445:
case 1713:
case 3459:
case 3194:
case 4032:
case 1260:
case 1595:
case 910:
case 513:
case 1690:
case 2623:
case 3819:
case 50:
case 241:
case 2521:
case 520:
case 3251:
case 84:
case 3089:
case 1293:
case 3432:
case 398:
case 2553:
case 27:
case 1729:
case 3570:
case 526:
case 19:
case 2040:
case 2728:
case 2610:
case 3098:
case 718:
case 371:
case 2397:
case 3191:
case 3699:
case 2606:
case 583:
case 2278:
case 2252:
case 1748:
case 1813:
case 1974:
case 1467:
case 3069:
case 1161:
case 176:
case 639:
case 2083:
case 2231:
case 852:
case 563:
case 1228:
case 1923:
case 632:
case 469:
case 2420:
case 3150:
case 3133:
case 14:
case 1421:
case 3338:
case 3990:
case 2431:
case 1464:
case 3320:
case 136:
case 3021:
case 1945:
case 339:
case 931:
case 3101:
case 1671:
case 3441:
case 3872:
case 3475:
case 3336:
case 3418:
case 3407:
case 1402:
case 2364:
case 3600:
case 2914:
case 2895:
case 2399:
case 51:
case 1588:
case 1976:
case 1138:
case 3697:
case 856:
case 119:
case 601:
case 4000:
case 1603:
case 928:
case 1085:
case 559:
case 1522:
case 2041:
case 2202:
case 3581:
case 3332:
case 2696:
case 2236:
case 695:
case 3050:
case 211:
case 896:
case 234:
case 2019:
case 3985:
case 3316:
case 3434:
case 2810:
case 3524:
case 2949:
case 1424:
case 719:
case 2239:
case 1388:
case 1380:
case 3916:
case 3164:
case 2385:
case 4016:
case 1310:
case 1921:
case 3163:
case 743:
case 1108:
case 653:
case 1993:
case 2859:
case 1087:
case 1894:
case 3564:
case 737:
case 889:
case 1245:
case 3786:
case 1888:
case 788:
case 3637:
case 899:
case 2815:
case 462:
case 2188:
case 1353:
case 3347:
case 2614:
case 1658:
case 974:
case 1991:
case 2827:
case 1179:
case 3325:
case 3429:
case 2306:
case 723:
case 2258:
case 3315:
case 3219:
case 1820:
case 3414:
case 1216:
case 1442:
case 2734:
case 1056:
case 2443:
case 2645:
case 2183:
case 424:
case 3099:
case 2407:
case 3876:
case 1344:
case 458:
case 3955:
case 2001:
case 3589:
case 40:
case 354:
case 1027:
case 351:
case 3577:
case 646:
case 1033:
case 24:
case 2315:
case 3712:
case 3510:
case 1634:
case 2028:
case 1126:
case 2937:
case 1638:
case 2988:
case 2860:
case 882:
case 197:
case 4050:
case 2984:
case 1619:
case 2692:
case 3372:
case 2775:
case 3921:
case 1934:
case 3560:
case 1468:
case 1917:
case 3132:
case 3391:
case 3130:
case 3768:
case 2334:
case 977:
case 2586:
case 1684:
case 1105:
case 1350:
case 1400:
case 568:
case 1142:
case 1460:
case 2197:
case 2880:
case 1983:
case 2389:
case 317:
case 224:
case 3757:
case 3799:
case 3374:
case 235:
case 3870:
case 1425:
case 3447:
case 2324:
case 1445:
case 860:
case 3711:
case 461:
case 3869:
case 844:
case 2352:
case 3911:
case 1309:
case 2713:
case 1620:
case 396:
case 2629:
case 732:
case 2081:
case 803:
case 1167:
case 2177:
case 377:
case 2158:
case 1184:
case 460:
case 1819:
case 2774:
case 308:
case 367:
case 3620:
case 2677:
case 567:
case 444:
case 795:
case 1999:
case 3010:
case 3301:
case 2993:
case 1680:
case 3880:
case 2620:
case 3582:
case 3914:
case 108:
case 1158:
case 3410:
case 953:
case 530:
case 1570:
case 1275:
case 2844:
case 3000:
case 3639:
case 677:
case 942:
case 3766:
case 1176:
case 2435:
case 2716:
case 1369:
case 3091:
case 1308:
case 452:
case 397:
case 1029:
case 3806:
case 611:
case 3800:
case 3624:
case 311:
case 3688:
case 1667:
case 3878:
case 1323:
case 2641:
case 3704:
case 592:
case 3751:
case 2412:
case 3268:
case 1318:
case 2812:
case 48:
case 2036:
case 805:
case 1440:
case 2932:
case 2663:
case 3079:
case 1041:
case 906:
case 2956:
case 1717:
case 1487:
case 948:
case 679:
case 2276:
case 1633:
case 2644:
case 4042:
case 1025:
case 1015:
case 1916:
case 1878:
case 1019:
case 3982:
case 3265:
case 2240:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1651334402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,];
var gg_b = "1651334402/";

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
