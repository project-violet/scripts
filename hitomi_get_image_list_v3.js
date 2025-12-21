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
var o = 0;
switch (g) {
case 3516:
case 2300:
case 1779:
case 3025:
case 2628:
case 2298:
case 3330:
case 249:
case 2039:
case 3846:
case 739:
case 3924:
case 382:
case 2199:
case 2534:
case 1508:
case 87:
case 2909:
case 3407:
case 2179:
case 2680:
case 2810:
case 2582:
case 1625:
case 247:
case 686:
case 1348:
case 778:
case 3535:
case 2540:
case 2551:
case 2529:
case 2553:
case 3344:
case 3657:
case 2642:
case 608:
case 0:
case 47:
case 1566:
case 2882:
case 2231:
case 1086:
case 3835:
case 2233:
case 3077:
case 2612:
case 1912:
case 2062:
case 3201:
case 2853:
case 1697:
case 303:
case 3723:
case 2840:
case 3203:
case 2829:
case 3368:
case 390:
case 3686:
case 3479:
case 3816:
case 4067:
case 1677:
case 1364:
case 1808:
case 3097:
case 2834:
case 3137:
case 635:
case 916:
case 2177:
case 3425:
case 751:
case 310:
case 3293:
case 3874:
case 209:
case 3937:
case 2439:
case 1531:
case 213:
case 1878:
case 1210:
case 3162:
case 523:
case 1112:
case 3786:
case 3007:
case 3558:
case 1777:
case 496:
case 3894:
case 399:
case 2037:
case 1554:
case 173:
case 1021:
case 2424:
case 585:
case 2208:
case 2125:
case 240:
case 62:
case 730:
case 1180:
case 3477:
case 2109:
case 3858:
case 1142:
case 2462:
case 4:
case 1854:
case 3594:
case 265:
case 2780:
case 1251:
case 3079:
case 1831:
case 1578:
case 1282:
case 8:
case 2742:
case 3488:
case 3265:
case 52:
case 1331:
case 328:
case 2861:
case 3596:
case 1856:
case 2327:
case 2081:
case 241:
case 2083:
case 415:
case 655:
case 1432:
case 2947:
case 3952:
case 1354:
case 3420:
case 1647:
case 4057:
case 3576:
case 3981:
case 2264:
case 3358:
case 780:
case 1200:
case 1992:
case 3732:
case 2590:
case 2702:
case 1398:
case 1887:
case 750:
case 3876:
case 463:
case 3667:
case 1556:
case 1469:
case 244:
case 2248:
case 2561:
case 1378:
case 548:
case 685:
case 2395:
case 3374:
case 3017:
case 863:
case 3632:
case 1308:
case 2685:
case 759:
case 266:
case 3530:
case 2920:
case 2452:
case 3447:
case 2815:
case 1290:
case 1172:
case 4059:
case 3868:
case 4021:
case 1717:
case 473:
case 963:
case 4023:
case 201:
case 3316:
case 1688:
case 2353:
case 1032:
case 3544:
case 3767:
case 2351:
case 2329:
case 1192:
case 3335:
case 1548:
case 3806:
case 3684:
case 2117:
case 757:
case 2772:
case 1263:
case 3669:
case 2147:
case 3926:
case 787:
case 895:
case 3183:
case 3514:
case 636:
case 3181:
case 2310:
case 3506:
case 3019:
case 915:
case 2287:
case 2515:
case 1564:
case 332:
case 204:
case 3346:
case 508:
case 1889:
case 30:
case 495:
case 2919:
case 3417:
case 2845:
case 2671:
case 1971:
case 250:
case 1103:
case 1498:
case 2673:
case 776:
case 2562:
case 2475:
case 3127:
case 3494:
case 2660:
case 579:
case 3825:
case 2221:
case 3474:
case 1237:
case 2495:
case 1857:
case 1478:
case 2693:
case 127:
case 3046:
case 2839:
case 1991:
case 1369:
case 744:
case 2691:
case 3509:
case 3016:
case 3525:
case 1384:
case 3004:
case 1635:
case 2539:
case 2194:
case 3951:
case 2427:
case 3940:
case 2034:
case 3897:
case 1008:
case 1557:
case 3666:
case 3905:
case 1616:
case 3035:
case 1886:
case 2904:
case 71:
case 2029:
case 2051:
case 824:
case 1066:
case 383:
case 1332:
case 3608:
case 2053:
case 418:
case 1138:
case 79:
case 2410:
case 2974:
case 3242:
case 2257:
case 646:
case 1098:
case 1735:
case 3995:
case 3678:
case 505:
case 1823:
case 3280:
case 3182:
case 1224:
case 1716:
case 3698:
case 2738:
case 898:
case 3228:
case 3105:
case 3153:
case 3975:
case 342:
case 1078:
case 1694:
case 3708:
case 918:
case 704:
case 3151:
case 3416:
case 2958:
case 2771:
case 1658:
case 2773:
case 3110:
case 701:
case 570:
case 3654:
case 259:
case 1193:
case 2760:
case 2286:
case 3507:
case 2603:
case 1903:
case 1955:
case 921:
case 4022:
case 3435:
case 2601:
case 4089:
case 1523:
case 2537:
case 1160:
case 3212:
case 2793:
case 3633:
case 2791:
case 1559:
case 212:
case 1521:
case 2130:
case 1567:
case 670:
case 829:
case 121:
case 3963:
case 3399:
case 2436:
case 2090:
case 700:
case 3414:
case 3100:
case 862:
case 427:
case 3406:
case 3145:
case 1056:
case 3847:
case 793:
case 3202:
case 2144:
case 920:
case 3379:
case 2883:
case 1911:
case 2881:
case 1913:
case 462:
case 3468:
case 3789:
case 2232:
case 3517:
case 2613:
case 1950:
case 3136:
case 3096:
case 239:
case 2552:
case 3547:
case 1676:
case 3817:
case 4066:
case 605:
case 1768:
case 2583:
case 2114:
case 3687:
case 1321:
case 3444:
case 2996:
case 2337:
case 1867:
case 1696:
case 1323:
case 1714:
case 3076:
case 1706:
case 747:
case 1087:
case 3307:
case 2750:
case 1283:
case 1018:
case 3820:
case 1832:
case 3664:
case 2362:
case 1281:
case 2490:
case 333:
case 3377:
case 1776:
case 740:
case 3519:
case 2968:
case 3006:
case 1386:
case 3618:
case 564:
case 1569:
case 1141:
case 3397:
case 3936:
case 2461:
case 1064:
case 281:
case 35:
case 1614:
case 558:
case 2665:
case 2176:
case 1606:
case 198:
case 1884:
case 1022:
case 709:
case 2944:
case 660:
case 3272:
case 713:
case 3030:
case 1869:
case 506:
case 679:
case 820:
case 3309:
case 251:
case 1089:
case 588:
case 1532:
case 3161:
case 3163:
case 1630:
case 3520:
case 3819:
case 3945:
case 2711:
case 1048:
case 3900:
case 2713:
case 4033:
case 707:
case 1487:
case 44:
case 811:
case 1255:
case 119:
case 3697:
case 2593:
case 1201:
case 3866:
case 1723:
case 1499:
case 4017:
case 103:
case 1077:
case 1314:
case 748:
case 3227:
case 3086:
case 2365:
case 1137:
case 2560:
case 411:
case 279:
case 1097:
case 3364:
case 1816:
case 1479:
case 2012:
case 1686:
case 1804:
case 1368:
case 117:
case 260:
case 2624:
case 3057:
case 182:
case 2860:
case 1330:
case 3275:
case 1504:
case 828:
case 1025:
case 1009:
case 2294:
case 2080:
case 3389:
case 630:
case 1344:
case 2893:
case 3421:
case 3566:
case 3459:
case 3423:
case 3295:
case 315:
case 2891:
case 3625:
case 531:
case 2028:
case 428:
case 814:
case 3348:
case 1407:
case 994:
case 395:
case 1139:
case 678:
case 2724:
case 2216:
case 40:
case 1099:
case 143:
case 2204:
case 637:
case 3679:
case 3180:
case 914:
case 1858:
case 2313:
case 205:
case 3356:
case 1497:
case 3699:
case 639:
case 3229:
case 2803:
case 587:
case 1079:
case 928:
case 3725:
case 494:
case 3709:
case 3128:
case 3253:
case 2921:
case 3878:
case 2959:
case 3457:
case 3210:
case 1162:
case 1621:
case 512:
case 1937:
case 2637:
case 267:
case 1874:
case 2501:
case 3607:
case 1291:
case 4020:
case 1409:
case 3021:
case 1271:
case 1894:
case 373:
case 3023:
case 4088:
case 222:
case 2246:
case 3112:
case 1558:
case 1786:
case 803:
case 1876:
case 999:
case 2072:
case 612:
case 2184:
case 2511:
case 3887:
case 657:
case 417:
case 2850:
case 3200:
case 1394:
case 3067:
case 2843:
case 852:
case 1017:
case 3972:
case 1784:
case 419:
case 14:
case 2132:
case 316:
case 3378:
case 3185:
case 3788:
case 3469:
case 997:
case 1896:
case 4077:
case 689:
case 2303:
case 578:
case 2301:
case 37:
case 3484:
case 2214:
case 1769:
case 2206:
case 1265:
case 3331:
case 1358:
case 3215:
case 2683:
case 3587:
case 3719:
case 482:
case 1576:
case 2402:
case 1981:
case 1952:
case 3354:
case 3647:
case 2652:
case 1420:
case 114:
case 4025:
case 2268:
case 2541:
case 2485:
case 1126:
case 2550:
case 258:
case 2472:
case 2565:
case 1019:
case 581:
case 2296:
case 1183:
case 194:
case 2626:
case 3518:
case 2969:
case 554:
case 1669:
case 3619:
case 1250:
case 1241:
case 2371:
case 1417:
case 10:
case 2373:
case 3889:
case 1243:
case 530:
case 2781:
case 2752:
case 3747:
case 3564:
case 755:
case 2360:
case 3069:
case 1830:
case 2492:
case 723:
case 1316:
case 499:
case 3172:
case 3290:
case 1868:
case 917:
case 1530:
case 2167:
case 990:
case 1447:
case 3985:
case 3308:
case 810:
case 3864:
case 897:
case 396:
case 785:
case 3522:
case 191:
case 899:
case 1335:
case 2984:
case 288:
case 2002:
case 3261:
case 3548:
case 2865:
case 692:
case 1806:
case 3192:
case 584:
case 3270:
case 3366:
case 206:
case 410:
case 3688:
case 2653:
case 2966:
case 4076:
case 3431:
case 1897:
case 2605:
case 3557:
case 1905:
case 95:
case 1953:
case 1666:
case 2640:
case 2651:
case 1778:
case 1940:
case 2299:
case 604:
case 2455:
case 1016:
case 183:
case 549:
case 236:
case 2178:
case 2634:
case 3332:
case 1320:
case 2279:
case 1349:
case 2302:
case 3886:
case 3604:
case 3938:
case 933:
case 3960:
case 2091:
case 1494:
case 1127:
case 2133:
case 153:
case 1754:
case 3155:
case 3973:
case 3758:
case 3369:
case 2060:
case 2207:
case 1731:
case 3478:
case 2842:
case 1733:
case 2727:
case 327:
case 3993:
case 2880:
case 2512:
case 3237:
case 771:
case 500:
case 1809:
case 2610:
case 1825:
case 2071:
case 1474:
case 666:
case 1910:
case 320:
case 3031:
case 3033:
case 88:
case 926:
case 1347:
case 372:
case 3746:
case 2001:
case 1404:
case 644:
case 1416:
case 1879:
case 507:
case 2003:
case 2055:
case 3658:
case 1631:
case 3466:
case 2931:
case 48:
case 706:
case 2627:
case 1633:
case 1212:
case 3160:
case 3054:
case 3901:
case 1435:
case 788:
case 1058:
case 3955:
case 2710:
case 3903:
case 1766:
case 3823:
case 2209:
case 764:
case 61:
case 2705:
case 2753:
case 2729:
case 2493:
case 2978:
case 1599:
case 1134:
case 4068:
case 3859:
case 758:
case 1807:
case 1995:
case 2782:
case 3239:
case 3674:
case 1242:
case 1708:
case 641:
case 255:
case 2460:
case 1151:
case 1129:
case 1153:
case 1975:
case 565:
case 1228:
case 3078:
case 540:
case 1579:
case 1317:
case 1074:
case 2471:
case 433:
case 3224:
case 2987:
case 1687:
case 51:
case 3676:
case 318:
case 3943:
case 425:
case 2892:
case 1764:
case 4035:
case 3941:
case 3706:
case 2872:
case 541:
case 883:
case 2043:
case 3867:
case 3323:
case 2736:
case 825:
case 4004:
case 640:
case 2013:
case 2572:
case 4046:
case 777:
case 853:
case 402:
case 2189:
case 1414:
case 1399:
case 607:
case 2122:
case 3744:
case 3567:
case 3418:
case 2663:
case 1963:
case 321:
case 126:
case 3913:
case 2700:
case 2148:
case 1468:
case 453:
case 1789:
case 1517:
case 2220:
case 609:
case 1379:
case 760:
case 3911:
case 1202:
case 1990:
case 2690:
case 745:
case 576:
case 1722:
case 235:
case 83:
case 1847:
case 693:
case 2770:
case 2761:
case 4058:
case 1496:
case 3022:
case 1756:
case 2763:
case 2342:
case 3357:
case 1272:
case 3644:
case 722:
case 1900:
case 2989:
case 3487:
case 770:
case 2328:
case 2645:
case 2502:
case 566:
case 1549:
case 2790:
case 1520:
case 2217:
case 2585:
case 256:
case 442:
case 3668:
case 2802:
case 208:
case 3386:
case 1014:
case 2411:
case 983:
case 1664:
case 133:
case 4074:
case 2885:
case 286:
case 1915:
case 1849:
case 1820:
case 2615:
case 842:
case 1068:
case 675:
case 3606:
case 59:
case 2187:
case 15:
case 2312:
case 3614:
case 2636:
case 705:
case 3796:
case 3064:
case 1397:
case 1936:
case 3456:
case 167:
case 2874:
case 4085:
case 3712:
case 78:
case 3895:
case 2291:
case 1480:
case 3177:
case 2409:
case 1921:
case 1959:
case 313:
case 1442:
case 488:
case 2621:
case 2937:
case 3439:
case 1637:
case 122:
case 2376:
case 307:
case 2260:
case 2558:
case 1350:
case 1341:
case 2271:
case 572:
case 3037:
case 1762:
case 1343:
case 861:
case 520:
case 3728:
case 2858:
case 3109:
case 3979:
case 2139:
case 733:
case 365:
case 1724:
case 3390:
case 3462:
case 2238:
case 858:
case 1855:
case 1412:
case 2079:
case 3370:
case 3266:
case 464:
case 974:
case 3780:
case 2757:
case 1235:
case 2124:
case 618:
case 2504:
case 3345:
case 2025:
case 2009:
case 2516:
case 3300:
case 874:
case 1080:
case 2846:
case 698:
case 2924:
case 282:
case 3298:
case 1860:
case 2330:
case 1028:
case 2535:
case 3278:
case 3925:
case 474:
case 2344:
case 1274:
case 3553:
case 1893:
case 3024:
case 1639:
case 958:
case 3529:
case 3437:
case 2077:
case 3612:
case 906:
case 3233:
case 4092:
case 3882:
case 138:
case 1365:
case 3231:
case 961:
case 3805:
case 1737:
case 2499:
case 3977:
case 726:
case 290:
case 2686:
case 1571:
case 217:
case 529:
case 160:
case 562:
case 3315:
case 1560:
case 179:
case 2546:
case 871:
case 4072:
case 1159:
case 393:
case 3834:
case 3949:
case 2211:
case 470:
case 3334:
case 867:
case 366:
case 1932:
case 469:
case 979:
case 2316:
case 3481:
case 3545:
case 3602:
case 945:
case 3351:
case 2049:
case 870:
case 106:
case 1085:
case 467:
case 822:
case 2767:
case 3353:
case 977:
case 3256:
case 291:
case 2814:
case 3772:
case 662:
case 2806:
case 2684:
case 2926:
case 164:
case 294:
case 1391:
case 2152:
case 2669:
case 1472:
case 3310:
case 3287:
case 3515:
case 1492:
case 742:
case 2250:
case 3845:
case 2241:
case 3919:
case 20:
case 1373:
case 2243:
case 3800:
case 1781:
case 1214:
case 3863:
case 2047:
case 1726:
case 3327:
case 174:
case 2769:
case 1206:
case 3861:
case 4028:
case 2265:
case 3083:
case 341:
case 3870:
case 3218:
case 1355:
case 1303:
case 905:
case 1301:
case 783:
case 3947:
case 2420:
case 1652:
case 1485:
case 2983:
case 31:
case 725:
case 1402:
case 3375:
case 970:
case 1850:
case 3590:
case 753:
case 3785:
case 2732:
case 1843:
case 2419:
case 2876:
case 3917:
case 1184:
case 1511:
case 445:
case 344:
case 860:
case 1132:
case 3561:
case 967:
case 3149:
case 1092:
case 2667:
case 2896:
case 3120:
case 3672:
case 1244:
case 73:
case 2784:
case 3570:
case 672:
case 3395:
case 3116:
case 1695:
case 2995:
case 92:
case 3410:
case 3104:
case 3257:
case 1372:
case 794:
case 1491:
case 1753:
case 1729:
case 1751:
case 1978:
case 2599:
case 1740:
case 2134:
case 1225:
case 1998:
case 2579:
case 1473:
case 2182:
case 70:
case 486:
case 1471:
case 2317:
case 1734:
case 2140:
case 1460:
case 2151:
case 3994:
case 389:
case 2129:
case 408:
case 2975:
case 4065:
case 2228:
case 595:
case 242:
case 1675:
case 1166:
case 1438:
case 1001:
case 2110:
case 123:
case 3381:
case 3958:
case 2879:
case 3383:
case 1003:
case 3771:
case 3434:
case 3286:
case 3352:
case 185:
case 1954:
case 357:
case 856:
case 791:
case 3601:
case 1297:
case 3655:
case 1710:
case 3146:
case 3453:
case 1931:
case 1933:
case 948:
case 1627:
case 3429:
case 2633:
case 3537:
case 2212:
case 3451:
case 956:
case 3673:
case 435:
case 2577:
case 3671:
case 711:
case 350:
case 1091:
case 3660:
case 1131:
case 2754:
case 1093:
case 3946:
case 3495:
case 3701:
case 1512:
case 835:
case 2809:
case 3158:
case 1610:
case 696:
case 2825:
case 3259:
case 2474:
case 1071:
case 74:
case 2910:
case 4011:
case 1060:
case 1207:
case 2731:
case 3693:
case 202:
case 3326:
case 2733:
case 1842:
case 2597:
case 1727:
case 4013:
case 448:
case 1682:
case 3935:
case 1038:
case 2982:
case 2004:
case 1403:
case 2016:
case 2509:
case 1198:
case 515:
case 3034:
case 1542:
case 2175:
case 2929:
case 1640:
case 3194:
case 6:
case 728:
case 1651:
case 2798:
case 3638:
case 2035:
case 3082:
case 225:
case 82:
case 986:
case 2458:
case 1385:
case 1908:
case 3524:
case 3053:
case 3862:
case 1634:
case 2608:
case 2320:
case 1775:
case 908:
case 2349:
case 2664:
case 3036:
case 1964:
case 186:
case 743:
case 2915:
case 2849:
case 2006:
case 2519:
case 3968:
case 1065:
case 108:
case 1802:
case 936:
case 1247:
case 2014:
case 2377:
case 2888:
case 354:
case 3461:
case 2936:
case 3015:
case 1918:
case 3665:
case 3906:
case 3914:
case 381:
case 3470:
case 1312:
case 25:
case 1761:
case 3339:
case 2496:
case 384:
case 2588:
case 823:
case 2190:
case 1342:
case 2272:
case 351:
case 2309:
case 885:
case 797:
case 28:
case 1948:
case 2520:
case 596:
case 799:
case 423:
case 2044:
case 2161:
case 3324:
case 156:
case 2689:
case 2292:
case 2900:
case 3713:
case 3711:
case 1645:
case 1502:
case 3284:
case 4071:
case 719:
case 1122:
case 3130:
case 1663:
case 4073:
case 703:
case 1465:
case 1288:
case 2406:
case 2145:
case 673:
case 2414:
case 3061:
case 2202:
case 2990:
case 2722:
case 3415:
case 2847:
case 3852:
case 923:
case 1592:
case 226:
case 1148:
case 985:
case 2517:
case 3232:
case 2789:
case 790:
case 717:
case 4091:
case 2379:
case 3883:
case 2096:
case 3643:
case 1892:
case 3552:
case 3641:
case 3650:
case 1219:
case 3583:
case 3400:
case 3445:
case 3106:
case 2817:
case 955:
case 3976:
case 1043:
case 3996:
case 3337:
case 12:
case 1736:
case 1164:
case 1041:
case 2444:
case 695:
case 3168:
case 2076:
case 1390:
case 3157:
case 1462:
case 3724:
case 89:
case 3313:
case 404:
case 3311:
case 1979:
case 1109:
case 1999:
case 2831:
case 941:
case 3235:
case 2282:
case 2356:
case 1363:
case 2709:
case 3801:
case 1780:
case 2205:
case 2251:
case 1595:
case 2229:
case 2240:
case 2725:
case 798:
case 2797:
case 2533:
case 3923:
case 2457:
case 113:
case 3921:
case 3503:
case 3480:
case 3555:
case 1895:
case 1907:
case 866:
case 3186:
case 3343:
case 401:
case 369:
case 273:
case 3350:
case 1424:
case 2021:
case 2059:
case 3341:
case 1875:
case 466:
case 976:
case 3428:
case 1853:
case 2697:
case 1336:
case 721:
case 2866:
case 3591:
case 502:
case 1882:
case 1510:
case 3365:
case 2707:
case 444:
case 1612:
case 2912:
case 263:
case 379:
case 2364:
case 3121:
case 2808:
case 3159:
case 193:
case 3560:
case 553:
case 3571:
case 3986:
case 1977:
case 966:
case 1254:
case 476:
case 41:
case 1298:
case 65:
case 149:
case 2322:
case 3624:
case 1534:
case 3042:
case 2508:
case 2057:
case 3873:
case 2389:
case 3294:
case 2928:
case 3538:
case 1345:
case 2779:
case 1628:
case 1540:
case 2423:
case 215:
case 3891:
case 4083:
case 441:
case 1551:
case 1529:
case 2295:
case 4081:
case 3893:
case 1505:
case 2942:
case 1024:
case 2421:
case 4052:
case 1810:
case 1582:
case 3028:
case 633:
case 865:
case 26:
case 3472:
case 2848:
case 358:
case 683:
case 1310:
case 625:
case 3969:
case 364:
case 1536:
case 975:
case 3373:
case 1800:
case 2:
case 533:
case 3360:
case 1515:
case 1026:
case 104:
case 3276:
case 2290:
case 2084:
case 1545:
case 813:
case 2717:
case 1483:
case 101:
case 1500:
case 4037:
case 809:
case 772:
case 296:
case 2985:
case 1334:
case 1685:
case 166:
case 63:
case 3167:
case 720:
case 2649:
case 1920:
case 1452:
case 2620:
case 58:
case 653:
case 3984:
case 2261:
case 413:
case 1256:
case 1772:
case 2263:
case 1836:
case 3085:
case 2688:
case 2366:
case 807:
case 2032:
case 1305:
case 1988:
case 1351:
case 2818:
case 900:
case 2192:
case 526:
case 2887:
case 3230:
case 3513:
case 3072:
case 2617:
case 176:
case 2067:
case 3843:
case 907:
case 1692:
case 3841:
case 2720:
case 2245:
case 2749:
case 800:
case 1570:
case 913:
case 2972:
case 371:
case 1563:
case 2788:
case 2469:
case 144:
case 1561:
case 2378:
case 3301:
case 1119:
case 2236:
case 875:
case 1870:
case 141:
case 3303:
case 1218:
case 3355:
case 2331:
case 1861:
case 2333:
case 1863:
case 3214:
case 1327:
case 475:
case 3402:
case 4039:
case 449:
case 2215:
case 2719:
case 11:
case 3683:
case 346:
case 3543:
case 2354:
case 2647:
case 1352:
case 851:
case 2746:
case 64:
case 2191:
case 3954:
case 1286:
case 1434:
case 1383:
case 3055:
case 2658:
case 1773:
case 3438:
case 3001:
case 2262:
case 884:
case 3627:
case 1440:
case 2523:
case 2054:
case 451:
case 1429:
case 1453:
case 1791:
case 1146:
case 1405:
case 2559:
case 112:
case 510:
case 1655:
case 597:
case 2903:
case 3710:
case 2955:
case 1482:
case 157:
case 484:
case 1601:
case 3493:
case 1075:
case 3740:
case 2859:
case 2821:
case 3978:
case 468:
case 2823:
case 481:
case 937:
case 1837:
case 614:
case 1104:
case 1410:
case 2674:
case 3372:
case 3695:
case 3782:
case 2078:
case 3675:
case 3734:
case 1994:
case 543:
case 939:
case 1135:
case 7:
case 3998:
case 1095:
case 3473:
case 2704:
case 1738:
case 1194:
case 1539:
case 60:
case 3640:
case 981:
case 3605:
case 437:
case 3542:
case 2557:
case 3653:
case 3403:
case 77:
case 3812:
case 954:
case 3198:
case 3299:
case 3682:
case 3038:
case 930:
case 1051:
case 2454:
case 1040:
case 3178:
case 336:
case 2066:
case 3908:
case 3385:
case 2332:
case 2794:
case 1053:
case 1862:
case 1638:
case 2886:
case 3528:
case 2938:
case 180:
case 1904:
case 1824:
case 192:
case 2646:
case 2960:
case 1660:
case 3133:
case 1671:
case 150:
case 2155:
case 2103:
case 517:
case 590:
case 3842:
case 519:
case 1693:
case 2993:
case 3727:
case 1839:
case 3154:
case 2369:
case 3207:
case 1755:
case 3512:
case 1495:
case 3073:
case 1045:
case 412:
case 3948:
case 2584:
case 151:
case 2111:
case 3380:
case 934:
case 2089:
case 617:
case 2022:
case 184:
case 690:
case 1944:
case 3342:
case 3763:
case 812:
case 3328:
case 3502:
case 459:
case 1713:
case 3989:
case 3922:
case 3585:
case 773:
case 3443:
case 1930:
case 950:
case 3156:
case 3247:
case 2252:
case 3411:
case 1968:
case 130:
case 308:
case 2386:
case 2668:
case 50:
case 3065:
case 1741:
case 980:
case 2018:
case 1743:
case 795:
case 2281:
case 1036:
case 1914:
case 181:
case 3312:
case 3187:
case 1906:
case 1665:
case 682:
case 1015:
case 594:
case 2456:
case 3918:
case 2796:
case 931:
case 487:
case 2064:
case 1581:
case 2676:
case 4005:
case 1976:
case 2768:
case 4051:
case 1400:
case 4029:
case 480:
case 2950:
case 3715:
case 1641:
case 2422:
case 1650:
case 831:
case 139:
case 3892:
case 3872:
case 2714:
case 2448:
case 1168:
case 137:
case 4034:
case 224:
case 2087:
case 178:
case 3164:
case 2321:
case 3041:
case 431:
case 32:
case 3043:
case 528:
case 3736:
case 2696:
case 3670:
case 3189:
case 3572:
case 3465:
case 3013:
case 348:
case 3288:
case 957:
case 3956:
case 2744:
case 2567:
case 221:
case 850:
case 1090:
case 3249:
case 2911:
case 1070:
case 2913:
case 1881:
case 1232:
case 959:
case 763:
case 2056:
case 1063:
case 1415:
case 4010:
case 1061:
case 450:
case 2730:
case 1144:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1766311202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,];
var gg_b = "1766311202/";

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
