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
case 2752:
case 239:
case 2462:
case 1504:
case 3421:
case 3507:
case 4062:
case 2825:
case 1286:
case 3747:
case 1348:
case 1081:
case 3055:
case 444:
case 2386:
case 1327:
case 1935:
case 2551:
case 2654:
case 1059:
case 3324:
case 2806:
case 1050:
case 1892:
case 2165:
case 129:
case 204:
case 151:
case 1567:
case 3661:
case 1283:
case 3998:
case 2112:
case 1039:
case 3496:
case 1470:
case 2531:
case 102:
case 379:
case 1184:
case 904:
case 3187:
case 419:
case 506:
case 531:
case 3475:
case 2871:
case 3690:
case 828:
case 2109:
case 939:
case 3840:
case 2328:
case 3849:
case 1695:
case 1845:
case 3699:
case 2803:
case 604:
case 2100:
case 3244:
case 1662:
case 2145:
case 4001:
case 1103:
case 2268:
case 1809:
case 777:
case 85:
case 446:
case 2914:
case 1204:
case 2527:
case 2401:
case 3385:
case 2251:
case 1454:
case 2304:
case 4042:
case 2033:
case 3457:
case 2884:
case 1764:
case 2708:
case 810:
case 1171:
case 1368:
case 1018:
case 159:
case 1977:
case 2280:
case 1812:
case 2473:
case 1434:
case 2670:
case 3918:
case 2192:
case 2785:
case 462:
case 1583:
case 1865:
case 1267:
case 790:
case 3602:
case 1074:
case 1106:
case 906:
case 2978:
case 3129:
case 858:
case 1547:
case 3619:
case 3641:
case 3544:
case 313:
case 277:
case 1615:
case 2495:
case 4076:
case 1331:
case 3308:
case 3891:
case 3810:
case 1374:
case 3113:
case 3377:
case 416:
case 509:
case 2101:
case 4045:
case 636:
case 1217:
case 601:
case 1236:
case 3214:
case 3594:
case 3968:
case 1403:
case 3819:
case 3466:
case 2353:
case 3841:
case 3623:
case 2539:
case 1253:
case 3008:
case 2142:
case 1665:
case 2336:
case 2173:
case 3669:
case 2870:
case 701:
case 3157:
case 3382:
case 534:
case 3802:
case 936:
case 840:
case 320:
case 2530:
case 2274:
case 1471:
case 3980:
case 252:
case 1051:
case 2559:
case 3085:
case 1233:
case 2684:
case 1122:
case 3931:
case 3626:
case 2218:
case 2598:
case 3463:
case 201:
case 2492:
case 952:
case 1612:
case 1080:
case 752:
case 2550:
case 3420:
case 343:
case 1862:
case 126:
case 1068:
case 1256:
case 1425:
case 3605:
case 307:
case 1609:
case 3640:
case 536:
case 501:
case 934:
case 3052:
case 1330:
case 3890:
case 132:
case 3193:
case 1339:
case 1645:
case 1895:
case 3927:
case 609:
case 1536:
case 3649:
case 1517:
case 3514:
case 2397:
case 634:
case 2465:
case 3948:
case 3446:
case 1553:
case 2755:
case 2574:
case 222:
case 414:
case 2822:
case 709:
case 4065:
case 2518:
case 1179:
case 2281:
case 3175:
case 1533:
case 2259:
case 2250:
case 2412:
case 922:
case 1170:
case 124:
case 156:
case 234:
case 2115:
case 4009:
case 552:
case 3032:
case 3578:
case 1350:
case 622:
case 1027:
case 2409:
case 1359:
case 2944:
case 478:
case 1398:
case 1801:
case 3443:
case 2498:
case 3563:
case 1506:
case 1284:
case 2996:
case 2481:
case 2769:
case 2633:
case 2459:
case 4081:
case 2975:
case 1183:
case 1880:
case 2760:
case 4059:
case 942:
case 1128:
case 1902:
case 1312:
case 298:
case 3144:
case 353:
case 3529:
case 1868:
case 2788:
case 1919:
case 1525:
case 2384:
case 2723:
case 2804:
case 3915:
case 3243:
case 2656:
case 2127:
case 3360:
case 3682:
case 998:
case 1186:
case 589:
case 966:
case 798:
case 355:
case 681:
case 2705:
case 1503:
case 1743:
case 1365:
case 2545:
case 2921:
case 1497:
case 3019:
case 2617:
case 3041:
case 666:
case 1831:
case 402:
case 2726:
case 2867:
case 2653:
case 3246:
case 2439:
case 1787:
case 119:
case 3784:
case 3677:
case 242:
case 2079:
case 3002:
case 850:
case 981:
case 1659:
case 1433:
case 1961:
case 2325:
case 2916:
case 3587:
case 1206:
case 2131:
case 2292:
case 3771:
case 1073:
case 3220:
case 2500:
case 323:
case 843:
case 1392:
case 3832:
case 3995:
case 1827:
case 2306:
case 1456:
case 1225:
case 1958:
case 3703:
case 2711:
case 1999:
case 2749:
case 807:
case 3572:
case 3038:
case 3229:
case 325:
case 2168:
case 876:
case 581:
case 845:
case 173:
case 3852:
case 1417:
case 2697:
case 1938:
case 1095:
case 3266:
case 2847:
case 1203:
case 3058:
case 2303:
case 111:
case 2034:
case 2180:
case 3635:
case 2957:
case 3311:
case 3340:
case 989:
case 820:
case 2189:
case 789:
case 3237:
case 3216:
case 1570:
case 3358:
case 2431:
case 1234:
case 1395:
case 3754:
case 695:
case 1467:
case 3390:
case 1376:
case 4031:
case 984:
case 2071:
case 2118:
case 871:
case 784:
case 1156:
case 995:
case 3652:
case 358:
case 561:
case 795:
case 293:
case 3040:
case 2647:
case 3178:
case 3011:
case 512:
case 2738:
case 2515:
case 1045:
case 2003:
case 2897:
case 116:
case 1373:
case 3632:
case 4068:
case 2562:
case 295:
case 2468:
case 3213:
case 2025:
case 815:
case 2201:
case 35:
case 3338:
case 2451:
case 1301:
case 470:
case 3257:
case 454:
case 1881:
case 3734:
case 693:
case 2489:
case 1716:
case 310:
case 1648:
case 2174:
case 1859:
case 3722:
case 269:
case 2480:
case 2273:
case 2150:
case 3341:
case 1065:
case 1428:
case 3296:
case 686:
case 3608:
case 1631:
case 2987:
case 1270:
case 879:
case 1279:
case 2181:
case 961:
case 1874:
case 3310:
case 761:
case 3877:
case 595:
case 2576:
case 848:
case 569:
case 328:
case 986:
case 3900:
case 3882:
case 2379:
case 2817:
case 1905:
case 3023:
case 2595:
case 2215:
case 2943:
case 1721:
case 17:
case 661:
case 2972:
case 2262:
case 4027:
case 2710:
case 367:
case 2501:
case 1009:
case 456:
case 84:
case 2741:
case 2719:
case 1923:
case 1668:
case 3513:
case 3965:
case 3026:
case 2448:
case 2130:
case 2833:
case 212:
case 2084:
case 1796:
case 1689:
case 3685:
case 3557:
case 1775:
case 2573:
case 1960:
case 4048:
case 2542:
case 1012:
case 1362:
case 593:
case 149:
case 261:
case 1371:
case 975:
case 830:
case 4017:
case 273:
case 544:
case 2720:
case 775:
case 2104:
case 746:
case 2076:
case 3482:
case 3249:
case 2417:
case 2436:
case 3211:
case 3591:
case 3694:
case 2729:
case 2095:
case 1847:
case 2345:
case 2763:
case 1565:
case 1883:
case 1180:
case 3954:
case 675:
case 1957:
case 3569:
case 3560:
case 1151:
case 1022:
case 335:
case 3329:
case 2659:
case 3057:
case 490:
case 2961:
case 2681:
case 673:
case 1418:
case 3922:
case 3108:
case 1292:
case 962:
case 4033:
case 1512:
case 2167:
case 3320:
case 333:
case 2650:
case 611:
case 1500:
case 2990:
case 4056:
case 1740:
case 2392:
case 2827:
case 1306:
case 3013:
case 2456:
case 88:
case 2766:
case 2958:
case 3505:
case 431:
case 406:
case 519:
case 2001:
case 1509:
case 3124:
case 308:
case 3700:
case 2186:
case 865:
case 3346:
case 3223:
case 2743:
case 2015:
case 2365:
case 1921:
case 19:
case 3288:
case 2772:
case 3549:
case 3291:
case 3614:
case 3269:
case 2831:
case 3435:
case 1726:
case 2787:
case 1070:
case 1430:
case 360:
case 2674:
case 2571:
case 142:
case 3712:
case 1079:
case 3075:
case 575:
case 3260:
case 2618:
case 3343:
case 2506:
case 919:
case 2284:
case 2746:
case 3455:
case 404:
case 1769:
case 3372:
case 719:
case 1633:
case 2309:
case 1459:
case 1450:
case 181:
case 2300:
case 2880:
case 1212:
case 3979:
case 872:
case 244:
case 2312:
case 2062:
case 2910:
case 863:
case 2147:
case 198:
case 3678:
case 1200:
case 1209:
case 439:
case 511:
case 2941:
case 2525:
case 1723:
case 3205:
case 3152:
case 3807:
case 582:
case 883:
case 3432:
case 1710:
case 2197:
case 2000:
case 186:
case 278:
case 97:
case 3607:
case 3424:
case 1856:
case 2988:
case 434:
case 1741:
case 2486:
case 3072:
case 857:
case 1719:
case 77:
case 2668:
case 112:
case 1946:
case 1084:
case 914:
case 2689:
case 516:
case 33:
case 2775:
case 1573:
case 1542:
case 2012:
case 2362:
case 67:
case 1702:
case 249:
case 1853:
case 1150:
case 422:
case 2926:
case 2065:
case 3984:
case 3046:
case 214:
case 2534:
case 1987:
case 1198:
case 894:
case 4083:
case 1181:
case 2522:
case 3155:
case 3202:
case 338:
case 380:
case 1159:
case 3590:
case 1576:
case 978:
case 3452:
case 4047:
case 1379:
case 3762:
case 1836:
case 1817:
case 2905:
case 3814:
case 1215:
case 27:
case 3599:
case 649:
case 3219:
case 2136:
case 2117:
case 3776:
case 2940:
case 4004:
case 1468:
case 3903:
case 1758:
case 1966:
case 916:
case 86:
case 2949:
case 514:
case 1686:
case 3238:
case 3029:
case 1354:
case 2404:
case 2627:
case 347:
case 3357:
case 3182:
case 2254:
case 1451:
case 2898:
case 401:
case 2737:
case 2716:
case 2648:
case 2859:
case 57:
case 3177:
case 1006:
case 3313:
case 3063:
case 782:
case 169:
case 2092:
case 1273:
case 1628:
case 2570:
case 1683:
case 2467:
case 2133:
case 741:
case 3773:
case 578:
case 2222:
case 941:
case 800:
case 4067:
case 1071:
case 3742:
case 2579:
case 305:
case 2156:
case 1322:
case 1920:
case 549:
case 193:
case 3290:
case 868:
case 3519:
case 3299:
case 3:
case 641:
case 1929:
case 3701:
case 2045:
case 1295:
case 3925:
case 3066:
case 3316:
case 3258:
case 216:
case 1334:
case 3696:
case 1053:
case 3789:
case 2528:
case 2434:
case 1670:
case 3208:
case 3751:
case 2267:
case 4022:
case 2422:
case 921:
case 300:
case 2074:
case 2106:
case 2125:
case 396:
case 368:
case 3490:
case 1476:
case 3499:
case 1017:
case 2615:
case 3956:
case 2331:
case 3458:
case 3078:
case 3111:
case 502:
case 3532:
case 2982:
case 131:
case 106:
case 2800:
case 1056:
case 3693:
case 2809:
case 3917:
case 2586:
case 327:
case 1401:
case 1527:
case 3524:
case 3843:
case 1251:
case 1033:
case 464:
case 3731:
case 1708:
case 489:
case 1548:
case 2368:
case 221:
case 259:
case 190:
case 2977:
case 2812:
case 1473:
case 3344:
case 442:
case 2039:
case 2955:
case 3126:
case 2030:
case 2479:
case 202:
case 951:
case 1622:
case 394:
case 3402:
case 1871:
case 729:
case 838:
case 3410:
case 385:
case 1732:
case 2676:
case 1109:
case 559:
case 521:
case 3105:
case 49:
case 2695:
case 1415:
case 1383:
case 1724:
case 2845:
case 651:
case 3419:
case 1803:
case 3866:
case 2247:
case 3441:
case 3094:
case 383:
case 3188:
case 3191:
case 602:
case 357:
case 1825:
case 3997:
case 1994:
case 498:
case 3829:
case 3613:
case 2098:
case 2081:
case 481:
case 83:
case 3160:
case 1654:
case 1551:
case 2059:
case 3585:
case 3863:
case 1806:
case 2673:
case 702:
case 2892:
case 1165:
case 229:
case 104:
case 251:
case 1298:
case 597:
case 3663:
case 3255:
case 461:
case 632:
case 2533:
case 1735:
case 412:
case 1412:
case 3730:
case 2873:
case 2170:
case 109:
case 224:
case 2952:
case 256:
case 1115:
case 932:
case 3119:
case 3620:
case 2350:
case 2027:
case 3110:
case 1409:
case 3813:
case 80:
case 2794:
case 1944:
case 486:
case 2398:
case 2801:
case 2556:
case 2932:
case 3582:
case 756:
case 956:
case 2876:
case 3666:
case 2339:
case 1603:
case 2645:
case 1047:
case 3044:
case 3491:
case 3986:
case 1397:
case 3469:
case 3816:
case 3837:
case 1834:
case 3235:
case 3798:
case 2553:
case 1028:
case 1755:
case 3781:
case 1671:
case 1230:
case 860:
case 2051:
case 469:
case 3967:
case 2122:
case 3687:
case 3555:
case 2089:
case 2908:
case 2406:
case 136:
case 101:
case 2134:
case 2612:
case 2080:
case 3161:
case 3199:
case 1195:
case 2318:
case 3821:
case 797:
case 2425:
case 3672:
case 3190:
case 997:
case 3893:
case 3007:
case 495:
case 1176:
case 1333:
case 2609:
case 524:
case 4003:
case 1101:
case 3138:
case 3440:
case 2217:
case 2236:
case 2597:
case 3411:
case 670:
case 297:
case 1907:
case 2403:
case 1353:
case 2253:
case 1142:
case 3535:
case 2985:
case 4071:
case 1317:
case 626:
case 3896:
case 1336:
case 1173:
case 1870:
case 2154:
case 1879:
case 391:
case 1530:
case 2471:
case 3277:
case 152:
case 2909:
case 2088:
case 967:
case 465:
case 92:
case 3972:
case 2023:
case 72:
case 3370:
case 1814:
case 3836:
case 3817:
case 1452:
case 2302:
case 3379:
case 3576:
case 1210:
case 2900:
case 2275:
case 667:
case 62:
case 2912:
case 1155:
case 3181:
case 55:
case 1046:
case 1984:
case 1561:
case 1664:
case 3150:
case 2341:
case 499:
case 3853:
case 3542:
case 804:
case 558:
case 361:
case 3573:
case 1135:
case 1321:
case 472:
case 2557:
case 3833:
case 312:
case 2965:
case 1087:
case 628:
case 3084:
case 3946:
case 2005:
case 2513:
case 1043:
case 3856:
case 1424:
case 22:
case 3501:
case 1538:
case 1072:
case 839:
case 3262:
case 3515:
case 3295:
case 1258:
case 75:
case 1894:
case 1337:
case 1316:
case 488:
case 1541:
case 2011:
case 1519:
case 1:
case 1299:
case 877:
case 95:
case 393:
case 258:
case 610:
case 2040:
case 105:
case 3322:
case 1502:
case 2992:
case 65:
case 2390:
case 2575:
case 2754:
case 3683:
case 1261:
case 2464:
case 491:
case 2399:
case 710:
case 3431:
case 1408:
case 3963:
case 910:
case 369:
case 3242:
case 3489:
case 2734:
case 1063:
case 210:
case 3451:
case 2338:
case 3761:
case 3799:
case 3686:
case 2624:
case 2407:
case 1029:
case 3354:
case 1238:
case 1795:
case 3468:
case 3025:
case 3966:
case 806:
case 758:
case 958:
case 103:
case 3790:
case 48:
case 2632:
case 3749:
case 3711:
case 3509:
case 2229:
case 2038:
case 1013:
case 2995:
case 2703:
case 3886:
case 1505:
case 46:
case 2478:
case 2220:
case 725:
case 2976:
case 133:
case 740:
case 1320:
case 940:
case 3512:
case 2587:
case 2655:
case 1934:
case 3916:
case 625:
case 1057:
case 135:
case 2942:
case 3474:
case 1185:
case 3151:
case 2973:
case 587:
case 2635:
case 2311:
case 2061:
case 2349:
case 623:
case 2546:
case 3180:
case 2706:
case 3913:
case 1844:
case 1523:
case 3847:
case 1211:
case 1591:
case 1694:
case 496:
case 2852:
case 923:
case 2107:
case 1482:
case 2090:
case 3168:
case 3371:
case 4014:
case 1387:
case 1807:
case 1093:
case 3656:
case 287:
case 3804:
case 2915:
case 2326:
case 1021:
case 2529:
case 2272:
case 483:
case 2144:
case 3200:
case 457:
case 955:
case 834:
case 1979:
case 809:
case 3450:
case 3975:
case 381:
case 525:
case 3769:
case 1372:
case 655:
case 3633:
case 1343:
case 2885:
case 2305:
case 2287:
case 1455:
case 1970:
case 3996:
case 3481:
case 687:
case 342:
case 1712:
case 160:
case 2002:
case 822:
case 3726:
case 1864:
case 2784:
case 2323:
case 653:
case 3867:
case 2808:
case 2391:
case 494:
case 2388:
case 3921:
case 1288:
case 2041:
case 1291:
case 1614:
case 2019:
case 1549:
case 787:
case 3617:
case 485:
case 3993:
case 987:
case 753:
case 255:
case 2962:
case 2682:
case 1540:
case 2360:
case 3127:
case 108:
case 953:
case 1700:
case 1750:
case 1460:
case 1577:
case 322:
case 250:
case 3230:
case 3671:
case 199:
case 842:
case 274:
case 1798:
case 3465:
case 2861:
case 1781:
case 3239:
case 1394:
case 3834:
case 1759:
case 2927:
case 1986:
case 2611:
case 1423:
case 3603:
case 1666:
case 3162:
case 165:
case 1582:
case 2121:
case 2640:
case 1405:
case 1813:
case 650:
case 1629:
case 674:
case 2797:
case 3944:
case 3086:
case 2472:
case 218:
case 1947:
case 520:
case 2032:
case 91:
case 1141:
case 2578:
case 3400:
case 163:
case 1620:
case 71:
case 3115:
case 866:
case 1730:
case 43:
case 309:
case 2196:
case 576:
case 3250:
case 545:
case 2175:
case 1983:
case 1857:
case 1663:
case 3606:
case 3298:
case 3518:
case 3854:
case 1102:
case 1739:
case 2487:
case 1928:
case 191:
case 1875:
case 352:
case 1277:
case 3530:
case 220:
case 2660:
case 2802:
case 2951:
case 2733:
case 1314:
case 3870:
case 3173:
case 3539:
case 643:
case 1718:
case 3142:
case 2968:
case 2756:
case 2841:
case 2466:
case 2819:
case 3353:
case 2214:
case 2691:
case 2594:
case 907:
case 743:
case 2377:
case 245:
case 130:
case 4:
case 1672:
case 2717:
case 620:
case 1893:
case 3176:
case 4020:
case 2605:
case 403:
case 4029:
case 2278:
case 1199:
case 2420:
case 745:
case 550:
case 3782:
case 3550:
case 720:
case 301:
case 3492:
case 2931:
case 2753:
case 3581:
case 2463:
case 3356:
case 2626:
case 3559:
case 2085:
case 676:
case 3964:
case 1967:
case 771:
case 3473:
case 3280:
case 390:
case 2974:
case 433:
case 1953:
case 2457:
case 1285:
case 3033:
case 2826:
case 3304:
case 237:
case 1887:
case 2767:
case 3914:
case 671:
case 2805:
case 913:
case 2385:
case 16:
case 1621:
case 2207:
case 3401:
case 1693:
case 3056:
case 713:
case 3268:
case 1872:
case 895:
case 306:
case 331:
case 1078:
case 1149:
case 4013:
case 915:
case 2888:
case 1956:
case 1768:
case 3495:
case 1458:
case 2308:
case 1014:
case 213:
case 2619:
case 3367:
case 2704:
case 377:
case 3978:
case 2082:
case 893:
case 2610:
case 592:
case 1552:
case 271:
case 3679:
case 2163:
case 2860:
case 100:
case 1780:
case 937:
case 435:
case 1751:
case 3785:
case 3231:
case 2437:
case 2869:
case 2918:
case 3192:
case 3580:
case 861:
case 979:
case 2324:
case 2783:
case 1585:
case 1863:
case 648:
case 2055:
case 513:
case 812:
case 2939:
case 1613:
case 1224:
case 3227:
case 2638:
case 3825:
case 886:
case 948:
case 1820:
case 748:
case 40:
case 94:
case 692:
case 3100:
case 1094:
case 1441:
case 2699:
case 2786:
case 1866:
case 3803:
case 74:
case 408:
case 2658:
case 3415:
case 1252:
case 1105:
case 2143:
case 3109:
case 2172:
case 2950:
case 2475:
case 792:
case 1126:
case 64:
case 992:
case 2352:
case 2187:
case 194:
case 279:
case 3622:
case 1748:
case 3112:
case 1508:
case 3531:
case 3634:
case 4075:
case 2981:
case 3347:
case 460:
case 2959:
case 2035:
case 1717:
case 1736:
case 2893:
case 3609:
case 107:
case 28:
case 3256:
case 3068:
case 1605:
case 930:
case 846:
case 326:
case 875:
case 143:
case 3600:
case 1278:
case 2199:
case 1420:
case 730:
case 599:
case 1116:
case 1137:
case 370:
case 3908:
case 1753:
case 3406:
case 1463:
case 1626:
case 630:
case 2967:
case 2875:
case 563:
case 1980:
case 3471:
case 1382:
case 1660:
case 3154:
case 68:
case 1802:
case 3985:
case 1951:
case 2535:
case 1733:
case 2896:
case 1008:
case 3031:
case 2646:
case 3253:
case 811:
case 4040:
case 1756:
case 1466:
case 3403:
case 1819:
case 1214:
case 2411:
case 1691:
case 78:
case 2449:
case 3217:
case 3236:
case 1688:
case 397:
case 2904:
case 873:
case 572:
case 1113:
case 1377:
case 3374:
case 1810:
case 230:
case 4049:
case 288:
case 176:
case 3381:
case 3556:
case 1443:
case 3801:
case 3398:
case 1838:
case 1024:
case 3359:
case 2629:
case 1797:
case 1472:
case 3794:
case 1032:
case 3350:
case 263:
case 2620:
case 591:
case 356:
case 3952:
case 965:
case 467:
case 42:
case 2730:
case 272:
case 3692:
case 844:
case 324:
case 1196:
case 588:
case 530:
case 3842:
case 1175:
case 3533:
case 665:
case 2983:
case 2426:
case 2928:
case 3484:
case 174:
case 4060:
case 819:
case 1861:
case 1446:
case 663:
case 2394:
case 2816:
case 2837:
case 2759:
case 3924:
case 1927:
case 1611:
case 1514:
case 1649:
case 428:
case 1899:
case 2666:
case 1052:
case 4091:
case 763:
case 3876:
case 4088:
case 1890:
case 265:
case 11:
case 1640:
case 963:
case 4023:
case 2727:
case 957:
case 3845:
case 2094:
case 87:
case 1244:
case 1699:
case 1786:
case 2866:
case 1811:
case 1658:
case 1849:
case 4010:
case 2252:
case 1143:
case 783:
case 2410:
case 1690:
case 1475:
case 657:
case 302:
case 2126:
case 3030:
case 1352:
case 2402:
case 527:
case 2748:
case 2508:
case 3039:
case 2616:
case 1981:
case 2637:
case 3567:
case 4002:
case 683:
case 1959:
case 1035:
case 192:
case 849:
case 3642:
case 1930:
case 329:
case 1146:
case 596:
case 3673:
case 794:
case 1783:
case 2863:
case 2160:
case 3327:
case 1728:
case 3081:
case 1939:
case 2613:
case 2224:
case 1421:
case 257:
case 3504:
case 1747:
case 694:
case 2188:
case 500:
case 878:
case 2191:
case 1888:
case 2956:
case 3615:
case 2458:
case 3331:
case 1891:
case 1308:
case 1544:
case 1823:
case 2364:
case 2014:
case 113:
case 1120:
case 2499:
case 425:
case 4058:
case 1082:
case 1610:
case 1602:
case 3422:
case 171:
case 1860:
case 200:
case 2780:
case 2675:
case 882:
case 2751:
case 440:
case 2933:
case 2461:
case 2846:
case 3267:
case 3434:
case 2208:
case 2696:
case 3528:
case 1918:
case 3812:
case 700:
case 321:
case 841:
case 1974:
case 2731:
case 3171:
case 3368:
case 1457:
case 2285:
case 2307:
case 2887:
case 696:
case 3764:
case 2917:
case 2936:
case 1385:
case 2438:
case 2140:
case 2693:
case 3809:
case 115:
case 423:
case 3380:
case 3662:
case 996:
case 2078:
case 2111:
case 2149:
case 3982:
case 2532:
case 6:
case 3850:
case 821:
case 4085:
case 3092:
case 3716:
case 1734:
case 3859:
case 2313:
case 3648:
case 605:
case 1338:
case 1855:
case 3881:
case 3949:
case 2182:
case 2357:
case 1407:
case 1624:
case 2238:
case 3627:
case 1213:
case 1945:
case 2903:
case 905:
case 407:
case 580:
case 1114:
case 203:
case 3136:
case 705:
case 3117:
case 2258:
case 2894:
case 747:
case 2337:
case 1178:
case 1361:
case 476:
case 2:
case 2299:
case 1049:
case 903:
case 158:
case 2290:
case 2510:
case 3156:
case 703:
case 647:
case 3579:
case 2742:
case 1992:
case 382:
case 2773:
case 1575:
case 1754:
case 420:
case 2261:
case 3839:
case 1399:
case 3467:
case 3570:
case 1358:
case 1596:
case 1216:
case 2906:
case 1835:
case 3680:
case 1779:
case 738:
case 3012:
case 3362:
case 349:
case 3960:
case 2321:
case 1557:
case 1685:
case 3818:
case 2393:
case 1026:
case 5:
case 2087:
case 3689:
case 3796:
case 1770:
case 638:
case 1005:
case 3923:
case 1513:
case 680:
case 4032:
case 2715:
case 2043:
case 3668:
case 1221:
case 2424:
case 3009:
case 2538:
case 3991:
case 3486:
case 2432:
case 378:
case 3197:
case 418:
case 4024:
case 1909:
case 3721:
case 37:
case 2241:
case 1091:
case 2814:
case 2396:
case 41:
case 3793:
case 2452:
case 1882:
case 2210:
case 2590:
case 2375:
case 1877:
case 3874:
case 1912:
case 503:
case 547:
case 3926:
case 3065:
case 3315:
case 73:
case 1608:
case 3270:
case 1516:
case 2046:
case 1537:
case 2984:
case 2664:
case 474:
case 1319:
case 1069:
case 2260:
case 2712:
case 4035:
case 3674:
case 260:
case 1784:
case 1246:
case 3787:
case 1808:
case 2269:
case 1388:
case 2709:
case 2291:
case 1019:
case 3497:
case 2549:
case 70:
case 2223:
case 2346:
case 1566:
case 3365:
case 832:
case 533:
case 2124:
case 1010:
case 1360:
case 3186:
case 2700:
case 2152:
case 2093:
case 2807:
case 1243:
case 20:
case 3941:
case 2678:
case 1144:
case 153:
case 908:
case 3147:
case 1520:
case 3312:
case 856:
case 3062:
case 708:
case 44:
case 2979:
case 960:
case 517:
case 824:
case 344:
case 3902:
case 3128:
case 3880:
case 3183:
case 2372:
case 3309:
case 3506:
case 1885:
case 3851:
case 3618:
case 2226:
case 3746:
case 608:
case 2455:
case 1287:
case 2792:
case 2477:
case 235:
case 3630:
case 1942:
case 2185:
case 2560:
case 1635:
case 4077:
case 1311:
case 471:
case 2016:
case 2037:
case 3763:
case 1706:
case 3345:
case 50:
case 3095:
case 2844:
case 1058:
case 1266:
case 2211:
case 1414:
case 2694:
case 1099:
case 3417:
case 2249:
case 2588:
case 3729:
case 1852:
case 1107:
case 217:
case 413:
case 635:
case 2745:
case 1543:
case 1824:
case 1995:
case 3958:
case 3766:
case 2505:
case 375:
case 3392:
case 826:
case 1832:
case 717:
case 1220:
case 560:
case 917:
case 233:
case 3650:
case 2320:
case 508:
case 935:
case 3042:
case 854:
case 1655:
case 3584:
case 3681:
case 617:
case 2526:
case 3698:
case 3433:
case 2057:
case 2329:
case 3961:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751896802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,];
var gg_b = "1751896802/";

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
