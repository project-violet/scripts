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
case 1060:
case 1411:
case 2423:
case 3215:
case 2975:
case 2031:
case 1643:
case 955:
case 2078:
case 2353:
case 3682:
case 890:
case 2968:
case 1970:
case 2818:
case 47:
case 3864:
case 3029:
case 3467:
case 3902:
case 606:
case 3116:
case 2274:
case 3393:
case 3588:
case 3914:
case 4005:
case 1733:
case 1856:
case 75:
case 250:
case 3554:
case 1237:
case 776:
case 1375:
case 2521:
case 193:
case 3163:
case 1198:
case 2866:
case 2549:
case 2280:
case 4011:
case 586:
case 1706:
case 3090:
case 431:
case 3276:
case 2102:
case 1604:
case 2384:
case 591:
case 418:
case 1612:
case 1821:
case 180:
case 750:
case 25:
case 3041:
case 2963:
case 1958:
case 1497:
case 1363:
case 3175:
case 3583:
case 733:
case 1055:
case 2400:
case 169:
case 322:
case 1405:
case 1984:
case 1186:
case 3927:
case 1193:
case 1542:
case 1738:
case 1788:
case 888:
case 2548:
case 2346:
case 2504:
case 355:
case 2125:
case 2512:
case 1136:
case 1934:
case 2429:
case 711:
case 3713:
case 738:
case 386:
case 1120:
case 1754:
case 3217:
case 899:
case 16:
case 1656:
case 391:
case 2359:
case 3431:
case 3992:
case 1843:
case 522:
case 1377:
case 1352:
case 1959:
case 465:
case 3478:
case 4007:
case 2618:
case 1261:
case 1519:
case 1422:
case 3465:
case 2334:
case 612:
case 2642:
case 4095:
case 1946:
case 966:
case 2192:
case 1694:
case 1287:
case 2251:
case 198:
case 815:
case 4:
case 1796:
case 1783:
case 2079:
case 2543:
case 2362:
case 3571:
case 2969:
case 3336:
case 759:
case 3718:
case 189:
case 2819:
case 2490:
case 2764:
case 3028:
case 1812:
case 1804:
case 1962:
case 566:
case 3925:
case 3240:
case 2666:
case 3308:
case 3632:
case 1407:
case 3473:
case 2441:
case 2081:
case 922:
case 4022:
case 1103:
case 1199:
case 160:
case 211:
case 1619:
case 1050:
case 491:
case 2984:
case 2186:
case 2771:
case 3170:
case 486:
case 2542:
case 2738:
case 956:
case 2363:
case 3743:
case 985:
case 1400:
case 2055:
case 2894:
case 3854:
case 3095:
case 2821:
case 793:
case 2285:
case 3457:
case 3998:
case 1556:
case 1358:
case 2706:
case 2789:
case 570:
case 640:
case 1866:
case 4023:
case 2648:
case 1549:
case 1280:
case 1916:
case 1384:
case 365:
case 1114:
case 83:
case 2856:
case 585:
case 28:
case 2733:
case 293:
case 2198:
case 780:
case 2237:
case 3712:
case 275:
case 931:
case 556:
case 4000:
case 3606:
case 2368:
case 3689:
case 2953:
case 3184:
case 1968:
case 3314:
case 1842:
case 1127:
case 3638:
case 3022:
case 871:
case 3210:
case 379:
case 133:
case 2060:
case 2411:
case 3158:
case 214:
case 1078:
case 3883:
case 1031:
case 3896:
case 2643:
case 3245:
case 3920:
case 3756:
case 3833:
case 1081:
case 76:
case 356:
case 3654:
case 2103:
case 2804:
case 385:
case 1490:
case 1764:
case 3749:
case 3134:
case 2962:
case 2369:
case 3582:
case 3325:
case 3908:
case 3944:
case 1819:
case 913:
case 298:
case 1251:
case 1192:
case 2796:
case 3097:
case 1618:
case 4041:
case 816:
case 2108:
case 594:
case 3871:
case 2946:
case 2739:
case 3838:
case 318:
case 9:
case 331:
case 2959:
case 2843:
case 3683:
case 839:
case 2377:
case 3011:
case 3794:
case 798:
case 2120:
case 623:
case 2754:
case 3721:
case 565:
case 1977:
case 3999:
case 3889:
case 1548:
case 1346:
case 513:
case 1429:
case 3162:
case 1125:
case 506:
case 2066:
case 1137:
case 852:
case 3980:
case 100:
case 746:
case 132:
case 1657:
case 2174:
case 1433:
case 2681:
case 1301:
case 437:
case 1531:
case 292:
case 2227:
case 2679:
case 2901:
case 1578:
case 2560:
case 4089:
case 4006:
case 1855:
case 1711:
case 3419:
case 3115:
case 3522:
case 1565:
case 803:
case 1947:
case 124:
case 312:
case 2555:
case 1209:
case 3268:
case 3623:
case 2878:
case 1910:
case 405:
case 3779:
case 792:
case 2042:
case 440:
case 1438:
case 1550:
case 4033:
case 2728:
case 3064:
case 691:
case 686:
case 1489:
case 1315:
case 2667:
case 1185:
case 1573:
case 655:
case 10:
case 2310:
case 1056:
case 3974:
case 428:
case 3595:
case 2202:
case 1208:
case 3511:
case 1161:
case 3800:
case 3778:
case 2130:
case 622:
case 3731:
case 1244:
case 2126:
case 1391:
case 1135:
case 3951:
case 2650:
case 1722:
case 109:
case 2345:
case 1004:
case 2729:
case 3690:
case 3828:
case 1220:
case 3117:
case 1324:
case 1567:
case 2673:
case 1048:
case 1488:
case 1857:
case 2881:
case 1872:
case 2225:
case 1454:
case 3413:
case 1707:
case 808:
case 2867:
case 912:
case 1203:
case 1299:
case 3629:
case 221:
case 3252:
case 1795:
case 2572:
case 3140:
case 1581:
case 3361:
case 2741:
case 449:
case 2557:
case 1579:
case 2678:
case 3597:
case 2631:
case 1043:
case 1496:
case 1483:
case 3823:
case 1660:
case 1317:
case 3124:
case 3750:
case 3926:
case 1187:
case 2151:
case 3082:
case 20:
case 937:
case 2056:
case 146:
case 1214:
case 1202:
case 745:
case 3590:
case 3937:
case 540:
case 2049:
case 2406:
case 2489:
case 2438:
case 1915:
case 2471:
case 618:
case 2705:
case 631:
case 1865:
case 3822:
case 3611:
case 2209:
case 2293:
case 3374:
case 2286:
case 528:
case 877:
case 3083:
case 1878:
case 2910:
case 349:
case 3605:
case 3258:
case 1850:
case 224:
case 3039:
case 1227:
case 2376:
case 497:
case 2094:
case 3380:
case 3110:
case 1013:
case 200:
case 2433:
case 70:
case 685:
case 232:
case 3088:
case 1873:
case 1347:
case 2298:
case 67:
case 3985:
case 3404:
case 2137:
case 54:
case 3412:
case 3259:
case 1665:
case 549:
case 1631:
case 2043:
case 2496:
case 2579:
case 3961:
case 3500:
case 3811:
case 4032:
case 923:
case 2795:
case 3330:
case 3234:
case 1741:
case 1557:
case 3456:
case 1867:
case 3145:
case 2707:
case 3449:
case 121:
case 1790:
case 2203:
case 3528:
case 862:
case 1881:
case 2872:
case 2857:
case 523:
case 2454:
case 1940:
case 3695:
case 305:
case 2012:
case 2324:
case 412:
case 3607:
case 1432:
case 2135:
case 328:
case 1924:
case 3987:
case 1126:
case 2391:
case 1345:
case 2655:
case 3760:
case 826:
case 2161:
case 1130:
case 3301:
case 3298:
case 1628:
case 2985:
case 3137:
case 2404:
case 345:
case 1767:
case 2088:
case 2807:
case 1032:
case 698:
case 2039:
case 1115:
case 1522:
case 249:
case 2605:
case 1419:
case 3855:
case 2110:
case 2284:
case 3578:
case 2697:
case 689:
case 3705:
case 3550:
case 2147:
case 1275:
case 1337:
case 3471:
case 3797:
case 2443:
case 2096:
case 2270:
case 2374:
case 3293:
case 3209:
case 417:
case 3860:
case 1101:
case 1974:
case 1176:
case 1595:
case 2253:
case 2772:
case 30:
case 2541:
case 3573:
case 3185:
case 3406:
case 66:
case 1064:
case 2590:
case 1829:
case 2805:
case 309:
case 932:
case 1765:
case 3135:
case 900:
case 228:
case 3439:
case 2987:
case 887:
case 945:
case 1731:
case 3655:
case 1269:
case 3208:
case 3340:
case 1511:
case 3161:
case 2523:
case 1800:
case 3236:
case 240:
case 924:
case 2262:
case 2033:
case 3872:
case 4018:
case 1641:
case 74:
case 1466:
case 680:
case 2351:
case 2607:
case 3567:
case 1828:
case 1690:
case 3004:
case 50:
case 2234:
case 675:
case 545:
case 1252:
case 68:
case 3203:
case 1191:
case 2528:
case 492:
case 1629:
case 693:
case 2145:
case 3707:
case 500:
case 2006:
case 2089:
case 728:
case 614:
case 1418:
case 2935:
case 3317:
case 1750:
case 2246:
case 2755:
case 524:
case 3496:
case 3579:
case 2961:
case 848:
case 3667:
case 2829:
case 1590:
case 2064:
case 3728:
case 627:
case 3214:
case 346:
case 517:
case 2974:
case 3202:
case 2595:
case 2176:
case 1757:
case 3180:
case 3310:
case 1541:
case 4012:
case 3878:
case 4004:
case 921:
case 1270:
case 2779:
case 659:
case 1443:
case 3831:
case 212:
case 1374:
case 4048:
case 3865:
case 1147:
case 3018:
case 3042:
case 3482:
case 2275:
case 1380:
case 2600:
case 3560:
case 1110:
case 3723:
case 712:
case 392:
case 3901:
case 3679:
case 2419:
case 3850:
case 149:
case 2115:
case 1404:
case 2263:
case 4043:
case 1529:
case 2628:
case 3873:
case 611:
case 1448:
case 3174:
case 521:
case 3681:
case 1895:
case 2980:
case 3013:
case 1755:
case 1811:
case 2597:
case 1961:
case 445:
case 3631:
case 1071:
case 4021:
case 1038:
case 633:
case 1622:
case 3292:
case 2505:
case 432:
case 137:
case 1259:
case 3151:
case 2277:
case 2629:
case 1326:
case 2191:
case 2335:
case 2773:
case 1449:
case 1006:
case 14:
case 1456:
case 3741:
case 1330:
case 424:
case 2117:
case 3673:
case 3432:
case 3991:
case 2466:
case 105:
case 797:
case 3225:
case 140:
case 706:
case 1262:
case 2413:
case 1421:
case 2641:
case 2778:
case 3130:
case 1897:
case 3879:
case 2731:
case 2511:
case 4049:
case 2800:
case 1494:
case 4056:
case 3650:
case 40:
case 3345:
case 3924:
case 3126:
case 1987:
case 128:
case 2022:
case 3970:
case 2210:
case 96:
case 1682:
case 438:
case 2909:
case 2896:
case 589:
case 1215:
case 3411:
case 3060:
case 794:
case 2158:
case 3513:
case 3375:
case 3198:
case 393:
case 1163:
case 3237:
case 3856:
case 713:
case 3849:
case 560:
case 1116:
case 1902:
case 3566:
case 1393:
case 2689:
case 1386:
case 1467:
case 3953:
case 2712:
case 1029:
case 2704:
case 4079:
case 1864:
case 2:
case 3285:
case 213:
case 2472:
case 1041:
case 0:
case 2854:
case 2095:
case 56:
case 1276:
case 7:
case 2564:
case 265:
case 3612:
case 2327:
case 1090:
case 2153:
case 1832:
case 3789:
case 2888:
case 998:
case 2839:
case 960:
case 3316:
case 3518:
case 3984:
case 1201:
case 3109:
case 1168:
case 369:
case 3405:
case 122:
case 294:
case 4067:
case 1398:
case 2743:
case 1479:
case 3958:
case 3497:
case 36:
case 1533:
case 4050:
case 2392:
case 2903:
case 2999:
case 3120:
case 1713:
case 756:
case 186:
case 3136:
case 60:
case 785:
case 1664:
case 155:
case 2889:
case 580:
case 3788:
case 3144:
case 2871:
case 1882:
case 3946:
case 3739:
case 3261:
case 3519:
case 1169:
case 4073:
case 2011:
case 2794:
case 218:
case 3352:
case 1992:
case 975:
case 3843:
case 2696:
case 1399:
case 2944:
case 2146:
case 389:
case 2005:
case 2639:
case 1336:
case 2582:
case 2325:
case 896:
case 3783:
case 2097:
case 807:
case 718:
case 1000:
case 3694:
case 3287:
case 1224:
case 1152:
case 256:
case 3103:
case 4065:
case 2245:
case 2920:
case 27:
case 969:
case 575:
case 3072:
case 2936:
case 2134:
case 600:
case 1589:
case 1240:
case 1308:
case 2688:
case 4078:
case 3804:
case 1028:
case 1247:
case 194:
case 3400:
case 1743:
case 2479:
case 2583:
case 2175:
case 2398:
case 938:
case 1839:
case 222:
case 2168:
case 2927:
case 1153:
case 3384:
case 165:
case 3916:
case 1564:
case 527:
case 3114:
case 1888:
case 3280:
case 2832:
case 1007:
case 1472:
case 35:
case 3556:
case 2481:
case 113:
case 1998:
case 376:
case 3813:
case 234:
case 617:
case 1095:
case 2116:
case 2902:
case 884:
case 538:
case 2914:
case 2588:
case 1606:
case 2386:
case 498:
case 3370:
case 1:
case 1704:
case 2029:
case 266:
case 350:
case 734:
case 3521:
case 489:
case 959:
case 3078:
case 3975:
case 333:
case 179:
case 3818:
case 4072:
case 722:
case 1638:
case 2539:
case 3353:
case 1184:
case 2682:
case 1302:
case 81:
case 3127:
case 1688:
case 2506:
case 4060:
case 836:
case 3666:
case 2473:
case 2632:
case 3490:
case 2028:
case 3764:
case 2344:
case 185:
case 755:
case 2291:
case 3613:
case 156:
case 338:
case 786:
case 311:
case 791:
case 17:
case 3079:
case 1097:
case 2320:
case 475:
case 1455:
case 2000:
case 2718:
case 2450:
case 3819:
case 95:
case 1582:
case 2538:
case 976:
case 533:
case 1460:
case 2992:
case 2431:
case 131:
case 480:
case 873:
case 2882:
case 851:
case 3618:
case 3334:
case 2465:
case 55:
case 3512:
case 3125:
case 933:
case 2766:
case 576:
case 3067:
case 1806:
case 3732:
case 1889:
case 864:
case 3548:
case 1392:
case 3977:
case 469:
case 2217:
case 1903:
case 2533:
case 327:
case 1721:
case 286:
case 2713:
case 1859:
case 4085:
case 3892:
case 1943:
case 3030:
case 174:
case 2727:
case 2223:
case 860:
case 3306:
case 2668:
case 3389:
case 3415:
case 1437:
case 3602:
case 3614:
case 3338:
case 1834:
case 2017:
case 307:
case 396:
case 1798:
case 3763:
case 2877:
case 3520:
case 3281:
case 2616:
case 561:
case 1106:
case 1045:
case 2534:
case 1485:
case 2714:
case 2091:
case 3825:
case 1862:
case 2228:
case 1577:
case 3476:
case 2480:
case 3775:
case 758:
case 4037:
case 1205:
case 2559:
case 3401:
case 1658:
case 1793:
case 2348:
case 3051:
case 335:
case 1297:
case 86:
case 1171:
case 2312:
case 410:
case 199:
case 3417:
case 3964:
case 1318:
case 1342:
case 1736:
case 2725:
case 1853:
case 19:
case 1154:
case 1956:
case 2229:
case 3383:
case 869:
case 3396:
case 1563:
case 753:
case 183:
case 4087:
case 2875:
case 354:
case 730:
case 535:
case 23:
case 495:
case 1659:
case 1461:
case 907:
case 2558:
case 702:
case 996:
case 473:
case 1646:
case 2349:
case 1708:
case 3769:
case 542:
case 1139:
case 1744:
case 2584:
case 3278:
case 451:
case 1870:
case 981:
case 202:
case 875:
case 1858:
case 2001:
case 2792:
case 230:
case 168:
case 2321:
case 1183:
case 88:
case 1884:
case 3388:
case 1366:
case 3339:
case 3932:
case 2553:
case 2164:
case 2966:
case 3625:
case 436:
case 581:
case 2241:
case 942:
case 3440:
case 190:
case 1207:
case 2913:
case 3273:
case 1921:
case 507:
case 1799:
case 3777:
case 935:
case 604:
case 3808:
case 1869:
case 648:
case 91:
case 1348:
case 2709:
case 2786:
case 3447:
case 3087:
case 299:
case 2138:
case 461:
case 2297:
case 1182:
case 1304:
case 1312:
case 3844:
case 364:
case 2658:
case 2205:
case 3933:
case 2552:
case 1228:
case 3698:
case 763:
case 1480:
case 2045:
case 1534:
case 2904:
case 1616:
case 2319:
case 2189:
case 3272:
case 3753:
case 2948:
case 1714:
case 1091:
case 1474:
case 263:
case 1877:
case 3803:
case 1343:
case 2798:
case 62:
case 3382:
case 2437:
case 215:
case 3104:
case 51:
case 3112:
case 3525:
case 1017:
case 2834:
case 2670:
case 3035:
case 799:
case 2846:
case 1223:
case 811:
case 3609:
case 2569:
case 838:
case 3686:
case 4080:
case 3971:
case 3061:
case 158:
case 788:
case 1675:
case 1394:
case 2207:
case 1913:
case 153:
case 2921:
case 783:
case 3954:
case 3156:
case 657:
case 79:
case 4026:
case 3620:
case 1290:
case 2295:
case 1164:
case 2662:
case 3636:
case 833:
case 1553:
case 3445:
case 3734:
case 1816:
case 951:
case 1570:
case 3644:
case 1669:
case 850:
case 973:
case 496:
case 3608:
case 3255:
case 3332:
case 2487:
case 995:
case 2994:
case 2183:
case 2196:
case 1321:
case 130:
case 268:
case 876:
case 1015:
case 2708:
case 3809:
case 564:
case 1868:
case 3886:
case 3260:
case 1918:
case 3527:
case 2870:
case 1426:
case 768:
case 1875:
case 1430:
case 3996:
case 13:
case 1356:
case 2010:
case 2659:
case 2563:
case 1677:
case 3699:
case 29:
case 2720:
case 435:
case 790:
case 442:
case 1132:
case 1725:
case 2736:
case 1517:
case 3167:
case 726:
case 1062:
case 2891:
case 1972:
case 3397:
case 1379:
case 1498:
case 3463:
case 2774:
case 3680:
case 108:
case 3900:
case 144:
case 2372:
case 42:
case 3561:
case 2979:
case 1381:
case 3219:
case 2601:
case 262:
case 2357:
case 3851:
case 2069:
case 1647:
case 2824:
case 3535:
case 2427:
case 3092:
case 2100:
case 967:
case 372:
case 1610:
case 1059:
case 420:
case 3179:
case 3923:
case 2282:
case 1238:
case 1367:
case 654:
case 3468:
case 1046:
case 2128:
case 1591:
case 2967:
case 2402:
case 448:
case 404:
case 1785:
case 2817:
case 2545:
case 1289:
case 1206:
case 2780:
case 2052:
case 301:
case 2801:
case 1955:
case 2730:
case 3178:
case 2726:
case 572:
case 3027:
case 80:
case 3469:
case 1847:
case 3307:
case 3537:
case 2425:
case 2691:
case 2973:
case 2129:
case 1645:
case 2016:
case 1350:
case 3717:
case 501:
case 2876:
case 3941:
case 2063:
case 972:
case 681:
case 367:
case 1365:
case 3173:
case 3929:
case 2190:
case 1331:
case 3477:
case 3452:
case 607:
case 1576:
case 1378:
case 1195:
case 4008:
case 824:
case 3874:
case 1960:
case 4036:
case 2075:
case 782:
case 987:
case 3218:
case 845:
case 2068:
case 901:
case 1296:
case 2965:
case 3626:
case 832:
case 3157:
case 2206:
case 3172:
case 2540:
case 520:
case 4027:
case 725:
case 1077:
case 1402:
case 3637:
case 126:
case 1414:
case 1128:
case 2591:
case 2034:
case 2785:
case 3470:
case 2409:
case 2046:
case 1615:
case 2105:
case 92:
case 1100:
case 2059:
case 3911:
case 2271:
case 708:
case 2197:
case 1282:
case 1069:
case 684:
case 3044:
case 3484:
case 1427:
case 3328:
case 3905:
case 920:
case 244:
case 208:
case 4002:
case 3530:
case 162:
case 329:
case 1372:
case 3458:
case 1123:
case 821:
case 3020:
case 2957:
case 3212:
case 2972:
case 1981:
case 52:
case 3248:
case 3300:
case 357:
case 2517:
case 3685:
case 3036:
case 1891:
case 2737:
case 2062:
case 2787:
case 3086:
case 1068:
case 3446:
case 3093:
case 1751:
case 1547:
case 3922:
case 2296:
case 529:
case 2070:
case 619:
case 2810:
case 2501:
case 3661:
case 252:
case 2195:
case 141:
case 2378:
case 2331:
case 2403:
case 203:
case 1360:
case 3249:
case 1617:
case 3434:
case 2107:
case 32:
case 1190:
case 2288:
case 1640:
case 3995:
case 703:
case 1232:
case 3098:
case 695:
case 1876:
case 1129:
case 1973:
case 543:
case 673:
case 2254:
case 1425:
case 2350:
case 472:
case 3885:
case 177:
case 2645:
case 4092:
case 1726:
case 2084:
case 1624:
case 2847:
case 2515:
case 2373:
case 664:
case 846:
case 2761:
case 182:
case 3341:
case 957:
case 304:
case 2239:
case 1680:
case 2300:
case 2248:
case 743:
case 3957:
case 3498:
case 3972:
case 2212:
case 4075:
case 3737:
case 3062:
case 1025:
case 257:
case 3233:
case 3517:
case 3845:
case 2484:
case 1535:
case 552:
case 2905:
case 3647:
case 806:
case 2710:
case 229:
case 3111:
case 1561:
case 1219:
case 3381:
case 2458:
case 2997:
case 1900:
case 344:
case 2530:
case 3409:
case 903:
case 3524:
case 3105:
case 2243:
case 1826:
case 2470:
case 2835:
case 1830:
case 3238:
case 1923:
case 2861:
case 172:
case 4016:
case 3610:
case 729:
case 477:
case 2003:
case 2157:
case 3540:
case 3289:
case 2172:
case 952:
case 3034:
case 69:
case 757:
case 187:
case 2637:
case 3515:
case 3122:
case 2687:
case 1165:
case 688:
case 1651:
case 3084:
case 1027:
case 4077:
case 248:
case 1395:
case 3955:
case 3761:
case 2160:
case 2341:
case 3420:
case 1941:
case 1880:
case 3350:
case 2885:
case 812:
case 1213:
case 2907:
case 2462:
case 944:
case 3254:
case 220:
case 908:
case 303:
case 1874:
case 3378:
case 3195:
case 3331:
case 3403:
case 1477:
case 1791:
case 720:
case 1014:
case 3053:
case 3365:
case 2434:
case 1173:
case 1929:
case 462:
case 2256:
case 167:
case 2745:
case 22:
case 3296:
case 3283:
case 2922:
case 508:
case 544:
case 2446:
case 1724:
case 674:
case 3810:
case 2661:
case 352:
case 1630:
case 748:
case 287:
case 3545:
case 3817:
case 3967:
case 1453:
case 1637:
case 326:
case 3414:
case 1003:
case 1099:
case 577:
case 3052:
case 201:
case 2311:
case 1172:
case 2181:
case 1157:
case 3780:
case 2701:
case 2092:
case 1861:
case 272:
case 3615:
case 1747:
case 2468:
case 1551:
case 840:
case 941:
case 63:
case 1835:
case 1243:
case 582:
case 3372:
case 3601:
case 2219:
case 1458:
case 3979:
case 362:
case 129:
case 1905:
case 1044:
case 630:
case 1008:
case 3069:
case 1887:
case 3824:
case 2025:
case 653:
case 671:
case 982:
case 2305:
case 2167:
case 2928:
case 157:
case 787:
case 3774:
case 1248:
case 3840:
case 1212:
case 2397:
case 4070:
case 3981:
case 837:
case 1020:
case 1459:
case 4062:
case 3075:
case 425:
case 1922:
case 562:
case 1329:
case 3547:
case 658:
case 2724:
case 1086:
case 1446:
case 408:
case 1837:
case 2014:
case 1256:
case 2322:
case 3617:
case 2173:
case 2585:
case 1580:
case 2874:
case 2740:
case 2477:
case 2452:
case 341:
case 3264:
case 1885:
case 2990:
case 2537:
case 1462:
case 120:
case 3425:
case 1221:
case 3973:
case 3129:
case 1907:
case 3876:
case 2941:
case 639:
case 1098:
case 3640:
case 1574:
case 4046:
case 2266:
case 1995:
case 823:
case 104:
case 2178:
case 2395:
case 3801:
case 3510:
case 1341:
case 382:
case 1687:
case 2165:
case 3726:
case 3950:
case 2027:
case 453:
case 2938:
case 983:
case 1119:
case 568:
case 3569:
case 2971:
case 1306:
case 2609:
case 1544:
case 652:
case 2784:
case 374:
case 1030:
case 3859:
case 2410:
case 2899:
case 1520:
case 1763:
case 3798:
case 196:
case 773:
case 107:
case 4001:
case 795:
case 2148:
case 1536:
case 603:
case 315:
case 3437:
case 2382:
case 2112:
case 1614:
case 273:
case 3552:
case 2933:
case 1476:
case 3577:
case 1825:
case 2836:
case 3045:
case 3485:
case 59:
case 295:
case 2272:
case 3189:
case 43:
case 3912:
case 3138:
case 399:
case 135:
case 891:
case 3297:
case 3171:
case 990:
case 1051:
case 3786:
case 3709:
case 3793:
case 3658:
case 2592:
case 2143:
case 1775:
case 736:
case 383:
case 4024:
case 2603:
case 3563:
case 39:
case 210:
case 161:
case 3853:
case 1814:
case 3736:
case 1802:
case 3516:
case 3318:
case 1166:
case 3188:
case 1417:
case 3435:
case 1278:
case 3870:
case 416:
case 3744:
case 3708:
case 2809:
case 834:
case 3646:
case 588:
case 2194:
case 1692:
case 599:
case 1265:
case 439:
case 2983:
case 3461:
case 3010:
case 784:
case 278:
case 1118:
case 608:
case 1388:
case 2608:
case 1586:
case 866:
case 1593:
case 3568:
case 2746:
case 2255:
case 574:
case 3487:
case 1827:
case 2644:
case 3884:
case 3994:
case 3313:
case 3196:
case 368:
case 1354:
case 284:
case 3858:
case 3703:
case 3799:
case 1777:
case 2620:
case 1752:
case 999:
case 1273:
case 3921:
case 2954:
case 21:
case 1440:
case 390:
case 515:
case 1080:
case 2156:
case 2734:
case 2149:
case 3295:
case 2502:
case 1625:
case 1339:
case 1932:
case 1491:
case 242:
case 2401:
case 3559:
case 1143:
case 3304:
case 2279:
case 49:
case 2627:
case 971:
case 682:
case 1770:
case 870:
case 953:
case 3024:
case 1447:
case 1087:
case 1808:
case 3091:
case 1753:
case 2825:
case 3616:
case 831:
case 195:
case 2281:
case 818:
case 707:
case 902:
case 3534:
case 173:
case 3228:
case 1698:
case 677:
case 2599:
case 547:
case 1933:
case 316:
case 3017:
case 2716:
case 207:
case 1148:
case 2371:
case 1906:
case 1525:
case 468:
case 2338:
case 2763:
case 3852:
case 2520:
case 1899:
case 4047:
case 2030:
case 358:
case 136:
case 885:
case 1410:
case 947:
case 1758:
case 2892:
case 2119:
case 1693:
case 2389:
case 490:
case 1938:
case 87:
case 2026:
case 1784:
case 2544:
case 1734:
case 3816:
case 1149:
case 1445:
case 2339:
case 1636:
case 1988:
case 1514:
case 3863:
case 1898:
case 371:
case 761:
case 2777:
case 2080:
case 2440:
case 1156:
case 2273:
case 353:
case 330:
case 184:
case 754:
case 415:
case 3321:
case 302:
case 3001:
case 3792:
case 2424:
case 1332:
case 2118:
case 2509:
case 2593:
case 2827:
case 2142:
case 3570:
case 662:
case 33:
case 3558:
case 865:
case 2265:
case 1194:
case 2692:
case 1983:
case 3875:
case 254:
case 813:
case 2231:
case 1364:
case 2278:
case 3918:
case 3868:
case 3942:
case 3349:
case 1260:
case 3015:
case 894:
case 1762:
case 2417:
case 347:
case 2964:
case 2166:
case 2074:
case 626:
case 110:
case 3652:
case 261:
case 2396:
case 1699:
case 2383:
case 1603:
case 499:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756612801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,];
var gg_b = "1756612801/";

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
