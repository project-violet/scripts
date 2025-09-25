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
var o = 1;
switch (g) {
case 1655:
case 162:
case 3941:
case 2255:
case 222:
case 183:
case 2308:
case 3679:
case 3968:
case 9:
case 1734:
case 214:
case 2274:
case 899:
case 2605:
case 719:
case 913:
case 1358:
case 2579:
case 4051:
case 3426:
case 3640:
case 3739:
case 2764:
case 3010:
case 1780:
case 1997:
case 2193:
case 3811:
case 1857:
case 3434:
case 889:
case 2469:
case 1732:
case 1285:
case 211:
case 895:
case 3148:
case 296:
case 2153:
case 3177:
case 4066:
case 87:
case 1897:
case 330:
case 3228:
case 4091:
case 1700:
case 1055:
case 1957:
case 3367:
case 2762:
case 1439:
case 2388:
case 3841:
case 3371:
case 2272:
case 3868:
case 1103:
case 1672:
case 2907:
case 2005:
case 1528:
case 427:
case 3950:
case 3707:
case 929:
case 4079:
case 3890:
case 59:
case 430:
case 723:
case 3066:
case 3224:
case 1823:
case 13:
case 2551:
case 2497:
case 3962:
case 2330:
case 663:
case 1633:
case 3563:
case 2476:
case 1773:
case 941:
case 2711:
case 1229:
case 968:
case 1501:
case 1149:
case 1047:
case 1617:
case 4040:
case 3399:
case 1487:
case 1360:
case 2384:
case 3142:
case 603:
case 243:
case 2321:
case 2939:
case 2135:
case 1392:
case 3666:
case 3359:
case 3691:
case 1581:
case 1375:
case 3850:
case 2247:
case 3990:
case 1119:
case 3051:
case 3787:
case 1165:
case 2768:
case 58:
case 2382:
case 4010:
case 908:
case 692:
case 1923:
case 3473:
case 1354:
case 1522:
case 3281:
case 944:
case 3862:
case 801:
case 2127:
case 2029:
case 706:
case 2591:
case 3122:
case 2871:
case 3908:
case 3387:
case 1499:
case 3214:
case 2368:
case 3242:
case 3565:
case 3136:
case 1627:
case 2704:
case 1265:
case 1338:
case 2489:
case 694:
case 1943:
case 2665:
case 2147:
case 34:
case 2619:
case 298:
case 862:
case 942:
case 3799:
case 1760:
case 65:
case 3549:
case 4006:
case 1270:
case 713:
case 1843:
case 2670:
case 1373:
case 919:
case 1752:
case 2019:
case 1794:
case 2649:
case 17:
case 535:
case 2971:
case 1249:
case 1913:
case 691:
case 195:
case 3475:
case 3570:
case 317:
case 2702:
case 189:
case 2586:
case 3503:
case 906:
case 1653:
case 2350:
case 3902:
case 3296:
case 3128:
case 573:
case 3771:
case 436:
case 3006:
case 221:
case 1326:
case 2443:
case 1185:
case 3930:
case 3821:
case 417:
case 1577:
case 1746:
case 3631:
case 83:
case 1561:
case 857:
case 609:
case 3804:
case 1548:
case 3984:
case 2413:
case 101:
case 378:
case 1471:
case 628:
case 1556:
case 3339:
case 2683:
case 3606:
case 2520:
case 1758:
case 2959:
case 3884:
case 2425:
case 245:
case 966:
case 1518:
case 2293:
case 507:
case 2390:
case 1693:
case 669:
case 3583:
case 2437:
case 1909:
case 2708:
case 140:
case 1889:
case 1716:
case 411:
case 1601:
case 2144:
case 173:
case 496:
case 3497:
case 2201:
case 3330:
case 1926:
case 2112:
case 2091:
case 756:
case 3302:
case 851:
case 504:
case 561:
case 1624:
case 548:
case 2890:
case 1834:
case 2224:
case 958:
case 2651:
case 2399:
case 3217:
case 3384:
case 1468:
case 3711:
case 1757:
case 4005:
case 1900:
case 89:
case 71:
case 167:
case 2666:
case 1578:
case 2359:
case 854:
case 2691:
case 2222:
case 879:
case 1800:
case 2964:
case 3939:
case 88:
case 1547:
case 2114:
case 107:
case 3566:
case 486:
case 1636:
case 2281:
case 3278:
case 2862:
case 1826:
case 3127:
case 2236:
case 1681:
case 3063:
case 2850:
case 950:
case 540:
case 2051:
case 2990:
case 3382:
case 1934:
case 2968:
case 2432:
case 3987:
case 3085:
case 1715:
case 2118:
case 3807:
case 139:
case 1106:
case 1028:
case 2941:
case 2400:
case 1574:
case 672:
case 1723:
case 1343:
case 3764:
case 1938:
case 3193:
case 4063:
case 2156:
case 1873:
case 687:
case 1120:
case 2079:
case 230:
case 1572:
case 697:
case 1973:
case 3423:
case 1628:
case 2434:
case 3415:
case 1490:
case 3685:
case 2148:
case 396:
case 57:
case 135:
case 1325:
case 1186:
case 3005:
case 3750:
case 1131:
case 3295:
case 1210:
case 589:
case 1464:
case 2371:
case 2585:
case 2610:
case 1313:
case 947:
case 2006:
case 1713:
case 321:
case 19:
case 557:
case 1994:
case 1648:
case 2767:
case 3443:
case 3788:
case 1018:
case 750:
case 3586:
case 2503:
case 1696:
case 2261:
case 2902:
case 3531:
case 1725:
case 175:
case 2128:
case 2277:
case 1056:
case 1345:
case 4019:
case 1960:
case 1875:
case 2984:
case 3999:
case 1408:
case 2821:
case 1952:
case 3603:
case 1231:
case 655:
case 873:
case 2631:
case 2416:
case 3172:
case 91:
case 1061:
case 312:
case 2904:
case 3959:
case 3425:
case 345:
case 1179:
case 4070:
case 278:
case 1852:
case 1206:
case 1743:
case 2218:
case 324:
case 1593:
case 659:
case 2606:
case 18:
case 632:
case 2031:
case 1894:
case 2830:
case 956:
case 2086:
case 3293:
case 154:
case 2802:
case 2982:
case 480:
case 1315:
case 2214:
case 1484:
case 1012:
case 2242:
case 1614:
case 1044:
case 2519:
case 852:
case 1916:
case 2122:
case 3867:
case 3070:
case 412:
case 2452:
case 3489:
case 60:
case 3147:
case 398:
case 3619:
case 3227:
case 3178:
case 1958:
case 1402:
case 2759:
case 2124:
case 1946:
case 1357:
case 2454:
case 3409:
case 1644:
case 2212:
case 1482:
case 3784:
case 2101:
case 1858:
case 1612:
case 1042:
case 421:
case 3133:
case 2475:
case 1404:
case 3702:
case 217:
case 3019:
case 3117:
case 3730:
case 2492:
case 66:
case 3649:
case 2808:
case 3971:
case 133:
case 543:
case 1884:
case 3053:
case 2077:
case 953:
case 774:
case 759:
case 1339:
case 485:
case 1606:
case 3380:
case 3467:
case 2992:
case 1218:
case 2048:
case 364:
case 2206:
case 3283:
case 301:
case 3471:
case 2852:
case 1830:
case 3716:
case 1086:
case 3889:
case 2894:
case 1031:
case 1446:
case 1620:
case 2323:
case 3105:
case 3693:
case 1583:
case 0:
case 732:
case 2656:
case 1982:
case 1802:
case 2140:
case 3518:
case 3185:
case 2648:
case 3326:
case 4035:
case 29:
case 1248:
case 1771:
case 3809:
case 2713:
case 771:
case 876:
case 1277:
case 1128:
case 3653:
case 1261:
case 1902:
case 1503:
case 2737:
case 3798:
case 2110:
case 2960:
case 3332:
case 1984:
case 3548:
case 2056:
case 2345:
case 47:
case 3093:
case 1416:
case 2892:
case 1631:
case 3203:
case 2286:
case 489:
case 3746:
case 2553:
case 2952:
case 1821:
case 3300:
case 3270:
case 934:
case 2042:
case 1244:
case 2612:
case 2858:
case 136:
case 3760:
case 1549:
case 2482:
case 2014:
case 3937:
case 2998:
case 1799:
case 389:
case 2404:
case 3459:
case 3027:
case 3925:
case 1475:
case 972:
case 3249:
case 37:
case 3512:
case 1492:
case 2151:
case 3544:
case 1988:
case 399:
case 464:
case 1519:
case 1565:
case 3825:
case 2484:
case 1460:
case 2642:
case 3499:
case 1214:
case 1908:
case 1452:
case 931:
case 2191:
case 2527:
case 838:
case 4053:
case 1888:
case 2916:
case 2535:
case 997:
case 14:
case 2846:
case 586:
case 2376:
case 3943:
case 3338:
case 2397:
case 3542:
case 3627:
case 2958:
case 1181:
case 1759:
case 3775:
case 3837:
case 1691:
case 2832:
case 3581:
case 462:
case 2024:
case 2291:
case 3407:
case 1666:
case 483:
case 3392:
case 512:
case 2547:
case 2776:
case 1114:
case 2001:
case 2980:
case 2797:
case 2800:
case 955:
case 3033:
case 4072:
case 878:
case 2681:
case 3522:
case 2309:
case 1281:
case 2411:
case 647:
case 3923:
case 207:
case 4095:
case 3647:
case 2934:
case 3119:
case 1787:
case 3017:
case 1051:
case 3915:
case 1850:
case 3394:
case 656:
case 1438:
case 1962:
case 2389:
case 273:
case 932:
case 870:
case 3823:
case 33:
case 2601:
case 521:
case 1066:
case 357:
case 3170:
case 3869:
case 3815:
case 1890:
case 1707:
case 1091:
case 2468:
case 2533:
case 1399:
case 3263:
case 493:
case 3945:
case 4074:
case 267:
case 2880:
case 3229:
case 974:
case 2441:
case 3352:
case 2900:
case 753:
case 127:
case 3773:
case 3055:
case 3346:
case 302:
case 1911:
case 3957:
case 1161:
case 90:
case 3700:
case 2838:
case 457:
case 3897:
case 1228:
case 1079:
case 3876:
case 2745:
case 3398:
case 588:
case 817:
case 1434:
case 797:
case 3528:
case 3672:
case 4078:
case 2186:
case 3103:
case 235:
case 1371:
case 4047:
case 2313:
case 1610:
case 1480:
case 2106:
case 239:
case 2715:
case 3734:
case 2769:
case 1679:
case 2723:
case 383:
case 2574:
case 1505:
case 1941:
case 84:
case 2279:
case 3655:
case 2028:
case 3857:
case 2873:
case 446:
case 1739:
case 3095:
case 1010:
case 3976:
case 3358:
case 2450:
case 3674:
case 598:
case 3072:
case 2555:
case 2120:
case 3042:
case 530:
case 3858:
case 3612:
case 3482:
case 2760:
case 3014:
case 4018:
case 3998:
case 2937:
case 2035:
case 2752:
case 188:
case 1409:
case 3946:
case 2373:
case 3357:
case 75:
case 190:
case 475:
case 3421:
case 1971:
case 333:
case 4056:
case 2913:
case 2249:
case 1065:
case 1967:
case 1649:
case 451:
case 3816:
case 3789:
case 3151:
case 1117:
case 289:
case 3404:
case 1702:
case 2129:
case 716:
case 295:
case 896:
case 3709:
case 2813:
case 4061:
case 3191:
case 3527:
case 1070:
case 3166:
case 3916:
case 4077:
case 3044:
case 299:
case 3614:
case 285:
case 3484:
case 1782:
case 1235:
case 2499:
case 814:
case 3958:
case 2627:
case 1178:
case 538:
case 2837:
case 198:
case 1721:
case 1049:
case 479:
case 2219:
case 2943:
case 2265:
case 3430:
case 2542:
case 1489:
case 1364:
case 3488:
case 1683:
case 4012:
case 2467:
case 3992:
case 3048:
case 4044:
case 3206:
case 264:
case 705:
case 201:
case 1413:
case 3852:
case 1899:
case 3096:
case 3975:
case 728:
case 3077:
case 3061:
case 1390:
case 3369:
case 3140:
case 629:
case 2518:
case 2716:
case 1003:
case 963:
case 843:
case 1708:
case 982:
case 625:
case 1531:
case 375:
case 3725:
case 1350:
case 3677:
case 3696:
case 261:
case 2185:
case 3994:
case 3648:
case 1443:
case 2326:
case 204:
case 248:
case 2809:
case 3854:
case 1083:
case 2561:
case 3892:
case 3286:
case 576:
case 2746:
case 903:
case 3553:
case 3952:
case 3408:
case 2596:
case 1603:
case 2300:
case 2798:
case 1195:
case 351:
case 527:
case 3960:
case 2548:
case 2332:
case 433:
case 1510:
case 111:
case 1415:
case 2398:
case 3490:
case 2285:
case 2732:
case 1423:
case 2055:
case 642:
case 202:
case 3628:
case 3572:
case 2897:
case 3838:
case 2876:
case 536:
case 4022:
case 890:
case 981:
case 710:
case 3313:
case 1762:
case 1388:
case 517:
case 888:
case 2528:
case 1750:
case 3131:
case 2672:
case 3186:
case 335:
case 3723:
case 880:
case 122:
case 1308:
case 3574:
case 916:
case 2316:
case 3279:
case 262:
case 4024:
case 339:
case 1790:
case 3715:
case 1085:
case 3769:
case 1540:
case 2734:
case 1579:
case 2205:
case 3450:
case 2674:
case 95:
case 3555:
case 54:
case 2857:
case 619:
case 1193:
case 2095:
case 2997:
case 3462:
case 3938:
case 3343:
case 2392:
case 1939:
case 920:
case 2738:
case 439:
case 2375:
case 2581:
case 3832:
case 578:
case 3024:
case 3622:
case 3578:
case 1304:
case 792:
case 2165:
case 2647:
case 845:
case 246:
case 606:
case 1127:
case 1591:
case 3681:
case 1278:
case 452:
case 2354:
case 3636:
case 3411:
case 2923:
case 307:
case 257:
case 2170:
case 849:
case 969:
case 2815:
case 3022:
case 3624:
case 1302:
case 2394:
case 3926:
case 1476:
case 3389:
case 1497:
case 1330:
case 2633:
case 373:
case 23:
case 623:
case 2229:
case 821:
case 3441:
case 435:
case 3036:
case 1839:
case 2352:
case 2524:
case 928:
case 3900:
case 2773:
case 3757:
case 3081:
case 3251:
case 1663:
case 3468:
case 3932:
case 777:
case 905:
case 570:
case 2501:
case 3493:
case 3588:
case 770:
case 2385:
case 1162:
case 2126:
case 2298:
case 3237:
case 2008:
case 3819:
case 3865:
case 1646:
case 3970:
case 3667:
case 1537:
case 2688:
case 171:
case 308:
case 1395:
case 2132:
case 1288:
case 344:
case 853:
case 1842:
case 2100:
case 250:
case 3225:
case 325:
case 582:
case 675:
case 1208:
case 68:
case 132:
case 1046:
case 1355:
case 1616:
case 300:
case 3379:
case 3720:
case 654:
case 1942:
case 1098:
case 1914:
case 1844:
case 2461:
case 2258:
case 3508:
case 3453:
case 2477:
case 1658:
case 927:
case 3340:
case 341:
case 3706:
case 1190:
case 368:
case 2134:
case 2765:
case 1094:
case 930:
case 2030:
case 1918:
case 3803:
case 2886:
case 2719:
case 872:
case 3983:
case 429:
case 1221:
case 2831:
case 3659:
case 74:
case 1727:
case 400:
case 1509:
case 1204:
case 2002:
case 3391:
case 1675:
case 1877:
case 3099:
case 1282:
case 2138:
case 4067:
case 3521:
case 1347:
case 2682:
case 2920:
case 3504:
case 518:
case 1654:
case 887:
case 1848:
case 2254:
case 1977:
case 2602:
case 3:
case 1202:
case 1961:
case 2004:
case 3059:
case 1111:
case 3157:
case 717:
case 3289:
case 2820:
case 16:
case 633:
case 22:
case 2599:
case 1948:
case 425:
case 736:
case 3502:
case 3903:
case 1818:
case 3883:
case 1284:
case 1317:
case 444:
case 2260:
case 3699:
case 3530:
case 313:
case 408:
case 3447:
case 2763:
case 366:
case 2068:
case 4039:
case 3985:
case 153:
case 727:
case 1717:
case 3189:
case 3257:
case 978:
case 1928:
case 3478:
case 2729:
case 667:
case 509:
case 2436:
case 565:
case 1184:
case 2879:
case 256:
case 1038:
case 2910:
case 1491:
case 1466:
case 3511:
case 415:
case 3607:
case 2641:
case 1241:
case 1778:
case 2175:
case 1597:
case 2192:
case 1268:
case 3905:
case 3007:
case 2154:
case 3109:
case 3791:
case 528:
case 3885:
case 2424:
case 1638:
case 2940:
case 3297:
case 1182:
case 2238:
case 1828:
case 970:
case 3276:
case 2062:
case 1410:
case 134:
case 1026:
case 1569:
case 2383:
case 319:
case 1515:
case 2664:
case 3472:
case 2851:
case 738:
case 2966:
case 3863:
case 594:
case 2991:
case 581:
case 1824:
case 917:
case 2539:
case 4007:
case 2158:
case 3474:
case 1772:
case 591:
case 516:
case 1353:
case 635:
case 2650:
case 1250:
case 2064:
case 1795:
case 1836:
case 1901:
case 1545:
case 4087:
case 1440:
case 1626:
case 131:
case 2303:
case 1600:
case 3125:
case 3550:
case 315:
case 3455:
case 3331:
case 2200:
case 94:
case 86:
case 2232:
case 1188:
case 1822:
case 2951:
case 2090:
case 1034:
case 2891:
case 3963:
case 584:
case 2659:
case 587:
case 818:
case 1554:
case 1322:
case 798:
case 3275:
case 996:
case 780:
case 1259:
case 458:
case 3621:
case 3030:
case 3886:
case 2803:
case 3292:
case 3906:
case 2983:
case 3831:
case 1449:
case 2582:
case 1470:
case 3920:
case 3559:
case 1336:
case 1609:
case 1381:
case 1575:
case 3254:
case 2209:
case 4088:
case 1853:
case 3084:
case 572:
case 3138:
case 2521:
case 1742:
case 1993:
case 1592:
case 1465:
case 3820:
case 1419:
case 3294:
case 1689:
case 32:
case 116:
case 67:
case 3749:
case 2584:
case 1953:
case 531:
case 2:
case 689:
case 4008:
case 2157:
case 2059:
case 597:
case 2435:
case 2699:
case 1744:
case 2530:
case 1594:
case 3770:
case 2502:
case 2903:
case 1107:
case 1009:
case 3806:
case 2883:
case 3252:
case 863:
case 4004:
case 553:
case 3008:
case 882:
case 3703:
case 749:
case 2865:
case 120:
case 4021:
case 109:
case 2588:
case 1637:
case 3385:
case 3298:
case 1625:
case 3100:
case 350:
case 1761:
case 225:
case 721:
case 2949:
case 2145:
case 1271:
case 1748:
case 208:
case 1483:
case 648:
case 877:
case 2310:
case 1613:
case 4082:
case 3418:
case 1043:
case 604:
case 244:
case 169:
case 358:
case 1037:
case 4030:
case 3608:
case 1403:
case 640:
case 2720:
case 745:
case 664:
case 2340:
case 128:
case 241:
case 3783:
case 1013:
case 601:
case 2706:
case 4084:
case 2115:
case 3088:
case 892:
case 2919:
case 2243:
case 2169:
case 712:
case 2965:
case 3258:
case 3496:
case 2508:
case 105:
case 2453:
case 1025:
case 3477:
case 2472:
case 3966:
case 2863:
case 3991:
case 4011:
case 3705:
case 447:
case 881:
case 1239:
case 786:
case 2740:
case 3383:
case 2639:
case 662:
case 2320:
case 2779:
case 3428:
case 2223:
case 1833:
case 2269:
case 2215:
case 2143:
case 1947:
case 1045:
case 118:
case 2039:
case 3064:
case 1532:
case 1348:
case 1933:
case 693:
case 3662:
case 41:
case 110:
case 1377:
case 3650:
case 3146:
case 56:
case 1847:
case 85:
case 1405:
case 3232:
case 3785:
case 1015:
case 1917:
case 1167:
case 2963:
case 2113:
case 1171:
case 816:
case 2386:
case 711:
case 2125:
case 796:
case 1728:
case 891:
case 2929:
case 2455:
case 1023:
case 602:
case 2257:
case 3840:
case 1657:
case 2478:
case 3507:
case 3041:
case 126:
case 2805:
case 266:
case 4064:
case 555:
case 3194:
case 3068:
case 865:
case 2985:
case 945:
case 2751:
case 3152:
case 1207:
case 809:
case 1573:
case 2511:
case 1724:
case 3422:
case 63:
case 223:
case 3160:
case 3879:
case 356:
case 4090:
case 1076:
case 1995:
case 163:
case 805:
case 1538:
case 1342:
case 1463:
case 3668:
case 1314:
case 4062:
case 3192:
case 2417:
case 921:
case 3641:
case 4050:
case 1159:
case 1057:
case 3011:
case 192:
case 347:
case 1955:
case 1895:
case 3810:
case 3587:
case 2433:
case 2568:
case 1676:
case 3940:
case 2297:
case 3401:
case 3365:
case 2276:
case 3319:
case 2541:
case 2905:
case 559:
case 2791:
case 2766:
case 743:
case 3424:
case 2933:
case 2348:
case 3901:
case 3545:
case 2878:
case 3262:
case 3080:
case 1710:
case 2405:
case 2361:
case 3250:
case 2847:
case 3353:
case 813:
case 793:
case 3772:
case 2396:
case 52:
case 210:
case 2500:
case 1562:
case 1245:
case 2171:
case 8:
case 696:
case 1963:
case 2069:
case 3034:
case 2167:
case 2645:
case 2917:
case 142:
case 397:
case 1455:
case 2023:
case 1331:
case 2728:
case 115:
case 1550:
case 1125:
case 1929:
case 3479:
case 3600:
case 1386:
case 4073:
case 686:
case 1863:
case 3523:
case 2817:
case 1306:
case 1590:
case 387:
case 2534:
case 1740:
case 3026:
case 2318:
case 3410:
case 1223:
case 622:
case 3000:
case 372:
case 3755:
case 1779:
case 2623:
case 2978:
case 3936:
case 1564:
case 2615:
case 218:
case 2669:
case 2356:
case 2045:
case 762:
case 989:
case 1215:
case 3032:
case 1143:
case 1269:
case 3824:
case 3451:
case 1417:
case 4026:
case 2314:
case 2287:
case 2463:
case 106:
case 3121:
case 1687:
case 487:
case 2895:
case 904:
case 841:
case 961:
case 746:
case 2781:
case 948:
case 3104:
case 2955:
case 292:
case 4032:
case 3828:
case 1568:
case 2676:
case 800:
case 2697:
case 1433:
case 2722:
case 829:
case 3327:
case 1791:
case 1541:
case 1905:
case 1109:
case 1478:
case 3673:
case 3102:
case 901:
case 964:
case 1985:
case 3130:
case 1751:
case 1189:
case 2312:
case 4080:
case 166:
case 1447:
case 2344:
case 1805:
case 73:
case 3491:
case 2199:
case 263:
case 940:
case 860:
case 282:
case 2855:
case 983:
case 795:
case 2560:
case 1584:
case 3694:
case 291:
case 2689:
case 3230:
case 1059:
case 3856:
case 3111:
case 2893:
case 2324:
case 2552:
case 3996:
case 1:
case 3075:
case 2953:
case 77:
case 2594:
case 3660:
case 471:
case 3589:
case 3317:
case 1435:
case 2299:
case 237:
case 3054:
case 688:
case 4058:
case 690:
case 3818:
case 3652:
case 284:
case 1502:
case 1391:
case 2259:
case 4046:
case 2554:
case 1659:
case 30:
case 1582:
case 1983:
case 2089:
case 2187:
case 294:
case 3094:
case 3848:
case 2381:
case 1209:
case 993:
case 281:
case 2336:
case 799:
case 2609:
case 3654:
case 2470:
case 3378:
case 2592:
case 3956:
case 3861:
case 2993:
case 3896:
case 1099:
case 474:
case 1521:
case 2714:
case 3877:
case 3060:
case 459:
case 3914:
case 269:
case 2037:
case 40:
case 3543:
case 129:
case 2558:
case 1720:
case 100:
case 2403:
case 3208:
case 3046:
case 332:
case 3431:
case 1067:
case 1870:
case 1169:
case 1965:
case 2718:
case 3190:
case 624:
case 1243:
case 359:
case 1919:
case 2013:
case 2643:
case 2025:
case 645:
case 205:
case 2927:
case 3658:
case 806:
case 1508:
case 2516:
case 1123:
case 612:
case 4052:
case 1865:
case 2328:
case 1970:
case 3420:
case 1819:
case 3016:
case 823:
case 3525:
case 355:
case 2827:
case 3912:
case 1237:
case 4092:
case 3162:
case 649:
case 1493:
case 2637:
case 1588:
case 3698:
case 2546:
case 2777:
case 3753:
case 3814:
case 125:
case 748:
case 3372:
case 2835:
case 2761:
case 761:
case 265:
case 3058:
case 556:
case 4054:
case 144:
case 2267:
case 2613:
case 3395:
case 3537:
case 2483:
case 3406:
case 108:
case 1213:
case 621:
case 2748:
case 1145:
case 3895:
case 1810:
case 1175:
case 2104:
case 3159:
case 3781:
case 1011:
case 3955:
case 147:
case 2073:
case 1641:
case 2335:
case 975:
case 2451:
case 3872:
case 2268:
case 3463:
case 2747:
case 2121:
case 3974:
case 1424:
case 951:
case 1238:
case 2182:
case 3676:
case 418:
case 1587:
case 303:
case 4045:
case 2717:
case 850:
case 1194:
case 1068:
case 767:
case 326:
case 1507:
case 1041:
case 3657:
case 1611:
case 1370:
case 410:
case 377:
case 1481:
case 1273:
case 3199:
case 4069:
case 363:
case 3995:
case 2184:
case 1160:
case 1879:
case 1349:
case 382:
case 3855:
case 2733:
case 98:
case 3724:
case 508:
case 3972:
case 773:
case 3573:
case 2557:
case 979:
case 2491:
case 4023:
case 954:
case 477:
case 3405:
case 3361:
case 3847:
case 2353:
case 2924:
case 3500:
case 2772:
case 5:
case 735:
case 426:
case 2626:
case 3532:
case 2545:
case 2901:
case 1226:
case 2836:
case 2795:
case 3023:
case 3728:
case 82:
case 2600:
case 3171:
case 1891:
case 3526:
case 3069:
case 1866:
case 463:
case 3015:
case 1785:
case 4076:
case 3917:
case 638:
case 1664:
case 2515:
case 752:
case 3534:
case 287:
case 2569:
case 2026:
case 234:
case 3239:
case 2264:
case 3318:
case 1705:
case 1050:
case 1991:
case 1966:
case 2523:
case 1116:
case 2922:
case 3817:
case 2774:
case 1539:
case 3580:
case 318:
case 3669:
case 403:
case 2824:
case 3833:
case 2981:
case 1158:
case 933:
case 2936:
case 739:
case 3558:
case 754:
case 779:
case 3403:
case 2486:
case 2208:
case 2431:
case 2355:
case 2914:
case 4089:
case 494:
case 3935:
case 158:
case 3037:
case 2942:
case 2793:
case 2543:
case 3756:
case 2658:
case 1477:
case 2812:
case 3927:
case 2374:
case 1461:
case 2844:
case 1305:
case 1258:
case 3516:
case 481:
case 274:
case 1134:
case 967:
case 1088:
case 847:
case 259:
case 678:
case 1448:
case 3643:
case 328:
case 1126:
case 3827:
case 2912:
case 1298:
case 1385:
case 1571:
case 2162:
case 2513:
case 416:
case 3637:
case 2944:
case 1456:
case 491:
case 2420:
case 2646:
case 2016:
case 1703:
case 670:
case 1246:
case 566:
case 2525:
case 255:
case 2150:
case 1132:
case 3043:
case 45:
case 2395:
case 3598:
case 3483:
case 775:
case 3748:
case 3777:
case 79:
case 2814:
case 523:
case 2372:
case 81:
case 437:
case 150:
case 1100:
case 3625:
case 4009:
case 2058:
case 939:
case 2856:
case 1173:
case 617:
case 2202:
case 2961:
case 733:
case 1602:
case 2977:
case 3953:
case 1630:
case 3689:
case 391:
case 2230:
case 3465:
case 26:
case 337:
case 1252:
case 3107:
case 2054:
case 3009:
case 384:
case 1329:
case 1684:
case 3594:
case 515:
case 1363:
case 2660:
case 2589:
case 1442:
case 2284:
case 4043:
case 1260:
case 35:
case 1082:
case 2221:
case 1831:
case 64:
case 1906:
case 1621:
case 1030:
case 469:
case 2168:
case 1765:
case 1002:
case 2675:
case 3259:
case 519:
case 3322:
case 3554:
case 1604:
case 2727:
case 1682:
case 2347:
case 2956:
case 3993:
case 2735:
case 1138:
case 3853:
case 3714:
case 2060:
case 1412:
case 3575:
case 3381:
case 1254:
case 381:
case 4025:
case 2654:
case 3470:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758841201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,];
var gg_b = "1758841201/";

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
