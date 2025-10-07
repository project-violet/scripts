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
case 2442:
case 1422:
case 325:
case 319:
case 1610:
case 1653:
case 3501:
case 3418:
case 2982:
case 2323:
case 905:
case 742:
case 2600:
case 576:
case 96:
case 539:
case 2524:
case 1487:
case 1544:
case 1837:
case 1062:
case 2558:
case 3169:
case 4030:
case 42:
case 2531:
case 2426:
case 3962:
case 2213:
case 1888:
case 1947:
case 2927:
case 1203:
case 891:
case 706:
case 2190:
case 716:
case 1830:
case 2090:
case 1480:
case 1969:
case 23:
case 8:
case 4088:
case 180:
case 3147:
case 1794:
case 3637:
case 146:
case 2197:
case 2920:
case 1563:
case 281:
case 199:
case 933:
case 2668:
case 3673:
case 1711:
case 392:
case 929:
case 1499:
case 997:
case 864:
case 3261:
case 644:
case 813:
case 127:
case 835:
case 102:
case 204:
case 3647:
case 3381:
case 4086:
case 1409:
case 3756:
case 3357:
case 2419:
case 3137:
case 2697:
case 2791:
case 460:
case 3030:
case 766:
case 190:
case 920:
case 291:
case 1117:
case 814:
case 2714:
case 189:
case 3910:
case 3953:
case 382:
case 2107:
case 2361:
case 863:
case 1704:
case 419:
case 2000:
case 1053:
case 425:
case 3559:
case 2666:
case 2068:
case 1333:
case 1153:
case 2759:
case 2100:
case 1293:
case 2772:
case 2007:
case 264:
case 369:
case 755:
case 2432:
case 213:
case 2882:
case 1017:
case 804:
case 2689:
case 235:
case 1365:
case 1937:
case 2454:
case 3591:
case 3640:
case 1448:
case 2428:
case 3130:
case 1521:
case 2690:
case 3313:
case 3350:
case 2:
case 4040:
case 3669:
case 91:
case 1847:
case 1988:
case 956:
case 1952:
case 1979:
case 949:
case 1014:
case 3517:
case 1573:
case 1159:
case 452:
case 3079:
case 1615:
case 3801:
case 3229:
case 1172:
case 3914:
case 2605:
case 1299:
case 2710:
case 1537:
case 3991:
case 1844:
case 2824:
case 2678:
case 2941:
case 1280:
case 4035:
case 126:
case 1091:
case 2831:
case 3271:
case 3319:
case 3635:
case 1934:
case 2195:
case 996:
case 1588:
case 2095:
case 543:
case 1312:
case 3121:
case 3045:
case 2302:
case 1403:
case 577:
case 3354:
case 3134:
case 2925:
case 1945:
case 1863:
case 2413:
case 731:
case 3292:
case 2611:
case 3553:
case 3815:
case 3510:
case 1601:
case 3332:
case 1072:
case 3152:
case 345:
case 1707:
case 2104:
case 2717:
case 872:
case 3972:
case 1114:
case 2194:
case 1236:
case 1935:
case 2762:
case 4021:
case 1569:
case 3727:
case 1396:
case 1248:
case 3144:
case 3063:
case 2078:
case 471:
case 3621:
case 4034:
case 1540:
case 1691:
case 544:
case 1963:
case 159:
case 658:
case 1493:
case 3915:
case 3782:
case 1614:
case 4052:
case 2232:
case 2111:
case 1015:
case 3679:
case 2392:
case 1367:
case 3872:
case 1879:
case 1659:
case 623:
case 2329:
case 2105:
case 1349:
case 2011:
case 3901:
case 3814:
case 2582:
case 767:
case 272:
case 3891:
case 2371:
case 2219:
case 2958:
case 1790:
case 1586:
case 3135:
case 1209:
case 3044:
case 4045:
case 3562:
case 2856:
case 986:
case 2527:
case 1484:
case 851:
case 676:
case 34:
case 2094:
case 3252:
case 457:
case 4016:
case 142:
case 244:
case 349:
case 3192:
case 2632:
case 2489:
case 3593:
case 1929:
case 1214:
case 3118:
case 2204:
case 712:
case 106:
case 681:
case 3469:
case 2784:
case 1187:
case 3221:
case 1331:
case 3071:
case 1151:
case 3980:
case 3440:
case 1146:
case 2874:
case 2126:
case 1138:
case 2490:
case 1324:
case 1971:
case 1358:
case 4002:
case 1080:
case 3486:
case 572:
case 440:
case 2898:
case 3836:
case 2276:
case 2975:
case 486:
case 3848:
case 2026:
case 780:
case 3447:
case 15:
case 1609:
case 2295:
case 1802:
case 3171:
case 2335:
case 3245:
case 1087:
case 2812:
case 2155:
case 2497:
case 3922:
case 3383:
case 3092:
case 2908:
case 3305:
case 1918:
case 1022:
case 2793:
case 799:
case 1325:
case 2998:
case 2345:
case 3235:
case 3936:
case 3671:
case 166:
case 2655:
case 2119:
case 2703:
case 2875:
case 3948:
case 3838:
case 4071:
case 2054:
case 2278:
case 3263:
case 1048:
case 3846:
case 2912:
case 2205:
case 952:
case 613:
case 1417:
case 1916:
case 1215:
case 3822:
case 2283:
case 449:
case 2468:
case 789:
case 4029:
case 898:
case 1818:
case 1410:
case 1453:
case 3304:
case 551:
case 3116:
case 3618:
case 2860:
case 4092:
case 762:
case 2939:
case 1829:
case 2849:
case 1201:
case 4018:
case 2211:
case 2379:
case 3899:
case 3244:
case 1646:
case 1757:
case 1356:
case 3585:
case 3880:
case 3909:
case 2019:
case 94:
case 1341:
case 3503:
case 3770:
case 1651:
case 591:
case 2843:
case 1732:
case 2965:
case 195:
case 2373:
case 2539:
case 478:
case 823:
case 3706:
case 305:
case 3161:
case 3307:
case 2933:
case 773:
case 2476:
case 2388:
case 2013:
case 2050:
case 876:
case 1684:
case 1003:
case 3985:
case 3798:
case 40:
case 1728:
case 2157:
case 1754:
case 2598:
case 3421:
case 41:
case 3774:
case 1185:
case 1491:
case 456:
case 230:
case 18:
case 3434:
case 1502:
case 2113:
case 2330:
case 3240:
case 2512:
case 329:
case 3452:
case 315:
case 4023:
case 107:
case 333:
case 5:
case 3739:
case 2864:
case 909:
case 858:
case 1414:
case 1603:
case 1755:
case 3230:
case 2870:
case 2575:
case 3444:
case 3390:
case 900:
case 3984:
case 19:
case 2780:
case 514:
case 3749:
case 1193:
case 1592:
case 378:
case 3522:
case 1210:
case 2799:
case 223:
case 3760:
case 2411:
case 2508:
case 239:
case 1401:
case 759:
case 2943:
case 2560:
case 2865:
case 167:
case 2405:
case 824:
case 1217:
case 3993:
case 3273:
case 2268:
case 2549:
case 1529:
case 4061:
case 738:
case 2483:
case 3599:
case 3366:
case 2833:
case 429:
case 1742:
case 2657:
case 3435:
case 1726:
case 830:
case 3580:
case 2746:
case 3397:
case 2386:
case 2478:
case 31:
case 1571:
case 806:
case 1998:
case 1345:
case 2109:
case 2713:
case 1119:
case 1570:
case 3012:
case 3928:
case 266:
case 1896:
case 3098:
case 1278:
case 2048:
case 1785:
case 1028:
case 3826:
case 3174:
case 1054:
case 3359:
case 842:
case 3139:
case 1032:
case 1867:
case 3372:
case 3842:
case 4060:
case 526:
case 375:
case 2818:
case 4049:
case 3660:
case 703:
case 255:
case 2453:
case 418:
case 1400:
case 1939:
case 3106:
case 177:
case 2829:
case 1849:
case 1642:
case 2622:
case 1211:
case 1379:
case 3039:
case 1132:
case 143:
case 1533:
case 1352:
case 4008:
case 4075:
case 1154:
case 3224:
case 3919:
case 1334:
case 1626:
case 3074:
case 2781:
case 1294:
case 690:
case 2356:
case 3855:
case 341:
case 1974:
case 3112:
case 816:
case 3391:
case 2009:
case 2871:
case 2651:
case 3049:
case 2122:
case 1543:
case 2523:
case 627:
case 1960:
case 4006:
case 1489:
case 1839:
case 2099:
case 3167:
case 2929:
case 1949:
case 3060:
case 928:
case 763:
case 714:
case 468:
case 3108:
case 3819:
case 1784:
case 2291:
case 646:
case 37:
case 680:
case 970:
case 866:
case 3420:
case 2648:
case 2146:
case 1628:
case 4012:
case 1344:
case 2324:
case 1898:
case 3096:
case 1363:
case 2180:
case 574:
case 441:
case 2609:
case 1295:
case 1155:
case 4074:
case 1497:
case 1619:
case 1335:
case 3225:
case 3926:
case 2992:
case 704:
case 3942:
case 3482:
case 1564:
case 2259:
case 2272:
case 3149:
case 1793:
case 176:
case 4077:
case 1494:
case 2603:
case 1613:
case 3771:
case 3458:
case 1870:
case 3424:
case 3857:
case 29:
case 2685:
case 1369:
case 321:
case 3526:
case 3431:
case 2592:
case 984:
case 1200:
case 3633:
case 3729:
case 2193:
case 3143:
case 1799:
case 2253:
case 3542:
case 123:
case 4033:
case 1411:
case 2861:
case 817:
case 139:
case 638:
case 546:
case 1207:
case 1405:
case 1549:
case 2529:
case 3164:
case 3043:
case 158:
case 2093:
case 527:
case 4070:
case 1738:
case 3362:
case 1877:
case 1746:
case 3670:
case 1478:
case 1751:
case 3813:
case 88:
case 3555:
case 1787:
case 599:
case 1843:
case 2732:
case 590:
case 3033:
case 3317:
case 3065:
case 4064:
case 217:
case 2472:
case 1933:
case 3716:
case 3282:
case 3519:
case 1476:
case 961:
case 2684:
case 1181:
case 89:
case 1297:
case 3913:
case 3950:
case 1736:
case 1495:
case 3077:
case 3227:
case 2728:
case 1748:
case 3177:
case 1057:
case 1598:
case 231:
case 3441:
case 562:
case 3554:
case 2103:
case 3957:
case 1290:
case 1512:
case 3220:
case 3981:
case 1709:
case 1113:
case 3456:
case 994:
case 2516:
case 207:
case 2961:
case 3133:
case 3310:
case 3532:
case 673:
case 2414:
case 1864:
case 948:
case 3643:
case 2409:
case 3627:
case 1697:
case 3734:
case 301:
case 3576:
case 517:
case 4027:
case 921:
case 3890:
case 3595:
case 595:
case 461:
case 2545:
case 1820:
case 2840:
case 191:
case 3474:
case 289:
case 3900:
case 3439:
case 337:
case 3682:
case 2117:
case 1714:
case 1361:
case 1107:
case 4082:
case 1000:
case 3752:
case 393:
case 3264:
case 655:
case 932:
case 2110:
case 2579:
case 3907:
case 1068:
case 3866:
case 899:
case 743:
case 2552:
case 2293:
case 483:
case 1772:
case 448:
case 1759:
case 58:
case 1100:
case 262:
case 3968:
case 2973:
case 827:
case 1882:
case 2017:
case 1689:
case 2365:
case 1432:
case 113:
case 3504:
case 2448:
case 1428:
case 2795:
case 2886:
case 2436:
case 2521:
case 522:
case 507:
case 2377:
case 3897:
case 2847:
case 846:
case 2534:
case 3966:
case 798:
case 2422:
case 59:
case 163:
case 3082:
case 1189:
case 2873:
case 3868:
case 2705:
case 2653:
case 1982:
case 2343:
case 1715:
case 437:
case 744:
case 1097:
case 3475:
case 2544:
case 3594:
case 2986:
case 3763:
case 2451:
case 3277:
case 65:
case 3997:
case 401:
case 3120:
case 2446:
case 1531:
case 2438:
case 2947:
case 1927:
case 2203:
case 2830:
case 1090:
case 3270:
case 411:
case 2969:
case 3990:
case 280:
case 3578:
case 606:
case 2794:
case 246:
case 585:
case 1281:
case 1197:
case 299:
case 394:
case 1166:
case 2711:
case 3460:
case 3182:
case 2617:
case 1089:
case 3583:
case 227:
case 104:
case 1607:
case 4041:
case 1194:
case 2236:
case 3346:
case 3298:
case 2797:
case 3747:
case 2248:
case 3656:
case 3641:
case 3786:
case 3131:
case 2963:
case 4056:
case 2493:
case 3589:
case 3206:
case 3905:
case 259:
case 1318:
case 1083:
case 428:
case 873:
case 354:
case 2614:
case 723:
case 968:
case 2766:
case 3322:
case 1392:
case 2101:
case 506:
case 667:
case 516:
case 2659:
case 2879:
case 2115:
case 2001:
case 3399:
case 2672:
case 1329:
case 3239:
case 1011:
case 453:
case 3464:
case 3911:
case 1183:
case 1582:
case 274:
case 172:
case 1958:
case 2790:
case 3625:
case 3031:
case 1219:
case 3994:
case 2209:
case 1695:
case 2821:
case 3740:
case 2586:
case 336:
case 69:
case 4025:
case 1856:
case 3058:
case 3380:
case 850:
case 3274:
case 1676:
case 1178:
case 2834:
case 2979:
case 2014:
case 908:
case 3507:
case 2952:
case 1683:
case 2615:
case 2339:
case 3249:
case 2172:
case 2700:
case 566:
case 2159:
case 2573:
case 607:
case 3568:
case 328:
case 3904:
case 1678:
case 1176:
case 2537:
case 1858:
case 3894:
case 1941:
case 2921:
case 3125:
case 2091:
case 3309:
case 1831:
case 3730:
case 226:
case 631:
case 2588:
case 1195:
case 3041:
case 2530:
case 3141:
case 1095:
case 3477:
case 2251:
case 4024:
case 2287:
case 1302:
case 3631:
case 3976:
case 436:
case 1694:
case 3737:
case 2238:
case 3348:
case 3296:
case 250:
case 2403:
case 1413:
case 1450:
case 4031:
case 555:
case 1925:
case 1226:
case 2945:
case 3336:
case 1076:
case 3624:
case 3500:
case 2768:
case 3805:
case 3773:
case 617:
case 3465:
case 2707:
case 3208:
case 1104:
case 1316:
case 724:
case 3433:
case 1717:
case 2649:
case 1629:
case 808:
case 1733:
case 959:
case 1822:
case 3916:
case 3892:
case 2372:
case 3699:
case 268:
case 3417:
case 2660:
case 442:
case 570:
case 3818:
case 1016:
case 157:
case 275:
case 611:
case 2954:
case 2012:
case 1395:
case 3713:
case 87:
case 3325:
case 3750:
case 1936:
case 2581:
case 1777:
case 1263:
case 2826:
case 2174:
case 3048:
case 2098:
case 3036:
case 1838:
case 1488:
case 3680:
case 45:
case 2198:
case 1430:
case 3781:
case 2696:
case 553:
case 4051:
case 3638:
case 1244:
case 2919:
case 3757:
case 4087:
case 1770:
case 4038:
case 3009:
case 2391:
case 140:
case 3871:
case 2231:
case 2112:
case 3341:
case 601:
case 2855:
case 186:
case 2550:
case 938:
case 693:
case 3410:
case 1618:
case 1116:
case 355:
case 4022:
case 637:
case 2039:
case 1692:
case 2667:
case 1899:
case 3829:
case 818:
case 684:
case 1809:
case 2241:
case 1071:
case 1602:
case 1980:
case 3151:
case 27:
case 1469:
case 2819:
case 2175:
case 2612:
case 3187:
case 1234:
case 2698:
case 3324:
case 3636:
case 2955:
case 2256:
case 760:
case 1394:
case 2420:
case 3146:
case 1764:
case 208:
case 683:
case 1593:
case 3523:
case 1252:
case 1029:
case 868:
case 1311:
case 342:
case 725:
case 947:
case 2060:
case 875:
case 1616:
case 1118:
case 3816:
case 1383:
case 1129:
case 3272:
case 3259:
case 218:
case 536:
case 792:
case 2639:
case 1092:
case 3199:
case 2832:
case 2067:
case 2828:
case 2674:
case 1848:
case 1987:
case 2854:
case 3180:
case 1378:
case 1836:
case 3038:
case 950:
case 2225:
case 2926:
case 3087:
case 1946:
case 1245:
case 661:
case 316:
case 3462:
case 2427:
case 1447:
case 3051:
case 3609:
case 1171:
case 3802:
case 989:
case 1522:
case 3253:
case 417:
case 2633:
case 2729:
case 561:
case 495:
case 752:
case 134:
case 2771:
case 2458:
case 1551:
case 221:
case 1546:
case 2431:
case 2881:
case 3685:
case 1435:
case 2362:
case 1397:
case 1580:
case 3327:
case 1796:
case 11:
case 1775:
case 1288:
case 431:
case 2813:
case 2555:
case 156:
case 2670:
case 594:
case 1661:
case 1993:
case 2718:
case 3923:
case 1708:
case 367:
case 1366:
case 3742:
case 3093:
case 654:
case 407:
case 3529:
case 3684:
case 1712:
case 1509:
case 593:
case 1903:
case 1247:
case 3085:
case 3728:
case 771:
case 584:
case 2950:
case 2913:
case 3262:
case 2033:
case 1368:
case 395:
case 1161:
case 2282:
case 2716:
case 501:
case 3459:
case 832:
case 1706:
case 2165:
case 999:
case 322:
case 511:
case 3516:
case 4093:
case 129:
case 1061:
case 2643:
case 1623:
case 1739:
case 1300:
case 3414:
case 485:
case 2353:
case 927:
case 2310:
case 902:
case 2532:
case 2133:
case 3961:
case 3693:
case 2554:
case 3491:
case 1548:
case 2528:
case 1421:
case 331:
case 2441:
case 980:
case 2957:
case 3502:
case 1434:
case 3103:
case 3719:
case 1884:
case 284:
case 182:
case 3704:
case 389:
case 3010:
case 1572:
case 1173:
case 412:
case 2264:
case 1357:
case 201:
case 641:
case 1137:
case 3662:
case 3869:
case 1381:
case 1647:
case 861:
case 100:
case 1756:
case 3545:
case 2474:
case 1741:
case 1686:
case 3284:
case 3370:
case 2595:
case 390:
case 2890:
case 786:
case 3436:
case 1350:
case 1313:
case 2745:
case 3886:
case 1088:
case 480:
case 2620:
case 3448:
case 3847:
case 3377:
case 1037:
case 2897:
case 2412:
case 967:
case 3293:
case 1917:
case 894:
case 2907:
case 427:
case 2866:
case 1223:
case 3552:
case 2243:
case 3153:
case 169:
case 2504:
case 3017:
case 3365:
case 2968:
case 883:
case 1514:
case 801:
case 490:
case 2763:
case 3778:
case 2594:
case 532:
case 160:
case 2475:
case 3544:
case 1169:
case 3947:
case 1086:
case 1630:
case 2496:
case 1140:
case 2735:
case 2997:
case 2082:
case 995:
case 884:
case 2467:
case 3422:
case 4010:
case 2966:
case 2265:
case 125:
case 489:
case 917:
case 2408:
case 2511:
case 1501:
case 3873:
case 2393:
case 2460:
case 462:
case 1515:
case 1853:
case 294:
case 2800:
case 2505:
case 922:
case 907:
case 3364:
case 327:
case 302:
case 109:
case 3499:
case 2182:
case 1261:
case 3969:
case 2270:
case 3535:
case 1688:
case 1731:
case 3162:
case 1637:
case 3794:
case 1069:
case 98:
case 380:
case 1471:
case 2990:
case 2127:
case 1147:
case 2744:
case 2443:
case 1423:
case 447:
case 1915:
case 152:
case 254:
case 359:
case 765:
case 787:
case 2589:
case 3493:
case 57:
case 1859:
case 4014:
case 1652:
case 3015:
case 1872:
case 828:
case 3367:
case 3101:
case 3766:
case 2322:
case 778:
case 720:
case 2656:
case 3569:
case 3396:
case 2124:
case 2876:
case 426:
case 1063:
case 2338:
case 1144:
case 3935:
case 3236:
case 870:
case 2298:
case 3691:
case 3845:
case 2786:
case 2212:
case 3963:
case 2978:
case 1202:
case 3375:
case 1621:
case 2387:
case 2641:
case 1720:
case 1355:
case 450:
case 1135:
case 3821:
case 3209:
case 1891:
case 1645:
case 2625:
case 2031:
case 71:
case 3790:
case 621:
case 3547:
case 3484:
case 3834:
case 2274:
case 1163:
case 2024:
case 1044:
case 1562:
case 2058:
case 2239:
case 3115:
case 3001:
case 3360:
case 374:
case 2911:
case 2804:
case 4059:
case 1814:
case 1901:
case 279:
case 2464:
case 853:
case 4072:
case 3374:
case 1034:
case 3280:
case 906:
case 1991:
case 3844:
case 1271:
case 1319:
case 1021:
case 2041:
case 326:
case 705:
case 4015:
case 2507:
case 3952:
case 373:
case 3979:
case 3014:
case 3299:
case 2811:
case 2904:
case 459:
case 1461:
case 228:
case 3573:
case 3159:
case 2568:
case 3339:
case 3615:
case 3172:
case 1229:
case 1510:
case 1179:
case 541:
case 2805:
case 2773:
case 4001:
case 729:
case 733:
case 3707:
case 879:
case 2883:
case 1045:
case 3287:
case 836:
case 2976:
case 2631:
case 2477:
case 3251:
case 3835:
case 3312:
case 2141:
case 2878:
case 2624:
case 2336:
case 1644:
case 3403:
case 916:
case 2737:
case 1328:
case 2348:
case 1134:
case 260:
case 1027:
case 3558:
case 2169:
case 3097:
case 800:
case 1475:
case 587:
case 3524:
case 161:
case 2630:
case 77:
case 2962:
case 3250:
case 1120:
case 3531:
case 520:
case 2492:
case 2817:
case 4000:
case 1807:
case 225:
case 314:
case 3442:
case 50:
case 1408:
case 3715:
case 403:
case 1868:
case 3066:
case 708:
case 2515:
case 194:
case 292:
case 3166:
case 1989:
case 413:
case 1800:
case 51:
case 1505:
case 1449:
case 4068:
case 304:
case 3607:
case 148:
case 1182:
case 1583:
case 1020:
case 2688:
case 3090:
case 3920:
case 3455:
case 2637:
case 810:
case 2724:
case 2471:
case 4:
case 2758:
case 1990:
case 3361:
case 2953:
case 2910:
case 282:
case 825:
case 1439:
case 303:
case 137:
case 1682:
case 1889:
case 2173:
case 3666:
case 2559:
case 3168:
case 414:
case 768:
case 2572:
case 939:
case 3000:
case 56:
case 193:
case 1752:
case 2137:
case 3697:
case 686:
case 200:
case 2756:
case 2647:
case 2741:
case 1721:
case 1474:
case 391:
case 2030:
case 3791:
case 2725:
case 2350:
case 1745:
case 2313:
case 741:
case 1498:
case 3541:
case 3690:
case 1620:
case 597:
case 1303:
case 3454:
case 2402:
case 1412:
case 111:
case 533:
case 2862:
case 1385:
case 3556:
case 1897:
case 515:
case 3772:
case 3100:
case 1406:
case 4089:
case 2416:
case 1866:
case 3068:
case 2073:
case 1907:
case 2223:
case 3882:
case 335:
case 269:
case 313:
case 3432:
case 2514:
case 958:
case 271:
case 1894:
case 2663:
case 3176:
case 3678:
case 557:
case 3858:
case 1056:
case 2319:
case 2271:
case 3457:
case 2021:
case 1041:
case 1125:
case 4078:
case 4005:
case 852:
case 3004:
case 944:
case 1260:
case 3710:
case 3753:
case 629:
case 4083:
case 1811:
case 1904:
case 2079:
case 1249:
case 1568:
case 633:
case 998:
case 2052:
case 586:
case 2152:
case 3242:
case 2510:
case 2553:
case 2179:
case 1267:
case 1500:
case 3611:
case 2292:
case 2218:
case 3717:
case 2972:
case 1208:
case 3104:
case 1433:
case 4011:
case 1788:
case 1631:
case 3302:
case 2121:
case 1141:
case 4094:
case 3450:
case 3413:
case 84:
case 1658:
case 1156:
case 3925:
case 1624:
case 3076:
case 1878:
case 351:
case 2644:
case 1336:
case 3694:
case 1737:
case 2328:
case 1348:
case 1995:
case 66:
case 2354:
case 2216:
case 252:
case 154:
case 596:
case 2423:
case 732:
case 1589:
case 1206:
case 3083:
case 3318:
case 3604:
case 3392:
case 2872:
case 2859:
case 4004:
case 3232:
case 3111:
case 1983:
case 2342:
case 1747:
case 3228:
case 2727:
case 3078:
case 1124:
case 871:
case 2144:
case 1158:
case 61:
case 3194:
case 2326:
case 2634:
case 3520:
case 1212:
case 1978:
case 1131:
case 1351:
case 549:
case 2035:
case 1895:
case 2135:
case 3841:
case 2355:
case 2720:
case 1740:
case 451:
case 3958:
case 2891:
case 3219:
case 3371:
case 24:
case 3527:
case 4095:
case 60:
case 2562:
case 1380:
case 3856:
case 1274:
case 1024:
case 2044:
case 3105:
case 3329:
case 845:
case 1239:
case 1566:
case 687:
case 977:
case 1399:
case 1911:
case 3183:
case 1804:
case 3582:
case 179:
case 988:
case 1464:
case 678:
case 2809:
case 2221:
case 1175:
case 4054:
case 1612:
case 17:
case 1196:
case 3490:
case 2440:
case 3126:
case 1955:
case 3489:
case 2192:
case 2029:
case 2279:
case 3543:
case 398:
case 3204:
case 1606:
case 2118:
case 692:
case 3466:
case 748:
case 2383:
case 1942:
case 54:
case 3967:
case 1008:
case 3806:
case 443:
case 3564:
case 2129:
case 3042:
case 2092:
case 1723:
case 2743:
case 1315:
case 1067:
case 1832:
case 1482:
case 794:
case 619:
case 1854:
case 3276:
case 3975:
case 1674:
case 1828:
case 2848:
case 3898:
case 2486:
case 3497:
case 1225:
case 2245:
case 2946:
case 3996:
case 886:
case 2938:
case 1427:
case 2584:
case 2447:
case 660:
case 1649:
case 2733:
case 1842:
case 793:
case 168:
case 1359:
case 669:
case 1139:
case 1372:
case 3205:
case 3468:
case 2473:
case 444:
case 784:
case 571:
case 175:
case 2765:
case 3808:
case 3570:
case 1928:
case 1012:
case 3655:
case 1954:
case 610:
case 3998:
case 2671:
case 2235:
case 2002:
case 4055:
case 2263:
case 3912:
case 3028:
case 1174:
case 3785:
case 1098:
case 896:
case 2376:
case 2838:
case 1696:
case 1198:
case 3577:
case 2880:
case 711:
case 3154:
case 1224:
case 1074:
case 2102:
case 2770:
case 2503:
case 600:
case 1855:
case 1513:
case 3019:
case 1112:
case 3321:
case 141:
case 3400:
case 1608:
case 377:
case 4042:
case 1761:
case 2304:
case 2692:
case 1039:
case 3379:
case 343:
case 1667:
case 3533:
case 972:
case 3849:
case 26:
case 3977:
case 2286:
case 3013:
case 1702:
case 3157:
case 3495:
case 1077:
case 3337:
case 3748:
case 820:
case 3181:
case 1913:
case 2445:
case 582:
case 3574:
case 3539:
case 914:
case 878:
case 2368:
case 2893:
case 3843:
case 3965:
case 865:
case 2161:
case 1317:
case 1065:
case 205:
case 834:
case 645:
case 2479:
case 1165:
case 215:
case 753:
case 2452:
case 297:
case 3864:
case 2623:
case 1133:
case 1353:
case 1310:
case 1532:
case 3404:
case 904:
case 3970:
case 1528:
case 1177:
case 2774:
case 3598:
case 2536:
case 3330:
case 1070:
case 1220:
case 2240:
case 3512:
case 3150:
case 81:
case 3113:
case 2884:
case 856:
case 1957:
case 981:
case 2434:
case 1143:
case 1064:
case 3799:
case 278:
case 1542:
case 903:
case 3567:
case 1729:
case 1633:
case 2749:
case 3964:
case 265:
case 2389:
case 1665:
case 339:
case 287:
case 323:
case 2760:
case 805:
case 132:
case 560:
case 1771:
case 3575:
case 3870:
case 1424:
case 2587:
case 2444:
case 3340:
case 3494:
case 376:
case 2230:
case 64:
case 121:
case 3780:
case 1431:
case 1526:
case 519:
case 991:
case 3369:
case 3877:
case 1362:
case 3746:
case 2885:
case 2397:
case 2435:
case 9:
case 2803:
case 3787:
case 21:
case 592:
case 2463:
case 3478:
case 1850:
case 3386:
case 1555:
case 430:
case 3405:
case 3943:
case 3560:
case 3833:
case 2366:
case 897:
case 3722:
case 3483:
case 3549:
case 913:
case 424:
case 1164:
case 652:
case 1792:
case 2273:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759860001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,];
var gg_b = "1759860001/";

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
