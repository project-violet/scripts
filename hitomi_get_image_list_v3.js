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
case 2688:
case 3250:
case 1486:
case 4036:
case 1779:
case 4015:
case 1173:
case 1662:
case 21:
case 2045:
case 3031:
case 1323:
case 3934:
case 4086:
case 3508:
case 3460:
case 1711:
case 2587:
case 2025:
case 1370:
case 1330:
case 1968:
case 602:
case 553:
case 1290:
case 1611:
case 3659:
case 1447:
case 3548:
case 4054:
case 3423:
case 3329:
case 995:
case 3351:
case 2959:
case 3019:
case 102:
case 462:
case 3528:
case 2695:
case 3927:
case 2872:
case 3108:
case 1750:
case 729:
case 3401:
case 2624:
case 554:
case 1595:
case 788:
case 1114:
case 1451:
case 2588:
case 2349:
case 1021:
case 2038:
case 3473:
case 481:
case 2233:
case 2327:
case 1724:
case 1435:
case 3148:
case 3755:
case 1586:
case 3496:
case 3124:
case 520:
case 1507:
case 359:
case 2999:
case 2017:
case 4091:
case 658:
case 1505:
case 2969:
case 121:
case 961:
case 910:
case 2795:
case 3202:
case 159:
case 2676:
case 857:
case 273:
case 1459:
case 2247:
case 3413:
case 2577:
case 3261:
case 672:
case 782:
case 1562:
case 1727:
case 3499:
case 2129:
case 87:
case 628:
case 1445:
case 710:
case 2571:
case 3331:
case 2189:
case 3796:
case 3758:
case 3376:
case 2270:
case 286:
case 3181:
case 401:
case 4060:
case 2461:
case 1809:
case 3835:
case 3418:
case 144:
case 3962:
case 1487:
case 2777:
case 1178:
case 1924:
case 3632:
case 2390:
case 1213:
case 665:
case 73:
case 798:
case 1502:
case 2657:
case 1099:
case 1989:
case 3150:
case 3336:
case 1692:
case 3981:
case 3649:
case 65:
case 2955:
case 1654:
case 2423:
case 1767:
case 1409:
case 1652:
case 1419:
case 2515:
case 960:
case 3742:
case 2284:
case 3373:
case 384:
case 2660:
case 1877:
case 4085:
case 1554:
case 3284:
case 1254:
case 3513:
case 3488:
case 3038:
case 2986:
case 561:
case 1175:
case 1320:
case 2627:
case 3262:
case 540:
case 2240:
case 1456:
case 2830:
case 978:
case 118:
case 2936:
case 1335:
case 3433:
case 1222:
case 1754:
case 3286:
case 2917:
case 1570:
case 2631:
case 1011:
case 1785:
case 3909:
case 3766:
case 2543:
case 301:
case 2044:
case 4024:
case 3800:
case 1059:
case 2377:
case 131:
case 1883:
case 1525:
case 1886:
case 1090:
case 3749:
case 3247:
case 599:
case 424:
case 2479:
case 2081:
case 3860:
case 590:
case 2980:
case 3586:
case 143:
case 3695:
case 2418:
case 3153:
case 1931:
case 2605:
case 1602:
case 3159:
case 1042:
case 84:
case 1315:
case 2550:
case 2929:
case 994:
case 2838:
case 449:
case 225:
case 3566:
case 1031:
case 3215:
case 621:
case 3717:
case 203:
case 1064:
case 2555:
case 521:
case 1312:
case 1199:
case 333:
case 395:
case 243:
case 4045:
case 466:
case 3004:
case 3698:
case 2897:
case 2765:
case 793:
case 3090:
case 2680:
case 1954:
case 3323:
case 2208:
case 2234:
case 3759:
case 1869:
case 1242:
case 3558:
case 3911:
case 3718:
case 2729:
case 3999:
case 3176:
case 744:
case 2084:
case 1583:
case 2817:
case 3888:
case 3753:
case 1781:
case 254:
case 2535:
case 629:
case 873:
case 1681:
case 1152:
case 974:
case 1432:
case 3949:
case 3294:
case 1180:
case 10:
case 362:
case 2691:
case 3444:
case 1910:
case 3789:
case 4084:
case 3165:
case 1965:
case 335:
case 2786:
case 1446:
case 1266:
case 75:
case 3915:
case 2422:
case 1775:
case 480:
case 2094:
case 1154:
case 692:
case 3876:
case 1906:
case 1373:
case 2606:
case 2260:
case 2512:
case 3933:
case 3731:
case 3862:
case 192:
case 1006:
case 467:
case 3382:
case 1996:
case 2553:
case 2033:
case 3306:
case 3781:
case 3549:
case 2520:
case 1601:
case 2846:
case 2881:
case 328:
case 2526:
case 1161:
case 222:
case 217:
case 2411:
case 900:
case 952:
case 600:
case 2002:
case 958:
case 396:
case 3357:
case 2589:
case 3563:
case 2360:
case 1235:
case 1991:
case 1196:
case 2754:
case 536:
case 3049:
case 2710:
case 1160:
case 1569:
case 2708:
case 2246:
case 982:
case 2492:
case 3821:
case 2632:
case 1072:
case 1130:
case 1891:
case 612:
case 3570:
case 1104:
case 3864:
case 2628:
case 3859:
case 569:
case 2821:
case 3993:
case 1057:
case 3039:
case 3243:
case 583:
case 2186:
case 278:
case 3366:
case 3811:
case 135:
case 772:
case 111:
case 1115:
case 1831:
case 2375:
case 518:
case 1524:
case 1089:
case 1092:
case 2612:
case 1903:
case 2847:
case 416:
case 1613:
case 1473:
case 653:
case 1858:
case 2340:
case 1375:
case 4092:
case 2880:
case 1267:
case 768:
case 2768:
case 2766:
case 511:
case 3664:
case 1454:
case 62:
case 1573:
case 1442:
case 2345:
case 1210:
case 2533:
case 1527:
case 2697:
case 1359:
case 544:
case 454:
case 2673:
case 1795:
case 2677:
case 3666:
case 2659:
case 3457:
case 2927:
case 662:
case 3708:
case 2326:
case 1593:
case 45:
case 3021:
case 1063:
case 3054:
case 3697:
case 3512:
case 3486:
case 3765:
case 3861:
case 2409:
case 134:
case 3941:
case 3245:
case 1485:
case 724:
case 2614:
case 2364:
case 1247:
case 1841:
case 3489:
case 2060:
case 1326:
case 3736:
case 1937:
case 871:
case 1647:
case 3565:
case 827:
case 3940:
case 3972:
case 126:
case 4048:
case 444:
case 2306:
case 1916:
case 438:
case 1062:
case 747:
case 422:
case 1177:
case 2882:
case 3222:
case 2861:
case 4026:
case 637:
case 1501:
case 3190:
case 2722:
case 2130:
case 77:
case 1391:
case 471:
case 1854:
case 1804:
case 3988:
case 999:
case 2029:
case 2922:
case 2091:
case 668:
case 271:
case 2059:
case 3870:
case 1813:
case 508:
case 715:
case 1918:
case 3505:
case 1334:
case 2746:
case 1807:
case 2214:
case 1321:
case 3242:
case 734:
case 2194:
case 1857:
case 2619:
case 1148:
case 981:
case 1498:
case 1766:
case 4077:
case 1450:
case 883:
case 578:
case 2065:
case 1685:
case 2230:
case 919:
case 1669:
case 3824:
case 2184:
case 771:
case 223:
case 3725:
case 3425:
case 2028:
case 32:
case 2195:
case 542:
case 3705:
case 4081:
case 3501:
case 415:
case 3831:
case 3358:
case 3850:
case 2718:
case 1976:
case 3350:
case 3263:
case 2063:
case 1828:
case 543:
case 3099:
case 1997:
case 303:
case 731:
case 419:
case 1590:
case 2165:
case 3416:
case 263:
case 2773:
case 733:
case 1574:
case 2517:
case 2725:
case 4038:
case 3277:
case 1789:
case 2267:
case 2564:
case 1452:
case 2232:
case 80:
case 500:
case 2354:
case 1352:
case 2600:
case 18:
case 944:
case 2470:
case 2771:
case 2907:
case 1364:
case 3838:
case 875:
case 634:
case 2993:
case 1157:
case 141:
case 2569:
case 1992:
case 1599:
case 2101:
case 52:
case 2685:
case 2870:
case 1453:
case 3367:
case 746:
case 992:
case 1380:
case 2828:
case 348:
case 1890:
case 2667:
case 3257:
case 2827:
case 101:
case 3198:
case 1671:
case 822:
case 617:
case 2653:
case 4030:
case 339:
case 272:
case 106:
case 2741:
case 2488:
case 2649:
case 1736:
case 3968:
case 361:
case 2507:
case 3954:
case 4027:
case 1297:
case 1069:
case 3403:
case 1353:
case 1707:
case 445:
case 674:
case 3446:
case 2561:
case 616:
case 605:
case 1513:
case 170:
case 1422:
case 3193:
case 3109:
case 172:
case 1790:
case 1922:
case 2116:
case 1749:
case 1951:
case 1817:
case 4029:
case 1287:
case 206:
case 2829:
case 96:
case 2187:
case 1818:
case 3428:
case 2083:
case 986:
case 2478:
case 2097:
case 349:
case 615:
case 7:
case 1489:
case 2206:
case 1156:
case 925:
case 3221:
case 1112:
case 1762:
case 3787:
case 916:
case 2712:
case 3034:
case 3168:
case 3761:
case 3164:
case 240:
case 2027:
case 2539:
case 2524:
case 2681:
case 1144:
case 1955:
case 150:
case 2791:
case 3197:
case 2716:
case 3474:
case 1900:
case 1381:
case 3883:
case 3101:
case 1594:
case 2432:
case 164:
case 1793:
case 382:
case 705:
case 743:
case 3652:
case 1448:
case 2801:
case 1579:
case 4053:
case 323:
case 942:
case 265:
case 227:
case 968:
case 1310:
case 2652:
case 2154:
case 63:
case 123:
case 2073:
case 1214:
case 1827:
case 642:
case 2124:
case 4059:
case 1080:
case 2506:
case 3296:
case 2079:
case 2331:
case 4049:
case 1929:
case 908:
case 3363:
case 2286:
case 1823:
case 3131:
case 2262:
case 4033:
case 3135:
case 3961:
case 1179:
case 2995:
case 774:
case 2100:
case 2471:
case 977:
case 1369:
case 1465:
case 292:
case 3410:
case 1615:
case 2221:
case 631:
case 107:
case 1259:
case 300:
case 2450:
case 1390:
case 2163:
case 244:
case 2032:
case 1537:
case 1940:
case 17:
case 2333:
case 2608:
case 4006:
case 3842:
case 3467:
case 2381:
case 639:
case 1430:
case 3675:
case 2875:
case 1923:
case 3822:
case 3944:
case 3121:
case 2514:
case 684:
case 2629:
case 3032:
case 3685:
case 2048:
case 1879:
case 1740:
case 1288:
case 1541:
case 469:
case 1717:
case 3027:
case 1249:
case 3724:
case 3438:
case 4013:
case 2053:
case 1704:
case 1629:
case 3196:
case 2529:
case 826:
case 3419:
case 34:
case 2384:
case 1656:
case 870:
case 3583:
case 3132:
case 3557:
case 1077:
case 1026:
case 3519:
case 1957:
case 1009:
case 2957:
case 976:
case 376:
case 1645:
case 1497:
case 836:
case 3030:
case 2862:
case 332:
case 2188:
case 1519:
case 579:
case 351:
case 455:
case 2583:
case 3770:
case 2228:
case 1699:
case 1796:
case 718:
case 988:
case 1305:
case 3662:
case 2560:
case 1516:
case 779:
case 3577:
case 1625:
case 88:
case 838:
case 3203:
case 130:
case 2920:
case 869:
case 2185:
case 1930:
case 24:
case 2219:
case 369:
case 898:
case 2556:
case 784:
case 696:
case 3166:
case 3478:
case 3060:
case 1812:
case 3089:
case 633:
case 1264:
case 1942:
case 1013:
case 3048:
case 2914:
case 1683:
case 3783:
case 1755:
case 260:
case 446:
case 2805:
case 2442:
case 3077:
case 2226:
case 3319:
case 3145:
case 699:
case 1921:
case 2209:
case 1258:
case 3691:
case 1679:
case 439:
case 2085:
case 3143:
case 4014:
case 3872:
case 3002:
case 3431:
case 862:
case 283:
case 678:
case 3397:
case 1091:
case 1605:
case 2310:
case 2303:
case 1106:
case 1095:
case 1802:
case 713:
case 4090:
case 322:
case 385:
case 2635:
case 3597:
case 1687:
case 2573:
case 3481:
case 2860:
case 1975:
case 909:
case 1676:
case 635:
case 1311:
case 42:
case 1666:
case 3740:
case 231:
case 38:
case 2528:
case 3651:
case 2713:
case 3300:
case 3415:
case 69:
case 1215:
case 737:
case 2599:
case 3480:
case 1822:
case 1337:
case 3230:
case 3688:
case 2815:
case 3111:
case 3614:
case 3631:
case 3066:
case 1037:
case 3201:
case 1201:
case 1383:
case 1045:
case 694:
case 2146:
case 1028:
case 1051:
case 3953:
case 1107:
case 2926:
case 861:
case 2792:
case 989:
case 3771:
case 947:
case 1959:
case 503:
case 251:
case 502:
case 3751:
case 698:
case 4022:
case 1415:
case 204:
case 3607:
case 169:
case 2505:
case 2626:
case 2466:
case 1898:
case 3875:
case 2446:
case 3392:
case 1085:
case 356:
case 1424:
case 3823:
case 91:
case 564:
case 2744:
case 3013:
case 2672:
case 532:
case 2994:
case 1640:
case 2498:
case 431:
case 3880:
case 3714:
case 878:
case 2816:
case 1509:
case 2915:
case 2699:
case 906:
case 3177:
case 1580:
case 537:
case 3899:
case 166:
case 3502:
case 3174:
case 1607:
case 3716:
case 1695:
case 1508:
case 3969:
case 2198:
case 1914:
case 963:
case 2352:
case 1943:
case 3232:
case 2401:
case 1531:
case 552:
case 2223:
case 2241:
case 307:
case 1945:
case 29:
case 1462:
case 2734:
case 1467:
case 1043:
case 1274:
case 1240:
case 1296:
case 400:
case 2658:
case 2107:
case 41:
case 275:
case 923:
case 477:
case 3326:
case 2074:
case 1979:
case 2444:
case 341:
case 3085:
case 3905:
case 1592:
case 1292:
case 3655:
case 2131:
case 3529:
case 622:
case 574:
case 3396:
case 2396:
case 2322:
case 3877:
case 2859:
case 2348:
case 3067:
case 3827:
case 2789:
case 2145:
case 248:
case 1184:
case 1348:
case 3007:
case 3009:
case 2820:
case 1441:
case 146:
case 486:
case 1653:
case 3391:
case 2939:
case 1864:
case 3194:
case 3747:
case 152:
case 3058:
case 294:
case 1399:
case 1105:
case 3476:
case 2468:
case 2139:
case 1341:
case 423:
case 3682:
case 1571:
case 1657:
case 2207:
case 2007:
case 647:
case 3845:
case 3555:
case 330:
case 404:
case 3269:
case 1281:
case 1286:
case 3144:
case 1474:
case 198:
case 1444:
case 2374:
case 1936:
case 3169:
case 1439:
case 3746:
case 659:
case 3274:
case 1065:
case 2558:
case 355:
case 3127:
case 3123:
case 818:
case 3122:
case 433:
case 1385:
case 3440:
case 1022:
case 3385:
case 3573:
case 3309:
case 2325:
case 3794:
case 2825:
case 2901:
case 3328:
case 2531:
case 3231:
case 2357:
case 488:
case 3581:
case 4070:
case 2675:
case 379:
case 2016:
case 1218:
case 650:
case 1054:
case 3114:
case 30:
case 3485:
case 891:
case 1392:
case 1139:
case 2998:
case 2255:
case 3997:
case 3522:
case 2243:
case 3386:
case 2940:
case 1688:
case 3371:
case 1140:
case 2803:
case 1014:
case 1782:
case 2731:
case 3083:
case 1770:
case 1682:
case 2199:
case 1753:
case 2834:
case 4019:
case 1338:
case 2664:
case 1425:
case 2172:
case 2749:
case 1479:
case 904:
case 1887:
case 326:
case 133:
case 2689:
case 1977:
case 3184:
case 1710:
case 901:
case 2918:
case 1623:
case 1101:
case 1046:
case 3536:
case 2117:
case 3922:
case 2407:
case 2487:
case 3534:
case 3498:
case 302:
case 3754:
case 1024:
case 3128:
case 153:
case 305:
case 2433:
case 1811:
case 3853:
case 701:
case 2968:
case 3345:
case 2133:
case 474:
case 3406:
case 1731:
case 1458:
case 258:
case 3398:
case 2224:
case 2392:
case 512:
case 2890:
case 2013:
case 2899:
case 1158:
case 2819:
case 632:
case 1933:
case 2282:
case 3236:
case 3995:
case 3305:
case 176:
case 3160:
case 2456:
case 1193:
case 3542:
case 2096:
case 3633:
case 607:
case 3776:
case 3816:
case 4042:
case 2694:
case 2144:
case 430:
case 2949:
case 2475:
case 3868:
case 1336:
case 2177:
case 178:
case 197:
case 3490:
case 2460:
case 2942:
case 3762:
case 4032:
case 815:
case 1224:
case 3387:
case 2051:
case 104:
case 3146:
case 2904:
case 2692:
case 2050:
case 1614:
case 470:
case 2979:
case 2736:
case 1555:
case 831:
case 1934:
case 284:
case 2523:
case 2099:
case 3091:
case 691:
case 1799:
case 128:
case 3784:
case 3599:
case 509:
case 2103:
case 1257:
case 2745:
case 1792:
case 3805:
case 4025:
case 3429:
case 3634:
case 411:
case 2477:
case 1925:
case 926:
case 2288:
case 1263:
case 4002:
case 3511:
case 4040:
case 1427:
case 2263:
case 3891:
case 2723:
case 187:
case 3412:
case 417:
case 1713:
case 1950:
case 1468:
case 370:
case 3848:
case 889:
case 3051:
case 2513:
case 3647:
case 2640:
case 1776:
case 1706:
case 2018:
case 443:
case 74:
case 3938:
case 2934:
case 2434:
case 2575:
case 373:
case 4076:
case 440:
case 1636:
case 147:
case 3404:
case 3709:
case 3623:
case 820:
case 3050:
case 2775:
case 3763:
case 2956:
case 3266:
case 249:
case 1379:
case 1663:
case 2305:
case 2458:
case 3841:
case 246:
case 3601:
case 3235:
case 181:
case 1389:
case 3290:
case 2579:
case 1648:
case 1773:
case 3399:
case 2738:
case 95:
case 3901:
case 3400:
case 2297:
case 790:
case 813:
case 235:
case 2338:
case 1301:
case 3402:
case 3304:
case 931:
case 1856:
case 2822:
case 3318:
case 162:
case 3788:
case 1475:
case 3991:
case 3354:
case 868:
case 2931:
case 1791:
case 1728:
case 3786:
case 2854:
case 3707:
case 43:
case 2294:
case 3086:
case 2213:
case 2843:
case 86:
case 3735:
case 2804:
case 1518:
case 2274:
case 2283:
case 1349:
case 2602:
case 1935:
case 3065:
case 3694:
case 3925:
case 1641:
case 2489:
case 1801:
case 1628:
case 487:
case 89:
case 2143:
case 2686:
case 1639:
case 1461:
case 3966:
case 773:
case 1747:
case 1840:
case 548:
case 1677:
case 3046:
case 2953:
case 757:
case 1733:
case 252:
case 2788:
case 1241:
case 738:
case 4051:
case 3063:
case 3324:
case 776:
case 1572:
case 2419:
case 2576:
case 2698:
case 22:
case 598:
case 1291:
case 726:
case 2334:
case 526:
case 3820:
case 666:
case 2453:
case 434:
case 626:
case 3275:
case 1829:
case 2332:
case 834:
case 3477:
case 1413:
case 3342:
case 2845:
case 1851:
case 3520:
case 1544:
case 2383:
case 2887:
case 4039:
case 2092:
case 1212:
case 398:
case 2693:
case 595:
case 2355:
case 3837:
case 4089:
case 3809:
case 1783:
case 3551:
case 1844:
case 3149:
case 2336:
case 2636:
case 1871:
case 3780:
case 807:
case 4064:
case 1187:
case 2678:
case 3814:
case 2752:
case 3702:
case 2615:
case 3445:
case 912:
case 1853:
case 3580:
case 3291:
case 2540:
case 2974:
case 1901:
case 1744:
case 1058:
case 1126:
case 1386:
case 708:
case 2770:
case 3185:
case 2893:
case 3908:
case 663:
case 3913:
case 366:
case 1113:
case 1226:
case 928:
case 1650:
case 2891:
case 808:
case 693:
case 3458:
case 842:
case 1384:
case 3325:
case 2780:
case 2008:
case 3044:
case 1318:
case 185:
case 2837:
case 3812:
case 3260:
case 1772:
case 1232:
case 830:
case 1124:
case 1109:
case 2988:
case 2947:
case 1243:
case 1895:
case 1885:
case 139:
case 2156:
case 3879:
case 949:
case 1872:
case 1411:
case 546:
case 510:
case 53:
case 2941:
case 1056:
case 3043:
case 2584:
case 407:
case 1539:
case 1470:
case 465:
case 1262:
case 3126:
case 2350:
case 2088:
case 2726:
case 2201:
case 2182:
case 3293:
case 61:
case 4073:
case 2441:
case 2250:
case 1061:
case 476:
case 1455:
case 2719:
case 1529:
case 3777:
case 1433:
case 490:
case 2798:
case 221:
case 3964:
case 3075:
case 3791:
case 8:
case 3292:
case 1463:
case 190:
case 594:
case 2298:
case 865:
case 2272:
case 3271:
case 2009:
case 1705:
case 6:
case 1406:
case 2003:
case 2596:
case 3017:
case 418:
case 3525:
case 3200:
case 3022:
case 3138:
case 2386:
case 1956:
case 4034:
case 1371:
case 277:
case 783:
case 2603:
case 2465:
case 2896:
case 3676:
case 656:
case 1655:
case 761:
case 2476:
case 2455:
case 1742:
case 2040:
case 2114:
case 1730:
case 2844:
case 1052:
case 1457:
case 136:
case 3757:
case 392:
case 1437:
case 4041:
case 2296:
case 3867:
case 2879:
case 365:
case 787:
case 973:
case 922:
case 1550:
case 1481:
case 1036:
case 3849:
case 4007:
case 232:
case 918:
case 1769:
case 3130:
case 3451:
case 3902:
case 329:
case 624:
case 1019:
case 1970:
case 3285:
case 1909:
case 1603:
case 1328:
case 3437:
case 1245:
case 3025:
case 3372:
case 3866:
case 681:
case 2406:
case 3627:
case 262:
case 3715:
case 1082:
case 3224:
case 92:
case 2873:
case 2438:
case 460:
case 76:
case 3893:
case 1880:
case 2808:
case 148:
case 2563:
case 2769:
case 3615:
case 137:
case 2271:
case 3273:
case 3348:
case 764:
case 2169:
case 689:
case 2436:
case 1674:
case 775:
case 920:
case 2748:
case 2669:
case 1520:
case 547:
case 3671:
case 40:
case 1584:
case 3087:
case 3760:
case 2125:
case 750:
case 2562:
case 3258:
case 2049:
case 948:
case 1081:
case 1484:
case 2071:
case 2402:
case 1194:
case 587:
case 3726:
case 2229:
case 2136:
case 2544:
case 3932:
case 2379:
case 686:
case 3579:
case 3998:
case 1865:
case 591:
case 1538:
case 389:
case 346:
case 238:
case 1974:
case 1833:
case 965:
case 290:
case 2811:
case 1308:
case 2867:
case 2924:
case 3106:
case 2906:
case 1588:
case 179:
case 3105:
case 2347:
case 2295:
case 640:
case 2684:
case 3640:
case 618:
case 372:
case 2299:
case 1960:
case 3340:
case 2231:
case 3543:
case 2565:
case 2138:
case 184:
case 2378:
case 1726:
case 2289:
case 3970:
case 3069:
case 208:
case 2080:
case 3947:
case 2661:
case 1888:
case 613:
case 3073:
case 3946:
case 1896:
case 3689:
case 3906:
case 2885:
case 158:
case 3559:
case 3378:
case 3395:
case 1696:
case 1346:
case 2756:
case 3619:
case 1319:
case 3209:
case 677:
case 1546:
case 3427:
case 695:
case 1185:
case 1186:
case 1343:
case 357:
case 1521:
case 2265:
case 2503:
case 4003:
case 2500:
case 3910:
case 1146:
case 2793:
case 3643:
case 2650:
case 728:
case 1283:
case 1626:
case 219:
case 2102:
case 2344:
case 1167:
case 1610:
case 3103:
case 2366:
case 2237:
case 427:
case 2400:
case 1980:
case 3799:
case 3858:
case 3172:
case 832:
case 2705:
case 2227:
case 1016:
case 115:
case 1304:
case 3310:
case 39:
case 3667:
case 611:
case 2190:
case 3894:
case 3772:
case 2898:
case 2679:
case 3082:
case 3578:
case 987:
case 3453:
case 3422:
case 3907:
case 3912:
case 3553:
case 3359:
case 1920:
case 1001:
case 1665:
case 1478:
case 324:
case 157:
case 2981:
case 3670:
case 1874:
case 3987:
case 1368:
case 1084:
case 936:
case 1836:
case 1449:
case 3217:
case 1354:
case 641:
case 3696:
case 3683:
case 456:
case 2259:
case 4069:
case 3935:
case 3890:
case 2656:
case 3568:
case 285:
case 1511:
case 1526:
case 3307:
case 347:
case 2499:
case 1604:
case 2818:
case 114:
case 2445:
case 1958:
case 325:
case 2358:
case 505:
case 1668:
case 932:
case 1644:
case 3531:
case 506:
case 3537:
case 4068:
case 2858:
case 200:
case 242:
case 3527:
case 2884:
case 2054:
case 654:
case 2427:
case 459:
case 2797:
case 1151:
case 1565:
case 1596:
case 3161:
case 2908:
case 1402:
case 1964:
case 539:
case 1153:
case 604:
case 2850:
case 48:
case 2249:
case 2916:
case 3994:
case 3012:
case 2473:
case 3171:
case 955:
case 3028:
case 3052:
case 2566:
case 2781:
case 1540:
case 3315:
case 447:
case 4035:
case 3984:
case 23:
case 3733:
case 3704:
case 1620:
case 778:
case 1503:
case 1999:
case 623:
case 3887:
case 905:
case 2616:
case 138:
case 4010:
case 1819:
case 2004:
case 3535:
case 2943:
case 3316:
case 2720:
case 3729:
case 2727:
case 712:
case 2617:
case 3538:
case 3898:
case 161:
case 1902:
case 1631:
case 3807:
case 1426:
case 3606:
case 1973:
case 2637:
case 3213:
case 1798:
case 1735:
case 2467:
case 1032:
case 1994:
case 3071:
case 837:
case 3980:
case 1535:
case 1377:
case 1506:
case 1067:
case 1664:
case 402:
case 1365:
case 3370:
case 1686:
case 786:
case 2641:
case 3790:
case 2975:
case 11:
case 1397:
case 2055:
case 4050:
case 3491:
case 3317:
case 752:
case 4028:
case 3646:
case 2266:
case 3663:
case 2412:
case 4004:
case 3182:
case 567:
case 1722:
case 2935:
case 770:
case 1004:
case 1714:
case 2413:
case 690:
case 2905:
case 823:
case 3588:
case 706:
case 3669:
case 897:
case 3482:
case 1219:
case 745:
case 3079:
case 1102:
case 796:
case 2541:
case 429:
case 671:
case 113:
case 2236:
case 2368:
case 4056:
case 374:
case 1815:
case 2919:
case 1017:
case 1691:
case 2857:
case 2651:
case 12:
case 3303:
case 2118:
case 1514:
case 1071:
case 2724:
case 3734:
case 568:
case 2405:
case 99:
case 619:
case 1155:
case 1339:
case 1143:
case 636:
case 627:
case 2147:
case 1987:
case 1868:
case 872:
case 3533:
case 1633:
case 2469:
case 3288:
case 1845:
case 167:
case 3541:
case 4094:
case 856:
case 2122:
case 1388:
case 3677:
case 3207:
case 2161:
case 3526:
case 2462:
case 458:
case 1949:
case 2459:
case 1557:
case 3723:
case 3281:
case 1493:
case 2356:
case 2581:
case 767:
case 2504:
case 2977:
case 196:
case 555:
case 2483:
case 3828:
case 1231:
case 1306:
case 845:
case 2269:
case 2787:
case 1251:
case 3951:
case 1830:
case 1542:
case 2170:
case 3871:
case 1598:
case 94:
case 3053:
case 719:
case 1522:
case 4008:
case 1632:
case 79:
case 3454:
case 2072:
case 287:
case 3703:
case 802:
case 3792:
case 3472:
case 3475:
case 2068:
case 983:
case 281:
case 3795:
case 1843:
case 854:
case 2976:
case 44:
case 1953:
case 3878:
case 3801:
case 1238:
case 2645:
case 2420:
case 3774:
case 1741:
case 1581:
case 785:
case 2426:
case 3923:
case 383:
case 3299:
case 2554:
case 2382:
case 3388:
case 274:
case 3569:
case 1963:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1718931601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,];
var gg_b = "1718931601/";

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
