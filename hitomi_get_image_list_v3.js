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
case 2889:
case 1522:
case 3067:
case 3675:
case 1217:
case 433:
case 1176:
case 3699:
case 2569:
case 840:
case 772:
case 1397:
case 2409:
case 3940:
case 278:
case 1590:
case 904:
case 2867:
case 2137:
case 2514:
case 3559:
case 1524:
case 2587:
case 2473:
case 3934:
case 3918:
case 2801:
case 2646:
case 3292:
case 3860:
case 1543:
case 3130:
case 978:
case 1099:
case 3580:
case 581:
case 2072:
case 3325:
case 3050:
case 1439:
case 317:
case 3144:
case 995:
case 2060:
case 384:
case 1468:
case 3294:
case 4017:
case 763:
case 3872:
case 2631:
case 537:
case 3338:
case 1101:
case 2688:
case 1415:
case 3381:
case 81:
case 2425:
case 952:
case 1358:
case 3007:
case 3845:
case 794:
case 2941:
case 3794:
case 846:
case 2509:
case 12:
case 4011:
case 1490:
case 4053:
case 1424:
case 2807:
case 61:
case 1042:
case 646:
case 1661:
case 2573:
case 3516:
case 3278:
case 3175:
case 650:
case 332:
case 1150:
case 3249:
case 107:
case 390:
case 1443:
case 2131:
case 1954:
case 2785:
case 3800:
case 427:
case 2861:
case 3813:
case 705:
case 228:
case 1253:
case 3480:
case 1607:
case 2581:
case 1539:
case 1408:
case 151:
case 3373:
case 2000:
case 1568:
case 1023:
case 1326:
case 2955:
case 1952:
case 2296:
case 3851:
case 1541:
case 2810:
case 1894:
case 3435:
case 124:
case 687:
case 277:
case 1909:
case 478:
case 145:
case 2730:
case 991:
case 2483:
case 1798:
case 2577:
case 3010:
case 1260:
case 3926:
case 2848:
case 1186:
case 585:
case 2370:
case 1973:
case 3685:
case 631:
case 1274:
case 233:
case 1536:
case 3991:
case 4074:
case 6:
case 893:
case 1833:
case 1163:
case 3456:
case 4060:
case 538:
case 3519:
case 3196:
case 2554:
case 442:
case 1648:
case 1700:
case 3246:
case 2723:
case 933:
case 977:
case 3817:
case 1751:
case 8:
case 693:
case 2471:
case 318:
case 192:
case 2694:
case 2466:
case 747:
case 291:
case 2082:
case 2620:
case 1603:
case 3570:
case 2506:
case 2968:
case 1969:
case 664:
case 2863:
case 2915:
case 2053:
case 1251:
case 1925:
case 1305:
case 1686:
case 4045:
case 2583:
case 2649:
case 3127:
case 3366:
case 1021:
case 3746:
case 2678:
case 2223:
case 989:
case 864:
case 3371:
case 1200:
case 1938:
case 90:
case 2990:
case 1096:
case 1393:
case 2304:
case 1436:
case 169:
case 1914:
case 1110:
case 679:
case 2120:
case 3383:
case 1103:
case 1774:
case 2194:
case 452:
case 2454:
case 1340:
case 2943:
case 1332:
case 2335:
case 1760:
case 20:
case 2799:
case 309:
case 428:
case 4051:
case 2192:
case 1195:
case 1298:
case 3696:
case 1245:
case 1547:
case 3621:
case 2908:
case 2328:
case 3470:
case 2406:
case 174:
case 38:
case 136:
case 1455:
case 4029:
case 1978:
case 85:
case 666:
case 1461:
case 1949:
case 1476:
case 1624:
case 810:
case 2614:
case 4065:
case 2109:
case 2756:
case 1690:
case 2702:
case 552:
case 1705:
case 923:
case 3766:
case 866:
case 2097:
case 2669:
case 2173:
case 2704:
case 3116:
case 3575:
case 610:
case 1615:
case 2822:
case 1825:
case 2815:
case 2264:
case 3430:
case 3783:
case 1374:
case 223:
case 621:
case 2270:
case 2181:
case 1608:
case 718:
case 2735:
case 3911:
case 1360:
case 3022:
case 839:
case 2375:
case 3953:
case 3444:
case 1838:
case 3015:
case 2399:
case 1814:
case 3680:
case 1734:
case 3254:
case 134:
case 176:
case 999:
case 2546:
case 821:
case 126:
case 301:
case 1122:
case 2125:
case 3754:
case 2112:
case 237:
case 3068:
case 1576:
case 3616:
case 2228:
case 1561:
case 883:
case 1765:
case 3858:
case 2762:
case 1345:
case 2342:
case 542:
case 1881:
case 438:
case 816:
case 281:
case 2609:
case 182:
case 2235:
case 3752:
case 2868:
case 2114:
case 2537:
case 3984:
case 1240:
case 3159:
case 3706:
case 2187:
case 616:
case 3039:
case 3283:
case 2431:
case 1489:
case 2204:
case 2091:
case 3530:
case 3777:
case 709:
case 3271:
case 2903:
case 1300:
case 1920:
case 1668:
case 1313:
case 973:
case 3266:
case 1016:
case 1809:
case 4032:
case 578:
case 697:
case 4040:
case 3544:
case 3388:
case 3891:
case 1205:
case 2202:
case 1351:
case 2256:
case 897:
case 406:
case 1873:
case 4034:
case 2979:
case 170:
case 527:
case 1758:
case 825:
case 1636:
case 149:
case 103:
case 2259:
case 3781:
case 3214:
case 3394:
case 1854:
case 3829:
case 2478:
case 3287:
case 602:
case 844:
case 3055:
case 2449:
case 1070:
case 1486:
case 3212:
case 3951:
case 3527:
case 3225:
case 900:
case 625:
case 1988:
case 372:
case 589:
case 2855:
case 1937:
case 644:
case 3392:
case 1806:
case 1510:
case 2841:
case 2652:
case 1503:
case 3709:
case 200:
case 3421:
case 3102:
case 2385:
case 1463:
case 3496:
case 3998:
case 3945:
case 1877:
case 3773:
case 1726:
case 3041:
case 2716:
case 1147:
case 3619:
case 1579:
case 717:
case 2166:
case 2280:
case 423:
case 1317:
case 2907:
case 159:
case 2780:
case 1141:
case 3047:
case 591:
case 2093:
case 3805:
case 1311:
case 3960:
case 2216:
case 790:
case 854:
case 2578:
case 1226:
case 2321:
case 3273:
case 3628:
case 481:
case 2549:
case 2683:
case 238:
case 1002:
case 3972:
case 3893:
case 985:
case 654:
case 2420:
case 2034:
case 1403:
case 3349:
case 1410:
case 938:
case 206:
case 3378:
case 533:
case 3840:
case 1563:
case 2494:
case 3832:
case 2018:
case 3521:
case 3725:
case 2989:
case 3596:
case 1883:
case 3787:
case 2492:
case 3834:
case 1495:
case 13:
case 386:
case 313:
case 2040:
case 1946:
case 2032:
case 3164:
case 3602:
case 358:
case 875:
case 1258:
case 3656:
case 698:
case 3738:
case 3714:
case 1155:
case 3170:
case 2524:
case 3491:
case 1514:
case 1137:
case 3674:
case 561:
case 1867:
case 1538:
case 2590:
case 1057:
case 2846:
case 3928:
case 424:
case 3660:
case 3426:
case 1587:
case 2161:
case 2983:
case 941:
case 195:
case 3100:
case 716:
case 2176:
case 783:
case 3672:
case 2217:
case 97:
case 1889:
case 2650:
case 1227:
case 570:
case 1409:
case 2284:
case 2397:
case 3935:
case 74:
case 27:
case 3210:
case 2508:
case 241:
case 3657:
case 3203:
case 643:
case 1947:
case 1850:
case 526:
case 3390:
case 868:
case 1359:
case 3324:
case 609:
case 3899:
case 3198:
case 3145:
case 104:
case 430:
case 492:
case 3248:
case 3597:
case 1646:
case 1481:
case 3956:
case 2439:
case 3902:
case 1072:
case 809:
case 2667:
case 843:
case 2099:
case 1414:
case 1045:
case 314:
case 3591:
case 1807:
case 455:
case 2030:
case 408:
case 2490:
case 1438:
case 207:
case 331:
case 3795:
case 3600:
case 766:
case 3368:
case 3842:
case 2977:
case 3651:
case 3830:
case 3160:
case 2422:
case 2415:
case 2101:
case 1412:
case 1688:
case 387:
case 1509:
case 4021:
case 3174:
case 1941:
case 1469:
case 3710:
case 75:
case 2952:
case 2211:
case 1316:
case 3263:
case 2837:
case 2568:
case 1221:
case 1000:
case 3970:
case 152:
case 2167:
case 251:
case 618:
case 1146:
case 653:
case 1727:
case 520:
case 92:
case 2717:
case 3645:
case 818:
case 2782:
case 2189:
case 128:
case 3962:
case 3558:
case 907:
case 1879:
case 3201:
case 3020:
case 2186:
case 2892:
case 3434:
case 1848:
case 3355:
case 2260:
case 1633:
case 1744:
case 3440:
case 177:
case 3432:
case 1319:
case 3684:
case 754:
case 3092:
case 2820:
case 2798:
case 1742:
case 3617:
case 930:
case 992:
case 2745:
case 3250:
case 1362:
case 245:
case 1730:
case 1483:
case 4075:
case 919:
case 2447:
case 3493:
case 3033:
case 3289:
case 775:
case 2610:
case 1506:
case 559:
case 2603:
case 1552:
case 2257:
case 1620:
case 2555:
case 945:
case 1694:
case 230:
case 667:
case 1939:
case 798:
case 3405:
case 2027:
case 1017:
case 2713:
case 867:
case 47:
case 2695:
case 3341:
case 1084:
case 3776:
case 2648:
case 565:
case 2700:
case 3529:
case 1554:
case 2200:
case 340:
case 2021:
case 42:
case 1649:
case 356:
case 696:
case 269:
case 3767:
case 388:
case 2938:
case 3532:
case 3821:
case 2441:
case 1133:
case 36:
case 744:
case 4030:
case 255:
case 2686:
case 4042:
case 3896:
case 1922:
case 974:
case 725:
case 2925:
case 1302:
case 1053:
case 2251:
case 1356:
case 936:
case 2179:
case 3750:
case 3593:
case 2245:
case 817:
case 2195:
case 1192:
case 515:
case 1799:
case 908:
case 549:
case 684:
case 2318:
case 1571:
case 1566:
case 3078:
case 1908:
case 3505:
case 1194:
case 2774:
case 2103:
case 1244:
case 1120:
case 189:
case 10:
case 4023:
case 2849:
case 451:
case 2340:
case 884:
case 2878:
case 1454:
case 694:
case 3191:
case 354:
case 1625:
case 1612:
case 4064:
case 1986:
case 449:
case 3451:
case 220:
case 911:
case 2476:
case 746:
case 1687:
case 3400:
case 2461:
case 2357:
case 750:
case 2690:
case 1702:
case 1638:
case 1756:
case 3236:
case 1109:
case 3574:
case 1614:
case 3880:
case 71:
case 3859:
case 1399:
case 2168:
case 2567:
case 2265:
case 398:
case 112:
case 2372:
case 3025:
case 52:
case 211:
case 1375:
case 1890:
case 1546:
case 276:
case 1219:
case 2374:
case 123:
case 2059:
case 858:
case 1264:
case 507:
case 3038:
case 1815:
case 1531:
case 2825:
case 3996:
case 1822:
case 1963:
case 3255:
case 2740:
case 2608:
case 3301:
case 344:
case 2124:
case 2240:
case 2232:
case 1868:
case 1138:
case 672:
case 1609:
case 1588:
case 3472:
case 325:
case 1344:
case 2450:
case 4004:
case 3551:
case 1058:
case 1187:
case 3927:
case 3626:
case 1228:
case 3513:
case 1673:
case 3500:
case 2234:
case 2729:
case 1125:
case 740:
case 541:
case 4056:
case 2881:
case 1839:
case 465:
case 1342:
case 3691:
case 57:
case 3474:
case 2933:
case 2765:
case 3658:
case 863:
case 1256:
case 2507:
case 2205:
case 1681:
case 648:
case 2467:
case 270:
case 1446:
case 1979:
case 3816:
case 2992:
case 1091:
case 2293:
case 2489:
case 663:
case 1204:
case 1431:
case 261:
case 3457:
case 2809:
case 162:
case 2313:
case 2016:
case 1910:
case 43:
case 1323:
case 1903:
case 3073:
case 2300:
case 3864:
case 2988:
case 1065:
case 3517:
case 2486:
case 2806:
case 2937:
case 1855:
case 801:
case 764:
case 420:
case 3054:
case 1029:
case 2064:
case 3132:
case 1259:
case 3140:
case 3739:
case 3290:
case 2758:
case 3006:
case 2070:
case 3303:
case 1449:
case 3923:
case 3052:
case 1961:
case 1478:
case 360:
case 601:
case 2579:
case 949:
case 1654:
case 2147:
case 3629:
case 1716:
case 1592:
case 903:
case 2548:
case 857:
case 2384:
case 779:
case 1836:
case 3077:
case 3665:
case 1907:
case 2791:
case 3453:
case 3944:
case 1280:
case 3105:
case 2382:
case 1385:
case 1652:
case 3208:
case 3930:
case 2877:
case 2353:
case 310:
case 2586:
case 1683:
case 3484:
case 3708:
case 3640:
case 2866:
case 3632:
case 1093:
case 1396:
case 729:
case 714:
case 259:
case 1177:
case 366:
case 1549:
case 3071:
case 1321:
case 2226:
case 3618:
case 1578:
case 3482:
case 2311:
case 3363:
case 461:
case 23:
case 2495:
case 545:
case 4016:
case 2448:
case 3239:
case 3083:
case 3724:
case 2258:
case 3790:
case 3553:
case 965:
case 3268:
case 2028:
case 1671:
case 2563:
case 647:
case 2403:
case 3165:
case 1034:
case 2883:
case 3715:
case 2931:
case 1154:
case 3129:
case 1989:
case 1779:
case 290:
case 2249:
case 1172:
case 819:
case 2175:
case 2623:
case 2278:
case 2516:
case 2792:
case 1613:
case 3045:
case 1591:
case 3936:
case 129:
case 624:
case 4063:
case 3509:
case 2794:
case 1703:
case 3941:
case 3469:
case 619:
case 1842:
case 967:
case 2007:
case 1651:
case 1830:
case 193:
case 1964:
case 468:
case 3727:
case 2851:
case 2630:
case 785:
case 1698:
case 2061:
case 3013:
case 3955:
case 3000:
case 706:
case 267:
case 630:
case 1088:
case 443:
case 3581:
case 409:
case 2480:
case 328:
case 1962:
case 932:
case 1558:
case 3861:
case 2813:
case 1037:
case 1823:
case 892:
case 3876:
case 1919:
case 3785:
case 3131:
case 2918:
case 2934:
case 3473:
case 917:
case 1491:
case 3137:
case 3514:
case 808:
case 1674:
case 855:
case 3867:
case 2089:
case 1343:
case 2932:
case 164:
case 4003:
case 1113:
case 1672:
case 2067:
case 608:
case 3525:
case 3947:
case 2872:
case 501:
case 2993:
case 1875:
case 1390:
case 3074:
case 1786:
case 1324:
case 1899:
case 3060:
case 1210:
case 2144:
case 2001:
case 342:
case 1203:
case 217:
case 996:
case 1315:
case 3481:
case 2312:
case 2050:
case 1956:
case 1902:
case 3072:
case 2325:
case 1322:
case 2874:
case 179:
case 2580:
case 1198:
case 1279:
case 2860:
case 836:
case 418:
case 874:
case 3801:
case 4007:
case 3924:
case 1184:
case 1959:
case 188:
case 1347:
case 2371:
case 2746:
case 140:
case 1518:
case 3223:
case 2528:
case 737:
case 3649:
case 2127:
case 156:
case 2288:
case 3053:
case 1789:
case 2731:
case 580:
case 548:
case 1532:
case 2535:
case 2237:
case 432:
case 3863:
case 490:
case 2811:
case 943:
case 3406:
case 762:
case 1611:
case 3328:
case 3566:
case 1078:
case 3908:
case 3230:
case 1593:
case 1750:
case 2696:
case 2464:
case 3242:
case 3886:
case 2504:
case 209:
case 30:
case 841:
case 4061:
case 3335:
case 2419:
case 2997:
case 467:
case 1653:
case 572:
case 1207:
case 1505:
case 2556:
case 2086:
case 1980:
case 2991:
case 1707:
case 3633:
case 3364:
case 3879:
case 150:
case 1418:
case 1094:
case 3370:
case 1434:
case 2926:
case 3848:
case 1020:
case 146:
case 1355:
case 2352:
case 1916:
case 3275:
case 1617:
case 3742:
case 3577:
case 1250:
case 2627:
case 3730:
case 3178:
case 1432:
case 807:
case 1684:
case 2048:
case 1092:
case 3810:
case 3968:
case 2570:
case 3552:
case 3694:
case 3466:
case 1153:
case 651:
case 4050:
case 1493:
case 2231:
case 1033:
case 1827:
case 1289:
case 2404:
case 2817:
case 723:
case 3084:
case 2246:
case 851:
case 1776:
case 4001:
case 3554:
case 2456:
case 1405:
case 2402:
case 2958:
case 1267:
case 1472:
case 3764:
case 4047:
case 849:
case 2475:
case 125:
case 3344:
case 2283:
case 2039:
case 2499:
case 2917:
case 3058:
case 803:
case 3770:
case 144:
case 3235:
case 3114:
case 3868:
case 3537:
case 517:
case 815:
case 3609:
case 603:
case 3839:
case 3169:
case 3762:
case 2858:
case 3330:
case 1626:
case 1500:
case 2068:
case 2523:
case 3112:
case 1985:
case 3125:
case 2982:
case 3719:
case 3979:
case 1009:
case 70:
case 1736:
case 901:
case 789:
case 2388:
case 413:
case 1457:
case 362:
case 3910:
case 2266:
case 1741:
case 3026:
case 3903:
case 486:
case 1073:
case 1545:
case 1247:
case 1598:
case 2530:
case 1367:
case 2575:
case 3488:
case 1572:
case 1747:
case 3612:
case 2116:
case 947:
case 665:
case 3437:
case 1191:
case 2771:
case 2043:
case 3097:
case 777:
case 2766:
case 733:
case 3702:
case 3756:
case 1236:
case 3109:
case 399:
case 1574:
case 3614:
case 1880:
case 659:
case 2423:
case 1400:
case 1560:
case 3728:
case 63:
case 1069:
case 2254:
case 4036:
case 3399:
case 2444:
case 2953:
case 312:
case 2022:
case 3735:
case 3963:
case 2252:
case 1255:
case 83:
case 1921:
case 3181:
case 247:
case 791:
case 4041:
case 1158:
case 1087:
case 2024:
case 2430:
case 1445:
case 3264:
case 590:
case 3815:
case 532:
case 3531:
case 3822:
case 1996:
case 448:
case 1484:
case 15:
case 294:
case 1640:
case 2635:
case 1632:
case 2972:
case 3950:
case 3847:
case 1804:
case 166:
case 3901:
case 2273:
case 553:
case 1482:
case 2960:
case 3216:
case 1066:
case 2485:
case 2805:
case 4039:
case 1802:
case 1856:
case 518:
case 986:
case 2047:
case 913:
case 1239:
case 3759:
case 2281:
case 205:
case 1386:
case 3152:
case 2714:
case 2656:
case 1605:
case 3967:
case 258:
case 1553:
case 457:
case 3040:
case 676:
case 2787:
case 2834:
case 1715:
case 3154:
case 2712:
case 3989:
case 1129:
case 3018:
case 1835:
case 2832:
case 834:
case 2840:
case 2957:
case 2769:
case 2162:
case 222:
case 2349:
case 1165:
case 3420:
case 1870:
case 1348:
case 963:
case 14:
case 682:
case 568:
case 1379:
case 3029:
case 2269:
case 1118:
case 2128:
case 1222:
case 116:
case 795:
case 2225:
case 1215:
case 1134:
case 1517:
case 1006:
case 2900:
case 1303:
case 3449:
case 3183:
case 882:
case 2055:
case 1052:
case 2287:
case 2829:
case 1582:
case 160:
case 543:
case 626:
case 1819:
case 2394:
case 2214:
case 1132:
case 3259:
case 1224:
case 2781:
case 1739:
case 3533:
case 2865:
case 2238:
case 3327:
case 3836:
case 1665:
case 248:
case 3171:
case 4090:
case 1944:
case 3166:
case 2619:
case 670:
case 3654:
case 280:
case 3592:
case 861:
case 704:
case 1930:
case 972:
case 2998:
case 1942:
case 2664:
case 4015:
case 742:
case 1105:
case 661:
case 2102:
case 2156:
case 2709:
case 2421:
case 3520:
case 3606:
case 3841:
case 1720:
case 2174:
case 677:
case 598:
case 3101:
case 2339:
case 488:
case 1007:
case 1845:
case 2368:
case 2526:
case 575:
case 2600:
case 3676:
case 2748:
case 1792:
case 1623:
case 1278:
case 1175:
case 3150:
case 307:
case 2779:
case 9:
case 633:
case 3490:
case 1459:
case 3030:
case 214:
case 2591:
case 759:
case 2:
case 3253:
case 1965:
case 931:
case 3607:
case 3539:
case 2088:
case 1644:
case 3443:
case 3954:
case 3189:
case 914:
case 2919:
case 2497:
case 3782:
case 4078:
case 2823:
case 73:
case 891:
case 987:
case 3391:
case 3717:
case 435:
case 1851:
case 1630:
case 3888:
case 293:
case 351:
case 3906:
case 1373:
case 3837:
case 3568:
case 3784:
case 3711:
case 2343:
case 3284:
case 4094:
case 3831:
case 3515:
case 3176:
case 3983:
case 1123:
case 1699:
case 2113:
case 2426:
case 1934:
case 2660:
case 3601:
case 2928:
case 2308:
case 979:
case 2031:
case 3753:
case 703:
case 749:
case 2674:
case 1559:
case 4033:
case 2458:
case 544:
case 1874:
case 2322:
case 3075:
case 1325:
case 2956:
case 1050:
case 1312:
case 3439:
case 117:
case 2315:
case 2597:
case 2295:
case 525:
case 2248:
case 1130:
case 1142:
case 2875:
case 1872:
case 3689:
case 1220:
case 1144:
case 2657:
case 1387:
case 184:
case 3107:
case 2789:
case 308:
case 1185:
case 3305:
case 3686:
case 878:
case 414:
case 26:
case 782:
case 2532:
case 3757:
case 597:
case 3096:
case 2184:
case 369:
case 2117:
case 2261:
case 487:
case 240:
case 3021:
case 2518:
case 2276:
case 3200:
case 2429:
case 1997:
case 1419:
case 770:
case 3760:
case 842:
case 604:
case 988:
case 516:
case 54:
case 2980:
case 2465:
case 1462:
case 956:
case 2653:
case 1502:
case 168:
case 3318:
case 3334:
case 2049:
case 1470:
case 374:
case 4037:
case 336:
case 109:
case 3298:
case 3772:
case 3547:
case 143:
case 2593:
case 345:
case 2250:
case 3272:
case 3798:
case 3541:
case 319:
case 2092:
case 3820:
case 2684:
case 1435:
case 1354:
case 1079:
case 3274:
case 21:
case 1991:
case 720:
case 539:
case 1010:
case 464:
case 2355:
case 3892:
case 2201:
case 2094:
case 1685:
case 2682:
case 1428:
case 510:
case 2885:
case 1882:
case 776:
case 2776:
case 3648:
case 2341:
case 3695:
case 3713:
case 2267:
case 2565:
case 950:
case 628:
case 3833:
case 3027:
case 2111:
case 1456:
case 2153:
case 392:
case 118:
case 652:
case 1884:
case 3603:
case 1737:
case 1817:
case 566:
case 2289:
case 1404:
case 2336:
case 2827:
case 479:
case 153:
case 828:
case 1788:
case 1564:
case 3765:
case 769:
case 1858:
case 3345:
case 3881:
case 3122:
case 326:
case 2985:
case 3729:
case 1754:
case 3234:
case 3218:
case 1068:
case 3576:
case 755:
case 1499:
case 1039:
case 3450:
case 1283:
case 1475:
case 4071:
case 4066:
case 579:
case 1752:
case 3232:
case 2755:
case 3124:
case 1984:
case 1159:
case 1271:
case 3300:
case 3920:
case 1180:
case 2741:
case 774:
case 925:
case 3016:
case 2361:
case 3809:
case 361:
case 157:
case 2197:
case 3293:
case 1530:
case 2598:
case 421:
case 3873:
case 800:
case 3992:
case 1826:
case 2009:
case 1544:
case 3639:
case 3108:
case 564:
case 2736:
case 2658:
case 439:
case 3624:
case 838:
case 2236:
case 2389:
case 3690:
case 3705:
case 483:
case 3978:
case 1008:
case 998:
case 2413:
case 3476:
case 3949:
case 2400:
case 3080:
case 745:
case 2572:
case 638:
case 3615:
case 2367:
case 3793:
case 3550:
case 1766:
case 460:
case 975:
case 2241:
case 1346:
case 1771:
case 2191:
case 254:
case 4052:
case 514:
case 2158:
case 3139:
case 2301:
case 2921:
case 2557:
case 730:
case 3360:
case 1911:
case 1090:
case 3589:
case 3812:
case 2038:
case 954:
case 2445:
case 2014:
case 2498:
case 1442:
case 4077:
case 275:
case 1783:
case 3734:
case 3887:
case 3229:
case 1254:
case 3643:
case 806:
case 2697:
case 311:
case 1022:
case 885:
case 1444:
case 3838:
case 1015:
case 3814:
case 3168:
case 0:
case 1680:
case 3311:
case 2618:
case 3797:
case 1628:
case 2071:
case 266:
case 2634:
case 3004:
case 3141:
case 425:
case 4081:
case 1805:
case 402:
case 1635:
case 3871:
case 25:
case 2804:
case 365:
case 921:
case 210:
case 3353:
case 3002:
case 1972:
case 1893:
case 2975:
case 95:
case 2693:
case 3647:
case 2129:
case 1596:
case 1604:
case 3883:
case 623:
case 122:
case 1349:
case 3403:
case 3410:
case 1957:
case 1378:
case 2511:
case 3028:
case 1840:
case 3563:
case 1832:
case 751:
case 1521:
case 158:
case 1602:
case 966:
case 3258:
case 612:
case 1656:
case 1738:
case 1714:
case 3155:
case 2724:
case 2239:
case 3448:
case 1834:
case 3495:
case 33:
case 1164:
case 2819:
case 1394:
case 3854:
case 1287:
case 1585:
case 1055:
case 315:
case 1320:
case 1900:
case 454:
case 3070:
case 2303:
case 3758:
case 3636:
case 303:
case 1781:
case 2224:
case 1135:
case 1269:
case 271:
case 2054:
case 172:
case 2379:
case 3937:
case 3806:
case 2870:
case 2395:
case 3641:
case 3486:
case 1212:
case 1951:
case 1225:
case 216:
case 997:
case 2222:
case 1128:
case 2118:
case 2864:
case 1664:
case 498:
case 1496:
case 163:
case 4025:
case 3877:
case 971:
case 1333:
case 4069:
case 3510:
case 1670:
case 983:
case 1709:
case 297:
case 916:
case 588:
case 741:
case 2411:
case 3463:
case 2105:
case 2944:
case 960:
case 3317:
case 4014:
case 1104:
case 862:
case 1041:
case 3726:
case 3297:
case 3595:
case 3147:
case 180:
case 1619:
case 3579:
case 2193:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754211602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,];
var gg_b = "1754211602/";

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
