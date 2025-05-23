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
case 1711:
case 1349:
case 2859:
case 3091:
case 2084:
case 1680:
case 1415:
case 1831:
case 1216:
case 1356:
case 3667:
case 4069:
case 1878:
case 3728:
case 2147:
case 3264:
case 21:
case 2861:
case 3677:
case 278:
case 1115:
case 3274:
case 3386:
case 696:
case 4063:
case 2207:
case 1343:
case 2853:
case 3112:
case 2447:
case 575:
case 2604:
case 4051:
case 2533:
case 2988:
case 2395:
case 3405:
case 1981:
case 2387:
case 551:
case 2676:
case 890:
case 1402:
case 3153:
case 2812:
case 3446:
case 2732:
case 994:
case 1569:
case 3775:
case 3206:
case 1189:
case 1624:
case 3979:
case 1579:
case 3105:
case 3461:
case 3963:
case 3146:
case 1790:
case 1762:
case 2666:
case 3010:
case 152:
case 38:
case 875:
case 2558:
case 3453:
case 702:
case 3171:
case 148:
case 949:
case 449:
case 3121:
case 829:
case 397:
case 17:
case 3862:
case 2693:
case 3890:
case 2237:
case 1310:
case 1801:
case 2913:
case 1418:
case 419:
case 76:
case 2699:
case 396:
case 156:
case 2092:
case 3725:
case 2060:
case 3923:
case 3616:
case 345:
case 3108:
case 2172:
case 3135:
case 3627:
case 1086:
case 2214:
case 2462:
case 2617:
case 2789:
case 2354:
case 2509:
case 2783:
case 588:
case 3248:
case 2997:
case 2503:
case 96:
case 3408:
case 406:
case 2985:
case 3236:
case 285:
case 3778:
case 2821:
case 2190:
case 2582:
case 1432:
case 2162:
case 40:
case 4047:
case 1439:
case 2755:
case 1458:
case 3380:
case 2953:
case 1045:
case 242:
case 466:
case 90:
case 3656:
case 686:
case 341:
case 3568:
case 1194:
case 1968:
case 3042:
case 1133:
case 3188:
case 3578:
case 2151:
case 1978:
case 784:
case 687:
case 1139:
case 3027:
case 2946:
case 2337:
case 2163:
case 1210:
case 3531:
case 1350:
case 4022:
case 2938:
case 1931:
case 2959:
case 2179:
case 1547:
case 382:
case 1291:
case 39:
case 3947:
case 3851:
case 766:
case 2099:
case 2692:
case 3863:
case 2660:
case 1064:
case 273:
case 281:
case 3016:
case 124:
case 1925:
case 2670:
case 2912:
case 767:
case 539:
case 880:
case 1881:
case 176:
case 2657:
case 3200:
case 2314:
case 3823:
case 3286:
case 1482:
case 1155:
case 641:
case 2794:
case 3781:
case 386:
case 2066:
case 1572:
case 3152:
case 2935:
case 3501:
case 1901:
case 3485:
case 3497:
case 2307:
case 571:
case 2041:
case 1048:
case 2739:
case 1182:
case 855:
case 2819:
case 1409:
case 387:
case 3452:
case 3197:
case 3829:
case 1779:
case 3565:
case 611:
case 1036:
case 209:
case 3896:
case 1316:
case 69:
case 295:
case 2921:
case 1928:
case 2423:
case 3230:
case 2129:
case 2004:
case 3413:
case 871:
case 1511:
case 962:
case 2885:
case 883:
case 462:
case 2196:
case 4072:
case 246:
case 598:
case 4062:
case 247:
case 2123:
case 3345:
case 1944:
case 1080:
case 216:
case 364:
case 270:
case 1342:
case 1846:
case 2216:
case 375:
case 11:
case 892:
case 693:
case 2349:
case 1859:
case 3299:
case 3540:
case 3226:
case 4039:
case 1447:
case 14:
case 2343:
case 3054:
case 1207:
case 3234:
case 504:
case 4058:
case 3889:
case 2115:
case 979:
case 390:
case 1122:
case 3360:
case 592:
case 2189:
case 169:
case 2636:
case 1594:
case 1533:
case 2483:
case 3431:
case 2648:
case 2981:
case 1988:
case 2772:
case 1676:
case 688:
case 1539:
case 2489:
case 629:
case 1558:
case 3958:
case 252:
case 2227:
case 1020:
case 191:
case 2563:
case 3468:
case 3131:
case 3370:
case 2747:
case 27:
case 4055:
case 1237:
case 3204:
case 2030:
case 675:
case 1634:
case 3444:
case 2596:
case 731:
case 153:
case 2529:
case 2674:
case 2277:
case 1111:
case 3832:
case 2664:
case 1060:
case 2875:
case 2267:
case 515:
case 597:
case 2523:
case 1913:
case 3513:
case 2722:
case 3087:
case 690:
case 1699:
case 1789:
case 1354:
case 1617:
case 2132:
case 1490:
case 3175:
case 1555:
case 845:
case 3266:
case 3909:
case 1952:
case 3761:
case 925:
case 388:
case 896:
case 2086:
case 931:
case 1702:
case 815:
case 2828:
case 185:
case 234:
case 1162:
case 2432:
case 3746:
case 3475:
case 3982:
case 651:
case 3401:
case 1398:
case 1985:
case 1472:
case 2391:
case 3903:
case 3818:
case 3165:
case 1997:
case 3384:
case 3759:
case 2006:
case 1479:
case 380:
case 3752:
case 2133:
case 3181:
case 1463:
case 2968:
case 2194:
case 1169:
case 1589:
case 2439:
case 2045:
case 1709:
case 1451:
case 1953:
case 1840:
case 3481:
case 1337:
case 3304:
case 1959:
case 3797:
case 683:
case 1179:
case 1703:
case 3785:
case 1473:
case 3902:
case 2686:
case 1782:
case 721:
case 2064:
case 2796:
case 1692:
case 181:
case 240:
case 3858:
case 1026:
case 4089:
case 2547:
case 3719:
case 655:
case 1099:
case 3376:
case 4083:
case 1314:
case 1657:
case 1515:
case 1888:
case 276:
case 3007:
case 1254:
case 763:
case 921:
case 4002:
case 2925:
case 1912:
case 2074:
case 2723:
case 3788:
case 864:
case 1066:
case 1794:
case 3334:
case 1935:
case 1813:
case 1620:
case 2024:
case 2482:
case 2975:
case 2769:
case 3932:
case 460:
case 2779:
case 586:
case 109:
case 759:
case 908:
case 2590:
case 2455:
case 2562:
case 2048:
case 1739:
case 1819:
case 272:
case 3399:
case 2751:
case 1758:
case 2249:
case 3803:
case 2600:
case 1129:
case 3317:
case 3654:
case 564:
case 639:
case 213:
case 3270:
case 3882:
case 2928:
case 4032:
case 1423:
case 195:
case 117:
case 355:
case 886:
case 243:
case 158:
case 959:
case 1496:
case 147:
case 1287:
case 3698:
case 3855:
case 4026:
case 1603:
case 2545:
case 1288:
case 3233:
case 2281:
case 3697:
case 2344:
case 3053:
case 742:
case 2506:
case 473:
case 2420:
case 338:
case 2786:
case 1682:
case 2942:
case 3652:
case 1002:
case 3071:
case 2927:
case 284:
case 121:
case 2328:
case 3005:
case 3258:
case 1517:
case 3884:
case 3038:
case 1898:
case 3318:
case 2120:
case 3239:
case 4093:
case 699:
case 1609:
case 1240:
case 3926:
case 942:
case 3613:
case 266:
case 623:
case 1757:
case 1599:
case 822:
case 1770:
case 2916:
case 2623:
case 2696:
case 412:
case 1792:
case 320:
case 1760:
case 1100:
case 3332:
case 912:
case 2375:
case 2022:
case 2301:
case 1335:
case 3993:
case 3934:
case 1907:
case 1534:
case 1015:
case 917:
case 2524:
case 2679:
case 2663:
case 1252:
case 3892:
case 1312:
case 946:
case 4004:
case 638:
case 1639:
case 2651:
case 1658:
case 3315:
case 1895:
case 262:
case 3035:
case 1887:
case 3857:
case 3203:
case 2090:
case 1285:
case 1541:
case 1633:
case 1297:
case 874:
case 2062:
case 947:
case 1576:
case 2673:
case 458:
case 1720:
case 3282:
case 416:
case 916:
case 827:
case 3149:
case 958:
case 2669:
case 470:
case 2378:
case 1130:
case 83:
case 2460:
case 2157:
case 526:
case 3021:
case 614:
case 2856:
case 305:
case 323:
case 3904:
case 1018:
case 2331:
case 2170:
case 1338:
case 3383:
case 1305:
case 1784:
case 747:
case 644:
case 3389:
case 2700:
case 3640:
case 2843:
case 1353:
case 2192:
case 574:
case 2457:
case 1213:
case 716:
case 758:
case 2368:
case 1361:
case 3116:
case 3737:
case 1704:
case 3984:
case 3817:
case 1584:
case 3598:
case 2493:
case 1164:
case 2827:
case 969:
case 837:
case 3382:
case 2126:
case 469:
case 1474:
case 2842:
case 4020:
case 2193:
case 52:
case 991:
case 100:
case 3621:
case 3416:
case 1618:
case 74:
case 1174:
case 554:
case 2499:
case 2690:
case 3142:
case 1313:
case 2662:
case 1253:
case 3088:
case 3714:
case 630:
case 1106:
case 2073:
case 41:
case 537:
case 333:
case 536:
case 478:
case 2736:
case 3442:
case 2063:
case 82:
case 179:
case 2117:
case 2748:
case 44:
case 1259:
case 1319:
case 3899:
case 1238:
case 2051:
case 94:
case 2672:
case 1445:
case 3826:
case 3635:
case 753:
case 2228:
case 103:
case 125:
case 1570:
case 3970:
case 2104:
case 207:
case 3019:
case 2622:
case 3339:
case 1799:
case 3358:
case 1615:
case 1480:
case 2381:
case 1995:
case 3167:
case 3333:
case 1814:
case 3013:
case 3394:
case 1987:
case 3866:
case 3707:
case 665:
case 1560:
case 485:
case 2774:
case 2275:
case 1602:
case 2706:
case 453:
case 1436:
case 2586:
case 3646:
case 953:
case 2166:
case 249:
case 1448:
case 2943:
case 1055:
case 1235:
case 1124:
case 4057:
case 3659:
case 2476:
case 633:
case 1837:
case 1340:
case 3097:
case 785:
case 4092:
case 2141:
case 1148:
case 832:
case 2265:
case 1506:
case 1420:
case 3906:
case 1786:
case 440:
case 1942:
case 3068:
case 3273:
case 3743:
case 477:
case 820:
case 1281:
case 95:
case 322:
case 3311:
case 2655:
case 976:
case 2517:
case 2083:
case 538:
case 2609:
case 476:
case 910:
case 1120:
case 63:
case 3263:
case 3756:
case 221:
case 2321:
case 3279:
case 1927:
case 235:
case 3527:
case 1184:
case 3198:
case 2770:
case 3516:
case 627:
case 740:
case 2400:
case 1810:
case 777:
case 2240:
case 3362:
case 674:
case 2757:
case 544:
case 1730:
case 4045:
case 710:
case 167:
case 2534:
case 1484:
case 2593:
case 3372:
case 514:
case 2792:
case 1375:
case 3974:
case 2186:
case 3322:
case 3001:
case 1651:
case 1679:
case 1325:
case 2252:
case 2032:
case 1673:
case 3065:
case 622:
case 2720:
case 1669:
case 3936:
case 2297:
case 3681:
case 2541:
case 3830:
case 2633:
case 1062:
case 3948:
case 33:
case 823:
case 772:
case 561:
case 2576:
case 3710:
case 2338:
case 2305:
case 1011:
case 2784:
case 2219:
case 899:
case 3577:
case 1977:
case 3229:
case 2371:
case 1378:
case 1856:
case 2346:
case 3296:
case 260:
case 3886:
case 3567:
case 1967:
case 4036:
case 3195:
case 2361:
case 3187:
case 505:
case 861:
case 1160:
case 1192:
case 1843:
case 3044:
case 3980:
case 194:
case 268:
case 1827:
case 354:
case 632:
case 801:
case 565:
case 3750:
case 3247:
case 3591:
case 1991:
case 2998:
case 2397:
case 3644:
case 1434:
case 2954:
case 1500:
case 3900:
case 1426:
case 952:
case 1780:
case 1499:
case 2352:
case 1134:
case 200:
case 3806:
case 1268:
case 2261:
case 3874:
case 3665:
case 1073:
case 1662:
case 2253:
case 2807:
case 1417:
case 3081:
case 2094:
case 1690:
case 2313:
case 533:
case 337:
case 2741:
case 2259:
case 4000:
case 1910:
case 2776:
case 3510:
case 2238:
case 2058:
case 2406:
case 3396:
case 2271:
case 279:
case 3864:
case 3675:
case 1063:
case 77:
case 654:
case 107:
case 1622:
case 1530:
case 2480:
case 2615:
case 3930:
case 2557:
case 332:
case 2799:
case 1764:
case 225:
case 231:
case 1228:
case 1096:
case 1104:
case 2570:
case 3716:
case 62:
case 1029:
case 4086:
case 2180:
case 2592:
case 434:
case 2560:
case 1647:
case 3437:
case 2995:
case 1244:
case 756:
case 830:
case 106:
case 589:
case 2055:
case 1201:
case 2235:
case 1441:
case 3880:
case 457:
case 47:
case 97:
case 4030:
case 3678:
case 1867:
case 448:
case 1275:
case 1166:
case 3742:
case 948:
case 1586:
case 3986:
case 1956:
case 2424:
case 3668:
case 1877:
case 2148:
case 1949:
case 956:
case 3549:
case 889:
case 2340:
case 3414:
case 3596:
case 1996:
case 2320:
case 348:
case 3529:
case 3674:
case 3865:
case 3277:
case 3747:
case 197:
case 357:
case 37:
case 885:
case 2128:
case 3250:
case 3030:
case 2444:
case 1280:
case 2087:
case 2513:
case 3722:
case 3418:
case 318:
case 1725:
case 3875:
case 2144:
case 1923:
case 1421:
case 3523:
case 2712:
case 1616:
case 1108:
case 2552:
case 1135:
case 2465:
case 1768:
case 288:
case 1627:
case 3086:
case 3844:
case 1043:
case 3132:
case 2175:
case 2266:
case 2276:
case 1049:
case 1731:
case 1408:
case 2818:
case 1248:
case 2384:
case 2771:
case 1778:
case 3606:
case 229:
case 1236:
case 652:
case 3432:
case 936:
case 648:
case 891:
case 4081:
case 72:
case 3831:
case 2883:
case 1091:
case 2226:
case 2425:
case 104:
case 3216:
case 67:
case 54:
case 1667:
case 2721:
case 3868:
case 1677:
case 290:
case 618:
case 656:
case 2293:
case 3343:
case 1112:
case 869:
case 2994:
case 92:
case 1245:
case 878:
case 1438:
case 3648:
case 2431:
case 1405:
case 3981:
case 2933:
case 736:
case 3772:
case 2708:
case 1822:
case 42:
case 1471:
case 2392:
case 3573:
case 454:
case 2360:
case 1446:
case 3227:
case 3624:
case 1159:
case 1138:
case 737:
case 3762:
case 2939:
case 634:
case 1146:
case 81:
case 1171:
case 1330:
case 1453:
case 2217:
case 1847:
case 2357:
case 3773:
case 847:
case 1823:
case 3024:
case 3482:
case 3975:
case 3155:
case 3769:
case 2932:
case 858:
case 509:
case 927:
case 1497:
case 2334:
case 427:
case 2393:
case 1152:
case 3403:
case 2508:
case 1610:
case 2014:
case 3901:
case 2535:
case 1485:
case 426:
case 3562:
case 3048:
case 1962:
case 4044:
case 2399:
case 3409:
case 187:
case 926:
case 3751:
case 895:
case 3965:
case 1565:
case 1452:
case 3316:
case 3763:
case 846:
case 283:
case 2270:
case 774:
case 677:
case 4075:
case 2521:
case 547:
case 1119:
case 255:
case 3327:
case 1911:
case 1413:
case 2317:
case 558:
case 640:
case 809:
case 313:
case 516:
case 2740:
case 727:
case 4001:
case 624:
case 43:
case 1419:
case 726:
case 2809:
case 595:
case 3944:
case 1544:
case 1691:
case 2855:
case 610:
case 546:
case 1380:
case 3458:
case 3006:
case 3367:
case 1188:
case 2181:
case 1568:
case 1042:
case 3968:
case 3377:
case 2571:
case 1578:
case 4025:
case 3978:
case 3686:
case 1027:
case 672:
case 3139:
case 2538:
case 3433:
case 1643:
case 2481:
case 1531:
case 2505:
case 722:
case 2983:
case 2304:
case 111:
case 2858:
case 1348:
case 1851:
case 2695:
case 2284:
case 2687:
case 3291:
case 2719:
case 182:
case 1947:
case 2839:
case 1863:
case 1140:
case 1336:
case 1016:
case 3729:
case 1879:
case 239:
case 1324:
case 1525:
case 4078:
case 1873:
case 3074:
case 3723:
case 2512:
case 2713:
case 3522:
case 4031:
case 2366:
case 643:
case 922:
case 3881:
case 1128:
case 2121:
case 1607:
case 1444:
case 3693:
case 3057:
case 518:
case 193:
case 789:
case 353:
case 556:
case 1320:
case 4052:
case 3070:
case 3092:
case 1832:
case 2725:
case 1712:
case 2421:
case 57:
case 557:
case 3913:
case 1087:
case 3411:
case 3835:
case 1095:
case 2280:
case 678:
case 548:
case 3699:
case 650:
case 296:
case 3715:
case 2300:
case 1175:
case 3462:
case 3617:
case 3354:
case 3789:
case 534:
case 3509:
case 1753:
case 3952:
case 2224:
case 989:
case 2768:
case 730:
case 1761:
case 188:
case 385:
case 2056:
case 87:
case 2642:
case 1982:
case 1475:
case 2731:
case 1738:
case 2049:
case 1705:
case 2248:
case 1597:
case 1165:
case 3997:
case 3503:
case 1401:
case 1585:
case 3871:
case 2667:
case 2412:
case 3147:
case 175:
case 4088:
case 653:
case 3859:
case 1226:
case 3084:
case 3838:
case 1883:
case 1540:
case 3207:
case 2650:
case 2112:
case 3604:
case 2744:
case 1125:
case 401:
case 933:
case 3122:
case 190:
case 350:
case 1360:
case 552:
case 2471:
case 3812:
case 2969:
case 369:
case 2581:
case 2438:
case 3533:
case 3395:
case 2405:
case 1168:
case 1994:
case 2161:
case 2245:
case 3676:
case 2701:
case 1735:
case 2146:
case 3666:
case 1939:
case 685:
case 3539:
case 2010:
case 2847:
case 28:
case 1178:
case 2453:
case 2171:
case 2330:
case 1217:
case 1958:
case 3020:
case 2159:
case 965:
case 1370:
case 1131:
case 465:
case 2105:
case 2461:
case 2963:
case 2781:
case 1788:
case 843:
case 286:
case 3066:
case 2501:
case 2485:
case 2972:
case 2610:
case 2497:
case 905:
case 572:
case 642:
case 423:
case 2374:
case 3532:
case 2575:
case 2364:
case 2829:
case 171:
case 183:
case 813:
case 612:
case 3041:
case 2962:
case 3739:
case 2990:
case 3758:
case 3076:
case 1399:
case 2230:
case 3897:
case 673:
case 1654:
case 1317:
case 2911:
case 1918:
case 2413:
case 3518:
case 346:
case 461:
case 2077:
case 961:
case 705:
case 2306:
case 316:
case 198:
case 358:
case 3429:
case 1292:
case 2419:
case 1809:
case 347:
case 3123:
case 1698:
case 3287:
case 2544:
case 3684:
case 810:
case 241:
case 3479:
case 876:
case 1561:
case 2042:
case 1181:
case 2188:
case 2649:
case 3589:
case 3169:
case 1553:
case 2380:
case 3451:
case 3953:
case 3709:
case 3163:
case 3840:
case 2531:
case 1538:
case 3583:
case 1983:
case 1505:
case 3703:
case 840:
case 1797:
case 824:
case 211:
case 3959:
case 3502:
case 3473:
case 877:
case 2578:
case 3971:
case 444:
case 1902:
case 312:
case 420:
case 4012:
case 1546:
case 3469:
case 3946:
case 3692:
case 576:
case 438:
case 3660:
case 373:
case 510:
case 139:
case 2879:
case 282:
case 2947:
case 2348:
case 1695:
case 1376:
case 695:
case 1366:
case 4005:
case 524:
case 1713:
case 4038:
case 3888:
case 1833:
case 3254:
case 1007:
case 4059:
case 3657:
case 3314:
case 2200:
case 3093:
case 670:
case 720:
case 4071:
case 744:
case 2324:
case 647:
case 55:
case 2873:
case 4046:
case 1512:
case 161:
case 1456:
case 955:
case 1143:
case 1892:
case 455:
case 3312:
case 2075:
case 3186:
case 1209:
case 2322:
case 1514:
case 1035:
case 2001:
case 1008:
case 3658:
case 1315:
case 1443:
case 2681:
case 1688:
case 3633:
case 2830:
case 1941:
case 1203:
case 2347:
case 3285:
case 23:
case 635:
case 1156:
case 621:
case 2710:
case 562:
case 498:
case 1870:
case 2065:
case 3486:
case 2936:
case 1149:
case 359:
case 2577:
case 3371:
case 1302:
case 3346:
case 2296:
case 755:
case 1021:
case 3338:
case 1904:
case 2487:
case 4014:
case 3784:
case 3359:
case 227:
case 663:
case 3213:
case 3430:
case 1640:
case 2044:
case 2980:
case 471:
case 308:
case 2567:
case 2187:
case 1697:
case 3288:
case 1233:
case 3854:
case 3603:
case 2269:
case 939:
case 867:
case 2068:
case 2273:
case 1071:
case 2078:
case 3002:
case 2263:
case 1652:
case 1110:
case 321:
case 2279:
case 3321:
case 3898:
case 222:
case 2311:
case 1318:
case 1005:
case 1917:
case 2251:
case 3083:
case 1038:
case 1884:
case 3609:
case 4007:
case 1059:
case 1239:
case 2390:
case 3400:
case 3526:
case 2362:
case 2454:
case 3599:
case 660:
case 884:
case 2198:
case 980:
case 3770:
case 2516:
case 567:
case 739:
case 363:
case 144:
case 120:
case 1332:
case 3100:
case 50:
case 608:
case 1795:
case 3593:
case 2372:
case 3308:
case 3335:
case 1993:
case 2625:
case 325:
case 331:
case 793:
case 2379:
case 56:
case 2363:
case 1467:
case 3570:
case 1970:
case 1339:
case 1876:
case 1841:
case 2351:
case 1358:
case 2848:
case 3615:
case 2930:
case 3557:
case 232:
case 1177:
case 3814:
case 2437:
case 1587:
case 1394:
case 3388:
case 1333:
case 1167:
case 1450:
case 1595:
case 1707:
case 1866:
case 3592:
case 1992:
case 1960:
case 929:
case 128:
case 3602:
case 2678:
case 2114:
case 1052:
case 3:
case 519:
case 3436:
case 2986:
case 2272:
case 3208:
case 3235:
case 2543:
case 2631:
case 3448:
case 2880:
case 3124:
case 549:
case 3717:
case 3689:
case 4095:
case 3136:
case 2262:
case 3340:
case 1653:
case 1097:
case 2290:
case 1804:
case 3003:
case 3424:
case 807:
case 2727:
case 3148:
case 631:
case 625:
case 2591:
case 22:
case 3164:
case 3385:
case 3584:
case 368:
case 775:
case 802:
case 3474:
case 451:
case 2107:
case 165:
case 2767:
case 300:
case 2628:
case 1416:
case 951:
case 3954:
case 3174:
case 3618:
case 2845:
case 2222:
case 1309:
case 3253:
case 3033:
case 1088:
case 2081:
case 1714:
case 6:
case 502:
case 3145:
case 2665:
case 475:
case 2323:
case 3406:
case 101:
case 3520:
case 3246:
case 133:
case 2329:
case 379:
case 2675:
case 237:
case 1899:
case 894:
case 3776:
case 1635:
case 1826:
case 1283:
case 3058:
case 3205:
case 559:
case 2966:
case 1322:
case 2209:
case 3651:
case 2315:
case 362:
case 2035:
case 1001:
case 2456:
case 3325:
case 261:
case 3524:
case 4077:
case 2860:
case 2892:
case 2870:
case 3673:
case 2149:
case 964:
case 3669:
case 1936:
case 4067:
case 13:
case 3090:
case 2688:
case 1830:
case 2941:
case 1710:
case 2976:
case 787:
case 2537:
case 1487:
case 486:
case 2383:
case 3950:
case 1791:
case 2798:
case 127:
case 508:
case 986:
case 60:
case 3378:
case 1229:
case 3460:
case 1577:
case 174:
case 1028:
case 1296:
case 223:
case 667:
case 1223:
case 1195:
case 2754:
case 2389:
case 987:
case 3843:
case 2640:
case 3192:
case 3580:
case 3457:
case 3506:
case 741:
case 1269:
case 662:
case 1068:
case 3942:
case 2061:
case 1743:
case 49:
case 521:
case 1800:
case 2410:
case 3545:
case 982:
case 2233:
case 3281:
case 2697:
case 2053:
case 2258:
case 2884:
case 2038:
case 122:
case 1311:
case 2239:
case 3120:
case 711:
case 1756:
case 1078:
case 1527:
case 384:
case 1279:
case 1964:
case 3564:
case 3365:
case 3916:
case 1516:
case 4042:
case 782:
case 1454:
case 30:
case 1390:
case 2613:
case 3730:
case 366:
case 563:
case 214:
case 2787:
case 3022:
case 2619:
case 367:
case 2795:
case 911:
case 2993:
case 2934:
case 244:
case 1025:
case 1974:
case 2012:
case 4027:
case 3574:
case 2332:
case 3375:
case 2019:
case 4043:
case 797:
case 132:
case 1211:
case 1351:
case 3530:
case 1379:
case 3096:
case 289:
case 3764:
case 2150:
case 3029:
case 1363:
case 2477:
case 1373:
case 1824:
case 2333:
case 3244:
case 4049:
case 2394:
case 2866:
case 306:
case 2707:
case 796:
case 2638:
case 1543:
case 2605:
case 3476:
case 3745:
case 997:
case 2232:
case 1114:
case 3275:
case 1678:
case 2646:
case 1986:
case 945:
case 3176:
case 3956:
case 3265:
case 602:
case 3877:
case 1668:
case 3949:
case 825:
case 319:
case 5:
case 803:
case 496:
case 2085:
case 1290:
case 1414:
case 394:
case 154:
case 3199:
case 704:
case 3126:
case 2116:
case 2737:
case 1407:
case 1591:
case 1247:
case 2598:
case 3991:
case 3500:
case 992:
case 3611:
case 1845:
case 2215:
case 2554:
case 568:
case 2309:
case 1222:
case 492:
case 48:
case 3134:
case 3193:
case 2621:
case 2416:
case 3724:
case 3073:
case 1665:
case 3268:
case 1323:
case 2427:
case 2893:
case 2142:
case 579:
case 2834:
case 2714:
case 4091:
case 2289:
case 136:
case 868:
case 3748:
case 137:
case 2127:
case 3910:
case 1510:
case 2826:
case 302:
case 619:
case 1396:
case 2920:
case 3816:
case 1864:
case 3063:
case 1329:
case 2202:
case 3278:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748041201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,];
var gg_b = "1748041201/";

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
