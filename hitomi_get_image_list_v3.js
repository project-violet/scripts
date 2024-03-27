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
case 2194:
case 2946:
case 1941:
case 304:
case 3240:
case 2926:
case 3433:
case 2756:
case 649:
case 252:
case 685:
case 401:
case 3054:
case 2678:
case 624:
case 754:
case 3251:
case 1681:
case 2495:
case 2782:
case 1928:
case 4088:
case 3478:
case 1258:
case 169:
case 3800:
case 4057:
case 2318:
case 3017:
case 1840:
case 3074:
case 3818:
case 1378:
case 2149:
case 2868:
case 1080:
case 2476:
case 1509:
case 4091:
case 3840:
case 1836:
case 2054:
case 1812:
case 3453:
case 1749:
case 1307:
case 2609:
case 288:
case 1090:
case 3538:
case 2050:
case 2471:
case 129:
case 328:
case 3362:
case 258:
case 791:
case 2632:
case 277:
case 2988:
case 746:
case 1013:
case 1764:
case 3190:
case 3408:
case 3303:
case 1374:
case 153:
case 1150:
case 2397:
case 2001:
case 221:
case 2762:
case 2441:
case 2467:
case 1276:
case 1443:
case 810:
case 3311:
case 1265:
case 1359:
case 1983:
case 1322:
case 1967:
case 2200:
case 543:
case 969:
case 3491:
case 2279:
case 3933:
case 1142:
case 97:
case 619:
case 321:
case 553:
case 1981:
case 2851:
case 1164:
case 2625:
case 964:
case 3666:
case 4085:
case 1338:
case 2581:
case 2838:
case 3456:
case 3527:
case 825:
case 1017:
case 1066:
case 3126:
case 1278:
case 117:
case 1525:
case 2511:
case 207:
case 1760:
case 121:
case 3613:
case 2174:
case 999:
case 146:
case 26:
case 2275:
case 1524:
case 3044:
case 3614:
case 356:
case 2802:
case 2324:
case 134:
case 2593:
case 1122:
case 432:
case 2533:
case 567:
case 1660:
case 888:
case 1701:
case 439:
case 2216:
case 1211:
case 3159:
case 1438:
case 3277:
case 2637:
case 2106:
case 427:
case 798:
case 3935:
case 1095:
case 923:
case 2158:
case 4027:
case 3581:
case 1037:
case 2933:
case 3290:
case 1544:
case 1002:
case 2161:
case 1335:
case 3711:
case 186:
case 3310:
case 3248:
case 111:
case 1685:
case 3239:
case 3997:
case 676:
case 2616:
case 1791:
case 848:
case 1962:
case 2396:
case 183:
case 1829:
case 193:
case 867:
case 1528:
case 238:
case 777:
case 3086:
case 3445:
case 3123:
case 2592:
case 868:
case 1094:
case 3329:
case 3875:
case 363:
case 2907:
case 4040:
case 1394:
case 571:
case 1669:
case 1648:
case 2420:
case 2697:
case 1741:
case 3520:
case 1393:
case 1905:
case 3596:
case 3802:
case 2582:
case 3444:
case 100:
case 2973:
case 3144:
case 2864:
case 2852:
case 1551:
case 2437:
case 323:
case 589:
case 1263:
case 529:
case 2028:
case 1138:
case 2651:
case 3911:
case 3430:
case 576:
case 2286:
case 3681:
case 3746:
case 4018:
case 1014:
case 3409:
case 3702:
case 929:
case 1516:
case 893:
case 3031:
case 3992:
case 2980:
case 1766:
case 1467:
case 3791:
case 517:
case 3289:
case 2024:
case 1500:
case 477:
case 2564:
case 1908:
case 1870:
case 2700:
case 3562:
case 3644:
case 3150:
case 705:
case 497:
case 3475:
case 2708:
case 3353:
case 218:
case 217:
case 3534:
case 4045:
case 2784:
case 3032:
case 3949:
case 1333:
case 1589:
case 1758:
case 1403:
case 1642:
case 1703:
case 2535:
case 758:
case 1583:
case 1937:
case 2806:
case 399:
case 4044:
case 3133:
case 2530:
case 2407:
case 2260:
case 3899:
case 3269:
case 3751:
case 3678:
case 234:
case 3263:
case 534:
case 274:
case 1558:
case 1598:
case 1412:
case 823:
case 3885:
case 928:
case 126:
case 1337:
case 1802:
case 1136:
case 173:
case 2203:
case 2229:
case 487:
case 2711:
case 950:
case 3116:
case 739:
case 1120:
case 368:
case 3777:
case 2446:
case 3474:
case 3832:
case 2226:
case 2987:
case 1009:
case 1252:
case 2423:
case 2528:
case 2544:
case 3559:
case 1364:
case 393:
case 265:
case 3498:
case 2949:
case 2151:
case 1507:
case 3837:
case 4033:
case 3382:
case 1463:
case 2339:
case 850:
case 3405:
case 2894:
case 3222:
case 3376:
case 24:
case 4030:
case 1170:
case 3671:
case 3809:
case 1184:
case 4072:
case 2160:
case 1868:
case 3211:
case 166:
case 3357:
case 2521:
case 2455:
case 1360:
case 2093:
case 1016:
case 3805:
case 2237:
case 1926:
case 322:
case 1665:
case 1957:
case 3033:
case 772:
case 3951:
case 838:
case 2920:
case 3035:
case 19:
case 3898:
case 2371:
case 3218:
case 3391:
case 625:
case 3966:
case 959:
case 3486:
case 2276:
case 2508:
case 1073:
case 2854:
case 2285:
case 586:
case 815:
case 913:
case 2839:
case 1349:
case 3440:
case 2525:
case 1392:
case 2110:
case 2906:
case 1618:
case 2821:
case 2033:
case 1526:
case 3397:
case 83:
case 3059:
case 3811:
case 1781:
case 1513:
case 1503:
case 2761:
case 1869:
case 1754:
case 1911:
case 1059:
case 1838:
case 330:
case 2810:
case 2935:
case 639:
case 2675:
case 3176:
case 2858:
case 899:
case 1674:
case 81:
case 2294:
case 811:
case 302:
case 49:
case 2127:
case 573:
case 1653:
case 3043:
case 2204:
case 2787:
case 1072:
case 1279:
case 2759:
case 2448:
case 3052:
case 441:
case 1512:
case 2497:
case 668:
case 3037:
case 1956:
case 2692:
case 3652:
case 3830:
case 3598:
case 3773:
case 3396:
case 3105:
case 2686:
case 2717:
case 3700:
case 562:
case 3101:
case 3983:
case 1376:
case 1790:
case 1172:
case 2527:
case 3850:
case 102:
case 1123:
case 2037:
case 397:
case 2587:
case 2247:
case 1286:
case 3871:
case 1555:
case 14:
case 3798:
case 894:
case 3732:
case 467:
case 2953:
case 3082:
case 2556:
case 3605:
case 3595:
case 2057:
case 1611:
case 2390:
case 253:
case 250:
case 1689:
case 854:
case 2691:
case 1567:
case 4081:
case 3450:
case 1728:
case 1686:
case 1782:
case 1585:
case 2123:
case 3233:
case 1008:
case 2941:
case 4009:
case 2924:
case 1320:
case 2774:
case 2590:
case 953:
case 629:
case 3849:
case 2620:
case 716:
case 2586:
case 2208:
case 1620:
case 3675:
case 2157:
case 390:
case 4053:
case 1441:
case 1700:
case 1843:
case 3603:
case 1891:
case 2094:
case 3160:
case 3554:
case 1105:
case 1406:
case 3988:
case 872:
case 1939:
case 3590:
case 2837:
case 3516:
case 1664:
case 4047:
case 3442:
case 62:
case 2770:
case 3698:
case 655:
case 1530:
case 1579:
case 2517:
case 706:
case 2938:
case 3487:
case 2311:
case 3266:
case 4036:
case 79:
case 1343:
case 2928:
case 4043:
case 4005:
case 3587:
case 1750:
case 2250:
case 3642:
case 3227:
case 1538:
case 3243:
case 3760:
case 268:
case 3379:
case 3937:
case 579:
case 2861:
case 1521:
case 2830:
case 2969:
case 2147:
case 2188:
case 1373:
case 425:
case 2807:
case 2121:
case 1058:
case 1325:
case 1541:
case 171:
case 3736:
case 3340:
case 2984:
case 3429:
case 468:
case 2263:
case 3869:
case 1102:
case 307:
case 806:
case 2196:
case 1560:
case 2990:
case 3115:
case 803:
case 3177:
case 354:
case 1091:
case 1638:
case 2257:
case 1281:
case 1245:
case 1484:
case 827:
case 1103:
case 2998:
case 3514:
case 1157:
case 3008:
case 3716:
case 527:
case 3360:
case 1086:
case 3962:
case 2170:
case 325:
case 1363:
case 757:
case 2824:
case 3114:
case 3254:
case 3617:
case 3457:
case 3887:
case 1089:
case 3381:
case 3824:
case 1097:
case 3371:
case 2684:
case 1806:
case 448:
case 1057:
case 2676:
case 1342:
case 3018:
case 2289:
case 3961:
case 1480:
case 1756:
case 4094:
case 718:
case 1241:
case 652:
case 3235:
case 1429:
case 3181:
case 3224:
case 2369:
case 1312:
case 2070:
case 2332:
case 3046:
case 2239:
case 1915:
case 3332:
case 3495:
case 1401:
case 2488:
case 3932:
case 2688:
case 478:
case 1358:
case 1134:
case 3093:
case 3597:
case 2507:
case 3078:
case 3558:
case 3030:
case 3651:
case 1966:
case 1894:
case 3826:
case 3168:
case 509:
case 1613:
case 435:
case 3517:
case 3079:
case 1747:
case 2888:
case 3480:
case 1787:
case 3529:
case 318:
case 3761:
case 4026:
case 2105:
case 3958:
case 1651:
case 1005:
case 804:
case 3980:
case 3443:
case 1924:
case 2874:
case 3876:
case 3151:
case 1096:
case 1169:
case 1213:
case 3895:
case 1235:
case 163:
case 595:
case 2031:
case 3663:
case 72:
case 2062:
case 3588:
case 976:
case 2573:
case 3721:
case 1711:
case 1904:
case 3882:
case 98:
case 1137:
case 3589:
case 924:
case 2336:
case 94:
case 1039:
case 18:
case 1488:
case 3989:
case 3492:
case 3025:
case 1520:
case 3157:
case 2046:
case 2682:
case 2580:
case 1219:
case 4011:
case 2008:
case 2117:
case 3130:
case 862:
case 3205:
case 1188:
case 1823:
case 720:
case 2629:
case 731:
case 633:
case 1667:
case 298:
case 3785:
case 895:
case 3347:
case 2982:
case 2754:
case 1710:
case 3026:
case 1517:
case 2818:
case 653:
case 2927:
case 2221:
case 3690:
case 1828:
case 2403:
case 1442:
case 458:
case 3250:
case 1152:
case 3996:
case 501:
case 3815:
case 2642:
case 1411:
case 1456:
case 1400:
case 2206:
case 3336:
case 3654:
case 1925:
case 3174:
case 2577:
case 40:
case 3292:
case 1395:
case 1709:
case 43:
case 3778:
case 459:
case 1918:
case 3993:
case 1382:
case 2515:
case 1304:
case 1605:
case 3466:
case 903:
case 1410:
case 3356:
case 3566:
case 634:
case 3725:
case 1775:
case 1942:
case 2248:
case 3874:
case 73:
case 2060:
case 1655:
case 2450:
case 728:
case 3925:
case 3372:
case 377:
case 715:
case 2068:
case 2277:
case 846:
case 2505:
case 3674:
case 2016:
case 3904:
case 490:
case 1993:
case 2108:
case 2266:
case 826:
case 2880:
case 2053:
case 583:
case 2442:
case 1340:
case 1990:
case 3682:
case 1306:
case 259:
case 1518:
case 2721:
case 2419:
case 2816:
case 2090:
case 3647:
case 2654:
case 3351:
case 2902:
case 1977:
case 2236:
case 590:
case 1547:
case 3322:
case 2672:
case 1424:
case 2218:
case 1351:
case 168:
case 831:
case 688:
case 1580:
case 3463:
case 1934:
case 3803:
case 2900:
case 3004:
case 1104:
case 1624:
case 1093:
case 1377:
case 3561:
case 555:
case 3846:
case 3040:
case 1676:
case 3994:
case 1390:
case 4068:
case 2304:
case 2178:
case 563:
case 3156:
case 1816:
case 1022:
case 2619:
case 2500:
case 671:
case 886:
case 3073:
case 3844:
case 3344:
case 303:
case 2:
case 1081:
case 3706:
case 1435:
case 1486:
case 3759:
case 1549:
case 707:
case 693:
case 144:
case 1690:
case 2673:
case 3541:
case 2752:
case 2737:
case 3999:
case 3209:
case 3506:
case 2966:
case 702:
case 2870:
case 2860:
case 1321:
case 3349:
case 185:
case 3942:
case 2374:
case 2367:
case 4023:
case 3660:
case 3583:
case 3719:
case 3076:
case 1414:
case 3553:
case 3808:
case 95:
case 3426:
case 656:
case 1179:
case 3972:
case 2722:
case 568:
case 3646:
case 957:
case 411:
case 502:
case 2005:
case 2768:
case 426:
case 3042:
case 2398:
case 3688:
case 3502:
case 2132:
case 1691:
case 3280:
case 3238:
case 96:
case 519:
case 1431:
case 535:
case 3905:
case 993:
case 4063:
case 3920:
case 3831:
case 3454:
case 2977:
case 2660:
case 3631:
case 1206:
case 2720:
case 2486:
case 1692:
case 2652:
case 569:
case 3758:
case 3939:
case 1479:
case 3207:
case 2212:
case 853:
case 1649:
case 190:
case 2718:
case 2598:
case 505:
case 370:
case 1874:
case 57:
case 46:
case 3143:
case 814:
case 3601:
case 1712:
case 1986:
case 2726:
case 3853:
case 3521:
case 2604:
case 681:
case 2921:
case 413:
case 3441:
case 883:
case 1954:
case 3891:
case 3242:
case 1849:
case 54:
case 3508:
case 1222:
case 301:
case 2857:
case 2936:
case 1989:
case 1370:
case 1341:
case 2440:
case 2253:
case 1672:
case 3066:
case 1106:
case 2703:
case 808:
case 1995:
case 1633:
case 3739:
case 3305:
case 1318:
case 3902:
case 2181:
case 1189:
case 270:
case 2295:
case 2393:
case 2084:
case 1658:
case 860:
case 3304:
case 2302:
case 3679:
case 3398:
case 3350:
case 257:
case 3166:
case 2317:
case 642:
case 1354:
case 1844:
case 2020:
case 658:
case 1447:
case 2635:
case 938:
case 1737:
case 137:
case 779:
case 1168:
case 124:
case 1423:
case 3100:
case 946:
case 60:
case 2781:
case 3122:
case 1594:
case 3555:
case 2475:
case 3265:
case 2418:
case 29:
case 4037:
case 2974:
case 3916:
case 1650:
case 682:
case 1098:
case 41:
case 346:
case 3959:
case 3546:
case 3097:
case 4:
case 1704:
case 349:
case 1383:
case 717:
case 4089:
case 2261:
case 2436:
case 2470:
case 641:
case 2608:
case 255:
case 3551:
case 2869:
case 1917:
case 4039:
case 1040:
case 3406:
case 3175:
case 963:
case 990:
case 2404:
case 3291:
case 1216:
case 3715:
case 699:
case 1859:
case 546:
case 2572:
case 2624:
case 2518:
case 471:
case 1542:
case 1659:
case 2789:
case 588:
case 3704:
case 1557:
case 3342:
case 3301:
case 822:
case 4016:
case 181:
case 1297:
case 449:
case 2378:
case 3705:
case 1174:
case 2879:
case 1714:
case 3696:
case 3611:
case 2459:
case 2755:
case 3707:
case 1327:
case 3612:
case 2685:
case 68:
case 1706:
case 1745:
case 3108:
case 172:
case 1044:
case 3934:
case 3377:
case 729:
case 345:
case 481:
case 934:
case 1837:
case 405:
case 3490:
case 3228:
case 949:
case 3268:
case 587:
case 1462:
case 2466:
case 1196:
case 689:
case 545:
case 1436:
case 175:
case 3493:
case 2727:
case 203:
case 3969:
case 2041:
case 3851:
case 596:
case 847:
case 1023:
case 1888:
case 700:
case 3910:
case 781:
case 3124:
case 1574:
case 132:
case 2344:
case 732:
case 3635:
case 2405:
case 1127:
case 1217:
case 409:
case 1534:
case 223:
case 1866:
case 2939:
case 1662:
case 3388:
case 1943:
case 2079:
case 1481:
case 1026:
case 494:
case 995:
case 369:
case 2863:
case 661:
case 2433:
case 3187:
case 1599:
case 1673:
case 3056:
case 1433:
case 955:
case 1266:
case 2198:
case 50:
case 570:
case 3593:
case 2985:
case 1269:
case 3323:
case 1768:
case 1799:
case 1493:
case 1632:
case 2047:
case 3084:
case 2991:
case 1319:
case 2996:
case 3890:
case 2002:
case 389:
case 2352:
case 3963:
case 85:
case 4002:
case 1248:
case 1738:
case 2256:
case 1068:
case 444:
case 1970:
case 3572:
case 1115:
case 1469:
case 3834:
case 2454:
case 2615:
case 143:
case 1011:
case 4001:
case 12:
case 3848:
case 1232:
case 226:
case 375:
case 2071:
case 3810:
case 1857:
case 3270:
case 198:
case 880:
case 3718:
case 2325:
case 837:
case 2044:
case 2548:
case 3733:
case 1055:
case 1795:
case 695:
case 1566:
case 3570:
case 889:
case 3544:
case 1578:
case 536:
case 90:
case 2372:
case 182:
case 2199:
case 3299:
case 1379:
case 1810:
case 2287:
case 1175:
case 343:
case 3134:
case 3489:
case 3196:
case 2743:
case 2168:
case 1631:
case 2942:
case 1124:
case 1444:
case 3404:
case 3549:
case 2843:
case 2019:
case 692:
case 1769:
case 2547:
case 3099:
case 139:
case 3167:
case 3864:
case 180:
case 466:
case 1890:
case 4055:
case 1185:
case 3568:
case 2766:
case 2706:
case 2340:
case 4069:
case 110:
case 2667:
case 3881:
case 447:
case 2103:
case 713:
case 1187:
case 48:
case 3199:
case 4076:
case 451:
case 1369:
case 4008:
case 1202:
case 3812:
case 3387:
case 3179:
case 748:
case 2300:
case 824:
case 985:
case 2887:
case 4022:
case 611:
case 55:
case 874:
case 908:
case 2986:
case 2510:
case 2148:
case 314:
case 1191:
case 3839:
case 3756:
case 1133:
case 945:
case 2680:
case 2255:
case 2408:
case 2728:
case 3754:
case 701:
case 2210:
case 3525:
case 3703:
case 3995:
case 1811:
case 3334:
case 2268:
case 518:
case 394:
case 558:
case 1125:
case 2797:
case 3236:
case 2656:
case 2760:
case 2576:
case 2438:
case 3089:
case 1336:
case 4003:
case 1117:
case 3237:
case 1556:
case 391:
case 2822:
case 1183:
case 2883:
case 3645:
case 1952:
case 1224:
case 603:
case 2669:
case 160:
case 947:
case 2819:
case 1688:
case 1571:
case 2742:
case 1588:
case 1515:
case 1478:
case 194:
case 584:
case 2307:
case 1803:
case 738:
case 581:
case 491:
case 473:
case 1529:
case 1272:
case 3860:
case 1200:
case 3868:
case 1439:
case 3204:
case 1748:
case 3417:
case 1922:
case 3863:
case 1388:
case 3178:
case 2591:
case 3389:
case 1735:
case 726:
case 1047:
case 4024:
case 1227:
case 2568:
case 896:
case 2934:
case 1282:
case 1879:
case 2522:
case 2059:
case 2670:
case 2284:
case 1671:
case 1205:
case 2082:
case 742:
case 3039:
case 431:
case 125:
case 2575:
case 3411:
case 3757:
case 406:
case 2089:
case 1552:
case 3393:
case 2666:
case 1841:
case 3504:
case 2817:
case 3512:
case 3664:
case 2943:
case 138:
case 2153:
case 3814:
case 2846:
case 1329:
case 3523:
case 2043:
case 3346:
case 3258:
case 287:
case 3343:
case 128:
case 3415:
case 2085:
case 912:
case 1457:
case 3260:
case 211:
case 3002:
case 3829:
case 1675:
case 3278:
case 4034:
case 2491:
case 3451:
case 3892:
case 2885:
case 1609:
case 740:
case 3699:
case 3186:
case 1725:
case 3738:
case 1121:
case 829:
case 3471:
case 1085:
case 3540:
case 2539:
case 224:
case 74:
case 2098:
case 1230:
case 400:
case 3683:
case 2772:
case 635:
case 2141:
case 2893:
case 3446:
case 3952:
case 3946:
case 1425:
case 456:
case 2605:
case 2069:
case 3865:
case 3669:
case 3998:
case 2662:
case 841:
case 1626:
case 44:
case 2469:
case 2765:
case 187:
case 2052:
case 2748:
case 2647:
case 1826:
case 3686:
case 1733:
case 4050:
case 691:
case 1229:
case 2387:
case 1300:
case 2908:
case 3135:
case 3637:
case 2786:
case 972:
case 4071:
case 1070:
case 1186:
case 5:
case 2452:
case 3185:
case 4079:
case 674:
case 2614:
case 3358:
case 3685:
case 1855:
case 1898:
case 1827:
case 4074:
case 2296:
case 1854:
case 1561:
case 2555:
case 919:
case 3560:
case 4090:
case 3013:
case 2120:
case 89:
case 3028:
case 1290:
case 1882:
case 1998:
case 1331:
case 2829:
case 434:
case 937:
case 643:
case 1772:
case 1848:
case 602:
case 119:
case 1460:
case 2185:
case 317:
case 0:
case 3313:
case 3118:
case 91:
case 2878:
case 122:
case 3481:
case 2579:
case 4042:
case 3720:
case 1218:
case 1752:
case 2000:
case 1784:
case 3866:
case 3302:
case 2048:
case 3394:
case 3293:
case 2709:
case 3077:
case 2010:
case 2233:
case 421:
case 380:
case 2847:
case 1314:
case 2319:
case 3484:
case 3823:
case 1597:
case 1215:
case 1190:
case 3361:
case 3197:
case 292:
case 3402:
case 2645:
case 2056:
case 1643:
case 3148:
case 761:
case 2349:
case 4066:
case 3206:
case 474:
case 3742:
case 3728:
case 1717:
case 219:
case 3047:
case 657:
case 665:
case 1445:
case 3804:
case 2611:
case 1420:
case 1820:
case 3170:
case 2080:
case 2165:
case 1000:
case 2929:
case 1914:
case 2853:
case 1275:
case 2427:
case 2558:
case 1575:
case 1723:
case 2773:
case 3414:
case 120:
case 3295:
case 2815:
case 1929:
case 1951:
case 2954:
case 1198:
case 1762:
case 2058:
case 1339:
case 3528:
case 1630:
case 2175:
case 1288:
case 2366:
case 362:
case 2092:
case 1477:
case 3427:
case 3574:
case 1726:
case 3600:
case 651:
case 2163:
case 2970:
case 1960:
case 1167:
case 2753:
case 2097:
case 2559:
case 1994:
case 2840:
case 2909:
case 3091:
case 623:
case 788:
case 64:
case 2701:
case 482:
case 3607:
case 3104:
case 734:
case 417:
case 2757:
case 315:
case 2595:
case 3799:
case 313:
case 1695:
case 975:
case 769:
case 2315:
case 3060:
case 3677:
case 1988:
case 3903:
case 644:
case 1303:
case 2790:
case 830:
case 3629:
case 3068:
case 493:
case 3184:
case 1234:
case 2086:
case 3369:
case 2834:
case 1886:
case 2621:
case 1422:
case 2231:
case 2562:
case 2225:
case 3591:
case 2152:
case 2273:
case 1405:
case 2234:
case 1255:
case 1684:
case 2122:
case 1935:
case 843:
case 1209:
case 2641:
case 371:
case 2626:
case 480:
case 1031:
case 3789:
case 669:
case 594:
case 3087:
case 3212:
case 3625:
case 3465:
case 1617:
case 3924:
case 1398:
case 648:
case 1434:
case 898:
case 844:
case 1380:
case 3768:
case 575:
case 464:
case 1969:
case 45:
case 3575:
case 3460:
case 3131:
case 1305:
case 3509:
case 3766:
case 591:
case 2694:
case 3982:
case 373:
case 3080:
case 566:
case 2195:
case 1647:
case 2395:
case 3244:
case 3710:
case 2663:
case 1192:
case 2565:
case 244:
case 3058:
case 2035:
case 2240:
case 2096:
case 922:
case 1114:
case 1587:
case 962:
case 2462:
case 3763:
case 3921:
case 1132:
case 2871:
case 2361:
case 612:
case 3780:
case 2021:
case 2388:
case 1357:
case 3872:
case 3748:
case 2214:
case 3847:
case 2496:
case 1978:
case 2724:
case 422:
case 229:
case 2468:
case 32:
case 2482:
case 2357:
case 956:
case 2618:
case 3817:
case 113:
case 1743:
case 3582:
case 609:
case 1680:
case 1020:
case 3662:
case 2758:
case 1746:
case 3648:
case 212:
case 1061:
case 1780:
case 4000:
case 2373:
case 1794:
case 3797:
case 1280:
case 1641:
case 1151:
case 1060:
case 2796:
case 174:
case 2794:
case 3210:
case 3608:
case 3752:
case 4048:
case 3855:
case 2228:
case 1720:
case 3584:
case 1889:
case 2919:
case 2950:
case 2009:
case 3954:
case 1386:
case 2034:
case 2356:
case 1739:
case 2891:
case 3164:
case 3106:
case 3981:
case 3395:
case 3284:
case 3945:
case 460:
case 2537:
case 2729:
case 1976:
case 943:
case 2104:
case 289:
case 1639:
case 1389:
case 1615:
case 2634:
case 1973:
case 2347:
case 3557:
case 2519:
case 350:
case 1032:
case 2245:
case 1863:
case 1654:
case 3413:
case 694:
case 2227:
case 3691:
case 2710:
case 2845:
case 2428:
case 1043:
case 3515:
case 76:
case 290:
case 3907:
case 1698:
case 737:
case 911:
case 2331:
case 359:
case 453:
case 2322:
case 1195:
case 1603:
case 1402:
case 3103:
case 2139:
case 1628:
case 2856:
case 2538:
case 3201:
case 2280:
case 327:
case 550:
case 161:
case 1953:
case 2690:
case 3618:
case 3938:
case 2246:
case 2251:
case 385:
case 2516:
case 3532:
case 1985:
case 329:
case 2563:
case 3162:
case 3599:
case 4051:
case 3659:
case 3606:
case 4084:
case 1004:
case 1899:
case 3241:
case 3556:
case 3092:
case 2040:
case 821:
case 47:
case 2884:
case 1099:
case 871:
case 3407:
case 926:
case 970:
case 2801:
case 941:
case 2803:
case 2841:
case 1468:
case 2283:
case 1724:
case 4080:
case 1328:
case 1873:
case 4031:
case 2004:
case 1324:
case 1543:
case 149:
case 3294:
case 1116:
case 1767:
case 34:
case 2265:
case 1139:
case 2049:
case 2269:
case 1944:
case 1532:
case 835:
case 1178:
case 1432:
case 1845:
case 1454:
case 3531:
case 136:
case 1778:
case 1233:
case 78:
case 3984:
case 3979:
case 37:
case 2421:
case 1035:
case 1913:
case 960:
case 1821:
case 866:
case 2504:
case 679:
case 352:
case 3564:
case 1482:
case 2531:
case 3765:
case 3573:
case 638:
case 3062:
case 3485:
case 2039:
case 2382:
case 565:
case 2176:
case 3548:
case 2173:
case 3331:
case 1313:
case 3953:
case 131:
case 1384:
case 3841:
case 341:
case 2876:
case 3845:
case 1801:
case 907:
case 4019:
case 108:
case 577:
case 3412:
case 1920:
case 1449:
case 1240:
case 158:
case 2379:
case 2780:
case 1916:
case 741:
case 2827:
case 697:
case 366:
case 1153:
case 338:
case 2494:
case 2661:
case 2453:
case 2687:
case 3770:
case 1727:
case 900:
case 335:
case 152:
case 2350:
case 3960:
case 75:
case 2074:
case 2131:
case 2220:
case 2444:
case 2903:
case 3550:
case 2712:
case 8:
case 3922:
case 597:
case 4095:
case 1573:
case 69:
case 2042:
case 2480:
case 1067:
case 3468:
case 2599:
case 2353:
case 2320:
case 2392:
case 4064:
case 2536:
case 1225:
case 2017:
case 834:
case 3974:
case 504:
case 1371:
case 1616:
case 3927:
case 730:
case 3198:
case 3392:
case 2029:
case 4077:
case 3057:
case 2414:
case 2051:
case 1298:
case 3286:
case 470:
case 743:
case 3990:
case 760:
case 1593:
case 300:
case 3821:
case 2333:
case 1501:
case 1862:
case 155:
case 53:
case 2140:
case 3522:
case 909:
case 1798:
case 2751:
case 3200:
case 1257:
case 2567:
case 1793:
case 857:
case 3930:
case 994:
case 1872:
case 1231:
case 2375:
case 3324:
case 1867:
case 3650:
case 1499:
case 3547:
case 2914:
case 2111:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1711580401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,];
var gg_b = "1711580401/";

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
