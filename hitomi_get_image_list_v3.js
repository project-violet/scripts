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
case 324:
case 399:
case 2783:
case 2089:
case 3527:
case 1113:
case 1838:
case 2776:
case 2137:
case 2402:
case 3162:
case 820:
case 3597:
case 2216:
case 238:
case 189:
case 3719:
case 4020:
case 1568:
case 1561:
case 1018:
case 1860:
case 742:
case 2320:
case 4026:
case 1508:
case 2526:
case 2103:
case 670:
case 1660:
case 1699:
case 1710:
case 117:
case 1845:
case 2683:
case 3267:
case 2668:
case 3490:
case 3076:
case 2145:
case 3263:
case 452:
case 1019:
case 3665:
case 2806:
case 2265:
case 3015:
case 549:
case 2468:
case 3286:
case 2126:
case 1447:
case 2930:
case 1818:
case 1446:
case 3538:
case 66:
case 1765:
case 3154:
case 2057:
case 2497:
case 2619:
case 2882:
case 729:
case 2025:
case 1225:
case 366:
case 2872:
case 1916:
case 3716:
case 108:
case 2961:
case 1497:
case 3692:
case 385:
case 5:
case 1305:
case 2461:
case 352:
case 3449:
case 482:
case 599:
case 2330:
case 2905:
case 322:
case 1284:
case 3410:
case 2657:
case 3660:
case 3125:
case 1289:
case 303:
case 750:
case 2428:
case 222:
case 3928:
case 3357:
case 247:
case 3176:
case 1971:
case 2043:
case 490:
case 2070:
case 3831:
case 1853:
case 2462:
case 3861:
case 1178:
case 2425:
case 3996:
case 3700:
case 581:
case 772:
case 2824:
case 2004:
case 3234:
case 1385:
case 3270:
case 1785:
case 3117:
case 1034:
case 2269:
case 2045:
case 1943:
case 1528:
case 236:
case 3850:
case 1403:
case 3161:
case 3304:
case 1213:
case 4031:
case 2262:
case 3634:
case 2996:
case 2227:
case 1118:
case 2268:
case 3022:
case 4054:
case 3728:
case 1968:
case 3973:
case 20:
case 2980:
case 1459:
case 503:
case 1253:
case 1575:
case 3182:
case 3845:
case 3989:
case 4057:
case 1484:
case 227:
case 2799:
case 666:
case 2901:
case 3908:
case 4035:
case 783:
case 2354:
case 343:
case 3202:
case 1942:
case 3005:
case 3142:
case 716:
case 2687:
case 3798:
case 2498:
case 2534:
case 3545:
case 759:
case 3846:
case 3646:
case 2092:
case 2727:
case 1951:
case 3589:
case 1844:
case 3957:
case 2194:
case 1892:
case 1949:
case 3910:
case 2444:
case 2577:
case 2618:
case 3059:
case 245:
case 26:
case 3892:
case 2704:
case 722:
case 1111:
case 2654:
case 3416:
case 2465:
case 976:
case 1928:
case 3690:
case 725:
case 1438:
case 106:
case 1401:
case 2801:
case 1633:
case 3567:
case 1217:
case 210:
case 2079:
case 2107:
case 2009:
case 2578:
case 2707:
case 1402:
case 2282:
case 956:
case 1766:
case 2316:
case 1297:
case 1051:
case 2389:
case 3990:
case 28:
case 1782:
case 2985:
case 1023:
case 535:
case 2876:
case 129:
case 443:
case 1414:
case 1437:
case 2435:
case 2769:
case 1478:
case 2589:
case 557:
case 2210:
case 1731:
case 275:
case 1124:
case 3902:
case 2088:
case 2735:
case 589:
case 2035:
case 2438:
case 3759:
case 974:
case 3852:
case 3619:
case 1485:
case 3894:
case 898:
case 946:
case 1267:
case 3487:
case 678:
case 862:
case 3244:
case 425:
case 2430:
case 1582:
case 3940:
case 931:
case 2585:
case 1886:
case 4055:
case 1015:
case 2301:
case 3384:
case 234:
case 2239:
case 1109:
case 1662:
case 1106:
case 1470:
case 1758:
case 3256:
case 6:
case 4081:
case 1708:
case 2627:
case 169:
case 2012:
case 2686:
case 3557:
case 2631:
case 2893:
case 2492:
case 730:
case 2587:
case 3577:
case 3564:
case 1924:
case 2258:
case 3524:
case 3769:
case 2074:
case 3523:
case 3676:
case 1698:
case 1129:
case 1395:
case 2414:
case 1351:
case 1037:
case 3489:
case 930:
case 643:
case 3051:
case 1677:
case 2749:
case 2554:
case 2017:
case 3349:
case 3866:
case 3009:
case 1729:
case 3043:
case 3473:
case 1421:
case 1737:
case 380:
case 947:
case 1889:
case 647:
case 286:
case 2278:
case 3444:
case 2744:
case 2694:
case 2077:
case 2027:
case 2722:
case 3226:
case 2460:
case 2502:
case 3491:
case 3192:
case 1084:
case 3541:
case 2463:
case 1226:
case 959:
case 1694:
case 4049:
case 1146:
case 3497:
case 3734:
case 2399:
case 793:
case 1407:
case 3525:
case 98:
case 2911:
case 1783:
case 2541:
case 3802:
case 135:
case 2150:
case 479:
case 2046:
case 4059:
case 2665:
case 577:
case 3715:
case 1613:
case 863:
case 3118:
case 35:
case 957:
case 345:
case 3428:
case 992:
case 1442:
case 3095:
case 892:
case 1341:
case 1480:
case 403:
case 62:
case 4071:
case 436:
case 3463:
case 1372:
case 2432:
case 1325:
case 3566:
case 1495:
case 3713:
case 1131:
case 2063:
case 2601:
case 2215:
case 743:
case 3450:
case 2349:
case 629:
case 1004:
case 3040:
case 760:
case 1686:
case 1730:
case 1627:
case 202:
case 2413:
case 3360:
case 2226:
case 1370:
case 2890:
case 1079:
case 496:
case 3654:
case 1080:
case 3451:
case 2039:
case 2607:
case 2881:
case 2969:
case 1416:
case 1580:
case 851:
case 250:
case 4023:
case 2505:
case 808:
case 2297:
case 1795:
case 1625:
case 3681:
case 939:
case 3001:
case 1552:
case 2991:
case 1816:
case 430:
case 2725:
case 2185:
case 3618:
case 2286:
case 2807:
case 810:
case 2230:
case 1697:
case 2973:
case 349:
case 2312:
case 38:
case 1430:
case 2182:
case 3281:
case 325:
case 1435:
case 575:
case 1909:
case 3337:
case 3807:
case 2255:
case 1774:
case 1839:
case 1736:
case 2263:
case 864:
case 2019:
case 1850:
case 823:
case 4076:
case 4066:
case 88:
case 3453:
case 239:
case 728:
case 618:
case 735:
case 2743:
case 1815:
case 3278:
case 1306:
case 2100:
case 2047:
case 40:
case 1273:
case 4085:
case 2048:
case 2274:
case 2672:
case 1759:
case 1825:
case 3560:
case 933:
case 1212:
case 95:
case 2988:
case 2018:
case 2622:
case 1411:
case 1022:
case 573:
case 1713:
case 1492:
case 3848:
case 3628:
case 3104:
case 3664:
case 943:
case 2276:
case 3199:
case 2606:
case 3150:
case 3052:
case 1003:
case 3091:
case 1116:
case 1007:
case 1199:
case 3029:
case 550:
case 3377:
case 355:
case 641:
case 561:
case 2178:
case 3688:
case 1824:
case 1706:
case 439:
case 3382:
case 3103:
case 526:
case 683:
case 3653:
case 2199:
case 3762:
case 3258:
case 2011:
case 2858:
case 540:
case 3455:
case 14:
case 1114:
case 41:
case 3972:
case 1848:
case 1365:
case 2944:
case 1986:
case 1373:
case 3964:
case 3893:
case 789:
case 3049:
case 1490:
case 953:
case 1705:
case 3321:
case 131:
case 1293:
case 739:
case 3198:
case 904:
case 927:
case 1083:
case 3540:
case 2559:
case 3218:
case 4044:
case 713:
case 3002:
case 883:
case 1771:
case 853:
case 3365:
case 2990:
case 3358:
case 1234:
case 1449:
case 3913:
case 887:
case 3603:
case 3953:
case 27:
case 424:
case 3626:
case 2621:
case 3678:
case 1668:
case 3006:
case 2393:
case 1907:
case 2674:
case 4070:
case 4092:
case 2832:
case 1817:
case 50:
case 522:
case 2597:
case 1471:
case 3777:
case 1918:
case 1474:
case 1445:
case 1803:
case 3220:
case 2235:
case 337:
case 3120:
case 1384:
case 3442:
case 2236:
case 1974:
case 3090:
case 3584:
case 1744:
case 132:
case 3277:
case 3168:
case 1165:
case 800:
case 3397:
case 3027:
case 3207:
case 2368:
case 2804:
case 2562:
case 3273:
case 3999:
case 493:
case 456:
case 3917:
case 1775:
case 3824:
case 77:
case 2545:
case 620:
case 745:
case 3941:
case 1764:
case 133:
case 3054:
case 3796:
case 817:
case 1160:
case 510:
case 1290:
case 1612:
case 1197:
case 3814:
case 2159:
case 2522:
case 4075:
case 1473:
case 1390:
case 966:
case 3968:
case 563:
case 2987:
case 3741:
case 2001:
case 462:
case 3047:
case 1208:
case 1367:
case 1064:
case 1188:
case 1295:
case 2538:
case 241:
case 1192:
case 1904:
case 3247:
case 476:
case 360:
case 1742:
case 2406:
case 1887:
case 3797:
case 2363:
case 2493:
case 3438:
case 1105:
case 3630:
case 47:
case 1323:
case 3570:
case 2765:
case 1813:
case 3138:
case 3280:
case 105:
case 4007:
case 3780:
case 1644:
case 470:
case 3984:
case 2927:
case 2325:
case 1278:
case 1566:
case 3328:
case 2946:
case 4046:
case 4025:
case 2154:
case 3702:
case 2313:
case 271:
case 4067:
case 353:
case 1285:
case 1564:
case 31:
case 2625:
case 1857:
case 422:
case 2350:
case 2679:
case 642:
case 1020:
case 201:
case 2386:
case 3821:
case 1228:
case 2418:
case 3191:
case 1078:
case 2813:
case 3387:
case 2284:
case 338:
case 1255:
case 1653:
case 1722:
case 332:
case 3817:
case 2811:
case 2184:
case 3212:
case 2302:
case 2384:
case 3904:
case 2506:
case 487:
case 542:
case 2494:
case 2144:
case 140:
case 1672:
case 1769:
case 2149:
case 1880:
case 1558:
case 2843:
case 3983:
case 2275:
case 2459:
case 521:
case 782:
case 2380:
case 2661:
case 4083:
case 2183:
case 159:
case 1724:
case 4061:
case 2158:
case 749:
case 795:
case 4086:
case 886:
case 3250:
case 125:
case 3211:
case 370:
case 2369:
case 1840:
case 952:
case 3205:
case 368:
case 446:
case 2055:
case 3569:
case 3437:
case 649:
case 2457:
case 2805:
case 72:
case 3276:
case 1454:
case 3003:
case 3699:
case 2067:
case 209:
case 1967:
case 1939:
case 1152:
case 1180:
case 2003:
case 721:
case 533:
case 3971:
case 1281:
case 3296:
case 2705:
case 1127:
case 637:
case 2409:
case 235:
case 2200:
case 1053:
case 1807:
case 3135:
case 2201:
case 2501:
case 1879:
case 2680:
case 3900:
case 2237:
case 543:
case 477:
case 1538:
case 1670:
case 2634:
case 1592:
case 3055:
case 584:
case 3433:
case 958:
case 408:
case 2653:
case 2454:
case 1753:
case 1254:
case 1576:
case 538:
case 1001:
case 1957:
case 2391:
case 1368:
case 1357:
case 1894:
case 2574:
case 53:
case 1535:
case 1717:
case 3992:
case 2984:
case 290:
case 3513:
case 2309:
case 3629:
case 2997:
case 1622:
case 3146:
case 3034:
case 1955:
case 65:
case 2005:
case 645:
case 513:
case 3479:
case 1768:
case 2049:
case 2659:
case 458:
case 762:
case 685:
case 4021:
case 2006:
case 2937:
case 899:
case 884:
case 3711:
case 1139:
case 1602:
case 44:
case 1479:
case 459:
case 2515:
case 292:
case 2936:
case 212:
case 451:
case 1991:
case 351:
case 340:
case 3685:
case 264:
case 3794:
case 1781:
case 791:
case 888:
case 2221:
case 1218:
case 145:
case 1072:
case 680:
case 2513:
case 736:
case 1207:
case 3429:
case 3838:
case 2931:
case 3611:
case 2873:
case 146:
case 3837:
case 1981:
case 2941:
case 361:
case 367:
case 3023:
case 3071:
case 3203:
case 2959:
case 2891:
case 480:
case 1504:
case 546:
case 4063:
case 1224:
case 501:
case 2510:
case 2036:
case 1126:
case 2728:
case 552:
case 1654:
case 616:
case 1244:
case 1317:
case 2573:
case 968:
case 466:
case 2850:
case 769:
case 3963:
case 2978:
case 598:
case 2637:
case 3872:
case 3773:
case 158:
case 3171:
case 984:
case 918:
case 3583:
case 364:
case 3231:
case 204:
case 3674:
case 1302:
case 1342:
case 1198:
case 1269:
case 869:
case 2820:
case 1749:
case 622:
case 3918:
case 2287:
case 1227:
case 1893:
case 51:
case 1158:
case 2663:
case 2810:
case 3993:
case 3085:
case 1890:
case 1229:
case 1206:
case 2419:
case 3411:
case 1921:
case 3586:
case 704:
case 990:
case 3561:
case 3098:
case 1071:
case 1140:
case 254:
case 1369:
case 416:
case 1000:
case 1363:
case 865:
case 2933:
case 3819:
case 1822:
case 3695:
case 1906:
case 2558:
case 1406:
case 825:
case 1231:
case 3058:
case 1946:
case 1896:
case 781:
case 2061:
case 1954:
case 515:
case 3457:
case 347:
case 3679:
case 1389:
case 2013:
case 2136:
case 1081:
case 2819:
case 1128:
case 2475:
case 2303:
case 3860:
case 469:
case 498:
case 2066:
case 450:
case 2385:
case 2768:
case 1137:
case 2803:
case 2982:
case 2283:
case 2751:
case 867:
case 1090:
case 3627:
case 111:
case 217:
case 2052:
case 1274:
case 1013:
case 2396:
case 3440:
case 530:
case 989:
case 3482:
case 1702:
case 2452:
case 1831:
case 2082:
case 1947:
case 2094:
case 3745:
case 438:
case 2852:
case 3696:
case 1615:
case 3881:
case 2974:
case 225:
case 1683:
case 4012:
case 143:
case 2388:
case 3498:
case 2021:
case 902:
case 3851:
case 2915:
case 2568:
case 3359:
case 2766:
case 1679:
case 3608:
case 3407:
case 1159:
case 1512:
case 3659:
case 644:
case 2317:
case 3184:
case 1251:
case 2837:
case 3074:
case 3969:
case 3939:
case 3282:
case 205:
case 1453:
case 2647:
case 1461:
case 2848:
case 3102:
case 119:
case 3546:
case 2571:
case 764:
case 3306:
case 441:
case 473:
case 1865:
case 885:
case 2398:
case 1469:
case 3343:
case 384:
case 2827:
case 868:
case 3156:
case 1846:
case 3880:
case 1343:
case 2366:
case 1242:
case 297:
case 518:
case 2421:
case 2719:
case 2896:
case 192:
case 1688:
case 407:
case 1505:
case 2332:
case 819:
case 3867:
case 328:
case 861:
case 2123:
case 948:
case 980:
case 32:
case 882:
case 3723:
case 3301:
case 3744:
case 3877:
case 1487:
case 971:
case 1464:
case 797:
case 1308:
case 3938:
case 881:
case 3787:
case 2379:
case 1268:
case 2508:
case 3736:
case 1903:
case 1541:
case 2277:
case 1008:
case 2110:
case 2591:
case 732:
case 3209:
case 2167:
case 978:
case 2337:
case 2426:
case 2785:
case 191:
case 3873:
case 2613:
case 2455:
case 3767:
case 350:
case 359:
case 1624:
case 1067:
case 3680:
case 3136:
case 1901:
case 1028:
case 3067:
case 17:
case 2963:
case 1964:
case 231:
case 2950:
case 3493:
case 165:
case 3624:
case 963:
case 420:
case 967:
case 1496:
case 2314:
case 3402:
case 121:
case 1719:
case 2346:
case 388:
case 2120:
case 3575:
case 4028:
case 3396:
case 652:
case 3174:
case 4032:
case 951:
case 1864:
case 3370:
case 1193:
case 3352:
case 3214:
case 2928:
case 3753:
case 2163:
case 3503:
case 219:
case 852:
case 1581:
case 3039:
case 2628:
case 194:
case 1252:
case 3081:
case 3614:
case 768:
case 653:
case 3580:
case 1115:
case 588:
case 2360:
case 3075:
case 1720:
case 3264:
case 3340:
case 1101:
case 2919:
case 2217:
case 3465:
case 602:
case 582:
case 805:
case 2846:
case 829:
case 1291:
case 3158:
case 34:
case 3587:
case 1574:
case 2344:
case 398:
case 1932:
case 2703:
case 2945:
case 1322:
case 965:
case 1796:
case 1895:
case 2378:
case 1086:
case 2600:
case 694:
case 1324:
case 1969:
case 3016:
case 2563:
case 167:
case 1482:
case 3213:
case 3044:
case 318:
case 3558:
case 3445:
case 1428:
case 1882:
case 1163:
case 2777:
case 3518:
case 3056:
case 316:
case 686:
case 578:
case 3761:
case 786:
case 1068:
case 2218:
case 4095:
case 1088:
case 3965:
case 2737:
case 2877:
case 3534:
case 3189:
case 3201:
case 2212:
case 1104:
case 3783:
case 544:
case 1266:
case 2544:
case 1979:
case 2643:
case 3988:
case 1344:
case 3038:
case 2682:
case 2387:
case 1386:
case 991:
case 2196:
case 2611:
case 2697:
case 298:
case 3219:
case 120:
case 1557:
case 1304:
case 1346:
case 1358:
case 2464:
case 1933:
case 2223:
case 776:
case 3089:
case 2550:
case 796:
case 3835:
case 1149:
case 2143:
case 206:
case 2758:
case 567:
case 1185:
case 2246:
case 908:
case 186:
case 2624:
case 3502:
case 3248:
case 97:
case 2093:
case 3391:
case 3640:
case 1861:
case 1944:
case 2532:
case 2825:
case 375:
case 720:
case 468:
case 3292:
case 3839:
case 3060:
case 3960:
case 30:
case 1247:
case 3131:
case 954:
case 1529:
case 910:
case 2186:
case 18:
case 1752:
case 994:
case 2907:
case 3729:
case 2400:
case 1732:
case 3152:
case 83:
case 2234:
case 872:
case 1097:
case 3160:
case 854:
case 1897:
case 2750:
case 1827:
case 841:
case 118:
case 3707:
case 2203:
case 3495:
case 427:
case 1603:
case 1871:
case 2486:
case 404:
case 73:
case 179:
case 3269:
case 3504:
case 995:
case 2033:
case 997:
case 662:
case 1249:
case 4089:
case 923:
case 2456:
case 880:
case 1243:
case 2250:
case 2830:
case 3229:
case 2225:
case 709:
case 564:
case 2131:
case 327:
case 2271:
case 896:
case 3898:
case 3890:
case 2757:
case 3891:
case 3223:
case 2754:
case 2125:
case 3200:
case 240:
case 3030:
case 2072:
case 1222:
case 1303:
case 1392:
case 1338:
case 1202:
case 2289:
case 3532:
case 3221:
case 3612:
case 156:
case 4001:
case 4068:
case 171:
case 2862:
case 807:
case 2440:
case 3924:
case 1040:
case 1598:
case 1830:
case 3936:
case 2552:
case 3754:
case 626:
case 3496:
case 401:
case 4016:
case 3480:
case 911:
case 982:
case 1905:
case 3031:
case 1262:
case 3929:
case 3833:
case 1094:
case 1312:
case 1147:
case 124:
case 539:
case 1999:
case 2566:
case 1616:
case 788:
case 3596:
case 127:
case 3145:
case 913:
case 3594:
case 916:
case 2111:
case 3123:
case 2889:
case 4077:
case 99:
case 3227:
case 379:
case 780:
case 2716:
case 2000:
case 4079:
case 2646:
case 1150:
case 1356:
case 259:
case 3763:
case 3718:
case 2129:
case 3018:
case 80:
case 3376:
case 1586:
case 610:
case 1733:
case 1517:
case 1691:
case 4062:
case 4041:
case 3430:
case 2466:
case 1790:
case 269:
case 2689:
case 2300:
case 3035:
case 365:
case 3441:
case 1793:
case 464:
case 2582:
case 1866:
case 2859:
case 3651:
case 502:
case 11:
case 3515:
case 258:
case 423:
case 3547:
case 2352:
case 1232:
case 2580:
case 3235:
case 1075:
case 3167:
case 3631:
case 3399:
case 938:
case 142:
case 2853:
case 2311:
case 3901:
case 1856:
case 2208:
case 949:
case 4040:
case 1174:
case 440:
case 3297:
case 3177:
case 2642:
case 3179:
case 2572:
case 1872:
case 3259:
case 3675:
case 4042:
case 2609:
case 1987:
case 1852:
case 431:
case 1829:
case 2042:
case 2076:
case 1076:
case 1811:
case 306:
case 3439:
case 2537:
case 623:
case 3836:
case 1994:
case 1320:
case 2599:
case 1536:
case 1460:
case 3638:
case 1888:
case 445:
case 998:
case 3623:
case 2925:
case 2424:
case 1585:
case 1642:
case 3885:
case 3732:
case 2407:
case 3506:
case 2977:
case 1843:
case 2602:
case 1548:
case 2220:
case 2553:
case 3143:
case 556:
case 1788:
case 560:
case 270:
case 1685:
case 3889:
case 1547:
case 3061:
case 921:
case 924:
case 2711:
case 1600:
case 1387:
case 3046:
case 1643:
case 2971:
case 2598:
case 1579:
case 1531:
case 1611:
case 587:
case 3920:
case 2966:
case 4082:
case 1219:
case 903:
case 3641:
case 256:
case 2294:
case 1125:
case 109:
case 1510:
case 3529:
case 2023:
case 2291:
case 2496:
case 2549:
case 3724:
case 1233:
case 2903:
case 2952:
case 291:
case 2165:
case 3066:
case 3492:
case 706:
case 3361:
case 58:
case 395:
case 1223:
case 3124:
case 52:
case 272:
case 57:
case 2724:
case 3302:
case 2353:
case 4056:
case 3432:
case 2484:
case 2675:
case 96:
case 1089:
case 2401:
case 2164:
case 1735:
case 3232:
case 1751:
case 2296:
case 1092:
case 1488:
case 3825:
case 1703:
case 2660:
case 141:
case 824:
case 1810:
case 2833:
case 3922:
case 1526:
case 553:
case 183:
case 2483:
case 747:
case 1936:
case 3818:
case 1912:
case 741:
case 3000:
case 1680:
case 315:
case 1314:
case 2002:
case 4019:
case 516:
case 54:
case 1264:
case 1038:
case 23:
case 428:
case 2699:
case 2041:
case 2934:
case 3977:
case 1623:
case 495:
case 4080:
case 554:
case 2371:
case 309:
case 229:
case 242:
case 2517:
case 2786:
case 329:
case 305:
case 668:
case 2970:
case 838:
case 3905:
case 2417:
case 2792:
case 12:
case 1491:
case 392:
case 3617:
case 2295:
case 357:
case 104:
case 3272:
case 1500:
case 2868:
case 3048:
case 3878:
case 2153:
case 979:
case 3395:
case 804:
case 961:
case 1802:
case 1621:
case 1704:
case 942:
case 3750:
case 1604:
case 263:
case 2746:
case 2932:
case 2736:
case 2753:
case 2529:
case 2358:
case 2962:
case 2170:
case 698:
case 726:
case 3062:
case 2030:
case 2134:
case 3216:
case 1164:
case 3129:
case 576:
case 3368:
case 203:
case 754:
case 2596:
case 3552:
case 402:
case 625:
case 2814:
case 4022:
case 2764:
case 2620:
case 2972:
case 3950:
case 64:
case 25:
case 2443:
case 1332:
case 705:
case 170:
case 21:
case 22:
case 2839:
case 2293:
case 1591:
case 1741:
case 499:
case 382:
case 2610:
case 3188:
case 558:
case 2233:
case 1804:
case 639:
case 572:
case 2681:
case 2122:
case 3574:
case 1467:
case 619:
case 1057:
case 1144:
case 1583:
case 3392:
case 1120:
case 2708:
case 1780:
case 1027:
case 1182:
case 1530:
case 293:
case 960:
case 1388:
case 2175:
case 1626:
case 2020:
case 2266:
case 837:
case 3708:
case 2965:
case 1875:
case 2696:
case 3507:
case 1931:
case 1962:
case 2747:
case 3346:
case 304:
case 2224:
case 1911:
case 1966:
case 246:
case 1588:
case 123:
case 3613:
case 1675:
case 3604:
case 2791:
case 4034:
case 3274:
case 481:
case 2188:
case 2756:
case 4047:
case 2299:
case 2649:
case 3332:
case 2748:
case 3656:
case 182:
case 928:
case 801:
case 3556:
case 449:
case 199:
case 1712:
case 3976:
case 1990:
case 815:
case 3291:
case 3731:
case 232:
case 137:
case 3386:
case 547:
case 2348:
case 3488:
case 3446:
case 126:
case 2451:
case 2636:
case 3093:
case 342:
case 138:
case 1555:
case 3705:
case 213:
case 319:
case 3666:
case 2527:
case 2329:
case 68:
case 483:
case 3539:
case 289:
case 2180:
case 2365:
case 850:
case 3925:
case 3994:
case 279:
case 621:
case 1465:
case 1663:
case 1319:
case 2168:
case 1761:
case 373:
case 463:
case 180:
case 3815:
case 3419:
case 3287:
case 3726:
case 3327:
case 3576:
case 2333:
case 4072:
case 3998:
case 1221:
case 1631:
case 779:
case 665:
case 3073:
case 2658:
case 1364:
case 3334:
case 2091:
case 1311:
case 3579:
case 2375:
case 3:
case 2564:
case 1316:
case 2555:
case 3454:
case 3452:
case 2685:
case 4088:
case 312:
case 3312:
case 2044:
case 3774:
case 633:
case 1834:
case 936:
case 3945:
case 2929:
case 2951:
case 655:
case 2478:
case 3033:
case 1554:
case 2448:
case 3919:
case 344:
case 761:
case 2331:
case 3369:
case 3004:
case 3956:
case 3698:
case 3345:
case 3635:
case 1513:
case 1560:
case 3826:
case 2179:
case 3252:
case 3508:
case 1636:
case 1136:
case 2939:
case 1812:
case 3751:
case 2327:
case 2924:
case 3954:
case 2071:
case 1499:
case 580:
case 3222:
case 2140:
case 1503:
case 566:
case 3339:
case 3768:
case 87:
case 3311:
case 1241:
case 1956:
case 1649:
case 1651:
case 2948:
case 1808:
case 2285:
case 2778:
case 1763:
case 3469:
case 284:
case 1240:
case 1423:
case 2709:
case 3914:
case 1458:
case 1891:
case 1671:
case 45:
case 638:
case 215:
case 2509:
case 1578:
case 3268:
case 1455:
case 3012:
case 3620:
case 848:
case 1422:
case 280:
case 2060:
case 1161:
case 211:
case 1777:
case 3408:
case 3933:
case 2851:
case 3854:
case 1569:
case 4043:
case 1919:
case 3909:
case 3903:
case 3032:
case 4027:
case 1276:
case 1376:
case 2488:
case 523:
case 4018:
case 4024:
case 1539:
case 2304:
case 1507:
case 3169:
case 1658:
case 1245:
case 1237:
case 3404:
case 2155:
case 3598:
case 3757:
case 2146:
case 1634:
case 972:
case 1032:
case 43:
case 2280:
case 1728:
case 1794:
case 3746:
case 2472:
case 3738:
case 3930:
case 3417:
case 3662:
case 3677:
case 555:
case 2090:
case 3742:
case 3682:
case 2823:
case 3735:
case 2343:
case 3684:
case 983:
case 1443:
case 1440:
case 2900:
case 541:
case 1069:
case 2078:
case 1515:
case 511:
case 3257:
case 1549:
case 2434:
case 1876:
case 700:
case 63:
case 429:
case 3847:
case 112:
case 860:
case 3110:
case 1074:
case 693:
case 3625:
case 2651:
case 1279:
case 1935:
case 2390:
case 1417:
case 103:
case 2864:
case 3785:
case 1630:
case 2361:
case 858:
case 1329:
case 341:
case 3578:
case 1837:
case 962:
case 1601:
case 3305:
case 1819:
case 1609:
case 1908:
case 1522:
case 224:
case 3987:
case 3647:
case 2171:
case 92:
case 2270:
case 771:
case 3478:
case 3308:
case 3165:
case 1664:
case 548:
case 3112:
case 3980:
case 2560:
case 830:
case 1863:
case 2762:
case 2051:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1651554002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,];
var gg_b = "1651554002/";

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
