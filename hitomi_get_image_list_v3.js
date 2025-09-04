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
case 667:
case 3812:
case 1154:
case 2571:
case 3714:
case 3257:
case 973:
case 1095:
case 1530:
case 546:
case 3504:
case 3683:
case 1760:
case 2360:
case 1622:
case 3857:
case 1050:
case 723:
case 1896:
case 3593:
case 823:
case 1421:
case 1261:
case 2926:
case 1435:
case 4048:
case 2667:
case 1306:
case 2548:
case 883:
case 1609:
case 1668:
case 3132:
case 686:
case 1241:
case 3466:
case 4068:
case 598:
case 2647:
case 202:
case 1338:
case 2509:
case 3226:
case 2085:
case 1841:
case 1523:
case 2337:
case 3826:
case 642:
case 1002:
case 2155:
case 3491:
case 2719:
case 35:
case 53:
case 1101:
case 2886:
case 4022:
case 2522:
case 3692:
case 2630:
case 1278:
case 231:
case 2957:
case 315:
case 1029:
case 2912:
case 2340:
case 1740:
case 2286:
case 2277:
case 2473:
case 1671:
case 1958:
case 544:
case 3018:
case 2787:
case 1168:
case 2776:
case 3362:
case 1109:
case 2810:
case 1679:
case 1035:
case 3046:
case 2167:
case 3675:
case 3559:
case 1021:
case 830:
case 3183:
case 2501:
case 267:
case 3245:
case 1236:
case 889:
case 575:
case 506:
case 1311:
case 3053:
case 1680:
case 1495:
case 1849:
case 617:
case 829:
case 3:
case 3845:
case 2073:
case 2554:
case 3265:
case 1269:
case 1797:
case 4054:
case 4080:
case 1429:
case 761:
case 2580:
case 631:
case 2945:
case 3425:
case 1208:
case 2130:
case 938:
case 1869:
case 3865:
case 2798:
case 1601:
case 1808:
case 157:
case 2494:
case 1148:
case 4079:
case 3520:
case 2690:
case 394:
case 242:
case 3318:
case 2158:
case 3933:
case 3880:
case 1087:
case 1112:
case 3974:
case 1645:
case 3752:
case 3636:
case 3062:
case 3280:
case 1406:
case 1157:
case 2088:
case 3339:
case 2901:
case 4065:
case 2565:
case 1321:
case 2721:
case 373:
case 3959:
case 3879:
case 1875:
case 700:
case 62:
case 3781:
case 2220:
case 536:
case 356:
case 3028:
case 3353:
case 68:
case 2113:
case 2664:
case 847:
case 2373:
case 354:
case 534:
case 3700:
case 1832:
case 2440:
case 2334:
case 601:
case 2859:
case 2979:
case 908:
case 1232:
case 632:
case 3391:
case 185:
case 3042:
case 3801:
case 2274:
case 1438:
case 4045:
case 95:
case 2545:
case 2954:
case 3366:
case 2874:
case 1805:
case 707:
case 3809:
case 1947:
case 807:
case 3399:
case 2795:
case 3868:
case 2613:
case 9:
case 2784:
case 1384:
case 3696:
case 3428:
case 28:
case 2882:
case 1205:
case 3993:
case 3268:
case 740:
case 2060:
case 3724:
case 1930:
case 3904:
case 2488:
case 3822:
case 1476:
case 3149:
case 488:
case 1145:
case 521:
case 3462:
case 1487:
case 379:
case 1283:
case 232:
case 172:
case 569:
case 2512:
case 2204:
case 4012:
case 994:
case 4057:
case 2037:
case 3271:
case 2922:
case 2804:
case 513:
case 1923:
case 1703:
case 3982:
case 39:
case 2144:
case 1626:
case 1967:
case 1498:
case 3770:
case 451:
case 2729:
case 3248:
case 1329:
case 641:
case 2040:
case 492:
case 3331:
case 470:
case 558:
case 2293:
case 2497:
case 2216:
case 718:
case 1247:
case 654:
case 818:
case 2641:
case 3893:
case 1596:
case 116:
case 1370:
case 705:
case 2248:
case 2816:
case 876:
case 805:
case 1561:
case 3909:
case 853:
case 1731:
case 2331:
case 3293:
case 178:
case 3968:
case 238:
case 753:
case 498:
case 332:
case 552:
case 2789:
case 1389:
case 3204:
case 3385:
case 2951:
case 2871:
case 2678:
case 942:
case 1686:
case 2108:
case 3394:
case 1983:
case 3702:
case 1830:
case 3922:
case 3804:
case 984:
case 1992:
case 2577:
case 120:
case 2724:
case 1324:
case 2586:
case 2904:
case 2822:
case 2149:
case 180:
case 2136:
case 2462:
case 3658:
case 3971:
case 279:
case 139:
case 3164:
case 114:
case 1014:
case 673:
case 1223:
case 1799:
case 2399:
case 1463:
case 482:
case 1267:
case 3795:
case 2661:
case 3526:
case 3784:
case 2209:
case 2696:
case 3948:
case 38:
case 2268:
case 2993:
case 874:
case 1867:
case 2415:
case 2391:
case 2042:
case 1177:
case 2801:
case 1186:
case 3980:
case 3833:
case 2178:
case 3954:
case 2366:
case 1607:
case 2201:
case 404:
case 1255:
case 254:
case 1890:
case 2700:
case 745:
case 2920:
case 3440:
case 845:
case 3644:
case 3859:
case 341:
case 1855:
case 1975:
case 1043:
case 638:
case 868:
case 133:
case 1610:
case 3460:
case 3220:
case 2196:
case 960:
case 1753:
case 1063:
case 917:
case 3113:
case 2161:
case 164:
case 1414:
case 1027:
case 127:
case 2507:
case 1718:
case 3158:
case 4007:
case 2974:
case 2752:
case 1352:
case 2062:
case 3735:
case 1508:
case 187:
case 2339:
case 1569:
case 3901:
case 3565:
case 1193:
case 1844:
case 2910:
case 1659:
case 2342:
case 1742:
case 2091:
case 386:
case 326:
case 4020:
case 3485:
case 65:
case 419:
case 3073:
case 2265:
case 901:
case 1633:
case 1674:
case 615:
case 3807:
case 1949:
case 1000:
case 3580:
case 3945:
case 3130:
case 1104:
case 265:
case 1470:
case 3798:
case 799:
case 463:
case 3403:
case 3207:
case 899:
case 3501:
case 103:
case 2245:
case 2328:
case 2499:
case 3711:
case 2053:
case 4033:
case 2:
case 1327:
case 2533:
case 2845:
case 2018:
case 1532:
case 87:
case 2105:
case 1762:
case 384:
case 2046:
case 296:
case 2039:
case 2675:
case 2559:
case 324:
case 4059:
case 1583:
case 3003:
case 551:
case 331:
case 215:
case 1070:
case 3877:
case 3957:
case 1400:
case 4051:
case 1174:
case 735:
case 665:
case 2025:
case 2551:
case 3286:
case 570:
case 3277:
case 3473:
case 1133:
case 208:
case 2132:
case 893:
case 469:
case 3568:
case 793:
case 3738:
case 1505:
case 2226:
case 3190:
case 1996:
case 40:
case 1693:
case 694:
case 2826:
case 2315:
case 3719:
case 2491:
case 3155:
case 1682:
case 481:
case 1213:
case 2446:
case 3926:
case 1024:
case 3706:
case 2175:
case 421:
case 696:
case 1120:
case 588:
case 3516:
case 1314:
case 2714:
case 2453:
case 2257:
case 1858:
case 1651:
case 2986:
case 4004:
case 2504:
case 2212:
case 2683:
case 1258:
case 1481:
case 1492:
case 878:
case 3744:
case 3842:
case 105:
case 2404:
case 716:
case 2600:
case 2074:
case 4053:
case 1131:
case 3242:
case 4:
case 3471:
case 1707:
case 2307:
case 1666:
case 3672:
case 681:
case 2189:
case 1963:
case 1298:
case 1517:
case 621:
case 2708:
case 496:
case 4046:
case 2539:
case 2928:
case 2493:
case 1369:
case 2769:
case 2059:
case 3102:
case 2297:
case 3365:
case 1691:
case 739:
case 24:
case 2482:
case 2591:
case 1639:
case 1211:
case 1349:
case 1405:
case 3409:
case 2652:
case 3345:
case 1811:
case 1618:
case 720:
case 3997:
case 219:
case 4066:
case 1956:
case 448:
case 951:
case 3862:
case 1199:
case 3080:
case 3534:
case 3184:
case 992:
case 714:
case 1287:
case 1483:
case 2681:
case 3422:
case 1777:
case 3960:
case 2386:
case 1378:
case 221:
case 1432:
case 1166:
case 1914:
case 1219:
case 1838:
case 52:
case 2237:
case 3071:
case 168:
case 2100:
case 2599:
case 866:
case 2837:
case 1238:
case 1819:
case 2004:
case 58:
case 3401:
case 2741:
case 764:
case 1083:
case 2915:
case 634:
case 1806:
case 3022:
case 2796:
case 3684:
case 501:
case 1570:
case 977:
case 1206:
case 1699:
case 3713:
case 2761:
case 2051:
case 3480:
case 408:
case 833:
case 663:
case 733:
case 4031:
case 64:
case 269:
case 352:
case 532:
case 787:
case 3312:
case 895:
case 2152:
case 887:
case 3940:
case 3594:
case 3135:
case 1146:
case 3479:
case 2624:
case 1475:
case 1139:
case 2860:
case 45:
case 827:
case 727:
case 20:
case 1615:
case 1142:
case 3231:
case 1229:
case 3348:
case 2999:
case 2156:
case 2407:
case 3825:
case 3747:
case 199:
case 1202:
case 3371:
case 675:
case 3730:
case 3198:
case 246:
case 2143:
case 1392:
case 517:
case 3560:
case 49:
case 2410:
case 1383:
case 2783:
case 531:
case 351:
case 3994:
case 1128:
case 3111:
case 3540:
case 855:
case 3985:
case 803:
case 2127:
case 244:
case 2931:
case 71:
case 1895:
case 3187:
case 3176:
case 3309:
case 2925:
case 1162:
case 1295:
case 3299:
case 1970:
case 3606:
case 3767:
case 2515:
case 3537:
case 749:
case 849:
case 23:
case 3903:
case 1782:
case 2382:
case 1272:
case 2643:
case 3266:
case 567:
case 4028:
case 3426:
case 2946:
case 3698:
case 206:
case 3891:
case 2528:
case 646:
case 3866:
case 2374:
case 1527:
case 2333:
case 2007:
case 2656:
case 2732:
case 2953:
case 584:
case 2486:
case 3588:
case 2359:
case 3065:
case 3755:
case 2273:
case 4042:
case 698:
case 586:
case 2542:
case 952:
case 3379:
case 2775:
case 3106:
case 3676:
case 3412:
case 1049:
case 1900:
case 3045:
case 1036:
case 1720:
case 2320:
case 1662:
case 3973:
case 991:
case 86:
case 2966:
case 3354:
case 743:
case 204:
case 3818:
case 1461:
case 1821:
case 3846:
case 1543:
case 2991:
case 1064:
case 1754:
case 2354:
case 2597:
case 3114:
case 304:
case 3627:
case 548:
case 3663:
case 2818:
case 2246:
case 1217:
case 913:
case 958:
case 441:
case 565:
case 2846:
case 3010:
case 1817:
case 670:
case 3991:
case 2839:
case 183:
case 2379:
case 3775:
case 2457:
case 2412:
case 2973:
case 2853:
case 628:
case 1576:
case 2790:
case 981:
case 3234:
case 3486:
case 688:
case 2588:
case 3359:
case 921:
case 1137:
case 2065:
case 3477:
case 2755:
case 1701:
case 2301:
case 850:
case 3643:
case 1921:
case 1044:
case 1935:
case 3946:
case 375:
case 3528:
case 871:
case 3374:
case 3918:
case 3333:
case 5:
case 2899:
case 432:
case 398:
case 1768:
case 2368:
case 2176:
case 1929:
case 94:
case 3705:
case 2012:
case 3925:
case 2445:
case 919:
case 2606:
case 1188:
case 1367:
case 2767:
case 2723:
case 33:
case 4037:
case 1519:
case 3382:
case 1824:
case 129:
case 3783:
case 2322:
case 1660:
case 2994:
case 251:
case 934:
case 4040:
case 2540:
case 2985:
case 270:
case 677:
case 508:
case 344:
case 292:
case 3127:
case 1889:
case 936:
case 857:
case 1771:
case 382:
case 3294:
case 1640:
case 2026:
case 1330:
case 48:
case 3304:
case 346:
case 3894:
case 3143:
case 3792:
case 2560:
case 228:
case 1637:
case 3077:
case 1950:
case 2619:
case 1870:
case 2465:
case 2225:
case 1506:
case 2348:
case 3999:
case 2638:
case 1995:
case 288:
case 2825:
case 1347:
case 2747:
case 3260:
case 402:
case 369:
case 2758:
case 4085:
case 1712:
case 2312:
case 1814:
case 3420:
case 2009:
case 2940:
case 3152:
case 3117:
case 291:
case 2479:
case 2135:
case 1067:
case 3860:
case 4094:
case 1502:
case 1214:
case 30:
case 4003:
case 3915:
case 313:
case 2022:
case 59:
case 147:
case 3181:
case 2684:
case 1529:
case 1313:
case 2695:
case 2480:
case 100:
case 358:
case 906:
case 975:
case 3237:
case 2071:
case 460:
case 2215:
case 3100:
case 1584:
case 1726:
case 2815:
case 2326:
case 3004:
case 1906:
case 417:
case 3741:
case 1550:
case 1603:
case 2602:
case 381:
case 3377:
case 1455:
case 3386:
case 725:
case 785:
case 3840:
case 897:
case 885:
case 2172:
case 1047:
case 579:
case 2573:
case 1364:
case 334:
case 554:
case 4073:
case 4034:
case 3451:
case 2195:
case 2262:
case 2184:
case 944:
case 363:
case 3681:
case 2150:
case 2422:
case 3942:
case 1227:
case 652:
case 2828:
case 34:
case 3482:
case 2079:
case 998:
case 2635:
case 93:
case 3749:
case 1827:
case 2409:
case 1745:
case 691:
case 1863:
case 319:
case 2468:
case 2416:
case 2672:
case 112:
case 484:
case 1911:
case 1090:
case 3897:
case 1535:
case 3539:
case 3928:
case 2448:
case 3493:
case 2102:
case 890:
case 3297:
case 1765:
case 2365:
case 982:
case 2001:
case 1103:
case 1430:
case 3170:
case 2842:
case 556:
case 336:
case 2988:
case 3404:
case 1976:
case 3553:
case 3074:
case 922:
case 1634:
case 946:
case 2471:
case 1987:
case 2992:
case 1577:
case 3006:
case 3657:
case 1586:
case 2324:
case 3930:
case 687:
case 3612:
case 695:
case 4078:
case 179:
case 84:
case 74:
case 763:
case 633:
case 1809:
case 2427:
case 863:
case 2823:
case 1696:
case 1209:
case 834:
case 664:
case 2110:
case 734:
case 19:
case 2247:
case 1216:
case 3923:
case 3498:
case 1770:
case 216:
case 2561:
case 3513:
case 1325:
case 736:
case 3329:
case 666:
case 4061:
case 138:
case 500:
case 1331:
case 3558:
case 2107:
case 390:
case 2456:
case 3038:
case 2389:
case 3892:
case 2686:
case 1108:
case 3019:
case 1442:
case 3165:
case 47:
case 2983:
case 3302:
case 1015:
case 1781:
case 3875:
case 1879:
case 233:
case 1196:
case 3544:
case 3990:
case 3011:
case 2753:
case 1353:
case 713:
case 2414:
case 2932:
case 3087:
case 2718:
case 70:
case 1507:
case 620:
case 1062:
case 3645:
case 2352:
case 1636:
case 1339:
case 3157:
case 2317:
case 1280:
case 3335:
case 3321:
case 1254:
case 869:
case 493:
case 4069:
case 639:
case 769:
case 3419:
case 2791:
case 3665:
case 1669:
case 1178:
case 2549:
case 3438:
case 781:
case 3372:
case 1366:
case 971:
case 154:
case 2890:
case 616:
case 1700:
case 2300:
case 2290:
case 1141:
case 507:
case 2043:
case 2081:
case 744:
case 2728:
case 3249:
case 255:
case 511:
case 3484:
case 476:
case 2151:
case 3495:
case 1574:
case 1763:
case 3311:
case 1499:
case 3836:
case 1845:
case 3849:
case 1907:
case 3654:
case 418:
case 83:
case 73:
case 1362:
case 3376:
case 2864:
case 1105:
case 1039:
case 2424:
case 21:
case 898:
case 609:
case 1559:
case 1342:
case 2742:
case 1910:
case 3402:
case 583:
case 972:
case 2244:
case 1520:
case 3116:
case 2356:
case 1632:
case 148:
case 3171:
case 722:
case 1431:
case 822:
case 846:
case 2936:
case 2000:
case 746:
case 2470:
case 882:
case 3398:
case 357:
case 3601:
case 3808:
case 2343:
case 3306:
case 3261:
case 3179:
case 2213:
case 3435:
case 3609:
case 209:
case 3668:
case 2813:
case 3547:
case 459:
case 61:
case 2314:
case 1714:
case 603:
case 468:
case 2858:
case 2651:
case 3180:
case 1453:
case 1504:
case 3530:
case 804:
case 1977:
case 2481:
case 3050:
case 2592:
case 3760:
case 2258:
case 704:
case 1692:
case 2604:
case 115:
case 3278:
case 1551:
case 806:
case 875:
case 3740:
case 706:
case 3671:
case 2133:
case 530:
case 1031:
case 3616:
case 3472:
case 4005:
case 985:
case 3648:
case 2996:
case 15:
case 1582:
case 2715:
case 1826:
case 2159:
case 1568:
case 3961:
case 2913:
case 1085:
case 1738:
case 3505:
case 3089:
case 2567:
case 2648:
case 3996:
case 4067:
case 1094:
case 57:
case 4023:
case 1719:
case 1155:
case 3693:
case 1877:
case 131:
case 1630:
case 1286:
case 1434:
case 3174:
case 3400:
case 2671:
case 1277:
case 966:
case 3314:
case 160:
case 3978:
case 3858:
case 3651:
case 2180:
case 4030:
case 2530:
case 3592:
case 1360:
case 2622:
case 3258:
case 343:
case 36:
case 3941:
case 2421:
case 3682:
case 1623:
case 927:
case 2306:
case 1548:
case 3417:
case 1926:
case 2179:
case 2609:
case 2296:
case 3120:
case 309:
case 2861:
case 2547:
case 4047:
case 995:
case 2269:
case 3633:
case 1554:
case 671:
case 3936:
case 2429:
case 978:
case 2869:
case 650:
case 1403:
case 2808:
case 3343:
case 1655:
case 3844:
case 3659:
case 3575:
case 1579:
case 1690:
case 1485:
case 126:
case 2116:
case 142:
case 2072:
case 349:
case 2168:
case 412:
case 920:
case 1776:
case 1167:
case 1388:
case 939:
case 3017:
case 2679:
case 3424:
case 3264:
case 980:
case 2555:
case 4055:
case 124:
case 167:
case 1965:
case 2122:
case 892:
case 3081:
case 303:
case 535:
case 2236:
case 2484:
case 3151:
case 2680:
case 751:
case 1711:
case 3363:
case 2836:
case 2849:
case 110:
case 2654:
case 4064:
case 574:
case 1259:
case 1097:
case 3890:
case 3255:
case 1440:
case 1334:
case 2832:
case 3300:
case 3855:
case 3975:
case 2098:
case 141:
case 1644:
case 3290:
case 2126:
case 437:
case 690:
case 297:
case 2419:
case 1233:
case 483:
case 1274:
case 3536:
case 3549:
case 423:
case 3766:
case 1954:
case 1874:
case 2087:
case 1158:
case 3718:
case 2645:
case 2112:
case 96:
case 2076:
case 1088:
case 2157:
case 3317:
case 2335:
case 2321:
case 852:
case 1901:
case 752:
case 2875:
case 2955:
case 333:
case 553:
case 505:
case 411:
case 2544:
case 1113:
case 943:
case 3063:
case 3414:
case 1820:
case 364:
case 518:
case 3932:
case 1664:
case 132:
case 2558:
case 2292:
case 697:
case 3230:
case 2785:
case 2038:
case 3389:
case 625:
case 1557:
case 3686:
case 1804:
case 2019:
case 1702:
case 2703:
case 429:
case 2923:
case 2498:
case 3370:
case 316:
case 1040:
case 2329:
case 3905:
case 430:
case 2947:
case 3427:
case 12:
case 1164:
case 903:
case 2395:
case 1613:
case 3267:
case 3799:
case 3463:
case 461:
case 1948:
case 1784:
case 1526:
case 3541:
case 3867:
case 2350:
case 3110:
case 3992:
case 320:
case 949:
case 2145:
case 2476:
case 2612:
case 1851:
case 2487:
case 549:
case 3332:
case 2800:
case 4087:
case 4076:
case 3478:
case 1138:
case 2200:
case 1119:
case 2355:
case 1065:
case 51:
case 702:
case 2137:
case 393:
case 3759:
case 3115:
case 1266:
case 2921:
case 3441:
case 3272:
case 2701:
case 1301:
case 335:
case 555:
case 1698:
case 1891:
case 211:
case 3952:
case 661:
case 3872:
case 731:
case 4011:
case 831:
case 3774:
case 1866:
case 1291:
case 629:
case 2972:
case 3221:
case 2413:
case 3235:
case 1611:
case 2598:
case 2252:
case 1839:
case 2160:
case 760:
case 630:
case 860:
case 1846:
case 497:
case 485:
case 2881:
case 1106:
case 3375:
case 1379:
case 283:
case 3662:
case 3036:
case 3900:
case 1412:
case 1687:
case 2281:
case 1973:
case 2771:
case 1371:
case 3202:
case 2889:
case 976:
case 905:
case 2640:
case 953:
case 3704:
case 2444:
case 1730:
case 1560:
case 3392:
case 2950:
case 842:
case 1465:
case 2637:
case 3793:
case 3229:
case 1348:
case 726:
case 4006:
case 1225:
case 1831:
case 1638:
case 2347:
case 1747:
case 509:
case 1316:
case 1825:
case 3829:
case 490:
case 724:
case 3895:
case 2768:
case 1368:
case 472:
case 824:
case 1445:
case 1309:
case 2709:
case 4038:
case 3305:
case 3449:
case 2929:
case 2367:
case 2188:
case 3970:
case 884:
case 1057:
case 3295:
case 3782:
case 1537:
case 1723:
case 2323:
case 710:
case 3383:
case 229:
case 810:
case 2824:
case 3128:
case 3096:
case 151:
case 3061:
case 2013:
case 289:
case 1985:
case 3751:
case 2224:
case 1111:
case 3989:
case 867:
case 230:
case 170:
case 3631:
case 3219:
case 2173:
case 3625:
case 841:
case 1629:
case 345:
case 4084:
case 2726:
case 3092:
case 2603:
case 2550:
case 3341:
case 4050:
case 1960:
case 520:
case 1602:
case 1048:
case 3524:
case 2694:
case 1016:
case 539:
case 3432:
case 152:
case 1758:
case 2814:
case 1940:
case 1312:
case 3139:
case 1121:
case 2502:
case 2023:
case 2919:
case 3083:
case 3570:
case 1684:
case 1480:
case 4029:
case 1713:
case 3361:
case 1695:
case 3206:
case 578:
case 450:
case 1454:
case 607:
case 212:
case 2447:
case 2243:
case 1416:
case 3707:
case 3666:
case 2185:
case 2090:
case 3963:
case 587:
case 4035:
case 2535:
case 3517:
case 2765:
case 832:
case 2055:
case 4021:
case 3369:
case 662:
case 2256:
case 3492:
case 1001:
case 1988:
case 1744:
case 999:
case 2634:
case 2976:
case 2856:
case 1471:
case 3131:
case 2673:
case 647:
case 3956:
case 1764:
case 3887:
case 78:
case 566:
case 1184:
case 1262:
case 72:
case 82:
case 3287:
case 457:
case 1621:
case 2467:
case 1635:
case 3646:
case 1345:
case 2745:
case 1409:
case 2827:
case 97:
case 3349:
case 1482:
case 14:
case 2943:
case 2075:
case 3998:
case 1124:
case 1617:
case 2336:
case 1736:
case 1652:
case 1020:
case 2405:
case 525:
case 3572:
case 2811:
case 3863:
case 2618:
case 274:
case 340:
case 2887:
case 2199:
case 1288:
case 2276:
case 1888:
case 989:
case 163:
case 2710:
case 3256:
case 2581:
case 276:
case 1170:
case 205:
case 3430:
case 2125:
case 1600:
case 3976:
case 645:
case 2131:
case 3447:
case 2666:
case 3185:
case 2552:
case 3911:
case 1189:
case 1928:
case 4017:
case 3535:
case 3843:
case 2517:
case 3194:
case 2898:
case 2691:
case 3055:
case 3521:
case 659:
case 1297:
case 2369:
case 2806:
case 2083:
case 674:
case 2570:
case 4070:
case 2396:
case 1796:
case 856:
case 1051:
case 1525:
case 2361:
case 1761:
case 3938:
case 2153:
case 2699:
case 3529:
case 158:
case 773:
case 169:
case 983:
case 590:
case 1420:
case 1152:
case 3712:
case 2005:
case 3757:
case 2139:
case 1624:
case 10:
case 3502:
case 3214:
case 3023:
case 3455:
case 2777:
case 181:
case 1386:
case 2786:
case 3694:
case 121:
case 1778:
case 362:
case 1840:
case 2914:
case 259:
case 409:
case 1237:
case 2631:
case 3173:
case 2838:
case 2219:
case 2625:
case 605:
case 1100:
case 1474:
case 676:
case 3906:
case 1670:
case 2819:
case 2238:
case 3726:
case 3584:
case 1837:
case 3603:
case 443:
case 854:
case 2341:
case 1741:
case 618:
case 754:
case 3722:
case 3660:
case 8:
case 1783:
case 7:
case 416:
case 3224:
case 2751:
case 1163:
case 2989:
case 144:
case 1127:
case 478:
case 2250:
case 1925:
case 2162:
case 896:
case 2284:
case 1705:
case 3538:
case 2449:
case 3929:
case 2850:
case 3519:
case 1382:
case 13:
case 3323:
case 1515:
case 3870:
case 3950:
case 2615:
case 420:
case 1393:
case 3748:
case 2408:
case 1086:
case 2078:
case 3995:
case 480:
case 1999:
case 3716:
case 693:
case 1407:
case 2829:
case 1203:
case 3771:
case 299:
case 4014:
case 635:
case 3289:
case 146:
case 1304:
case 2704:
case 2924:
case 361:
case 2041:
case 2392:
case 1792:
case 1894:
case 1143:
case 748:
case 3779:
case 383:
case 1320:
case 2900:
case 3458:
case 323:
case 67:
case 3281:
case 1627:
case 3972:
case 3852:
case 104:
case 2221:
case 1966:
case 3064:
case 3780:
case 1663:
case 2821:
case 2496:
case 1991:
case 557:
case 4043:
case 337:
case 2543:
case 2835:
case 433:
case 2441:
case 3921:
case 699:
case 1643:
case 1946:
case 3044:
case 815:
case 3140:
case 3511:
case 715:
case 1374:
case 2733:
case 1333:
case 3587:
case 85:
case 75:
case 2332:
case 1007:
case 3390:
case 1953:
case 1873:
case 3576:
case 3200:
case 962:
case 495:
case 487:
case 1273:
case 2981:
case 1477:
case 293:
case 2115:
case 2759:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756998001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,];
var gg_b = "1756998001/";

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
