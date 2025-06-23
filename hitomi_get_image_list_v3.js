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
case 1754:
case 3949:
case 3504:
case 1531:
case 1431:
case 860:
case 1078:
case 2040:
case 3960:
case 155:
case 1990:
case 370:
case 1352:
case 145:
case 3533:
case 201:
case 108:
case 431:
case 3570:
case 3470:
case 812:
case 715:
case 3779:
case 3927:
case 1863:
case 3328:
case 2798:
case 2355:
case 3826:
case 4055:
case 4:
case 3932:
case 429:
case 56:
case 2703:
case 3280:
case 4027:
case 2785:
case 3222:
case 243:
case 3013:
case 972:
case 3955:
case 3808:
case 737:
case 1447:
case 1767:
case 1011:
case 2081:
case 2614:
case 1429:
case 1529:
case 1335:
case 2660:
case 672:
case 1191:
case 2107:
case 2349:
case 555:
case 545:
case 2036:
case 3889:
case 1635:
case 4060:
case 2314:
case 4014:
case 1384:
case 785:
case 122:
case 80:
case 1865:
case 3109:
case 2242:
case 2830:
case 3948:
case 1150:
case 2653:
case 593:
case 1506:
case 100:
case 295:
case 317:
case 378:
case 3054:
case 915:
case 2931:
case 3778:
case 3809:
case 937:
case 685:
case 2221:
case 3331:
case 1850:
case 365:
case 2777:
case 335:
case 875:
case 3631:
case 2266:
case 3082:
case 3274:
case 1951:
case 2348:
case 3067:
case 2947:
case 3888:
case 985:
case 3953:
case 1124:
case 0:
case 2162:
case 1259:
case 387:
case 35:
case 2705:
case 1670:
case 3200:
case 1238:
case 3144:
case 3448:
case 1655:
case 1416:
case 3548:
case 1807:
case 553:
case 1906:
case 543:
case 904:
case 2352:
case 245:
case 3935:
case 2990:
case 759:
case 1875:
case 101:
case 3099:
case 604:
case 468:
case 2078:
case 1040:
case 3984:
case 2531:
case 1036:
case 501:
case 4084:
case 3077:
case 2384:
case 3819:
case 2529:
case 1660:
case 2684:
case 475:
case 386:
case 2429:
case 2172:
case 2191:
case 666:
case 1712:
case 2782:
case 324:
case 1551:
case 1451:
case 1734:
case 936:
case 2011:
case 1081:
case 1785:
case 1928:
case 966:
case 3264:
case 3005:
case 1332:
case 39:
case 3449:
case 861:
case 3769:
case 983:
case 3904:
case 3549:
case 3460:
case 3514:
case 1146:
case 3414:
case 3560:
case 3892:
case 704:
case 195:
case 1590:
case 1490:
case 371:
case 649:
case 1799:
case 831:
case 1830:
case 1068:
case 2079:
case 1887:
case 2150:
case 1653:
case 949:
case 959:
case 3427:
case 333:
case 3432:
case 3651:
case 8:
case 829:
case 2528:
case 3085:
case 1162:
case 2259:
case 2428:
case 1705:
case 1648:
case 2670:
case 1783:
case 3616:
case 2097:
case 3555:
case 293:
case 1001:
case 1348:
case 2951:
case 913:
case 1846:
case 3192:
case 3818:
case 3781:
case 2702:
case 1929:
case 766:
case 3012:
case 2333:
case 2304:
case 595:
case 1221:
case 3736:
case 482:
case 613:
case 2117:
case 694:
case 3158:
case 1704:
case 977:
case 762:
case 3272:
case 1940:
case 3291:
case 2978:
case 1226:
case 1261:
case 835:
case 486:
case 3999:
case 1122:
case 424:
case 1613:
case 3786:
case 2857:
case 2164:
case 1770:
case 994:
case 1579:
case 710:
case 3311:
case 1137:
case 2305:
case 84:
case 49:
case 4083:
case 85:
case 3656:
case 2244:
case 3415:
case 416:
case 1497:
case 1289:
case 3567:
case 2401:
case 988:
case 2501:
case 226:
case 3747:
case 2911:
case 3052:
case 3729:
case 284:
case 3678:
case 3482:
case 338:
case 3520:
case 2399:
case 2157:
case 1936:
case 540:
case 1141:
case 368:
case 1837:
case 591:
case 4085:
case 2634:
case 2271:
case 932:
case 2292:
case 3397:
case 2732:
case 2016:
case 1367:
case 1086:
case 3224:
case 610:
case 718:
case 1100:
case 4034:
case 2603:
case 2334:
case 2979:
case 1615:
case 632:
case 1735:
case 2196:
case 105:
case 3033:
case 1382:
case 527:
case 3217:
case 2612:
case 2123:
case 1682:
case 382:
case 2749:
case 1784:
case 2714:
case 794:
case 1578:
case 2540:
case 1174:
case 2440:
case 1478:
case 2760:
case 3265:
case 662:
case 1031:
case 2536:
case 1354:
case 788:
case 2436:
case 680:
case 505:
case 558:
case 330:
case 3145:
case 1288:
case 2051:
case 2823:
case 1901:
case 312:
case 463:
case 1047:
case 3379:
case 1511:
case 1874:
case 3728:
case 2896:
case 3903:
case 3679:
case 433:
case 2755:
case 3513:
case 3250:
case 909:
case 3027:
case 3681:
case 3598:
case 2313:
case 3032:
case 4013:
case 1305:
case 1164:
case 3275:
case 1605:
case 1748:
case 2770:
case 1683:
case 1110:
case 3381:
case 3207:
case 1090:
case 2733:
case 2293:
case 609:
case 198:
case 3049:
case 2969:
case 2704:
case 3838:
case 1125:
case 2940:
case 1978:
case 2602:
case 776:
case 2936:
case 2880:
case 1157:
case 3369:
case 1699:
case 2837:
case 2208:
case 184:
case 3902:
case 3512:
case 1399:
case 331:
case 1501:
case 3751:
case 863:
case 514:
case 3138:
case 1911:
case 3534:
case 2028:
case 2289:
case 1219:
case 3:
case 1749:
case 676:
case 644:
case 2174:
case 1440:
case 465:
case 2578:
case 1714:
case 3842:
case 205:
case 435:
case 886:
case 1196:
case 2735:
case 248:
case 2382:
case 4020:
case 141:
case 2320:
case 151:
case 258:
case 711:
case 3048:
case 3301:
case 3262:
case 4067:
case 1685:
case 954:
case 944:
case 2100:
case 976:
case 1334:
case 3273:
case 1603:
case 1303:
case 1634:
case 2315:
case 4015:
case 1385:
case 487:
case 45:
case 3915:
case 2209:
case 1398:
case 1997:
case 3505:
case 3483:
case 2047:
case 1051:
case 2901:
case 2288:
case 417:
case 3246:
case 3920:
case 590:
case 2354:
case 1536:
case 3139:
case 541:
case 3577:
case 814:
case 563:
case 2953:
case 721:
case 3162:
case 1085:
case 24:
case 1555:
case 3783:
case 3648:
case 25:
case 3001:
case 3947:
case 2386:
case 1818:
case 1781:
case 533:
case 3846:
case 1034:
case 739:
case 405:
case 2631:
case 1223:
case 1012:
case 3266:
case 448:
case 2020:
case 898:
case 458:
case 2195:
case 1736:
case 1296:
case 4031:
case 2331:
case 265:
case 997:
case 1449:
case 1560:
case 1414:
case 427:
case 2629:
case 3146:
case 1514:
case 2584:
case 2435:
case 2329:
case 4029:
case 3590:
case 3862:
case 3799:
case 3239:
case 278:
case 3873:
case 171:
case 163:
case 3986:
case 3242:
case 2347:
case 2109:
case 1351:
case 3068:
case 1970:
case 3830:
case 3653:
case 974:
case 697:
case 2756:
case 1427:
case 1532:
case 2647:
case 47:
case 3349:
case 3036:
case 2193:
case 1690:
case 2889:
case 3614:
case 921:
case 1952:
case 3660:
case 890:
case 491:
case 639:
case 851:
case 2126:
case 841:
case 3649:
case 516:
case 3451:
case 1701:
case 3632:
case 124:
case 3551:
case 3081:
case 3627:
case 3294:
case 3703:
case 1264:
case 939:
case 3175:
case 1553:
case 1210:
case 3785:
case 2013:
case 2237:
case 343:
case 1005:
case 116:
case 2927:
case 803:
case 2570:
case 3416:
case 3655:
case 2470:
case 2189:
case 1119:
case 59:
case 2779:
case 319:
case 3875:
case 2241:
case 1935:
case 2533:
case 2108:
case 2404:
case 2504:
case 3069:
case 2949:
case 774:
case 1984:
case 3040:
case 2960:
case 2736:
case 3304:
case 1809:
case 578:
case 3850:
case 3117:
case 1331:
case 1631:
case 840:
case 1552:
case 135:
case 1452:
case 490:
case 451:
case 1274:
case 2012:
case 1020:
case 3165:
case 2316:
case 1386:
case 3370:
case 2171:
case 2034:
case 2781:
case 1888:
case 1015:
case 3528:
case 2085:
case 3428:
case 728:
case 15:
case 902:
case 14:
case 3713:
case 2616:
case 322:
case 403:
case 2432:
case 2532:
case 757:
case 2970:
case 4051:
case 263:
case 78:
case 3506:
case 3406:
case 587:
case 1535:
case 1435:
case 271:
case 565:
case 2769:
case 2740:
case 1778:
case 2514:
case 2460:
case 1584:
case 2871:
case 2560:
case 2892:
case 2414:
case 1222:
case 3715:
case 2210:
case 1606:
case 1955:
case 2005:
case 720:
case 628:
case 29:
case 1797:
case 2701:
case 1306:
case 3011:
case 3163:
case 3429:
case 286:
case 3684:
case 1002:
case 3172:
case 3782:
case 2225:
case 1126:
case 2844:
case 570:
case 3384:
case 61:
case 1193:
case 1889:
case 3754:
case 1108:
case 947:
case 1960:
case 3078:
case 827:
case 1914:
case 3652:
case 484:
case 3990:
case 1241:
case 2099:
case 1533:
case 2448:
case 1470:
case 1570:
case 2548:
case 36:
case 3486:
case 426:
case 1779:
case 996:
case 1893:
case 3056:
case 3863:
case 216:
case 1927:
case 3872:
case 87:
case 2728:
case 1142:
case 422:
case 303:
case 2413:
case 2250:
case 1668:
case 1583:
case 4079:
case 2379:
case 1866:
case 2934:
case 764:
case 230:
case 1982:
case 1920:
case 2912:
case 3436:
case 1139:
case 260:
case 734:
case 2004:
case 282:
case 3749:
case 3469:
case 3540:
case 706:
case 2265:
case 1790:
case 1121:
case 351:
case 3312:
case 341:
case 2697:
case 2159:
case 1048:
case 2224:
case 3603:
case 3979:
case 3727:
case 979:
case 3634:
case 3303:
case 2845:
case 843:
case 1601:
case 3732:
case 2397:
case 3292:
case 3810:
case 1369:
case 3157:
case 634:
case 268:
case 161:
case 4078:
case 2378:
case 1340:
case 2977:
case 445:
case 1902:
case 2052:
case 2678:
case 2143:
case 2420:
case 1412:
case 1894:
case 664:
case 2482:
case 792:
case 3401:
case 2858:
case 2567:
case 1751:
case 2467:
case 3501:
case 1534:
case 1434:
case 4056:
case 934:
case 3753:
case 2515:
case 1403:
case 2656:
case 2415:
case 173:
case 1055:
case 314:
case 2611:
case 1027:
case 1498:
case 1194:
case 3305:
case 3568:
case 3857:
case 3110:
case 3683:
case 3748:
case 1275:
case 3605:
case 3164:
case 529:
case 906:
case 2311:
case 4011:
case 1381:
case 2035:
case 3677:
case 561:
case 723:
case 1636:
case 398:
case 606:
case 1049:
case 2554:
case 531:
case 1014:
case 2084:
case 2731:
case 1060:
case 3125:
case 2291:
case 3354:
case 1859:
case 2139:
case 845:
case 1502:
case 1402:
case 855:
case 3752:
case 495:
case 742:
case 808:
case 2920:
case 1145:
case 2246:
case 752:
case 2967:
case 86:
case 2368:
case 3511:
case 2866:
case 3411:
case 1679:
case 2915:
case 1985:
case 2053:
case 1903:
case 2668:
case 1513:
case 83:
case 2405:
case 37:
case 512:
case 2601:
case 1070:
case 2301:
case 3968:
case 2048:
case 1224:
case 3086:
case 3367:
case 1159:
case 3615:
case 3556:
case 2273:
case 607:
case 2842:
case 305:
case 3735:
case 2230:
case 3295:
case 560:
case 2599:
case 1033:
case 358:
case 2499:
case 3682:
case 2954:
case 530:
case 3620:
case 3174:
case 3578:
case 1656:
case 942:
case 1905:
case 273:
case 2913:
case 1983:
case 952:
case 1747:
case 2751:
case 2138:
case 419:
case 2640:
case 800:
case 642:
case 652:
case 1729:
case 1052:
case 1582:
case 2512:
case 1520:
case 231:
case 2894:
case 401:
case 138:
case 3936:
case 261:
case 4069:
case 3880:
case 3837:
case 4040:
case 1554:
case 3969:
case 4036:
case 1158:
case 2336:
case 489:
case 2014:
case 538:
case 2207:
case 3302:
case 568:
case 1035:
case 350:
case 3293:
case 3733:
case 391:
case 3841:
case 3180:
case 2716:
case 3137:
case 1311:
case 4081:
case 3479:
case 3579:
case 50:
case 3006:
case 2681:
case 1611:
case 3313:
case 2498:
case 453:
case 3472:
case 1045:
case 3491:
case 1426:
case 3572:
case 3743:
case 3563:
case 3388:
case 64:
case 1493:
case 1870:
case 1461:
case 3930:
case 1741:
case 2757:
case 1561:
case 367:
case 120:
case 444:
case 476:
case 385:
case 3962:
case 2268:
case 894:
case 3831:
case 1971:
case 1350:
case 3309:
case 987:
case 1804:
case 635:
case 94:
case 2662:
case 1589:
case 1737:
case 617:
case 3000:
case 2419:
case 1624:
case 3776:
case 1170:
case 2544:
case 2710:
case 2909:
case 3186:
case 1780:
case 2373:
case 256:
case 2362:
case 3267:
case 4062:
case 3829:
case 274:
case 3074:
case 3282:
case 3946:
case 1918:
case 2988:
case 3847:
case 1508:
case 978:
case 1665:
case 4030:
case 1104:
case 1133:
case 2630:
case 1365:
case 297:
case 2021:
case 1617:
case 520:
case 2471:
case 3389:
case 2860:
case 409:
case 1884:
case 735:
case 2571:
case 2849:
case 372:
case 596:
case 862:
case 11:
case 765:
case 3975:
case 3128:
case 3517:
case 221:
case 3417:
case 2993:
case 3041:
case 3907:
case 1595:
case 74:
case 3565:
case 3745:
case 2926:
case 3465:
case 1043:
case 810:
case 1152:
case 2269:
case 2855:
case 1391:
case 147:
case 528:
case 18:
case 1135:
case 2796:
case 3693:
case 1363:
case 2518:
case 970:
case 1663:
case 3393:
case 1184:
case 2418:
case 2149:
case 2908:
case 1058:
case 1691:
case 2281:
case 1211:
case 2132:
case 3550:
case 399:
case 3037:
case 1919:
case 3106:
case 51:
case 2675:
case 2989:
case 1509:
case 1944:
case 670:
case 1076:
case 717:
case 2992:
case 786:
case 809:
case 3738:
case 2971:
case 3298:
case 202:
case 556:
case 2279:
case 462:
case 1268:
case 3475:
case 1042:
case 1346:
case 3318:
case 220:
case 3507:
case 1848:
case 1995:
case 2741:
case 3965:
case 2045:
case 811:
case 3618:
case 197:
case 2133:
case 1630:
case 1021:
case 1687:
case 2918:
case 4017:
case 2317:
case 633:
case 2665:
case 2104:
case 3851:
case 2508:
case 971:
case 3794:
case 881:
case 3692:
case 2324:
case 156:
case 4024:
case 3671:
case 1201:
case 359:
case 1419:
case 671:
case 1662:
case 349:
case 2297:
case 3392:
case 1544:
case 1909:
case 1710:
case 2780:
case 933:
case 1673:
case 3203:
case 1764:
case 1444:
case 2170:
case 1240:
case 1926:
case 418:
case 1832:
case 477:
case 3972:
case 1827:
case 2043:
case 986:
case 69:
case 3299:
case 3057:
case 2595:
case 2495:
case 1155:
case 2256:
case 3619:
case 844:
case 2835:
case 3562:
case 336:
case 169:
case 1814:
case 139:
case 1471:
case 1592:
case 1860:
case 1038:
case 3319:
case 99:
case 686:
case 3344:
case 1849:
case 2919:
case 1989:
case 916:
case 3010:
case 771:
case 1281:
case 296:
case 1375:
case 3546:
case 1418:
case 2588:
case 3025:
case 1908:
case 616:
case 2058:
case 1723:
case 2672:
case 1149:
case 1307:
case 2372:
case 247:
case 763:
case 521:
case 28:
case 4091:
case 257:
case 1236:
case 2363:
case 483:
case 1231:
case 1120:
case 3726:
case 2945:
case 2623:
case 960:
case 2396:
case 612:
case 1543:
case 3879:
case 2696:
case 3793:
case 2323:
case 3761:
case 4023:
case 1095:
case 2707:
case 768:
case 3197:
case 1115:
case 2775:
case 2103:
case 899:
case 2438:
case 2538:
case 292:
case 1167:
case 3359:
case 738:
case 630:
case 279:
case 3179:
case 3580:
case 3480:
case 1009:
case 3422:
case 362:
case 413:
case 2812:
case 1820:
case 2251:
case 1088:
case 1867:
case 1229:
case 3708:
case 3923:
case 3345:
case 107:
case 1815:
case 2803:
case 1921:
case 525:
case 3878:
case 1337:
case 4010:
case 2310:
case 1322:
case 142:
case 3376:
case 90:
case 2364:
case 2773:
case 388:
case 2183:
case 1622:
case 1680:
case 760:
case 668:
case 2442:
case 234:
case 404:
case 2542:
case 1724:
case 2177:
case 2325:
case 60:
case 3235:
case 3358:
case 3795:
case 2730:
case 938:
case 3957:
case 3072:
case 3284:
case 1026:
case 3091:
case 3063:
case 2625:
case 1102:
case 1641:
case 318:
case 1813:
case 2199:
case 377:
case 2883:
case 3343:
case 2421:
case 975:
case 2466:
case 3925:
case 3474:
case 3811:
case 2566:
case 4057:
case 3252:
case 867:
case 552:
case 3500:
case 32:
case 3156:
case 1750:
case 2019:
case 3400:
case 1089:
case 1559:
case 3964:
case 675:
case 1092:
case 1538:
case 3073:
case 579:
case 523:
case 2600:
case 1103:
case 2286:
case 1216:
case 3621:
case 4074:
case 1696:
case 3087:
case 729:
case 773:
case 3457:
case 225:
case 1323:
case 3868:
case 1945:
case 2120:
case 1112:
case 2182:
case 1623:
case 2772:
case 3321:
case 207:
case 1885:
case 3525:
case 2088:
case 1834:
case 3046:
case 2154:
case 3801:
case 2558:
case 2867:
case 467:
case 2229:
case 1198:
case 1494:
case 2820:
case 1594:
case 3342:
case 2247:
case 1251:
case 3719:
case 866:
case 123:
case 2009:
case 1959:
case 3564:
case 2576:
case 3253:
case 2476:
case 3464:
case 2445:
case 2545:
case 961:
case 1943:
case 2717:
case 1325:
case 629:
case 2093:
case 6:
case 1439:
case 1177:
case 3007:
case 931:
case 3941:
case 2061:
case 1730:
case 2622:
case 2113:
case 1773:
case 1664:
case 1105:
case 381:
case 2724:
case 134:
case 1442:
case 661:
case 1762:
case 3232:
case 3792:
case 3181:
case 164:
case 3840:
case 849:
case 9:
case 1364:
case 973:
case 2380:
case 4022:
case 3869:
case 4080:
case 1310:
case 242:
case 3227:
case 2322:
case 2750:
case 3338:
case 1019:
case 1877:
case 472:
case 2559:
case 1976:
case 564:
case 813:
case 2994:
case 3718:
case 1566:
case 1466:
case 3140:
case 3423:
case 3169:
case 2813:
case 311:
case 1421:
case 2037:
case 1283:
case 601:
case 2213:
case 2450:
case 3989:
case 1205:
case 2106:
case 452:
case 1064:
case 892:
case 2080:
case 442:
case 2759:
case 2022:
case 3132:
case 3375:
case 919:
case 104:
case 1025:
case 1766:
case 3518:
case 2202:
case 3723:
case 2361:
case 3908:
case 2326:
case 619:
case 2661:
case 3855:
case 2828:
case 3796:
case 1721:
case 2565:
case 2745:
case 2608:
case 1963:
case 1587:
case 1739:
case 2517:
case 653:
case 3993:
case 321:
case 2308:
case 1430:
case 1530:
case 2907:
case 1057:
case 1473:
case 3155:
case 1573:
case 2524:
case 1462:
case 1890:
case 1619:
case 2975:
case 4089:
case 1319:
case 3038:
case 3592:
case 2389:
case 3571:
case 272:
case 3849:
case 943:
case 183:
case 215:
case 3687:
case 3853:
case 2220:
case 3066:
case 1212:
case 3725:
case 995:
case 2074:
case 2282:
case 425:
case 2758:
case 1234:
case 834:
case 2829:
case 2267:
case 3662:
case 3419:
case 695:
case 3673:
case 1203:
case 2186:
case 1285:
case 1116:
case 3909:
case 3544:
case 1298:
case 1738:
case 2147:
case 2309:
case 4009:
case 1151:
case 2973:
case 113:
case 2962:
case 789:
case 1575:
case 3153:
case 806:
case 1475:
case 3268:
case 1318:
case 583:
case 1917:
case 3346:
case 753:
case 1507:
case 1407:
case 3757:
case 743:
case 2886:
case 1965:
case 3646:
case 2463:
case 2688:
case 1618:
case 38:
case 347:
case 1326:
case 357:
case 1661:
case 3391:
case 1693:
case 3363:
case 3135:
case 2721:
case 955:
case 3184:
case 2766:
case 1393:
case 3663:
case 2446:
case 3774:
case 63:
case 1361:
case 3058:
case 3672:
case 1202:
case 908:
case 96:
case 3211:
case 396:
case 434:
case 572:
case 1450:
case 2205:
case 3700:
case 1106:
case 464:
case 608:
case 199:
case 1550:
case 1080:
case 2064:
case 645:
case 3509:
case 3884:
case 2319:
case 4019:
case 2344:
case 172:
case 3256:
case 2473:
case 599:
case 1689:
case 3835:
case 1128:
case 1424:
case 1524:
case 2742:
case 2462:
case 1417:
case 2739:
case 2299:
case 2530:
case 3595:
case 793:
case 2057:
case 1308:
case 807:
case 2991:
case 3152:
case 2963:
case 3043:
case 3624:
case 4071:
case 2950:
case 259:
case 755:
case 3489:
case 3737:
case 3589:
case 745:
case 2285:
case 2116:
case 852:
case 3059:
case 3722:
case 1776:
case 3170:
case 585:
case 2203:
case 2234:
case 1220:
case 1131:
case 537:
case 900:
case 1074:
case 3104:
case 2023:
case 1758:
case 1395:
case 1847:
case 283:
case 1695:
case 115:
case 2965:
case 1591:
case 1472:
case 137:
case 1129:
case 2618:
case 1463:
case 1743:
case 3493:
case 693:
case 2318:
case 320:
case 167:
case 3561:
case 3741:
case 3461:
case 3870:
case 2507:
case 1609:
case 3833:
case 1973:
case 3650:
case 185:
case 1962:
case 3992:
case 2298:
case 2738:
case 1831:
case 993:
case 2151:
case 1147:
case 581:
case 1937:
case 790:
case 698:
case 2500:
case 2400:
case 914:
case 3019:
case 1338:
case 1255:
case 741:
case 3976:
case 2964:
case 1980:
case 1922:
case 751:
case 2910:
case 2709:
case 1638:
case 306:
case 294:
case 1140:
case 3746:
case 2178:
case 3466:
case 428:
case 2643:
case 2811:
case 1718:
case 2574:
case 1523:
case 2252:
case 3357:
case 1169:
case 1423:
case 3958:
case 614:
case 277:
case 4043:
case 2072:
case 2284:
case 48:
case 897:
case 457:
case 2091:
case 1260:
case 3625:
case 2063:
case 3177:
case 2856:
case 3325:
case 3730:
case 1136:
case 2795:
case 2235:
case 2358:
case 1941:
case 1007:
case 1394:
case 509:
case 288:
case 856:
case 3762:
case 3442:
case 874:
case 846:
case 1181:
case 1792:
case 3310:
case 684:
case 4076:
case 3364:
case 2345:
case 2996:
case 821:
case 714:
case 3018:
case 420:
case 2645:
case 3812:
case 3494:
case 3198:
case 3251:
case 154:
case 869:
case 176:
case 1342:
case 2179:
case 1642:
case 379:
case 641:
case 1900:
case 2050:
case 690:
case 798:
case 1253:
case 232:
case 2422:
case 2480:
case 3071:
case 3538:
case 3092:
case 4059:
case 392:
case 576:
case 1073:
case 2659:
case 280:
case 3216:
case 1248:
case 3775:
case 2233:
case 2793:
case 603:
case 1030:
case 2761:
case 1868:
case 3323:
case 1457:
case 3707:
case 3112:
case 1321:
case 3396:
case 1666:
case 2204:
case 177:
case 3813:
case 1343:
case 1788:
case 950:
case 1574:
case 2881:
case 940:
case 1178:
case 820:
case 3008:
case 1252:
case 2523:
case 2169:
case 194:
case 2638:
case 3089:
case 4038:
case 2338:
case 691:
case 2937:
case 209:
case 705:
case 1500:
case 2980:
case 1910:
case 1709:
case 3228:
case 802:
case 1964:
case 1878:
case 2840:
case 2694:
case 1376:
case 352:
case 342:
case 2869:
case 3380:
case 3622:
case 4094:
case 3206:
case 1676:
case 281:
case 3637:
case 3093:
case 518:
case 2941:
case 1358:
case 3445:
case 1658:
case 1091:
case 3026:
case 1284:
case 2249:
case 1063:
case 2900:
case 2719:
case 750:
case 1437:
case 1422:
case 132:
case 3576:
case 2564:
case 1480:
case 2168:
case 580:
case 2510:
case 1522:
case 2253:
case 791:
case 3476:
case 3820:
case 276:
case 4042:
case 3247:
case 254:
case 2525:
case 4039:
case 3088:
case 828:
case 2046:
case 2974:
case 3154:
case 2801:
case 3458:
case 1708:
case 1645:
case 3229:
case 3558:
case 3867:
case 948:
case 1897:
case 1345:
case 2639:
case 3815:
case 3182:
case 88:
case 847:
case 1726:
case 3120:
case 3772:
case 497:
case 857:
case 3543:
case 3443:
case 2666:
case 4021:
case 3674:
case 927:
case 1204:
case 2087:
case 1793:
case 2366:
case 3939:
case 1879:
case 325:
case 2457:
case 2030:
case 1441:
case 456:
case 896:
case 2248:
case 3600:
case 1270:
case 180:
case 3115:
case 2062:
case 474:
case 3300:
case 562:
case 97:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750712402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,];
var gg_b = "1750712402/";

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
