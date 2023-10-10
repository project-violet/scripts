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
case 1540:
case 2125:
case 507:
case 1996:
case 2386:
case 2464:
case 603:
case 3725:
case 317:
case 1582:
case 1933:
case 406:
case 3319:
case 1602:
case 2754:
case 2938:
case 1692:
case 833:
case 3522:
case 2119:
case 2572:
case 937:
case 1308:
case 1121:
case 1081:
case 1309:
case 3003:
case 2516:
case 334:
case 680:
case 3649:
case 1960:
case 2404:
case 647:
case 1106:
case 2164:
case 804:
case 1234:
case 689:
case 870:
case 3971:
case 1368:
case 1703:
case 2538:
case 1886:
case 1828:
case 3102:
case 3815:
case 3262:
case 289:
case 3662:
case 3216:
case 3623:
case 685:
case 2945:
case 2825:
case 3172:
case 2709:
case 3424:
case 3697:
case 2304:
case 691:
case 3362:
case 1206:
case 714:
case 2082:
case 1619:
case 2578:
case 3555:
case 2255:
case 1597:
case 2300:
case 1479:
case 1342:
case 206:
case 1551:
case 2789:
case 2935:
case 338:
case 1668:
case 2564:
case 1184:
case 215:
case 1553:
case 1661:
case 2593:
case 1714:
case 2596:
case 1563:
case 826:
case 3588:
case 1534:
case 3476:
case 2348:
case 1167:
case 1370:
case 2066:
case 2430:
case 297:
case 652:
case 1438:
case 629:
case 42:
case 53:
case 68:
case 530:
case 3127:
case 137:
case 2810:
case 3758:
case 3559:
case 2646:
case 1675:
case 324:
case 2501:
case 1812:
case 2306:
case 478:
case 2013:
case 2626:
case 1659:
case 3099:
case 3056:
case 1178:
case 3451:
case 1837:
case 3007:
case 1314:
case 802:
case 2855:
case 2874:
case 3438:
case 2608:
case 643:
case 194:
case 4095:
case 159:
case 4063:
case 1852:
case 1984:
case 1203:
case 3839:
case 3512:
case 268:
case 2475:
case 2652:
case 805:
case 407:
case 571:
case 3295:
case 1437:
case 3694:
case 167:
case 1302:
case 2405:
case 3111:
case 563:
case 738:
case 3722:
case 3425:
case 1002:
case 1049:
case 2476:
case 3938:
case 2130:
case 1272:
case 2497:
case 3020:
case 1364:
case 717:
case 2252:
case 1514:
case 1499:
case 245:
case 3988:
case 3121:
case 401:
case 3194:
case 3143:
case 1012:
case 939:
case 3333:
case 2526:
case 1971:
case 2875:
case 3893:
case 737:
case 3325:
case 1493:
case 2134:
case 2505:
case 954:
case 1505:
case 1847:
case 479:
case 1917:
case 3018:
case 3092:
case 1177:
case 4092:
case 558:
case 663:
case 3185:
case 3985:
case 2743:
case 3972:
case 3920:
case 2207:
case 2677:
case 2851:
case 2703:
case 864:
case 2700:
case 653:
case 3847:
case 437:
case 200:
case 1487:
case 1653:
case 1704:
case 3793:
case 3415:
case 3761:
case 2630:
case 3158:
case 3081:
case 3022:
case 1375:
case 4023:
case 763:
case 981:
case 1157:
case 590:
case 1235:
case 2480:
case 782:
case 2973:
case 1920:
case 382:
case 2276:
case 2224:
case 319:
case 726:
case 2167:
case 2127:
case 972:
case 2648:
case 907:
case 2716:
case 2649:
case 3608:
case 2027:
case 1209:
case 2793:
case 3973:
case 3969:
case 2877:
case 3581:
case 2025:
case 1380:
case 1156:
case 1881:
case 779:
case 3766:
case 957:
case 1232:
case 718:
case 4030:
case 2848:
case 1666:
case 2512:
case 2635:
case 4008:
case 3691:
case 2525:
case 3471:
case 3593:
case 837:
case 1501:
case 2570:
case 2290:
case 3976:
case 1719:
case 2966:
case 3879:
case 2470:
case 816:
case 1491:
case 984:
case 3214:
case 2985:
case 4065:
case 485:
case 2359:
case 1264:
case 165:
case 1319:
case 1955:
case 1268:
case 1503:
case 3834:
case 3286:
case 3141:
case 971:
case 3446:
case 1214:
case 2086:
case 1482:
case 1710:
case 1824:
case 3084:
case 440:
case 2905:
case 3925:
case 1477:
case 482:
case 1565:
case 2969:
case 3256:
case 2622:
case 1377:
case 707:
case 549:
case 1348:
case 3205:
case 2093:
case 2949:
case 829:
case 920:
case 39:
case 83:
case 1539:
case 1547:
case 1970:
case 2853:
case 3197:
case 1595:
case 1775:
case 2249:
case 3189:
case 1690:
case 760:
case 3011:
case 2063:
case 1295:
case 1250:
case 1679:
case 513:
case 113:
case 2752:
case 1612:
case 1944:
case 3795:
case 2366:
case 373:
case 2755:
case 3516:
case 4013:
case 3564:
case 2819:
case 807:
case 413:
case 785:
case 4016:
case 1950:
case 2919:
case 431:
case 3183:
case 2265:
case 682:
case 517:
case 287:
case 3877:
case 612:
case 3074:
case 1759:
case 600:
case 3735:
case 750:
case 2941:
case 293:
case 1725:
case 1258:
case 422:
case 2693:
case 3287:
case 1601:
case 919:
case 481:
case 2617:
case 337:
case 2135:
case 2806:
case 2162:
case 37:
case 2760:
case 1705:
case 1749:
case 232:
case 4005:
case 3728:
case 2634:
case 1761:
case 3724:
case 1304:
case 2064:
case 3637:
case 178:
case 2333:
case 2728:
case 1753:
case 783:
case 1807:
case 2713:
case 1545:
case 1574:
case 1991:
case 1027:
case 1529:
case 1415:
case 288:
case 2644:
case 577:
case 4084:
case 1762:
case 1273:
case 1763:
case 901:
case 1823:
case 3061:
case 540:
case 1133:
case 3790:
case 1750:
case 223:
case 3810:
case 1392:
case 109:
case 3236:
case 3489:
case 3682:
case 1148:
case 2979:
case 1451:
case 1266:
case 1089:
case 227:
case 3624:
case 690:
case 3843:
case 2911:
case 1765:
case 3449:
case 896:
case 3460:
case 3570:
case 1140:
case 3382:
case 2297:
case 64:
case 561:
case 2236:
case 2151:
case 2019:
case 3690:
case 3867:
case 3160:
case 236:
case 687:
case 314:
case 183:
case 3384:
case 2489:
case 944:
case 2331:
case 1817:
case 2963:
case 2818:
case 1682:
case 3902:
case 371:
case 678:
case 1822:
case 197:
case 1212:
case 2391:
case 2471:
case 3579:
case 3995:
case 2018:
case 48:
case 2:
case 1255:
case 1912:
case 3155:
case 3226:
case 930:
case 1956:
case 375:
case 1052:
case 2518:
case 2725:
case 179:
case 1162:
case 1211:
case 2592:
case 369:
case 4076:
case 3124:
case 2117:
case 493:
case 2324:
case 395:
case 2850:
case 2744:
case 3565:
case 3743:
case 1204:
case 149:
case 2026:
case 2643:
case 101:
case 3646:
case 2854:
case 1393:
case 3343:
case 3024:
case 2046:
case 2332:
case 3014:
case 1594:
case 1544:
case 2126:
case 3151:
case 2301:
case 2856:
case 1401:
case 51:
case 1087:
case 3537:
case 2361:
case 1411:
case 2661:
case 2009:
case 1693:
case 2129:
case 684:
case 1531:
case 2417:
case 3751:
case 544:
case 3303:
case 2251:
case 844:
case 2158:
case 3145:
case 3821:
case 2344:
case 747:
case 1992:
case 818:
case 381:
case 2794:
case 3049:
case 1862:
case 1891:
case 3819:
case 326:
case 1349:
case 3954:
case 3699:
case 2043:
case 2545:
case 80:
case 841:
case 2215:
case 2695:
case 3168:
case 33:
case 3031:
case 3115:
case 1253:
case 667:
case 3827:
case 2575:
case 1346:
case 2365:
case 400:
case 2320:
case 1819:
case 354:
case 3584:
case 2947:
case 3133:
case 1215:
case 1614:
case 2999:
case 2683:
case 2758:
case 3267:
case 2800:
case 170:
case 3787:
case 1672:
case 2428:
case 960:
case 3105:
case 1467:
case 2037:
case 2833:
case 3654:
case 1510:
case 524:
case 2336:
case 3188:
case 3992:
case 2605:
case 4068:
case 2991:
case 3368:
case 1609:
case 2601:
case 3577:
case 28:
case 3746:
case 3886:
case 346:
case 817:
case 1339:
case 3777:
case 442:
case 218:
case 345:
case 66:
case 3801:
case 695:
case 2259:
case 725:
case 1067:
case 17:
case 3732:
case 2080:
case 3543:
case 1800:
case 1142:
case 1872:
case 2054:
case 1561:
case 1530:
case 1777:
case 457:
case 796:
case 1434:
case 1782:
case 2742:
case 70:
case 2419:
case 1063:
case 366:
case 333:
case 3932:
case 2186:
case 982:
case 1898:
case 3109:
case 2108:
case 234:
case 1108:
case 3814:
case 419:
case 2038:
case 3905:
case 3369:
case 3310:
case 2345:
case 1528:
case 1180:
case 14:
case 1238:
case 2187:
case 611:
case 1642:
case 3703:
case 3573:
case 2972:
case 1359:
case 154:
case 1208:
case 3140:
case 861:
case 806:
case 3043:
case 622:
case 1257:
case 2133:
case 3930:
case 1296:
case 1558:
case 4036:
case 3550:
case 1478:
case 2069:
case 122:
case 1483:
case 932:
case 1382:
case 3974:
case 1729:
case 1889:
case 2607:
case 1803:
case 1064:
case 1138:
case 1854:
case 3048:
case 732:
case 1011:
case 3945:
case 2370:
case 1913:
case 1303:
case 2776:
case 1581:
case 2161:
case 2923:
case 309:
case 2201:
case 851:
case 3258:
case 448:
case 1922:
case 8:
case 3126:
case 1849:
case 398:
case 4073:
case 1418:
case 3280:
case 2072:
case 272:
case 3916:
case 1577:
case 1735:
case 531:
case 290:
case 30:
case 2788:
case 1734:
case 1315:
case 351:
case 1757:
case 832:
case 2678:
case 1362:
case 3784:
case 2382:
case 875:
case 2316:
case 811:
case 3942:
case 602:
case 60:
case 2191:
case 3841:
case 4075:
case 1678:
case 3684:
case 2784:
case 2687:
case 364:
case 588:
case 2452:
case 3165:
case 3225:
case 2278:
case 1592:
case 676:
case 4032:
case 1569:
case 1361:
case 2029:
case 601:
case 993:
case 3259:
case 3940:
case 2195:
case 155:
case 2260:
case 1468:
case 1159:
case 1766:
case 3013:
case 2994:
case 329:
case 795:
case 3466:
case 2273:
case 1903:
case 2753:
case 1785:
case 1373:
case 4082:
case 3396:
case 1135:
case 1608:
case 2379:
case 2085:
case 302:
case 3706:
case 3495:
case 3388:
case 1502:
case 3997:
case 1667:
case 2817:
case 139:
case 3494:
case 1132:
case 2456:
case 1271:
case 3767:
case 3956:
case 614:
case 1756:
case 1599:
case 1048:
case 2986:
case 1820:
case 3704:
case 115:
case 2629:
case 2076:
case 3769:
case 848:
case 542:
case 2568:
case 1952:
case 2602:
case 1040:
case 1239:
case 112:
case 2895:
case 315:
case 98:
case 1586:
case 3224:
case 1799:
case 767:
case 1065:
case 3376:
case 562:
case 1422:
case 2927:
case 132:
case 1447:
case 1901:
case 3265:
case 3946:
case 2356:
case 3357:
case 556:
case 2511:
case 1123:
case 3503:
case 3008:
case 2595:
case 1077:
case 4071:
case 843:
case 777:
case 173:
case 380:
case 273:
case 3854:
case 2828:
case 735:
case 2406:
case 2547:
case 3882:
case 1259:
case 3176:
case 2453:
case 2004:
case 1743:
case 754:
case 1760:
case 2177:
case 2720:
case 472:
case 3587:
case 2281:
case 229:
case 2083:
case 2967:
case 2159:
case 952:
case 3923:
case 1566:
case 1330:
case 793:
case 3311:
case 264:
case 947:
case 536:
case 1381:
case 3208:
case 3195:
case 2559:
case 963:
case 2347:
case 461:
case 1021:
case 3609:
case 2857:
case 1541:
case 3041:
case 2148:
case 158:
case 1039:
case 475:
case 1402:
case 1350:
case 3002:
case 1488:
case 3620:
case 1470:
case 2196:
case 3845:
case 1905:
case 2904:
case 4011:
case 3842:
case 2396:
case 1921:
case 13:
case 2423:
case 3075:
case 2149:
case 1383:
case 655:
case 2380:
case 376:
case 4026:
case 4018:
case 973:
case 2478:
case 923:
case 445:
case 1611:
case 429:
case 2182:
case 1572:
case 3760:
case 498:
case 1282:
case 1726:
case 4072:
case 2272:
case 1475:
case 389:
case 560:
case 2913:
case 1247:
case 2079:
case 1188:
case 1907:
case 3220:
case 420:
case 3647:
case 3266:
case 4006:
case 3402:
case 3457:
case 2782:
case 2685:
case 613:
case 1844:
case 1245:
case 909:
case 4027:
case 456:
case 1987:
case 3506:
case 500:
case 3301:
case 2469:
case 1737:
case 1068:
case 2169:
case 421:
case 455:
case 2781:
case 2562:
case 3174:
case 4053:
case 3744:
case 473:
case 278:
case 1473:
case 3774:
case 3883:
case 1452:
case 3961:
case 2802:
case 2887:
case 1056:
case 2432:
case 3993:
case 3040:
case 2039:
case 860:
case 3749:
case 2411:
case 3114:
case 2479:
case 3509:
case 2107:
case 3296:
case 520:
case 951:
case 1691:
case 187:
case 535:
case 712:
case 3:
case 1605:
case 621:
case 2641:
case 1323:
case 1074:
case 3891:
case 579:
case 2672:
case 2305:
case 3548:
case 1079:
case 1104:
case 3551:
case 3404:
case 673:
case 2724:
case 3567:
case 697:
case 2067:
case 2374:
case 97:
case 1218:
case 1386:
case 1925:
case 3248:
case 1655:
case 2385:
case 940:
case 733:
case 4039:
case 1902:
case 3077:
case 3331:
case 1455:
case 1236:
case 280:
case 3730:
case 3656:
case 1827:
case 1154:
case 118:
case 3603:
case 3339:
case 3897:
case 282:
case 3479:
case 2598:
case 638:
case 3469:
case 145:
case 1830:
case 2862:
case 2481:
case 2445:
case 2585:
case 2520:
case 2766:
case 99:
case 2399:
case 1663:
case 2154:
case 127:
case 3406:
case 1277:
case 2091:
case 3239:
case 2138:
case 2197:
case 2656:
case 2734:
case 1942:
case 3085:
case 374:
case 1850:
case 2600:
case 3860:
case 2580:
case 1974:
case 3330:
case 575:
case 2921:
case 1928:
case 3409:
case 510:
case 2662:
case 2416:
case 4037:
case 3906:
case 1697:
case 877:
case 3592:
case 3721:
case 2583:
case 69:
case 2425:
case 3427:
case 1318:
case 1335:
case 3307:
case 3826:
case 3423:
case 881:
case 3179:
case 40:
case 1130:
case 3436:
case 3132:
case 362:
case 606:
case 3387:
case 3162:
case 3527:
case 1584:
case 2561:
case 672:
case 1768:
case 2594:
case 3231:
case 1694:
case 3146:
case 2217:
case 3987:
case 2241:
case 1149:
case 2616:
case 1617:
case 2870:
case 3068:
case 416:
case 1707:
case 2036:
case 761:
case 1080:
case 2894:
case 121:
case 3372:
case 3653:
case 2699:
case 1343:
case 1292:
case 2531:
case 3332:
case 2888:
case 661:
case 1509:
case 3159:
case 2950:
case 86:
case 2299:
case 1732:
case 3097:
case 3939:
case 2696:
case 1287:
case 2472:
case 669:
case 2748:
case 103:
case 1794:
case 3365:
case 2664:
case 570:
case 3562:
case 2861:
case 1892:
case 2011:
case 587:
case 2701:
case 3390:
case 1338:
case 3499:
case 2548:
case 330:
case 598:
case 1230:
case 1699:
case 1312:
case 3053:
case 2885:
case 3375:
case 87:
case 744:
case 4034:
case 1030:
case 1351:
case 3481:
case 2223:
case 307:
case 1790:
case 467:
case 1431:
case 681:
case 2081:
case 1128:
case 1640:
case 2549:
case 1093:
case 2761:
case 3738:
case 2865:
case 2665:
case 1191:
case 2183:
case 2060:
case 3552:
case 1183:
case 1752:
case 2140:
case 2349:
case 300:
case 84:
case 341:
case 3933:
case 3010:
case 3797:
case 660:
case 1930:
case 3019:
case 0:
case 2314:
case 3089:
case 2931:
case 3269:
case 3412:
case 933:
case 255:
case 2777:
case 3448:
case 2840:
case 820:
case 4086:
case 399:
case 2269:
case 3050:
case 1115:
case 1137:
case 1471:
case 664:
case 2116:
case 3429:
case 1570:
case 453:
case 2442:
case 3106:
case 2658:
case 3614:
case 550:
case 418:
case 759:
case 3455:
case 2435:
case 2890:
case 344:
case 1720:
case 1548:
case 2759:
case 2147:
case 3285:
case 2362:
case 3736:
case 2837:
case 322:
case 1400:
case 1290:
case 968:
case 3352:
case 1885:
case 2613:
case 1286:
case 1066:
case 1845:
case 2621:
case 1018:
case 126:
case 1831:
case 3811:
case 4041:
case 1949:
case 3823:
case 3560:
case 1242:
case 2920:
case 3666:
case 3435:
case 1652:
case 25:
case 2363:
case 3740:
case 1926:
case 256:
case 3350:
case 2702:
case 3999:
case 3918:
case 365:
case 3870:
case 1419:
case 828:
case 12:
case 677:
case 2841:
case 2946:
case 1116:
case 2610:
case 1045:
case 409:
case 2483:
case 459:
case 941:
case 3292:
case 4093:
case 2073:
case 2371:
case 3348:
case 1518:
case 3110:
case 1969:
case 2092:
case 2257:
case 3422:
case 2267:
case 2268:
case 2765:
case 803:
case 2462:
case 1310:
case 2271:
case 3665:
case 2110:
case 3250:
case 3680:
case 2070:
case 2292:
case 2582:
case 2078:
case 1606:
case 755:
case 128:
case 3710:
case 93:
case 654:
case 4048:
case 249:
case 353:
case 2555:
case 2667:
case 2741:
case 2234:
case 2056:
case 219:
case 3540:
case 3367:
case 2540:
case 49:
case 138:
case 2322:
case 1688:
case 827:
case 2243:
case 1638:
case 1878:
case 63:
case 3719:
case 2061:
case 3804:
case 135:
case 3245:
case 2820:
case 1709:
case 2956:
case 792:
case 3996:
case 3413:
case 3157:
case 746:
case 3929:
case 2240:
case 1698:
case 3673:
case 79:
case 1000:
case 1325:
case 867:
case 2302:
case 1227:
case 2886:
case 363:
case 3782:
case 1336:
case 1532:
case 1890:
case 74:
case 3763:
case 27:
case 2447:
case 1883:
case 156:
case 3729:
case 1564:
case 230:
case 2834:
case 108:
case 1965:
case 2491:
case 784:
case 2463:
case 1009:
case 1029:
case 169:
case 163:
case 874:
case 521:
case 1358:
case 3762:
case 895:
case 1990:
case 3989:
case 2111:
case 1329:
case 604:
case 902:
case 813:
case 1911:
case 1882:
case 3701:
case 477:
case 1327:
case 1164:
case 1076:
case 2101:
case 1711:
case 2055:
case 847:
case 2258:
case 1090:
case 1546:
case 2275:
case 1134:
case 2496:
case 1083:
case 3541:
case 257:
case 1968:
case 3153:
case 3862:
case 955:
case 1151:
case 1580:
case 1055:
case 2655:
case 3430:
case 383:
case 853:
case 899:
case 3984:
case 3754:
case 1533:
case 887:
case 764:
case 2971:
case 3718:
case 3042:
case 1825:
case 1298:
case 1005:
case 3034:
case 2233:
case 2431:
case 2706:
case 141:
case 2077:
case 3360:
case 3878:
case 3247:
case 3752:
case 514:
case 839:
case 1289:
case 2285:
case 88:
case 2783:
case 78:
case 4052:
case 1573:
case 2136:
case 2308:
case 503:
case 202:
case 3947:
case 3196:
case 3103:
case 1858:
case 3493:
case 3671:
case 2830:
case 185:
case 488:
case 3733:
case 2220:
case 3966:
case 2498:
case 770:
case 1320:
case 2896:
case 3377:
case 2869:
case 1773:
case 1560:
case 1624:
case 3125:
case 1396:
case 3538:
case 801:
case 2859:
case 402:
case 967:
case 2829:
case 2675:
case 3556:
case 3689:
case 3408:
case 1684:
case 426:
case 752:
case 2587:
case 3968:
case 1175:
case 2012:
case 3786:
case 2712:
case 3892:
case 2614:
case 130:
case 3578:
case 825:
case 3616:
case 850:
case 3134:
case 900:
case 2017:
case 316:
case 3472:
case 3314:
case 2014:
case 222:
case 54:
case 1994:
case 217:
case 2799:
case 1413:
case 936:
case 551:
case 1874:
case 702:
case 1497:
case 494:
case 2560:
case 3418:
case 214:
case 417:
case 4091:
case 3838:
case 2122:
case 2369:
case 3612:
case 432:
case 1207:
case 1713:
case 3610:
case 1033:
case 616:
case 1873:
case 698:
case 1278:
case 1865:
case 3574:
case 1630:
case 950:
case 2682:
case 1695:
case 2811:
case 105:
case 983:
case 1896:
case 4051:
case 2906:
case 2987:
case 116:
case 2537:
case 3108:
case 3289:
case 4057:
case 1954:
case 2872:
case 1059:
case 1274:
case 581:
case 2315:
case 1091:
case 1417:
case 1989:
case 1226:
case 3856:
case 3485:
case 1708:
case 3284:
case 2524:
case 1407:
case 2660:
case 189:
case 2845:
case 3257:
case 3928:
case 642:
case 1279:
case 2329:
case 748:
case 539:
case 2944:
case 3924:
case 3899:
case 2591:
case 3082:
case 3313:
case 2722:
case 3321:
case 897:
case 306:
case 3370:
case 2441:
case 559:
case 2188:
case 1244:
case 1078:
case 2381:
case 3745:
case 1200:
case 3525:
case 271:
case 3207:
case 3129:
case 3837:
case 2898:
case 3720:
case 866:
case 1792:
case 3023:
case 1527:
case 3033:
case 651:
case 1037:
case 1809:
case 148:
case 1450:
case 2718:
case 3087:
case 356:
case 1945:
case 2948:
case 2052:
case 3317:
case 3281:
case 2047:
case 2993:
case 863:
case 212:
case 3963:
case 3117:
case 2235:
case 94:
case 1706:
case 390:
case 2691:
case 3450:
case 2131:
case 3434:
case 1537:
case 3955:
case 1610:
case 842:
case 2468:
case 2981:
case 2155:
case 3679:
case 3601:
case 3504:
case 2213:
case 2932:
case 2484:
case 765:
case 617:
case 2506:
case 3298:
case 3850:
case 107:
case 2563:
case 3173:
case 3215:
case 3374:
case 3421:
case 379:
case 3364:
case 1736:
case 438:
case 2245:
case 3523:
case 3660:
case 385:
case 509:
case 2539:
case 3586:
case 1869:
case 4069:
case 640:
case 4085:
case 2929:
case 235:
case 1155:
case 2041:
case 3855:
case 2327:
case 3142:
case 1671:
case 3764:
case 291:
case 3781:
case 1445:
case 1345:
case 3323:
case 2954:
case 989:
case 931:
case 2280:
case 858:
case 2010:
case 3400:
case 913:
case 701:
case 3500:
case 3144:
case 188:
case 857:
case 2633:
case 1789:
case 3640:
case 720:
case 1125:
case 3566:
case 2503:
case 3707:
case 890:
case 279:
case 2916:
case 1428:
case 3521:
case 3254:
case 2953:
case 1914:
case 3783:
case 2171:
case 2686:
case 2552:
case 143:
case 433:
case 3731:
case 3881:
case 244:
case 1504:
case 3463:
case 2360:
case 2571:
case 2334:
case 3100:
case 2242:
case 1740:
case 2897:
case 3347:
case 3182:
case 980:
case 1636:
case 1131:
case 2118:
case 528:
case 176:
case 180:
case 11:
case 403:
case 52:
case 694:
case 1367:
case 24:
case 3416:
case 1047:
case 2642:
case 3381:
case 1681:
case 1866:
case 394:
case 812:
case 3351:
case 1953:
case 131:
case 1389:
case 607:
case 2488:
case 3864:
case 3549:
case 2797:
case 3029:
case 3096:
case 3316:
case 3514:
case 2535:
case 2565:
case 3122:
case 1223:
case 434:
case 3164:
case 3385:
case 2016:
case 3397:
case 56:
case 2773:
case 3908:
case 2295:
case 977:
case 3306:
case 3243:
case 4028:
case 486:
case 800:
case 1772:
case 1848:
case 1998:
case 3748:
case 2460:
case 3687:
case 965:
case 342:
case 2669:
case 3792:
case 340:
case 1935:
case 1391:
case 3166:
case 1192:
case 2143:
case 1425:
case 92:
case 2750:
case 1842:
case 1637:
case 233:
case 3779:
case 1650:
case 415:
case 1744:
case 3027:
case 2206:
case 3465:
case 3829:
case 1731:
case 1424:
case 2796:
case 2884:
case 3528:
case 3518:
case 3709:
case 2681:
case 569:
case 1808:
case 259:
case 2288:
case 377:
case 3532:
case 2901:
case 2599:
case 1436:
case 182:
case 565:
case 1124:
case 3848:
case 1864:
case 1388:
case 152:
case 2807:
case 3148:
case 1216:
case 834:
case 2934:
case 221:
case 824:
case 3288:
case 2989:
case 22:
case 1284:
case 2137:
case 2180:
case 709:
case 929:
case 959:
case 1515:
case 323:
case 891:
case 425:
case 1260:
case 90:
case 1062:
case 2377:
case 3249:
case 1813:
case 501:
case 3393:
case 2358:
case 1552:
case 527:
case 4:
case 727:
case 1851:
case 595:
case 2688:
case 3645:
case 1058:
case 3223:
case 1657:
case 4067:
case 3865:
case 2007:
case 492:
case 2218:
case 1946:
case 2105:
case 2835:
case 1936:
case 2889:
case 1512:
case 284:
case 703:
case 4088:
case 533:
case 1416:
case 2412:
case 4064:
case 320:
case 181:
case 3341:
case 2736:
case 1834:
case 2368:
case 124:
case 1100:
case 945:
case 2983:
case 3944:
case 3692:
case 1038:
case 253:
case 110:
case 3233:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1696957202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,];
var gg_b = "1696957202/";

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
