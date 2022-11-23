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
case 680:
case 1538:
case 550:
case 1979:
case 1983:
case 1204:
case 277:
case 3536:
case 621:
case 3826:
case 2801:
case 2232:
case 2906:
case 3096:
case 1380:
case 1289:
case 1968:
case 1559:
case 3753:
case 2462:
case 2477:
case 1326:
case 3819:
case 2138:
case 814:
case 3083:
case 2971:
case 1668:
case 2591:
case 1855:
case 553:
case 888:
case 2566:
case 1639:
case 1927:
case 2340:
case 3015:
case 619:
case 2409:
case 811:
case 2920:
case 739:
case 3161:
case 2250:
case 3809:
case 2943:
case 2565:
case 4088:
case 1947:
case 2285:
case 3236:
case 2154:
case 1170:
case 1422:
case 2750:
case 1880:
case 3908:
case 2132:
case 2496:
case 2540:
case 646:
case 1711:
case 1932:
case 3840:
case 1222:
case 3280:
case 3622:
case 2936:
case 2621:
case 3202:
case 2399:
case 3335:
case 3884:
case 974:
case 2354:
case 1236:
case 2207:
case 2838:
case 971:
case 940:
case 3042:
case 3703:
case 297:
case 2104:
case 3725:
case 2644:
case 2280:
case 3786:
case 229:
case 2993:
case 2944:
case 2974:
case 3695:
case 2654:
case 3399:
case 3071:
case 564:
case 1878:
case 3860:
case 902:
case 3853:
case 2165:
case 1127:
case 450:
case 766:
case 2228:
case 538:
case 2517:
case 3105:
case 2392:
case 1641:
case 216:
case 3089:
case 1978:
case 1485:
case 828:
case 2793:
case 3571:
case 3581:
case 573:
case 1678:
case 3401:
case 2240:
case 3012:
case 1965:
case 3563:
case 3503:
case 2287:
case 3373:
case 3081:
case 2004:
case 866:
case 1736:
case 1296:
case 641:
case 1908:
case 1350:
case 663:
case 1106:
case 3478:
case 764:
case 3449:
case 2445:
case 1197:
case 1910:
case 2034:
case 221:
case 2338:
case 1926:
case 3945:
case 1066:
case 3281:
case 1777:
case 2442:
case 2402:
case 925:
case 2516:
case 774:
case 2904:
case 2618:
case 3824:
case 771:
case 572:
case 1286:
case 1003:
case 1589:
case 3762:
case 907:
case 3406:
case 1427:
case 3685:
case 2748:
case 3192:
case 1355:
case 3645:
case 3769:
case 2485:
case 2314:
case 2439:
case 1371:
case 1770:
case 2764:
case 2917:
case 3972:
case 2855:
case 1514:
case 3084:
case 399:
case 1722:
case 2046:
case 2015:
case 1826:
case 113:
case 2907:
case 1564:
case 2785:
case 1863:
case 916:
case 3309:
case 2139:
case 2190:
case 1336:
case 2322:
case 266:
case 1578:
case 1644:
case 4012:
case 1600:
case 2571:
case 2119:
case 2193:
case 730:
case 3450:
case 3765:
case 698:
case 1545:
case 2329:
case 3879:
case 2403:
case 1879:
case 2927:
case 3814:
case 4049:
case 2175:
case 661:
case 3107:
case 802:
case 2996:
case 726:
case 285:
case 1491:
case 3605:
case 2076:
case 2494:
case 629:
case 3880:
case 3633:
case 1706:
case 1143:
case 4024:
case 171:
case 1619:
case 1804:
case 1594:
case 3983:
case 1156:
case 3800:
case 231:
case 926:
case 279:
case 957:
case 603:
case 1748:
case 342:
case 1071:
case 524:
case 1923:
case 2841:
case 634:
case 2101:
case 2435:
case 3538:
case 3621:
case 2544:
case 563:
case 1225:
case 3940:
case 901:
case 1492:
case 3760:
case 2491:
case 2457:
case 144:
case 2096:
case 2459:
case 710:
case 443:
case 3799:
case 1614:
case 3823:
case 1401:
case 1814:
case 795:
case 2575:
case 1687:
case 154:
case 3587:
case 1361:
case 371:
case 859:
case 868:
case 2148:
case 557:
case 3311:
case 842:
case 3898:
case 175:
case 344:
case 2542:
case 2241:
case 2296:
case 899:
case 1571:
case 3514:
case 968:
case 3374:
case 645:
case 3344:
case 887:
case 99:
case 827:
case 3424:
case 3123:
case 576:
case 1356:
case 1175:
case 3678:
case 2058:
case 1673:
case 963:
case 2196:
case 3247:
case 721:
case 262:
case 686:
case 1891:
case 3031:
case 3186:
case 3912:
case 3692:
case 1115:
case 3515:
case 1875:
case 1249:
case 4051:
case 2070:
case 1283:
case 3737:
case 1943:
case 3264:
case 1894:
case 3613:
case 2069:
case 3572:
case 752:
case 3160:
case 1987:
case 2948:
case 547:
case 2818:
case 2161:
case 1488:
case 3240:
case 3428:
case 62:
case 3949:
case 59:
case 954:
case 3491:
case 3691:
case 2123:
case 210:
case 736:
case 3445:
case 3379:
case 3275:
case 2599:
case 3641:
case 2030:
case 1372:
case 3480:
case 3524:
case 1562:
case 362:
case 822:
case 1661:
case 208:
case 1592:
case 2208:
case 3718:
case 2291:
case 1659:
case 2099:
case 3959:
case 397:
case 1778:
case 2823:
case 2726:
case 1919:
case 2466:
case 685:
case 612:
case 3318:
case 2981:
case 983:
case 2094:
case 1440:
case 742:
case 4037:
case 1413:
case 1109:
case 2224:
case 3442:
case 3869:
case 863:
case 1323:
case 2999:
case 1912:
case 1262:
case 1206:
case 2023:
case 520:
case 1047:
case 635:
case 882:
case 2805:
case 1:
case 3196:
case 2413:
case 2683:
case 3586:
case 1180:
case 1145:
case 852:
case 2967:
case 3418:
case 566:
case 2124:
case 343:
case 3022:
case 4042:
case 2810:
case 610:
case 3952:
case 1359:
case 625:
case 2103:
case 3966:
case 992:
case 761:
case 4011:
case 1051:
case 3441:
case 2100:
case 2669:
case 2493:
case 3139:
case 2075:
case 1747:
case 2852:
case 1082:
case 2861:
case 2231:
case 1871:
case 4095:
case 1638:
case 2164:
case 289:
case 3448:
case 3732:
case 2428:
case 2183:
case 1752:
case 2335:
case 3766:
case 1200:
case 1264:
case 79:
case 364:
case 3025:
case 360:
case 3851:
case 3918:
case 1126:
case 2864:
case 1645:
case 840:
case 1172:
case 651:
case 1455:
case 298:
case 64:
case 4029:
case 2817:
case 3795:
case 3992:
case 228:
case 672:
case 2448:
case 1506:
case 1241:
case 3403:
case 40:
case 2892:
case 3801:
case 1974:
case 780:
case 2811:
case 1031:
case 2302:
case 45:
case 2797:
case 3456:
case 3080:
case 2886:
case 517:
case 2463:
case 1014:
case 1590:
case 93:
case 1387:
case 2001:
case 2535:
case 1319:
case 2206:
case 2418:
case 1019:
case 3698:
case 3701:
case 2362:
case 1536:
case 642:
case 3343:
case 374:
case 475:
case 2772:
case 794:
case 3023:
case 212:
case 217:
case 722:
case 1301:
case 910:
case 1464:
case 3300:
case 4005:
case 473:
case 388:
case 1322:
case 640:
case 679:
case 2704:
case 38:
case 3391:
case 3380:
case 1776:
case 2867:
case 3:
case 2870:
case 2796:
case 3095:
case 480:
case 1652:
case 3803:
case 2689:
case 3316:
case 3777:
case 1813:
case 211:
case 3736:
case 2804:
case 2925:
case 2894:
case 2537:
case 3681:
case 1086:
case 261:
case 2681:
case 3584:
case 3027:
case 2512:
case 254:
case 2391:
case 2940:
case 3982:
case 1924:
case 3976:
case 2458:
case 302:
case 3921:
case 4003:
case 301:
case 1877:
case 2252:
case 1057:
case 1341:
case 2284:
case 2603:
case 472:
case 2615:
case 1201:
case 2021:
case 242:
case 3670:
case 3385:
case 3866:
case 2807:
case 519:
case 905:
case 1982:
case 2794:
case 161:
case 467:
case 2809:
case 4059:
case 2765:
case 3715:
case 2185:
case 160:
case 2545:
case 2022:
case 1332:
case 209:
case 4080:
case 3189:
case 3742:
case 3846:
case 2105:
case 4086:
case 2757:
case 2437:
case 249:
case 3254:
case 1761:
case 1664:
case 1862:
case 3594:
case 164:
case 3891:
case 2264:
case 3624:
case 1434:
case 3534:
case 1038:
case 88:
case 3588:
case 2278:
case 1193:
case 73:
case 3739:
case 4075:
case 13:
case 1061:
case 3211:
case 2777:
case 2840:
case 3568:
case 2780:
case 2893:
case 3234:
case 3073:
case 43:
case 787:
case 2408:
case 3808:
case 544:
case 2133:
case 1278:
case 106:
case 1076:
case 2882:
case 2955:
case 2980:
case 290:
case 2574:
case 3233:
case 1344:
case 145:
case 2025:
case 3303:
case 4060:
case 1734:
case 2247:
case 435:
case 3226:
case 885:
case 12:
case 1885:
case 2634:
case 2696:
case 2850:
case 1013:
case 1184:
case 3141:
case 3279:
case 708:
case 1973:
case 2531:
case 1185:
case 523:
case 897:
case 2576:
case 3238:
case 2506:
case 2042:
case 1484:
case 3461:
case 2569:
case 2771:
case 1008:
case 3706:
case 2488:
case 947:
case 1137:
case 1504:
case 3255:
case 2245:
case 1470:
case 3000:
case 2482:
case 2873:
case 1754:
case 1011:
case 3626:
case 380:
case 1820:
case 3169:
case 3231:
case 2676:
case 3076:
case 602:
case 3386:
case 438:
case 125:
case 137:
case 2412:
case 3529:
case 616:
case 806:
case 2380:
case 3369:
case 1570:
case 522:
case 1749:
case 2550:
case 1171:
case 1473:
case 3009:
case 1964:
case 3511:
case 2609:
case 3954:
case 3465:
case 1215:
case 3203:
case 980:
case 864:
case 2880:
case 259:
case 667:
case 4026:
case 503:
case 2529:
case 3259:
case 159:
case 3363:
case 943:
case 3328:
case 2414:
case 1801:
case 1832:
case 3576:
case 1819:
case 2189:
case 2876:
case 2336:
case 1651:
case 387:
case 283:
case 2082:
case 531:
case 3372:
case 3118:
case 321:
case 2315:
case 3845:
case 3638:
case 1074:
case 2267:
case 763:
case 3783:
case 315:
case 3550:
case 3812:
case 1480:
case 3815:
case 3322:
case 1196:
case 1618:
case 1703:
case 3731:
case 1041:
case 307:
case 873:
case 2050:
case 3146:
case 1771:
case 3993:
case 1815:
case 845:
case 2970:
case 2065:
case 3971:
case 2990:
case 3797:
case 753:
case 2126:
case 2171:
case 2617:
case 3120:
case 82:
case 3927:
case 238:
case 3643:
case 2946:
case 786:
case 3979:
case 2339:
case 1544:
case 1141:
case 3961:
case 2118:
case 1840:
case 1331:
case 4038:
case 1073:
case 3629:
case 3158:
case 23:
case 4009:
case 3931:
case 213:
case 1448:
case 1124:
case 1806:
case 1798:
case 2989:
case 3910:
case 903:
case 1181:
case 1075:
case 3868:
case 3606:
case 3772:
case 2651:
case 1391:
case 3209:
case 881:
case 1437:
case 890:
case 3108:
case 3548:
case 3714:
case 4016:
case 2038:
case 2465:
case 615:
case 731:
case 2626:
case 2155:
case 917:
case 2954:
case 2215:
case 3458:
case 1928:
case 220:
case 2703:
case 1602:
case 27:
case 3999:
case 1835:
case 3432:
case 195:
case 3730:
case 2710:
case 1785:
case 2480:
case 2647:
case 2006:
case 1512:
case 760:
case 755:
case 2860:
case 3219:
case 460:
case 3368:
case 1724:
case 1056:
case 2321:
case 3834:
case 70:
case 1363:
case 335:
case 1268:
case 1096:
case 1922:
case 3427:
case 1388:
case 3761:
case 976:
case 3434:
case 116:
case 2149:
case 2275:
case 3804:
case 1040:
case 3589:
case 2379:
case 2814:
case 3773:
case 349:
case 2639:
case 527:
case 337:
case 1585:
case 906:
case 2979:
case 1696:
case 2342:
case 3069:
case 2268:
case 600:
case 2357:
case 3996:
case 2827:
case 3842:
case 584:
case 688:
case 1140:
case 2602:
case 3290:
case 3839:
case 1447:
case 1967:
case 1708:
case 1308:
case 3741:
case 1827:
case 1094:
case 1020:
case 1796:
case 1702:
case 155:
case 1043:
case 2395:
case 3207:
case 701:
case 3793:
case 1279:
case 3944:
case 1620:
case 1791:
case 2725:
case 3190:
case 1202:
case 3545:
case 2350:
case 1406:
case 2135:
case 2782:
case 226:
case 3763:
case 1582:
case 2606:
case 3375:
case 1893:
case 18:
case 3957:
case 691:
case 1751:
case 157:
case 2163:
case 3260:
case 1009:
case 2806:
case 4014:
case 1408:
case 3887:
case 21:
case 3666:
case 969:
case 3330:
case 2549:
case 2110:
case 304:
case 1255:
case 1461:
case 1737:
case 391:
case 2002:
case 1103:
case 3899:
case 3185:
case 3667:
case 2822:
case 1765:
case 1276:
case 8:
case 2673:
case 2963:
case 1834:
case 3519:
case 2192:
case 1763:
case 1069:
case 3435:
case 3750:
case 356:
case 1105:
case 3776:
case 3340:
case 2120:
case 3278:
case 3792:
case 2911:
case 1394:
case 2660:
case 1081:
case 2483:
case 2898:
case 281:
case 1104:
case 614:
case 872:
case 267:
case 393:
case 2333:
case 365:
case 1080:
case 865:
case 3037:
case 3558:
case 1829:
case 3791:
case 2220:
case 1774:
case 2800:
case 1942:
case 3939:
case 81:
case 3036:
case 3128:
case 2309:
case 2691:
case 1881:
case 540:
case 1369:
case 1569:
case 363:
case 2289:
case 1002:
case 1433:
case 2121:
case 1583:
case 4081:
case 578:
case 2760:
case 3398:
case 243:
case 1750:
case 2711:
case 886:
case 758:
case 3669:
case 1548:
case 3063:
case 628:
case 3875:
case 3835:
case 2649:
case 1994:
case 3266:
case 3145:
case 3497:
case 1897:
case 84:
case 1188:
case 2966:
case 2595:
case 765:
case 715:
case 879:
case 3947:
case 2064:
case 3243:
case 3894:
case 3296:
case 2346:
case 3053:
case 451:
case 626:
case 2033:
case 1052:
case 1139:
case 2262:
case 1821:
case 575:
case 1240:
case 1298:
case 1579:
case 4085:
case 1496:
case 464:
case 788:
case 3770:
case 1856:
case 1989:
case 893:
case 3378:
case 3032:
case 3655:
case 2312:
case 314:
case 3798:
case 3610:
case 273:
case 985:
case 1755:
case 2986:
case 2468:
case 3540:
case 311:
case 2572:
case 3005:
case 990:
case 1573:
case 2374:
case 3967:
case 506:
case 461:
case 3570:
case 1015:
case 291:
case 2330:
case 392:
case 712:
case 2763:
case 3175:
case 2305:
case 1169:
case 469:
case 1459:
case 1330:
case 3850:
case 585:
case 740:
case 803:
case 184:
case 3811:
case 294:
case 2656:
case 2836:
case 2637:
case 1280:
case 4040:
case 2319:
case 817:
case 1866:
case 979:
case 2692:
case 2265:
case 104:
case 1053:
case 2106:
case 2369:
case 3775:
case 892:
case 944:
case 1918:
case 900:
case 4091:
case 4063:
case 1460:
case 1411:
case 179:
case 936:
case 2825:
case 3888:
case 2918:
case 1576:
case 3781:
case 2950:
case 4030:
case 1547:
case 373:
case 3225:
case 3579:
case 1405:
case 927:
case 2679:
case 1050:
case 354:
case 1315:
case 2570:
case 236:
case 3129:
case 2619:
case 876:
case 1621:
case 2862:
case 2665:
case 2706:
case 3744:
case 4018:
case 3167:
case 3068:
case 264:
case 2328:
case 825:
case 1028:
case 2856:
case 417:
case 1758:
case 135:
case 4074:
case 1479:
case 3122:
case 282:
case 4050:
case 2361:
case 331:
case 3779:
case 3436:
case 3580:
case 3232:
case 2345:
case 1729:
case 2632:
case 2727:
case 1555:
case 2677:
case 1727:
case 1224:
case 1568:
case 3852:
case 2527:
case 2653:
case 3709:
case 3348:
case 2871:
case 2648:
case 1556:
case 168:
case 1179:
case 1938:
case 718:
case 227:
case 2553:
case 130:
case 1501:
case 3215:
case 2958:
case 1295:
case 1658:
case 3447:
case 429:
case 1679:
case 3832:
case 800:
case 702:
case 772:
case 3043:
case 648:
case 3569:
case 1887:
case 1368:
case 3269:
case 3119:
case 3006:
case 1629:
case 695:
case 141:
case 124:
case 2774:
case 1911:
case 1271:
case 3671:
case 922:
case 729:
case 1693:
case 174:
case 1431:
case 2638:
case 4079:
case 1095:
case 3384:
case 784:
case 1740:
case 2686:
case 3817:
case 809:
case 1337:
case 1523:
case 1780:
case 796:
case 3079:
case 260:
case 3041:
case 3620:
case 891:
case 1498:
case 1335:
case 2543:
case 673:
case 945:
case 29:
case 1718:
case 1167:
case 583:
case 490:
case 1603:
case 1091:
case 192:
case 3562:
case 494:
case 677:
case 3110:
case 3258:
case 1653:
case 2957:
case 3767:
case 1828:
case 3362:
case 3882:
case 3729:
case 1962:
case 988:
case 3360:
case 749:
case 2122:
case 1364:
case 486:
case 2178:
case 1610:
case 2964:
case 1759:
case 2352:
case 1966:
case 3352:
case 3271:
case 3414:
case 1655:
case 1903:
case 222:
case 325:
case 2223:
case 1152:
case 14:
case 3288:
case 3985:
case 1026:
case 2400:
case 1572:
case 2952:
case 1377:
case 350:
case 2848:
case 3304:
case 3090:
case 345:
case 3885:
case 2828:
case 3029:
case 2903:
case 2363:
case 3039:
case 1274:
case 3583:
case 813:
case 1108:
case 1898:
case 3367:
case 526:
case 1611:
case 447:
case 915:
case 1920:
case 2674:
case 41:
case 1945:
case 3664:
case 2351:
case 2779:
case 3833:
case 1045:
case 2128:
case 3988:
case 3365:
case 1996:
case 2039:
case 2829:
case 1062:
case 394:
case 3485:
case 1793:
case 2282:
case 3859:
case 251:
case 946:
case 3758:
case 737:
case 1554:
case 1410:
case 52:
case 3393:
case 3577:
case 1133:
case 1868:
case 2332:
case 1067:
case 2560:
case 3459:
case 3224:
case 3174:
case 2430:
case 2690:
case 630:
case 692:
case 89:
case 2834:
case 2923:
case 2077:
case 402:
case 560:
case 3046:
case 1034:
case 2552:
case 463:
case 2394:
case 1539:
case 2237:
case 3007:
case 1256:
case 3914:
case 3627:
case 1859:
case 694:
case 3490:
case 1925:
case 3660:
case 725:
case 1027:
case 3919:
case 1304:
case 2755:
case 1704:
case 1914:
case 1163:
case 1058:
case 3543:
case 2269:
case 2770:
case 198:
case 2664:
case 2198:
case 543:
case 647:
case 2982:
case 378:
case 3411:
case 3648:
case 2580:
case 3724:
case 3020:
case 2605:
case 1017:
case 3974:
case 3229:
case 939:
case 3901:
case 757:
case 382:
case 1393:
case 779:
case 762:
case 39:
case 639:
case 2746:
case 170:
case 3541:
case 1558:
case 2151:
case 3345:
case 2112:
case 1398:
case 3512:
case 2645:
case 1403:
case 2343:
case 4083:
case 2905:
case 2270:
case 1182:
case 1825:
case 4013:
case 2218:
case 671:
case 452:
case 3628:
case 1209:
case 2221:
case 2360:
case 1347:
case 696:
case 3210:
case 1385:
case 3425:
case 3533:
case 35:
case 874:
case 182:
case 501:
case 2749:
case 801:
case 792:
case 3822:
case 2701:
case 1234:
case 3768:
case 3062:
case 3351:
case 2168:
case 2723:
case 1783:
case 3658:
case 3184:
case 3527:
case 1036:
case 3591:
case 812:
case 3416:
case 676:
case 183:
case 1676:
case 1713:
case 2235:
case 2432:
case 1477:
case 2798:
case 2111:
case 2972:
case 1772:
case 3663:
case 1194:
case 1683:
case 1952:
case 2433:
case 1604:
case 136:
case 861:
case 3423:
case 1916:
case 132:
case 1993:
case 1976:
case 2067:
case 465:
case 1803:
case 3995:
case 3810:
case 2601:
case 46:
case 1884:
case 530:
case 3711:
case 3287:
case 1277:
case 458:
case 994:
case 3283:
case 185:
case 1888:
case 381:
case 3323:
case 2608:
case 2109:
case 3738:
case 2642:
case 3747:
case 3114:
case 1561:
case 889:
case 1601:
case 3616:
case 559:
case 1345:
case 1698:
case 142:
case 2931:
case 1376:
case 3717:
case 1543:
case 118:
case 2625:
case 2562:
case 2968:
case 3470:
case 1723:
case 3466:
case 871:
case 1540:
case 2367:
case 2141:
case 162:
case 3242:
case 196:
case 1684:
case 2515:
case 1762:
case 2472:
case 1640:
case 930:
case 3261:
case 851:
case 2177:
case 2226:
case 2324:
case 1314:
case 2734:
case 3872:
case 953:
case 61:
case 1465:
case 1588:
case 67:
case 2415:
case 2134:
case 3672:
case 3336:
case 466:
case 1949:
case 1528:
case 436:
case 1000:
case 2820:
case 120:
case 952:
case 719:
case 191:
case 3573:
case 2306:
case 2762:
case 732:
case 3253:
case 3439:
case 3748:
case 542:
case 3359:
case 1958:
case 2528:
case 119:
case 121:
case 2558:
case 734:
case 2495:
case 4007:
case 1944:
case 2007:
case 643:
case 2739:
case 1001:
case 1769:
case 2519:
case 269:
case 2745:
case 2026:
case 1230:
case 2628:
case 1353:
case 339:
case 3600:
case 4092:
case 2172:
case 3602:
case 2041:
case 4004:
case 2088:
case 25:
case 3181:
case 767:
case 3112:
case 3513:
case 3902:
case 2533:
case 1607:
case 1191:
case 1633:
case 2174:
case 1135:
case 3299:
case 3531:
case 3549:
case 858:
case 3561:
case 3058:
case 3928:
case 351:
case 597:
case 2530:
case 3746:
case 3474:
case 3877:
case 4090:
case 2909:
case 2866:
case 582:
case 3937:
case 2833:
case 3417:
case 4077:
case 3462:
case 1114:
case 3567:
case 1742:
case 3683:
case 1117:
case 5:
case 204:
case 1700:
case 1441:
case 2184:
case 3813:
case 1546:
case 237:
case 4069:
case 999:
case 3686:
case 1731:
case 2113:
case 2682:
case 390:
case 2009:
case 1527:
case 847:
case 250:
case 895:
case 44:
case 2170:
case 370:
case 2671:
case 658:
case 1971:
case 2661:
case 3911:
case 956:
case 941:
case 2548:
case 3078:
case 1421:
case 579:
case 759:
case 2705:
case 1631:
case 3011:
case 2125:
case 115:
case 56:
case 433:
case 1630:
case 618:
case 3855:
case 1029:
case 867:
case 4041:
case 2410:
case 756:
case 1226:
case 317:
case 1293:
case 2248:
case 2117:
case 3712:
case 2697:
case 1243:
case 2730:
case 2507:
case 3329:
case 3104:
case 2047:
case 2720:
case 2888:
case 1726:
case 596:
case 3676:
case 1022:
case 880:
case 2186:
case 3124:
case 2478:
case 1269:
case 693:
case 2487:
case 3913:
case 2187:
case 2524:
case 1959:
case 71:
case 689:
case 1084:
case 2456:
case 2146:
case 2293:
case 1360:
case 1333:
case 2211:
case 883:
case 308:
case 1905:
case 2102:
case 1305:
case 336:
case 1098:
case 3106:
case 1934:
case 3659:
case 2027:
case 3679:
case 3506:
case 3410:
case 2600:
case 1797:
case 1253:
case 683:
case 3509:
case 3404:
case 1906:
case 97:
case 2921:
case 1136:
case 1756:
case 147:
case 1533:
case 2108:
case 996:
case 28:
case 1784:
case 2700:
case 3592:
case 595:
case 2983:
case 2201:
case 1520:
case 2899:
case 2073:
case 3843:
case 1757:
case 2131:
case 699:
case 3357:
case 1830:
case 3099:
case 1518:
case 2935:
case 919:
case 207:
case 2792:
case 2510:
case 545:
case 2761:
case 103:
case 2484:
case 2419:
case 1845:
case 1745:
case 1730:
case 3618:
case 1339:
case 2758:
case 1489:
case 2667:
case 2236:
case 3440:
case 3476:
case 379:
case 2716:
case 2795:
case 376:
case 2416:
case 735:
case 98:
case 607:
case 274:
case 2731:
case 1158:
case 468:
case 2839:
case 1541:
case 1294:
case 2868:
case 2589:
case 1483:
case 4025:
case 2167:
case 271:
case 1147:
case 1882:
case 896:
case 42:
case 2407:
case 306:
case 65:
case 2051:
case 516:
case 2286:
case 1824:
case 3250:
case 3295:
case 4066:
case 2024:
case 200:
case 2554:
case 1242:
case 1977:
case 2596:
case 2568:
case 711:
case 257:
case 2417:
case 3964:
case 199:
case 2754:
case 2261:
case 2869:
case 3599:
case 836:
case 91:
case 3451:
case 396:
case 3978:
case 1402:
case 1933:
case 1176:
case 3896:
case 403:
case 541:
case 369:
case 1302:
case 24:
case 2281:
case 1173:
case 2210:
case 1715:
case 2695:
case 2035:
case 3990:
case 427:
case 1146:
case 1223:
case 1721:
case 1802:
case 1694:
case 2641:
case 2214:
case 2089:
case 3925:
case 3726:
case 2377:
case 439:
case 57:
case 3092:
case 2581:
case 1429:
case 3088:
case 1584:
case 2054:
case 2717:
case 9:
case 1846:
case 3305:
case 898:
case 353:
case 1258:
case 3848:
case 2431:
case 53:
case 152:
case 502:
case 172:
case 1549:
case 107:
case 1719:
case 3140:
case 3657:
case 2372:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1669237201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,];
var gg_b = "1669237201/";

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
