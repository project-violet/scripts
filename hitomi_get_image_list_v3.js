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
case 1140:
case 295:
case 2114:
case 3468:
case 2292:
case 2926:
case 2635:
case 2561:
case 2051:
case 774:
case 2562:
case 1960:
case 374:
case 1531:
case 2503:
case 1993:
case 3721:
case 2734:
case 2185:
case 1764:
case 3722:
case 3279:
case 472:
case 3101:
case 2753:
case 2864:
case 2200:
case 2046:
case 853:
case 1877:
case 3943:
case 1088:
case 2628:
case 1587:
case 2777:
case 3178:
case 138:
case 3620:
case 2493:
case 341:
case 2170:
case 2917:
case 160:
case 695:
case 758:
case 2198:
case 145:
case 2569:
case 1095:
case 1539:
case 4038:
case 1076:
case 3331:
case 2324:
case 3284:
case 3332:
case 981:
case 1430:
case 1255:
case 3036:
case 1371:
case 1794:
case 1901:
case 1902:
case 2500:
case 3470:
case 2894:
case 3020:
case 2954:
case 2409:
case 1308:
case 100:
case 1143:
case 3810:
case 286:
case 632:
case 183:
case 3940:
case 176:
case 890:
case 273:
case 1384:
case 1232:
case 4040:
case 1231:
case 2750:
case 28:
case 2659:
case 1695:
case 2592:
case 2591:
case 17:
case 1138:
case 596:
case 3767:
case 2341:
case 2342:
case 2173:
case 2651:
case 1065:
case 2652:
case 2599:
case 2948:
case 2269:
case 1986:
case 3623:
case 1604:
case 2356:
case 68:
case 3572:
case 3881:
case 488:
case 1705:
case 1454:
case 1379:
case 2818:
case 1125:
case 919:
case 2478:
case 686:
case 3007:
case 2646:
case 1688:
case 415:
case 3152:
case 2703:
case 1731:
case 2250:
case 2435:
case 2761:
case 1465:
case 811:
case 12:
case 1862:
case 1803:
case 3347:
case 2090:
case 3657:
case 223:
case 1112:
case 2078:
case 3244:
case 1111:
case 2577:
case 237:
case 4066:
case 3146:
case 2428:
case 873:
case 2002:
case 1329:
case 2553:
case 88:
case 2001:
case 452:
case 1564:
case 1054:
case 1196:
case 378:
case 1928:
case 1119:
case 580:
case 1205:
case 3436:
case 1218:
case 3529:
case 3070:
case 1321:
case 361:
case 3420:
case 761:
case 2660:
case 134:
case 1630:
case 1869:
case 1739:
case 3159:
case 1547:
case 503:
case 3258:
case 832:
case 637:
case 3597:
case 165:
case 2145:
case 3098:
case 4075:
case 2988:
case 895:
case 1946:
case 3912:
case 491:
case 3911:
case 3856:
case 1264:
case 2381:
case 3222:
case 3779:
case 422:
case 2093:
case 301:
case 2609:
case 4012:
case 2382:
case 3221:
case 3996:
case 2253:
case 2700:
case 3305:
case 3975:
case 1495:
case 1026:
case 15:
case 2791:
case 2904:
case 1891:
case 2550:
case 324:
case 1030:
case 3445:
case 105:
case 907:
case 129:
case 3841:
case 2716:
case 3842:
case 1358:
case 1899:
case 73:
case 1404:
case 2690:
case 3784:
case 2451:
case 2799:
case 1755:
case 3135:
case 336:
case 3849:
case 3068:
case 3057:
case 2446:
case 3919:
case 2107:
case 1827:
case 1344:
case 2678:
case 2310:
case 4080:
case 3685:
case 1505:
case 4019:
case 477:
case 1633:
case 2963:
case 3066:
case 3556:
case 3789:
case 2371:
case 1954:
case 111:
case 1894:
case 3710:
case 859:
case 752:
case 2308:
case 352:
case 826:
case 3844:
case 3619:
case 186:
case 1349:
case 3541:
case 173:
case 715:
case 276:
case 454:
case 18:
case 3706:
case 1262:
case 3224:
case 54:
case 2384:
case 4014:
case 2676:
case 27:
case 1591:
case 1486:
case 1157:
case 593:
case 3737:
case 3316:
case 2138:
case 3440:
case 3858:
case 1341:
case 840:
case 2555:
case 1652:
case 1651:
case 1035:
case 3392:
case 2604:
case 2239:
case 3083:
case 439:
case 1269:
case 3391:
case 2718:
case 2705:
case 834:
case 2433:
case 3675:
case 1463:
case 3782:
case 478:
case 1805:
case 2909:
case 2454:
case 3781:
case 1478:
case 461:
case 3612:
case 132:
case 683:
case 520:
case 4070:
case 865:
case 676:
case 660:
case 189:
case 3241:
case 997:
case 3242:
case 195:
case 1216:
case 3438:
case 3713:
case 2004:
case 784:
case 1291:
case 384:
case 1926:
case 3369:
case 1292:
case 3524:
case 2531:
case 2960:
case 2665:
case 1561:
case 1051:
case 1635:
case 2853:
case 3154:
case 1185:
case 3096:
case 3425:
case 1734:
case 391:
case 1753:
case 944:
case 3821:
case 3075:
case 2417:
case 2587:
case 2088:
case 2877:
case 645:
case 3012:
case 722:
case 1493:
case 1917:
case 777:
case 1227:
case 3443:
case 550:
case 3957:
case 3249:
case 638:
case 3897:
case 2095:
case 2747:
case 3148:
case 2430:
case 2255:
case 1299:
case 3303:
case 3973:
case 1460:
case 1847:
case 2076:
case 3043:
case 3419:
case 1988:
case 879:
case 1277:
case 3480:
case 1234:
case 1609:
case 2264:
case 2800:
case 2594:
case 3756:
case 3879:
case 1904:
case 1791:
case 25:
case 2026:
case 2476:
case 1060:
case 205:
case 153:
case 1337:
case 2404:
case 3884:
case 1452:
case 3350:
case 1976:
case 1799:
case 333:
case 3945:
case 860:
case 3537:
case 525:
case 992:
case 1446:
case 327:
case 629:
case 1678:
case 2344:
case 3411:
case 3872:
case 65:
case 3871:
case 3582:
case 458:
case 1663:
case 1602:
case 2465:
case 1435:
case 3206:
case 3724:
case 2731:
case 2861:
case 1090:
case 3483:
case 1832:
case 1123:
case 3513:
case 259:
case 640:
case 569:
case 1078:
case 3210:
case 935:
case 190:
case 665:
case 3289:
case 2033:
case 964:
case 531:
case 1534:
case 87:
case 3920:
case 3625:
case 659:
case 3907:
case 3377:
case 512:
case 788:
case 388:
case 357:
case 2928:
case 4007:
case 62:
case 2322:
case 1009:
case 1693:
case 3281:
case 2321:
case 428:
case 2630:
case 1965:
case 50:
case 3195:
case 2048:
case 3274:
case 951:
case 2739:
case 555:
case 3237:
case 1339:
case 1023:
case 3532:
case 3665:
case 3531:
case 174:
case 2242:
case 810:
case 1468:
case 379:
case 872:
case 3877:
case 1178:
case 2012:
case 1607:
case 1721:
case 2425:
case 2096:
case 1279:
case 1722:
case 3853:
case 3417:
case 1101:
case 1102:
case 2822:
case 1163:
case 2256:
case 2019:
case 760:
case 1387:
case 502:
case 833:
case 999:
case 1208:
case 1215:
case 1620:
case 1925:
case 2080:
case 1636:
case 1729:
case 1271:
case 2666:
case 3747:
case 3095:
case 1186:
case 691:
case 3076:
case 2973:
case 51:
case 1332:
case 2361:
case 1045:
case 1797:
case 745:
case 345:
case 2897:
case 2968:
case 622:
case 2957:
case 2249:
case 252:
case 3978:
case 2710:
case 2619:
case 3143:
case 700:
case 4063:
case 2789:
case 3371:
case 3794:
case 3902:
case 1193:
case 1889:
case 4078:
case 1579:
case 2680:
case 1355:
case 2130:
case 3384:
case 1160:
case 3695:
case 3990:
case 37:
case 3850:
case 783:
case 215:
case 2542:
case 1645:
case 376:
case 2541:
case 3986:
case 2392:
case 2083:
case 2316:
case 1758:
case 652:
case 857:
case 1414:
case 888:
case 2858:
case 2867:
case 128:
case 1508:
case 1515:
case 1881:
case 3433:
case 1882:
case 3718:
case 3705:
case 99:
case 2781:
case 3909:
case 1485:
case 2782:
case 1668:
case 852:
case 759:
case 1014:
case 688:
case 2040:
case 726:
case 326:
case 48:
case 1152:
case 2724:
case 3731:
case 154:
case 2206:
case 3465:
case 3862:
case 1347:
case 72:
case 2104:
case 3861:
case 1966:
case 3294:
case 1522:
case 3564:
case 3112:
case 2210:
case 1244:
case 1407:
case 3111:
case 2188:
case 3787:
case 1436:
case 3205:
case 1070:
case 2466:
case 3322:
case 1420:
case 567:
case 178:
case 3928:
case 257:
case 340:
case 288:
case 903:
case 2643:
case 1258:
case 980:
case 4035:
case 365:
case 765:
case 1098:
case 334:
case 3935:
case 734:
case 3626:
case 1983:
case 3739:
case 3048:
case 2274:
case 1856:
case 1222:
case 1221:
case 101:
case 1996:
case 1318:
case 3594:
case 2419:
case 182:
case 507:
case 1544:
case 1445:
case 627:
case 756:
case 822:
case 918:
case 1842:
case 75:
case 3026:
case 2923:
case 35:
case 3648:
case 2506:
case 3952:
case 3476:
case 124:
case 489:
case 3951:
case 3892:
case 136:
case 2640:
case 233:
case 2945:
case 672:
case 1057:
case 2749:
case 2537:
case 5:
case 3183:
case 2884:
case 3247:
case 3404:
case 1784:
case 2350:
case 1073:
case 1685:
case 1980:
case 2581:
case 1771:
case 2475:
case 2815:
case 1919:
case 3488:
case 2411:
case 3344:
case 3827:
case 2412:
case 4054:
case 2744:
case 4033:
case 2810:
case 1844:
case 1327:
case 508:
case 2470:
case 1066:
case 3500:
case 854:
case 3409:
case 1680:
case 2579:
case 2020:
case 711:
case 311:
case 38:
case 3750:
case 1224:
case 1399:
case 1130:
case 1126:
case 3486:
case 3592:
case 3659:
case 3516:
case 3349:
case 386:
case 42:
case 373:
case 773:
case 917:
case 2645:
case 3599:
case 3651:
case 1083:
case 861:
case 1391:
case 1774:
case 878:
case 3157:
case 2758:
case 3168:
case 1549:
case 2767:
case 1316:
case 1867:
case 920:
case 1998:
case 2837:
case 3341:
case 2414:
case 732:
case 2007:
case 1612:
case 332:
case 2508:
case 993:
case 3646:
case 2571:
case 3401:
case 2882:
case 3402:
case 3463:
case 1675:
case 3818:
case 3805:
case 2485:
case 1696:
case 1683:
case 1369:
case 2190:
case 274:
case 3503:
case 2473:
case 456:
case 3051:
case 3635:
case 2813:
case 389:
case 789:
case 4030:
case 1241:
case 795:
case 3216:
case 1438:
case 45:
case 2457:
case 4026:
case 2943:
case 597:
case 122:
case 3777:
case 2178:
case 2722:
case 3185:
case 1096:
case 2721:
case 1256:
case 2163:
case 1822:
case 3753:
case 1133:
case 1821:
case 1075:
case 177:
case 1443:
case 3227:
case 568:
case 1019:
case 836:
case 2215:
case 2208:
case 258:
case 241:
case 2272:
case 674:
case 2186:
case 3569:
case 2332:
case 3299:
case 3847:
case 3460:
case 3324:
case 950:
case 2797:
case 1249:
case 1957:
case 513:
case 2938:
case 1897:
case 2996:
case 1480:
case 3609:
case 96:
case 3381:
case 63:
case 2856:
case 874:
case 2305:
case 2318:
case 3136:
case 1756:
case 3253:
case 1043:
case 110:
case 282:
case 1419:
case 2544:
case 2912:
case 1510:
case 1742:
case 753:
case 1741:
case 2842:
case 3716:
case 3337:
case 3904:
case 3459:
case 1923:
case 1506:
case 3550:
case 2297:
case 133:
case 1945:
case 1640:
case 236:
case 2849:
case 1038:
case 887:
case 1749:
case 2057:
case 2068:
case 23:
case 601:
case 2073:
case 3452:
case 2135:
case 3451:
case 2784:
case 1872:
case 1496:
case 2980:
case 1025:
case 2685:
case 624:
case 1475:
case 3602:
case 2394:
case 2771:
case 3389:
case 592:
case 2919:
case 127:
case 1808:
case 3727:
case 925:
case 3310:
case 2715:
case 2708:
case 1411:
case 1638:
case 2668:
case 723:
case 2151:
case 1206:
case 3435:
case 254:
case 3703:
case 483:
case 564:
case 2824:
case 1104:
case 2347:
case 3001:
case 1289:
case 1936:
case 3553:
case 3002:
case 2522:
case 3577:
case 3887:
case 639:
case 790:
case 1188:
case 1466:
case 2070:
case 2529:
case 2420:
case 2364:
case 261:
case 3009:
case 1281:
case 90:
case 1334:
case 1282:
case 1907:
case 955:
case 906:
case 2098:
case 3145:
case 970:
case 3839:
case 1274:
case 2159:
case 3086:
case 3608:
case 3910:
case 2778:
case 643:
case 2627:
case 1087:
case 803:
case 120:
case 2763:
case 2702:
case 3153:
case 3671:
case 3989:
case 3672:
case 467:
case 2994:
case 1405:
case 1418:
case 3236:
case 4010:
case 2833:
case 1801:
case 2121:
case 214:
case 1950:
case 3906:
case 1655:
case 2552:
case 2003:
case 3684:
case 2061:
case 2551:
case 3467:
case 3714:
case 193:
case 296:
case 1886:
case 1265:
case 1039:
case 2786:
case 14:
case 2559:
case 1595:
case 1748:
case 3974:
case 573:
case 4074:
case 3937:
case 586:
case 3207:
case 2311:
case 4081:
case 308:
case 2312:
case 708:
case 117:
case 915:
case 3388:
case 2375:
case 2600:
case 1809:
case 2129:
case 511:
case 614:
case 498:
case 3981:
case 2091:
case 1639:
case 1860:
case 1447:
case 2669:
case 2092:
case 1106:
case 2760:
case 2252:
case 2251:
case 3365:
case 1730:
case 313:
case 4:
case 299:
case 3913:
case 285:
case 1288:
case 2246:
case 1110:
case 3843:
case 1977:
case 3079:
case 771:
case 1934:
case 2793:
case 2000:
case 397:
case 797:
case 730:
case 3008:
case 2477:
case 3507:
case 699:
case 1182:
case 2434:
case 1320:
case 3422:
case 1181:
case 984:
case 442:
case 3071:
case 407:
case 2366:
case 991:
case 1174:
case 2947:
case 2662:
case 1565:
case 2603:
case 3084:
case 2535:
case 1632:
case 1276:
case 344:
case 3838:
case 595:
case 1137:
case 721:
case 3875:
case 321:
case 3585:
case 402:
case 1533:
case 2501:
case 3896:
case 1618:
case 1370:
case 3956:
case 2502:
case 2563:
case 2053:
case 3472:
case 4056:
case 3811:
case 663:
case 2746:
case 3812:
case 481:
case 899:
case 792:
case 885:
case 3942:
case 125:
case 3514:
case 3941:
case 1398:
case 41:
case 109:
case 618:
case 2590:
case 1851:
case 1704:
case 1852:
case 3723:
case 3348:
case 1991:
case 2751:
case 3484:
case 4041:
case 4042:
case 2260:
case 704:
case 2804:
case 3598:
case 972:
case 3257:
case 553:
case 3169:
case 2491:
case 1047:
case 2586:
case 2492:
case 3273:
case 1776:
case 2895:
case 2650:
case 1999:
case 1385:
case 2509:
case 3354:
case 3029:
case 1217:
case 3333:
case 1927:
case 218:
case 3644:
case 3116:
case 1142:
case 3697:
case 155:
case 957:
case 203:
case 1141:
case 1530:
case 2932:
case 2050:
case 1962:
case 1903:
case 1373:
case 1439:
case 419:
case 1647:
case 2469:
case 2201:
case 1233:
case 814:
case 3317:
case 1156:
case 2202:
case 351:
case 2325:
case 751:
case 3866:
case 3285:
case 3720:
case 112:
case 3044:
case 748:
case 170:
case 896:
case 2172:
case 3270:
case 1517:
case 2653:
case 3621:
case 2677:
case 2108:
case 603:
case 2343:
case 3058:
case 3568:
case 1149:
case 523:
case 680:
case 3557:
case 735:
case 2403:
case 2735:
case 3573:
case 2461:
case 1432:
case 3883:
case 1835:
case 3326:
case 1969:
case 1248:
case 1383:
case 1092:
case 1669:
case 2860:
case 2447:
case 1091:
case 2204:
case 1252:
case 794:
case 394:
case 1826:
case 716:
case 3042:
case 404:
case 3041:
case 185:
case 545:
case 1246:
case 250:
case 825:
case 809:
case 2977:
case 560:
case 2307:
case 302:
case 3211:
case 649:
case 4021:
case 3212:
case 2110:
case 1793:
case 3921:
case 3296:
case 1964:
case 492:
case 3275:
case 2189:
case 3194:
case 2953:
case 3219:
case 2687:
case 675:
case 2464:
case 3725:
case 3280:
case 2182:
case 3929:
case 974:
case 2717:
case 2174:
case 1661:
case 2632:
case 2631:
case 2565:
case 2055:
case 3997:
case 3857:
case 579:
case 3868:
case 3738:
case 3944:
case 3511:
case 451:
case 220:
case 1546:
case 2087:
case 1627:
case 2588:
case 1319:
case 855:
case 2405:
case 2733:
case 3575:
case 3266:
case 1702:
case 3885:
case 1763:
case 3482:
case 1121:
case 2801:
case 2863:
case 3481:
case 1122:
case 2754:
case 1551:
case 1003:
case 3024:
case 1699:
case 1552:
case 2950:
case 1790:
case 2504:
case 3359:
case 3474:
case 319:
case 3814:
case 2113:
case 928:
case 870:
case 293:
case 2345:
case 1235:
case 1450:
case 3352:
case 1848:
case 57:
case 3351:
case 2886:
case 3147:
case 1069:
case 4058:
case 1786:
case 3898:
case 3967:
case 3958:
case 143:
case 464:
case 246:
case 3641:
case 583:
case 869:
case 762:
case 500:
case 362:
case 1311:
case 693:
case 1228:
case 3346:
case 2809:
case 1129:
case 3656:
case 1600:
case 1918:
case 2368:
case 2141:
case 820:
case 3240:
case 206:
case 2142:
case 2373:
case 2903:
case 2962:
case 1560:
case 1932:
case 2530:
case 1469:
case 961:
case 534:
case 2439:
case 1290:
case 3820:
case 2156:
case 2233:
case 3089:
case 1201:
case 2254:
case 1325:
case 1593:
case 3836:
case 939:
case 3010:
case 540:
case 180:
case 669:
case 1987:
case 893:
case 1653:
case 2517:
case 1171:
case 1172:
case 84:
case 3393:
case 2828:
case 1108:
case 1115:
case 1677:
case 606:
case 1343:
case 846:
case 2487:
case 3613:
case 612:
case 2149:
case 3037:
case 526:
case 3538:
case 670:
case 817:
case 52:
case 1184:
case 1461:
case 1735:
case 1462:
case 1403:
case 3424:
case 3360:
case 3783:
case 1865:
case 2248:
case 2554:
case 468:
case 3979:
case 93:
case 1293:
case 3681:
case 1563:
case 1501:
case 2533:
case 3775:
case 2788:
case 1427:
case 471:
case 1888:
case 1077:
case 1578:
case 4079:
case 2846:
case 225:
case 3013:
case 2916:
case 3449:
case 2226:
case 2991:
case 2852:
case 2704:
case 3674:
case 1590:
case 2992:
case 3386:
case 3131:
case 1804:
case 1752:
case 3823:
case 1260:
case 3132:
case 982:
case 444:
case 3442:
case 4084:
case 2314:
case 3441:
case 1416:
case 3845:
case 3390:
case 1586:
case 1759:
case 2047:
case 1491:
case 1876:
case 2795:
case 2548:
case 2776:
case 2859:
case 3780:
case 4008:
case 2385:
case 4015:
case 2217:
case 3456:
case 3689:
case 625:
case 4072:
case 3719:
case 3610:
case 849:
case 2885:
case 1153:
case 2266:
case 3418:
case 3802:
case 1220:
case 2596:
case 2512:
case 1608:
case 1910:
case 1177:
case 2511:
case 320:
case 2437:
case 2649:
case 3113:
case 219:
case 2814:
case 662:
case 1840:
case 1458:
case 3345:
case 793:
case 4050:
case 867:
case 1906:
case 1376:
case 3031:
case 403:
case 3890:
case 2359:
case 3504:
case 898:
case 2958:
case 2967:
case 2898:
case 746:
case 346:
case 3265:
case 2406:
case 2283:
case 911:
case 1304:
case 2489:
case 3494:
case 98:
case 1770:
case 2580:
case 1679:
case 2870:
case 262:
case 108:
case 973:
case 552:
case 113:
case 1497:
case 2041:
case 775:
case 2042:
case 3639:
case 3447:
case 3204:
case 3726:
case 2335:
case 3106:
case 1365:
case 3730:
case 1520:
case 1079:
case 4077:
case 2921:
case 3934:
case 1429:
case 3953:
case 1536:
case 3893:
case 281:
case 2275:
case 8:
case 3288:
case 2743:
case 4053:
case 3110:
case 577:
case 2212:
case 4034:
case 168:
case 1843:
case 3307:
case 2280:
case 61:
case 3320:
case 3181:
case 3336:
case 1825:
case 1071:
case 694:
case 591:
case 130:
case 197:
case 3687:
case 995:
case 522:
case 989:
case 1015:
case 1008:
case 1507:
case 2857:
case 1838:
case 1757:
case 602:
case 1768:
case 749:
case 2738:
case 3295:
case 3174:
case 3565:
case 1084:
case 681:
case 3631:
case 584:
case 1773:
case 3276:
case 4000:
case 2243:
case 816:
case 3788:
case 2187:
case 192:
case 3846:
case 2712:
case 1875:
case 121:
case 81:
case 2681:
case 2309:
case 1022:
case 1585:
case 2682:
case 3064:
case 894:
case 2775:
case 3533:
case 3605:
case 4016:
case 2386:
case 3851:
case 3992:
case 3852:
case 1161:
case 3230:
case 3455:
case 2:
case 3398:
case 1514:
case 4091:
case 642:
case 533:
case 2637:
case 2449:
case 3916:
case 802:
case 309:
case 2013:
case 1169:
case 3795:
case 76:
case 0:
case 3859:
case 2984:
case 2441:
case 366:
case 766:
case 3314:
case 2238:
case 1949:
case 1257:
case 1268:
case 953:
case 207:
case 3927:
case 1819:
case 510:
case 2915:
case 2378:
case 242:
case 3385:
case 1479:
case 1354:
case 2225:
case 2302:
case 6:
case 2972:
case 4027:
case 2456:
case 3217:
case 3530:
case 2006:
case 3373:
case 1924:
case 3903:
case 30:
case 3368:
case 3357:
case 1116:
case 414:
case 3142:
case 706:
case 4003:
case 3141:
case 312:
case 819:
case 1044:
case 2010:
case 557:
case 267:
case 3094:
case 2089:
case 2820:
case 2766:
case 1720:
case 298:
case 3487:
case 2807:
case 3005:
case 3018:
case 1621:
case 2525:
case 1622:
case 331:
case 731:
case 3664:
case 2424:
case 2360:
case 2155:
case 3765:
case 1199:
case 1883:
case 1326:
case 3969:
case 3835:
case 2074:
case 2783:
case 4069:
case 862:
case 369:
case 1067:
case 1557:
case 667:
case 135:
case 937:
case 697:
case 1041:
case 2497:
case 960:
case 213:
case 785:
case 2913:
case 799:
case 892:
case 3016:
case 3092:
case 3830:
case 821:
case 3091:
case 2365:
case 425:
case 3826:
case 194:
case 1335:
case 271:
case 804:
case 2536:
case 3000:
case 541:
case 1743:
case 945:
case 587:
case 2843:
case 268:
case 1211:
case 1212:
case 1725:
case 3817:
case 3366:
case 1105:
case 1118:
case 3027:
case 3528:
case 979:
case 3477:
case 2008:
case 2245:
case 2838:
case 1997:
case 46:
case 1738:
case 1413:
case 3167:
case 1049:
case 1873:
case 3947:
case 244:
case 3099:
case 2084:
case 466:
case 2672:
case 3701:
case 470:
case 3854:
case 2671:
case 2153:
case 3702:
case 3763:
case 1596:
case 1482:
case 3380:
case 2220:
case 3122:
case 1481:
case 1511:
case 1944:
case 3778:
case 2910:
case 2608:
case 1512:
case 3627:
case 3319:
case 2467:
case 608:
case 2714:
case 3551:
case 3061:
case 3003:
case 714:
case 1024:
case 2376:
case 314:
case 455:
case 2906:
case 3790:
case 2395:
case 39:
case 1474:
case 851:
case 79:
case 1898:
case 2937:
case 1958:
case 743:
case 2545:
case 1406:
case 3235:
case 3450:
case 3848:
case 1352:
case 3786:
case 3129:
case 1489:
case 3918:
case 3905:
case 1656:
case 2981:
case 2679:
case 1410:
case 208:
case 3312:
case 2207:
case 4005:
case 2388:
case 976:
case 1346:
case 3560:
case 3050:
case 1006:
case 493:
case 3932:
case 3469:
case 2191:
case 3290:
case 3338:
case 703:
case 1240:
case 4031:
case 2044:
case 780:
case 380:
case 3987:
case 1543:
case 635:
case 578:
case 934:
case 2100:
case 1820:
case 561:
case 2736:
case 3201:
case 2629:
case 2285:
case 2866:
case 1836:
case 3325:
case 2707:
case 3108:
case 3677:
case 198:
case 3343:
case 3728:
case 926:
case 3171:
case 417:
case 3172:
case 1082:
case 2622:
case 3634:
case 3209:
case 2883:
case 2330:
case 1155:
case 3462:
case 3403:
case 1424:
case 3286:
case 554:
case 3865:
case 2067:
case 1613:
case 2557:
case 2568:
case 1037:
case 1538:
case 235:
case 2812:
case 3746:
case 2811:
case 3077:
case 2408:
case 1711:
case 292:
case 1682:
case 2585:
case 2022:
case 1681:
case 221:
case 1796:
case 2875:
case 2956:
case 1775:
case 2896:
case 3590:
case 1386:
case 475:
case 3260:
case 3804:
case 1:
case 3752:
case 1823:
case 2162:
case 2161:
case 2484:
case 1132:
case 2941:
case 2514:
case 1013:
case 536:
case 868:
case 449:
case 3586:
case 621:
case 3491:
case 3759:
case 2169:
case 3955:
case 763:
case 3340:
case 363:
case 2745:
case 830:
case 4055:
case 1441:
case 692:
case 905:
case 956:
case 107:
case 1915:
case 2644:
case 582:
case 929:
case 2819:
case 1225:
case 1780:
case 1971:
case 2880:
case 1456:
case 1363:
case 1972:
case 1689:
case 2570:
case 2029:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754038802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,];
var gg_b = "1754038802/";

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
