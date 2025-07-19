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
case 2781:
case 3400:
case 1330:
case 3079:
case 3680:
case 934:
case 1589:
case 2876:
case 1056:
case 1290:
case 4006:
case 2085:
case 2799:
case 2302:
case 1591:
case 3277:
case 2543:
case 3266:
case 3874:
case 2909:
case 2395:
case 3058:
case 2226:
case 1107:
case 2235:
case 282:
case 1149:
case 3288:
case 1419:
case 1557:
case 1698:
case 2529:
case 62:
case 788:
case 3974:
case 2809:
case 965:
case 3006:
case 3471:
case 2073:
case 677:
case 3191:
case 1622:
case 936:
case 494:
case 215:
case 798:
case 3793:
case 384:
case 198:
case 1169:
case 1715:
case 911:
case 963:
case 3927:
case 2967:
case 1640:
case 3549:
case 1912:
case 3903:
case 1430:
case 213:
case 578:
case 3523:
case 1011:
case 3507:
case 92:
case 3620:
case 2698:
case 1529:
case 88:
case 2419:
case 1947:
case 3452:
case 2721:
case 3284:
case 3065:
case 4045:
case 801:
case 2350:
case 727:
case 2953:
case 353:
case 2286:
case 3910:
case 3575:
case 2591:
case 3432:
case 1085:
case 2537:
case 58:
case 127:
case 1799:
case 2056:
case 2589:
case 1876:
case 1867:
case 782:
case 2290:
case 355:
case 2268:
case 2933:
case 1781:
case 1563:
case 1682:
case 3292:
case 3045:
case 3143:
case 1402:
case 113:
case 3332:
case 2912:
case 2640:
case 872:
case 2008:
case 559:
case 2430:
case 2833:
case 17:
case 2169:
case 298:
case 3959:
case 1004:
case 663:
case 2715:
case 3352:
case 89:
case 4034:
case 3987:
case 192:
case 1244:
case 665:
case 2622:
case 150:
case 1073:
case 1175:
case 2853:
case 1495:
case 3205:
case 3583:
case 572:
case 327:
case 3183:
case 847:
case 819:
case 3799:
case 4073:
case 450:
case 1642:
case 3302:
case 753:
case 2696:
case 1313:
case 294:
case 3781:
case 2224:
case 2079:
case 415:
case 2827:
case 3876:
case 1034:
case 3264:
case 492:
case 2569:
case 651:
case 382:
case 47:
case 2288:
case 547:
case 1620:
case 2277:
case 153:
case 2874:
case 3395:
case 3909:
case 1839:
case 461:
case 3226:
case 3847:
case 1987:
case 2189:
case 1352:
case 932:
case 315:
case 2793:
case 609:
case 2137:
case 1583:
case 2617:
case 3809:
case 1939:
case 427:
case 4085:
case 3175:
case 2191:
case 3073:
case 1143:
case 3402:
case 1045:
case 3563:
case 837:
case 1810:
case 1292:
case 284:
case 1741:
case 37:
case 2927:
case 1959:
case 3976:
case 2157:
case 2065:
case 2839:
case 3107:
case 1266:
case 3123:
case 2054:
case 3036:
case 3025:
case 1874:
case 3149:
case 186:
case 2620:
case 3557:
case 1569:
case 4008:
case 2452:
case 3056:
case 2034:
case 1680:
case 3290:
case 1803:
case 3933:
case 3268:
case 948:
case 2859:
case 786:
case 3330:
case 1038:
case 2910:
case 2313:
case 3591:
case 1696:
case 574:
case 1549:
case 3640:
case 938:
case 3008:
case 1903:
case 1157:
case 2129:
case 184:
case 1927:
case 796:
case 2959:
case 876:
case 3715:
case 2292:
case 4036:
case 4025:
case 2143:
case 1006:
case 576:
case 3622:
case 1471:
case 1617:
case 2583:
case 1137:
case 1974:
case 2352:
case 488:
case 2987:
case 3299:
case 1689:
case 1895:
case 3051:
case 2850:
case 696:
case 3387:
case 3122:
case 3755:
case 2919:
case 3281:
case 1447:
case 3952:
case 1728:
case 2162:
case 1117:
case 2830:
case 2312:
case 1376:
case 684:
case 1367:
case 732:
case 2643:
case 1598:
case 2629:
case 3932:
case 3140:
case 2777:
case 3726:
case 3735:
case 3669:
case 1196:
case 260:
case 1522:
case 2333:
case 2412:
case 1467:
case 2142:
case 2930:
case 2293:
case 694:
case 3459:
case 3832:
case 910:
case 1705:
case 1902:
case 3310:
case 1018:
case 3913:
case 3198:
case 3478:
case 1309:
case 1540:
case 1995:
case 686:
case 1347:
case 32:
case 2663:
case 84:
case 2582:
case 3487:
case 3016:
case 3852:
case 2657:
case 2598:
case 3520:
case 1777:
case 1766:
case 2367:
case 2376:
case 824:
case 311:
case 1788:
case 138:
case 3221:
case 1830:
case 3182:
case 2728:
case 336:
case 434:
case 2447:
case 800:
case 2637:
case 996:
case 3675:
case 109:
case 232:
case 1850:
case 2070:
case 2409:
case 365:
case 524:
case 1453:
case 3072:
case 760:
case 242:
case 986:
case 346:
case 826:
case 411:
case 1819:
case 2241:
case 1950:
case 1353:
case 3194:
case 1746:
case 1120:
case 3971:
case 2309:
case 2018:
case 526:
case 2705:
case 610:
case 1014:
case 994:
case 1293:
case 3800:
case 3562:
case 869:
case 3427:
case 751:
case 334:
case 436:
case 1333:
case 655:
case 1930:
case 1142:
case 711:
case 448:
case 2387:
case 2596:
case 615:
case 1768:
case 3724:
case 3919:
case 1542:
case 460:
case 1790:
case 2764:
case 692:
case 2299:
case 165:
case 650:
case 2580:
case 1871:
case 1374:
case 3629:
case 2932:
case 3777:
case 661:
case 2813:
case 765:
case 2669:
case 338:
case 736:
case 2359:
case 3312:
case 1900:
case 144:
case 163:
case 1303:
case 3643:
case 2832:
case 805:
case 503:
case 2310:
case 627:
case 3333:
case 3412:
case 134:
case 2744:
case 1800:
case 348:
case 988:
case 2517:
case 1427:
case 3663:
case 803:
case 3582:
case 2487:
case 682:
case 2478:
case 2198:
case 3120:
case 2439:
case 2649:
case 528:
case 3746:
case 1194:
case 244:
case 698:
case 2900:
case 3376:
case 97:
case 263:
case 2221:
case 2327:
case 1359:
case 1735:
case 1726:
case 897:
case 961:
case 3802:
case 3598:
case 1410:
case 1140:
case 3070:
case 1339:
case 3409:
case 265:
case 2374:
case 1764:
case 3728:
case 3447:
case 1122:
case 2542:
case 1281:
case 915:
case 2768:
case 1198:
case 2971:
case 3995:
case 1649:
case 2072:
case 1852:
case 1016:
case 1487:
case 1623:
case 822:
case 982:
case 3347:
case 2215:
case 3241:
case 12:
case 688:
case 2800:
case 2683:
case 2748:
case 234:
case 3467:
case 3522:
case 2403:
case 3018:
case 1310:
case 887:
case 3902:
case 1913:
case 3705:
case 3180:
case 1832:
case 542:
case 3579:
case 2946:
case 3651:
case 1795:
case 919:
case 387:
case 3864:
case 2585:
case 2203:
case 269:
case 1106:
case 74:
case 2824:
case 3855:
case 674:
case 1536:
case 4007:
case 2888:
case 1884:
case 1381:
case 322:
case 3558:
case 3697:
case 4023:
case 2730:
case 3835:
case 1702:
case 3069:
case 2274:
case 1057:
case 2029:
case 1905:
case 2877:
case 2866:
case 832:
case 3341:
case 1984:
case 13:
case 2573:
case 3926:
case 1179:
case 1499:
case 487:
case 1618:
case 2134:
case 3209:
case 2614:
case 1805:
case 2977:
case 3732:
case 2966:
case 2504:
case 2846:
case 1928:
case 422:
case 1511:
case 2154:
case 3136:
case 2421:
case 3023:
case 1158:
case 2165:
case 3007:
case 3955:
case 1274:
case 2057:
case 2702:
case 2278:
case 3565:
case 2884:
case 1145:
case 974:
case 1888:
case 2525:
case 2536:
case 1415:
case 3554:
case 126:
case 2106:
case 169:
case 3173:
case 1321:
case 328:
case 3890:
case 2828:
case 3212:
case 860:
case 2089:
case 3534:
case 647:
case 2795:
case 305:
case 1750:
case 551:
case 1719:
case 2928:
case 1421:
case 838:
case 3393:
case 2511:
case 509:
case 2892:
case 2210:
case 538:
case 1966:
case 1977:
case 2805:
case 2618:
case 23:
case 2601:
case 2984:
case 1573:
case 809:
case 3185:
case 2481:
case 1988:
case 4075:
case 2864:
case 1890:
case 2267:
case 2276:
case 834:
case 703:
case 1868:
case 1173:
case 1493:
case 2538:
case 1886:
case 2826:
case 705:
case 2069:
case 601:
case 2713:
case 534:
case 2108:
case 3029:
case 3877:
case 4063:
case 3145:
case 103:
case 68:
case 728:
case 1554:
case 424:
case 2631:
case 2697:
case 2558:
case 1253:
case 544:
case 511:
case 2156:
case 3614:
case 3977:
case 659:
case 1185:
case 2341:
case 3573:
case 2247:
case 3315:
case 300:
case 2752:
case 1990:
case 1393:
case 672:
case 3154:
case 2461:
case 863:
case 811:
case 426:
case 536:
case 1986:
case 2049:
case 297:
case 1697:
case 122:
case 1944:
case 3381:
case 34:
case 1441:
case 82:
case 1631:
case 2948:
case 1111:
case 2554:
case 3536:
case 1069:
case 3702:
case 1835:
case 1826:
case 3278:
case 901:
case 1713:
case 3239:
case 52:
case 187:
case 2771:
case 205:
case 3795:
case 3992:
case 3670:
case 3259:
case 3091:
case 2493:
case 1864:
case 3828:
case 2212:
case 1267:
case 1049:
case 3508:
case 3892:
case 2986:
case 44:
case 1461:
case 1955:
case 2233:
case 2545:
case 3928:
case 1964:
case 1136:
case 972:
case 1125:
case 2393:
case 3511:
case 2672:
case 1616:
case 1341:
case 3984:
case 1844:
case 1247:
case 2185:
case 2083:
case 678:
case 4091:
case 797:
case 3499:
case 1712:
case 1388:
case 1656:
case 3551:
case 29:
case 3118:
case 2881:
case 1570:
case 3096:
case 259:
case 3101:
case 2685:
case 1377:
case 2213:
case 3658:
case 3386:
case 3531:
case 1636:
case 1446:
case 3774:
case 474:
case 2328:
case 1098:
case 898:
case 778:
case 3993:
case 2094:
case 3368:
case 272:
case 1821:
case 1060:
case 1022:
case 1501:
case 687:
case 3606:
case 2232:
case 3486:
case 1424:
case 1151:
case 3893:
case 928:
case 2747:
case 1921:
case 622:
case 3348:
case 2252:
case 1040:
case 1733:
case 28:
case 374:
case 476:
case 2981:
case 3219:
case 1488:
case 1466:
case 2082:
case 1477:
case 1611:
case 3516:
case 2999:
case 1094:
case 3861:
case 3364:
case 87:
case 3654:
case 2636:
case 2116:
case 592:
case 1213:
case 861:
case 3665:
case 515:
case 3202:
case 813:
case 2271:
case 850:
case 3295:
case 57:
case 447:
case 1899:
case 3335:
case 1405:
case 3941:
case 561:
case 772:
case 2712:
case 2388:
case 3435:
case 3572:
case 2611:
case 1305:
case 1999:
case 101:
case 3645:
case 3710:
case 2477:
case 437:
case 2466:
case 1981:
case 1604:
case 2733:
case 2488:
case 882:
case 1484:
case 2040:
case 1428:
case 3464:
case 2200:
case 1232:
case 3062:
case 4042:
case 1673:
case 2022:
case 1392:
case 347:
case 987:
case 319:
case 827:
case 2501:
case 1335:
case 1326:
case 1042:
case 3405:
case 1295:
case 3899:
case 3776:
case 93:
case 1444:
case 1114:
case 2551:
case 2679:
case 3384:
case 2638:
case 2448:
case 1759:
case 2727:
case 48:
case 1364:
case 276:
case 2993:
case 2230:
case 3094:
case 1355:
case 372:
case 3213:
case 2597:
case 1202:
case 2658:
case 1665:
case 2531:
case 2774:
case 4082:
case 49:
case 669:
case 1961:
case 3514:
case 2490:
case 553:
case 2170:
case 855:
case 3747:
case 3428:
case 1464:
case 3392:
case 119:
case 2606:
case 147:
case 3232:
case 459:
case 2017:
case 1062:
case 1710:
case 3082:
case 853:
case 719:
case 747:
case 1572:
case 2516:
case 1645:
case 3999:
case 4094:
case 3252:
case 94:
case 38:
case 3604:
case 3981:
case 2219:
case 1344:
case 274:
case 626:
case 2654:
case 1531:
case 237:
case 2665:
case 2787:
case 1230:
case 3060:
case 4040:
case 3821:
case 3324:
case 3098:
case 2364:
case 2861:
case 2020:
case 924:
case 1993:
case 1638:
case 1118:
case 1679:
case 3915:
case 776:
case 1448:
case 3712:
case 2114:
case 2634:
case 3271:
case 2295:
case 4022:
case 3377:
case 3366:
case 2335:
case 1096:
case 1101:
case 1219:
case 3815:
case 886:
case 1348:
case 1516:
case 2426:
case 3131:
case 3466:
case 219:
case 1606:
case 3753:
case 3501:
case 3346:
case 1490:
case 1170:
case 478:
case 969:
case 3200:
case 2455:
case 3151:
case 2943:
case 629:
case 1701:
case 4064:
case 633:
case 2159:
case 2206:
case 1127:
case 407:
case 1718:
case 3273:
case 1005:
case 2929:
case 2714:
case 131:
case 3112:
case 2046:
case 354:
case 731:
case 1092:
case 2187:
case 3362:
case 1245:
case 4026:
case 116:
case 1174:
case 1494:
case 3716:
case 666:
case 1991:
case 3807:
case 2498:
case 2619:
case 3204:
case 3527:
case 307:
case 714:
case 2567:
case 1695:
case 1512:
case 1234:
case 3923:
case 4044:
case 2398:
case 3320:
case 1837:
case 1891:
case 3055:
case 3907:
case 2024:
case 2440:
case 3797:
case 290:
case 1084:
case 2110:
case 1265:
case 252:
case 1602:
case 3035:
case 3026:
case 3133:
case 3869:
case 114:
case 2077:
case 1857:
case 2829:
case 2066:
case 758:
case 1254:
case 454:
case 3975:
case 1619:
case 1863:
case 1498:
case 2174:
case 1460:
case 780:
case 3317:
case 589:
case 216:
case 3211:
case 2989:
case 1322:
case 2092:
case 4086:
case 1206:
case 2382:
case 2718:
case 1547:
case 180:
case 4068:
case 3048:
case 3600:
case 1340:
case 1509:
case 393:
case 889:
case 1066:
case 570:
case 1829:
case 2482:
case 85:
case 1077:
case 3225:
case 2254:
case 1258:
case 214:
case 1630:
case 1088:
case 964:
case 383:
case 3983:
case 899:
case 3068:
case 179:
case 2891:
case 2394:
case 1360:
case 493:
case 1279:
case 1963:
case 1238:
case 2234:
case 3256:
case 3090:
case 55:
case 1398:
case 599:
case 945:
case 2512:
case 1422:
case 1576:
case 2695:
case 3086:
case 3147:
case 2770:
case 691:
case 3547:
case 875:
case 2112:
case 1496:
case 1176:
case 712:
case 968:
case 3509:
case 479:
case 51:
case 1883:
case 3943:
case 1480:
case 380:
case 940:
case 2044:
case 2652:
case 1208:
case 575:
case 873:
case 4088:
case 2807:
case 1975:
case 3178:
case 3498:
case 3619:
case 1510:
case 2204:
case 3187:
case 2362:
case 195:
case 1211:
case 2849:
case 2923:
case 1109:
case 2064:
case 3398:
case 2320:
case 1090:
case 2055:
case 379:
case 2907:
case 3238:
case 3963:
case 1086:
case 1417:
case 1559:
case 2527:
case 1147:
case 185:
case 1671:
case 2949:
case 352:
case 1396:
case 2035:
case 2133:
case 2613:
case 785:
case 3077:
case 3066:
case 4046:
case 1236:
case 2574:
case 1380:
case 1983:
case 183:
case 60:
case 3440:
case 2797:
case 390:
case 295:
case 3989:
case 1849:
case 212:
case 3092:
case 3533:
case 154:
case 2975:
case 1807:
case 3991:
case 1204:
case 3494:
case 3174:
case 1652:
case 2208:
case 2772:
case 3701:
case 1044:
case 2048:
case 668:
case 331:
case 3103:
case 2496:
case 2176:
case 3127:
case 118:
case 1969:
case 3718:
case 1797:
case 2539:
case 2380:
case 1574:
case 1731:
case 2983:
case 3482:
case 156:
case 2236:
case 3602:
case 707:
case 416:
case 1613:
case 1133:
case 1035:
case 2587:
case 5:
case 1751:
case 285:
case 107:
case 3512:
case 2559:
case 4005:
case 2147:
case 2068:
case 2875:
case 3394:
case 3234:
case 2090:
case 3837:
case 3028:
case 825:
case 2773:
case 985:
case 1822:
case 3475:
case 808:
case 3195:
case 429:
case 730:
case 2994:
case 1960:
case 2647:
case 1363:
case 1272:
case 3980:
case 1708:
case 839:
case 2704:
case 364:
case 343:
case 983:
case 3102:
case 1443:
case 2519:
case 2457:
case 1711:
case 508:
case 140:
case 2676:
case 1132:
case 2667:
case 1343:
case 329:
case 993:
case 3483:
case 2081:
case 2550:
case 291:
case 1329:
case 2100:
case 517:
case 2530:
case 3758:
case 1736:
case 1152:
case 2389:
case 654:
case 3674:
case 2231:
case 464:
case 3375:
case 1021:
case 3513:
case 1860:
case 2297:
case 181:
case 2711:
case 3745:
case 3469:
case 3610:
case 956:
case 2113:
case 3041:
case 683:
case 1216:
case 2840:
case 2272:
case 2708:
case 802:
case 1647:
case 1994:
case 3201:
case 3150:
case 1171:
case 3862:
case 502:
case 3500:
case 781:
case 3687:
case 3423:
case 86:
case 3820:
case 1337:
case 3962:
case 2725:
case 2736:
case 954:
case 2152:
case 3639:
case 1530:
case 3119:
case 791:
case 871:
case 2922:
case 3765:
case 56:
case 1251:
case 3842:
case 3369:
case 2612:
case 2343:
case 2756:
case 3734:
case 2093:
case 2532:
case 1323:
case 2195:
case 3647:
case 3437:
case 1218:
case 1500:
case 1349:
case 958:
case 1610:
case 1130:
case 1942:
case 3882:
case 941:
case 381:
case 652:
case 1745:
case 914:
case 2552:
case 3704:
case 30:
case 2102:
case 931:
case 1369:
case 391:
case 3099:
case 3100:
case 3251:
case 3676:
case 680:
case 1571:
case 3667:
case 2779:
case 229:
case 2627:
case 3081:
case 1407:
case 3337:
case 1820:
case 40:
case 1423:
case 2513:
case 3391:
case 3894:
case 3297:
case 481:
case 1678:
case 2917:
case 1754:
case 235:
case 1962:
case 3389:
case 3015:
case 806:
case 3633:
case 330:
case 2041:
case 1102:
case 143:
case 3272:
case 990:
case 4021:
case 3711:
case 1552:
case 3429:
case 557:
case 2130:
case 2610:
case 1996:
case 658:
case 1214:
case 2500:
case 2349:
case 145:
case 1706:
case 506:
case 3822:
case 440:
case 3363:
case 2201:
case 857:
case 743:
case 2323:
case 1475:
case 1532:
case 3736:
case 135:
case 1917:
case 2678:
case 1758:
case 2449:
case 3922:
case 2687:
case 733:
case 1513:
case 1375:
case 3502:
case 4015:
case 166:
case 430:
case 368:
case 1738:
case 1483:
case 2659:
case 766:
case 3132:
case 3595:
case 1880:
case 980:
case 340:
case 3343:
case 2734:
case 133:
case 1936:
case 2009:
case 3717:
case 2470:
case 3128:
case 1164:
case 1155:
case 2873:
case 1053:
case 667:
case 3806:
case 3544:
case 1722:
case 4003:
case 2047:
case 4027:
case 149:
case 3372:
case 3693:
case 3263:
case 3979:
case 406:
case 1615:
case 1033:
case 1126:
case 1592:
case 2207:
case 1740:
case 1956:
case 1314:
case 2249:
case 91:
case 4074:
case 540:
case 2318:
case 3838:
case 2681:
case 3027:
case 723:
case 108:
case 1275:
case 3105:
case 3003:
case 2401:
case 1908:
case 1012:
case 530:
case 3564:
case 2699:
case 2885:
case 2524:
case 1414:
case 3796:
case 1144:
case 3074:
case 2269:
case 621:
case 3858:
case 1760:
case 139:
case 3472:
case 3192:
case 3535:
case 1621:
case 830:
case 306:
case 3010:
case 171:
case 1249:
case 2314:
case 3188:
case 4039:
case 3497:
case 3177:
case 862:
case 2740:
case 3166:
case 2808:
case 4087:
case 16:
case 1804:
case 673:
case 3431:
case 2126:
case 1207:
case 2135:
case 2505:
case 76:
case 3124:
case 3451:
case 675:
case 2155:
case 1873:
case 3965:
case 771:
case 3548:
case 2925:
case 3762:
case 1009:
case 562:
case 1470:
case 1190:
case 1566:
case 223:
case 80:
case 1577:
case 3720:
case 1794:
case 3146:
case 3087:
case 3416:
case 1269:
case 3865:
case 921:
case 1370:
case 881:
case 1588:
case 2836:
case 3854:
case 1524:
case 3742:
case 2911:
case 1148:
case 3590:
case 1885:
case 50:
case 3945:
case 225:
case 2528:
case 2012:
case 2856:
case 702:
case 1067:
case 2908:
case 3059:
case 3186:
case 4067:
case 3047:
case 4076:
case 2372:
case 1954:
case 3190:
case 1124:
case 2806:
case 1965:
case 2958:
case 1188:
case 3249:
case 371:
case 3985:
case 3782:
case 2263:
case 1641:
case 36:
case 204:
case 402:
case 3223:
case 3148:
case 3418:
case 3699:
case 1945:
case 1590:
case 1568:
case 2555:
case 2838:
case 3681:
case 3904:
case 1397:
case 1586:
case 257:
case 1834:
case 1331:
case 1146:
case 302:
case 3794:
case 2526:
case 1416:
case 2243:
case 3577:
case 699:
case 1854:
case 2229:
case 65:
case 3973:
case 3269:
case 471:
case 2177:
case 2497:
case 2166:
case 720:
case 3740:
case 2934:
case 3956:
case 3808:
case 1979:
case 1938:
case 2641:
case 866:
case 3126:
case 2431:
case 3615:
case 533:
case 3811:
case 2188:
case 529:
case 2845:
case 3053:
case 2124:
case 3155:
case 1958:
case 1544:
case 2548:
case 2762:
case 2954:
case 3164:
case 704:
case 3505:
case 3283:
case 829:
case 1693:
case 1372:
case 2316:
case 535:
case 833:
case 120:
case 2865:
case 2078:
case 1906:
case 3825:
case 1074:
case 2351:
case 95:
case 1229:
case 843:
case 1243:
case 2661:
case 545:
case 864:
case 2720:
case 4033:
case 106:
case 3798:
case 2146:
case 2087:
case 2416:
case 2237:
case 1003:
case 970:
case 157:
case 1780:
case 3012:
case 2331:
case 3908:
case 1879:
case 2586:
case 2397:
case 449:
case 2059:
case 1027:
case 1838:
case 3275:
case 2291:
case 308:
case 2289:
case 564:
case 845:
case 2590:
case 3997:
case 270:
case 657:
case 2456:
case 3434:
case 514:
case 3931:
case 3593:
case 3032:
case 2311:
case 3345:
case 1262:
case 467:
case 3749:
case 1692:
case 3454:
case 1515:
case 1373:
case 3282:
case 299:
case 2019:
case 3723:
case 2325:
case 1473:
case 3354:
case 1095:
case 1789:
case 367:
case 2296:
case 3365:
case 2581:
case 2050:
case 831:
case 1791:
case 2624:
case 3664:
case 2280:
case 3916:
case 3294:
case 2408:
case 4052:
case 1404:
case 4:
case 3334:
case 604:
case 2743:
case 2914:
case 2729:
case 1385:
case 1521:
case 816:
case 421:
case 3445:
case 1002:
case 2141:
case 1918:
case 3872:
case 1019:
case 199:
case 1763:
case 906:
case 2373:
case 2692:
case 15:
case 579:
case 1161:
case 475:
case 3222:
case 2818:
case 2485:
case 75:
case 1311:
case 590:
case 3438:
case 3199:
case 799:
case 1308:
case 3648:
case 957:
case 1456:
case 2918:
case 1729:
case 1914:
case 1677:
case 2385:
case 1666:
case 3298:
case 2404:
case 789:
case 904:
case 1356:
case 1688:
case 373:
case 2684:
case 3338:
case 2901:
case 3379:
case 1030:
case 1408:
case 1599:
case 2628:
case 3972:
case 3775:
case 4000:
case 1581:
case 3686:
case 3358:
case 375:
case 2193:
case 3071:
case 2473:
case 3406:
case 2789:
case 2345:
case 583:
case 885:
case 370:
case 2434:
case 1199:
case 1479:
case 1438:
case 1000:
case 1648:
case 2931:
case 3308:
case 2:
case 399:
case 923:
case 3019:
case 3763:
case 2723:
case 939:
case 1240:
case 2052:
case 2816:
case 221:
case 2749:
case 1458:
case 3161:
case 3425:
case 3646:
case 1541:
case 1775:
case 773:
case 893:
case 2655:
case 470:
case 1690:
case 3599:
case 2664:
case 512:
case 2916:
case 71:
case 3325:
case 2851:
case 2354:
case 267:
case 1406:
case 3296:
case 1358:
case 1686:
case 3581:
case 3914:
case 3729:
case 45:
case 3411:
case 671:
case 2115:
case 2635:
case 775:
case 593:
case 3141:
case 895:
case 3030:
case 3408:
case 499:
case 66:
case 1298:
case 173:
case 3356:
case 3743:
case 3373:
case 1121:
case 856:
case 3692:
case 1282:
case 3970:
case 2541:
case 1951:
case 4002:
case 121:
case 1749:
case 639:
case 1723:
case 1052:
case 1816:
case 2438:
case 2783:
case 3801:
case 3304:
case 556:
case 1434:
case 3818:
case 3485:
case 1593:
case 3605:
case 2298:
case 3404:
case 273:
case 1831:
case 1334:
case 518:
case 1897:
case 2379:
case 2260:
case 1294:
case 1626:
case 767:
case 1013:
case 21:
case 3918:
case 1445:
case 1769:
case 3757:
case 3242:
case 1365:
case 3095:
case 818:
case 1354:
case 2071:
case 3628:
case 2690:
case 2972:
case 2775:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752948001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,];
var gg_b = "1752948001/";

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
