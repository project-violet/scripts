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
case 3860:
case 410:
case 327:
case 438:
case 2704:
case 1172:
case 3083:
case 715:
case 1067:
case 1604:
case 2338:
case 3644:
case 1582:
case 1029:
case 3823:
case 2972:
case 3483:
case 1467:
case 3564:
case 855:
case 666:
case 4012:
case 2052:
case 1113:
case 3258:
case 2950:
case 1924:
case 22:
case 546:
case 472:
case 1891:
case 58:
case 337:
case 2124:
case 276:
case 154:
case 2238:
case 506:
case 2688:
case 4056:
case 2246:
case 3074:
case 3163:
case 463:
case 1228:
case 3120:
case 2416:
case 1577:
case 3792:
case 1275:
case 361:
case 2987:
case 280:
case 3347:
case 3700:
case 557:
case 1810:
case 3247:
case 518:
case 2898:
case 2346:
case 3986:
case 1505:
case 1853:
case 883:
case 3979:
case 1514:
case 1801:
case 4053:
case 3225:
case 820:
case 3030:
case 2013:
case 3527:
case 3166:
case 3785:
case 3711:
case 1884:
case 1609:
case 2413:
case 1024:
case 3569:
case 2970:
case 857:
case 223:
case 2768:
case 1548:
case 1668:
case 830:
case 3325:
case 2343:
case 3983:
case 818:
case 3932:
case 1152:
case 1595:
case 539:
case 1297:
case 3959:
case 1139:
case 3086:
case 3618:
case 4091:
case 632:
case 3479:
case 3917:
case 3790:
case 178:
case 2939:
case 3486:
case 268:
case 1355:
case 132:
case 2869:
case 2034:
case 1557:
case 2661:
case 3454:
case 529:
case 1397:
case 2642:
case 806:
case 4076:
case 622:
case 3974:
case 137:
case 366:
case 1930:
case 354:
case 3699:
case 4026:
case 3582:
case 3533:
case 2510:
case 2744:
case 637:
case 1483:
case 3681:
case 2553:
case 127:
case 3615:
case 2814:
case 3876:
case 3067:
case 650:
case 3889:
case 793:
case 2805:
case 1986:
case 2022:
case 1417:
case 2576:
case 1059:
case 3231:
case 4062:
case 661:
case 3375:
case 2422:
case 1700:
case 93:
case 1017:
case 1247:
case 2600:
case 161:
case 3275:
case 770:
case 3577:
case 1347:
case 271:
case 524:
case 501:
case 3134:
case 284:
case 1954:
case 1163:
case 1074:
case 2920:
case 976:
case 3788:
case 3967:
case 703:
case 552:
case 125:
case 3152:
case 1932:
case 2895:
case 3856:
case 3694:
case 1508:
case 3548:
case 743:
case 635:
case 2132:
case 3929:
case 2857:
case 3024:
case 159:
case 1649:
case 1841:
case 2203:
case 1278:
case 989:
case 2512:
case 1569:
case 1711:
case 3170:
case 1166:
case 1527:
case 1862:
case 1225:
case 3609:
case 2611:
case 3884:
case 3837:
case 2463:
case 2537:
case 2584:
case 1974:
case 3742:
case 3519:
case 3812:
case 2063:
case 591:
case 3761:
case 1702:
case 2174:
case 3255:
case 2371:
case 2602:
case 1454:
case 923:
case 378:
case 1122:
case 1479:
case 3139:
case 3595:
case 1079:
case 2335:
case 2718:
case 2117:
case 1086:
case 3897:
case 611:
case 2965:
case 308:
case 2679:
case 382:
case 983:
case 1226:
case 4058:
case 3940:
case 2100:
case 1779:
case 2018:
case 348:
case 2380:
case 3503:
case 1620:
case 3212:
case 3461:
case 2896:
case 3855:
case 3988:
case 2192:
case 2280:
case 653:
case 3634:
case 1002:
case 407:
case 2049:
case 871:
case 3199:
case 3356:
case 3284:
case 3535:
case 1411:
case 3724:
case 2395:
case 3650:
case 3613:
case 4047:
case 2257:
case 929:
case 1878:
case 1011:
case 2803:
case 1241:
case 884:
case 3571:
case 2236:
case 456:
case 939:
case 1341:
case 2319:
case 3115:
case 2597:
case 3384:
case 3337:
case 3256:
case 2295:
case 2944:
case 571:
case 1538:
case 405:
case 946:
case 799:
case 1902:
case 201:
case 3353:
case 700:
case 2674:
case 3616:
case 445:
case 906:
case 241:
case 3875:
case 1774:
case 584:
case 98:
case 2806:
case 1759:
case 3040:
case 1400:
case 1847:
case 2190:
case 3639:
case 3440:
case 1118:
case 3253:
case 65:
case 1000:
case 2617:
case 2044:
case 2531:
case 187:
case 3391:
case 2205:
case 3194:
case 2507:
case 957:
case 3652:
case 2632:
case 3767:
case 2444:
case 1783:
case 1223:
case 2683:
case 918:
case 1732:
case 3168:
case 2377:
case 930:
case 1911:
case 3506:
case 1858:
case 1985:
case 2893:
case 2277:
case 920:
case 1360:
case 3376:
case 3291:
case 2305:
case 3389:
case 2766:
case 3109:
case 2111:
case 1546:
case 3663:
case 1442:
case 2308:
case 2188:
case 648:
case 589:
case 82:
case 3543:
case 2525:
case 682:
case 2734:
case 413:
case 2578:
case 311:
case 3326:
case 3620:
case 608:
case 1503:
case 229:
case 1988:
case 1461:
case 1312:
case 3165:
case 353:
case 148:
case 239:
case 3779:
case 1940:
case 3900:
case 2140:
case 1897:
case 83:
case 451:
case 1273:
case 3090:
case 9:
case 2327:
case 1115:
case 4028:
case 1672:
case 1181:
case 1301:
case 3362:
case 2068:
case 1256:
case 765:
case 2494:
case 1384:
case 283:
case 2915:
case 2999:
case 492:
case 1596:
case 296:
case 3085:
case 2713:
case 116:
case 880:
case 4031:
case 3825:
case 2843:
case 1650:
case 1724:
case 3485:
case 1535:
case 1199:
case 3521:
case 1440:
case 2298:
case 41:
case 3000:
case 1253:
case 3118:
case 1210:
case 1040:
case 3622:
case 218:
case 3847:
case 3400:
case 230:
case 2364:
case 1616:
case 721:
case 1088:
case 704:
case 3492:
case 2142:
case 3538:
case 2398:
case 3092:
case 1828:
case 833:
case 3666:
case 488:
case 889:
case 52:
case 1291:
case 246:
case 3360:
case 1109:
case 442:
case 2345:
case 206:
case 3985:
case 941:
case 1506:
case 3911:
case 28:
case 3223:
case 2245:
case 2081:
case 4055:
case 2994:
case 3783:
case 1767:
case 1168:
case 3732:
case 2667:
case 1551:
case 868:
case 1391:
case 469:
case 2752:
case 2415:
case 3260:
case 1652:
case 1194:
case 2821:
case 1289:
case 2982:
case 3473:
case 755:
case 2048:
case 1572:
case 3797:
case 450:
case 3953:
case 3164:
case 614:
case 1886:
case 3361:
case 328:
case 4083:
case 2820:
case 3755:
case 3412:
case 3261:
case 729:
case 1202:
case 1696:
case 4032:
case 1390:
case 1550:
case 1635:
case 2863:
case 3012:
case 2735:
case 2318:
case 2524:
case 2080:
case 3401:
case 2977:
case 4017:
case 2057:
case 3563:
case 1587:
case 1725:
case 1211:
case 1041:
case 3001:
case 4059:
case 1830:
case 1778:
case 2019:
case 1062:
case 874:
case 2703:
case 2457:
case 3991:
case 2678:
case 3084:
case 3520:
case 1603:
case 363:
case 2349:
case 783:
case 3989:
case 3056:
case 3976:
case 2914:
case 2160:
case 2036:
case 1105:
case 1385:
case 461:
case 2980:
case 3646:
case 244:
case 3728:
case 3566:
case 574:
case 3169:
case 221:
case 1300:
case 319:
case 720:
case 1292:
case 1180:
case 2265:
case 2822:
case 2433:
case 231:
case 2126:
case 435:
case 3410:
case 1148:
case 3053:
case 4030:
case 1392:
case 2647:
case 2751:
case 2033:
case 2948:
case 3240:
case 936:
case 2529:
case 3707:
case 3453:
case 267:
case 2405:
case 3489:
case 2936:
case 1539:
case 1195:
case 3076:
case 1832:
case 515:
case 4054:
case 1423:
case 3956:
case 2005:
case 3867:
case 2344:
case 677:
case 2793:
case 2658:
case 4086:
case 3091:
case 1157:
case 3984:
case 1758:
case 36:
case 1693:
case 4079:
case 3901:
case 940:
case 2919:
case 78:
case 1962:
case 1119:
case 2162:
case 1941:
case 999:
case 746:
case 2866:
case 2834:
case 314:
case 290:
case 1242:
case 2887:
case 3635:
case 628:
case 791:
case 579:
case 1755:
case 1412:
case 2469:
case 80:
case 2530:
case 249:
case 138:
case 3513:
case 2027:
case 3854:
case 1261:
case 893:
case 1953:
case 2008:
case 2110:
case 262:
case 454:
case 3290:
case 128:
case 466:
case 3886:
case 3302:
case 2408:
case 1342:
case 610:
case 2697:
case 1198:
case 1797:
case 1910:
case 3572:
case 375:
case 3114:
case 543:
case 3311:
case 2309:
case 3385:
case 812:
case 2189:
case 3105:
case 2294:
case 2586:
case 1145:
case 1989:
case 163:
case 503:
case 2579:
case 3960:
case 2268:
case 273:
case 752:
case 2554:
case 3062:
case 2813:
case 1001:
case 3603:
case 1520:
case 2368:
case 1037:
case 2191:
case 1401:
case 663:
case 3285:
case 1484:
case 2743:
case 3534:
case 1240:
case 1108:
case 734:
case 2498:
case 619:
case 4024:
case 512:
case 3817:
case 1453:
case 3747:
case 3651:
case 2532:
case 2927:
case 1169:
case 2816:
case 3874:
case 741:
case 3180:
case 119:
case 89:
case 3300:
case 1340:
case 1728:
case 299:
case 1646:
case 1288:
case 570:
case 200:
case 1912:
case 3570:
case 2969:
case 2746:
case 2315:
case 2381:
case 944:
case 2101:
case 2304:
case 879:
case 1638:
case 2137:
case 2184:
case 422:
case 3157:
case 50:
case 904:
case 921:
case 27:
case 3516:
case 3693:
case 16:
case 3758:
case 1956:
case 2445:
case 593:
case 931:
case 3832:
case 1076:
case 3023:
case 2045:
case 2215:
case 2721:
case 3460:
case 2517:
case 432:
case 1489:
case 2676:
case 3614:
case 2815:
case 651:
case 1229:
case 2370:
case 2421:
case 4042:
case 395:
case 3283:
case 2021:
case 536:
case 2592:
case 981:
case 408:
case 526:
case 3058:
case 2691:
case 2270:
case 849:
case 974:
case 2899:
case 2438:
case 1791:
case 3135:
case 2446:
case 540:
case 364:
case 1075:
case 2339:
case 3317:
case 692:
case 3274:
case 2216:
case 3359:
case 3196:
case 771:
case 160:
case 599:
case 1028:
case 2155:
case 3892:
case 2316:
case 1007:
case 3633:
case 1664:
case 2610:
case 3800:
case 3447:
case 2764:
case 1753:
case 660:
case 2239:
case 1840:
case 2798:
case 3515:
case 2653:
case 3217:
case 2601:
case 3425:
case 840:
case 29:
case 3762:
case 3078:
case 2684:
case 3958:
case 3885:
case 2938:
case 3025:
case 800:
case 2502:
case 11:
case 243:
case 2313:
case 397:
case 203:
case 573:
case 2894:
case 1121:
case 2656:
case 2350:
case 3695:
case 669:
case 1608:
case 2387:
case 2131:
case 1773:
case 3568:
case 3279:
case 142:
case 958:
case 1931:
case 3151:
case 836:
case 3890:
case 509:
case 1928:
case 1669:
case 1861:
case 3254:
case 826:
case 3386:
case 3802:
case 1712:
case 1455:
case 3106:
case 2585:
case 2287:
case 2234:
case 1627:
case 87:
case 2128:
case 642:
case 453:
case 3329:
case 3143:
case 776:
case 695:
case 2777:
case 4090:
case 72:
case 1677:
case 1383:
case 2623:
case 3645:
case 107:
case 195:
case 313:
case 1232:
case 1723:
case 567:
case 1283:
case 3229:
case 2366:
case 2705:
case 3789:
case 2660:
case 215:
case 3776:
case 2540:
case 1760:
case 1605:
case 4085:
case 1504:
case 3698:
case 3407:
case 3753:
case 1217:
case 1047:
case 993:
case 1515:
case 1581:
case 2782:
case 865:
case 3007:
case 1374:
case 2733:
case 664:
case 3475:
case 281:
case 2322:
case 2406:
case 780:
case 3028:
case 544:
case 1359:
case 986:
case 3955:
case 1135:
case 2006:
case 274:
case 156:
case 504:
case 2795:
case 3324:
case 3518:
case 3756:
case 831:
case 4092:
case 1636:
case 723:
case 258:
case 1330:
case 197:
case 2561:
case 1741:
case 1230:
case 4000:
case 1025:
case 2849:
case 2641:
case 2403:
case 1478:
case 31:
case 697:
case 2993:
case 3224:
case 1619:
case 605:
case 2003:
case 1078:
case 1762:
case 2263:
case 2435:
case 2096:
case 3975:
case 3627:
case 3669:
case 3549:
case 1680:
case 789:
case 1254:
case 943:
case 1151:
case 3931:
case 1279:
case 1568:
case 2320:
case 1890:
case 2471:
case 867:
case 3907:
case 1726:
case 1286:
case 768:
case 1594:
case 903:
case 3608:
case 3497:
case 2071:
case 3773:
case 251:
case 3493:
case 693:
case 10:
case 1352:
case 1438:
case 3588:
case 964:
case 186:
case 3903:
case 1691:
case 3266:
case 439:
case 3540:
case 3714:
case 193:
case 1252:
case 727:
case 1676:
case 3660:
case 872:
case 64:
case 1815:
case 828:
case 2229:
case 1881:
case 1021:
case 2565:
case 213:
case 3623:
case 2997:
case 3733:
case 1316:
case 3865:
case 2007:
case 907:
case 1610:
case 1798:
case 1653:
case 670:
case 947:
case 496:
case 1197:
case 483:
case 374:
case 612:
case 2888:
case 519:
case 3996:
case 3406:
case 1046:
case 170:
case 761:
case 4068:
case 381:
case 2475:
case 3736:
case 1590:
case 0:
case 1656:
case 2121:
case 725:
case 1350:
case 1272:
case 2324:
case 3719:
case 2701:
case 3542:
case 1684:
case 1250:
case 643:
case 2138:
case 2784:
case 2737:
case 430:
case 418:
case 1372:
case 819:
case 19:
case 3757:
case 3403:
case 3849:
case 1938:
case 1213:
case 759:
case 1946:
case 2712:
case 269:
case 3035:
case 2928:
case 179:
case 2627:
case 1128:
case 2055:
case 4015:
case 1727:
case 538:
case 2842:
case 1287:
case 1234:
case 3263:
case 3951:
case 3818:
case 1708:
case 1107:
case 48:
case 202:
case 3363:
case 1334:
case 2608:
case 572:
case 905:
case 446:
case 3320:
case 242:
case 2931:
case 2723:
case 2283:
case 1623:
case 295:
case 1844:
case 2232:
case 3804:
case 1714:
case 992:
case 3815:
case 2614:
case 754:
case 1093:
case 766:
case 1266:
case 3270:
case 3691:
case 386:
case 3943:
case 960:
case 814:
case 34:
case 1178:
case 2383:
case 615:
case 2458:
case 2332:
case 3592:
case 3155:
case 2359:
case 181:
case 2274:
case 452:
case 1996:
case 2135:
case 3446:
case 2217:
case 3653:
case 681:
case 2581:
case 3798:
case 3197:
case 3764:
case 1733:
case 2447:
case 2171:
case 3610:
case 2633:
case 1222:
case 1865:
case 1641:
case 1403:
case 1757:
case 4065:
case 2193:
case 1561:
case 3502:
case 3213:
case 3043:
case 2230:
case 3809:
case 2958:
case 3250:
case 2811:
case 3684:
case 3637:
case 1993:
case 2619:
case 1662:
case 3443:
case 2425:
case 3350:
case 441:
case 3656:
case 117:
case 1795:
case 1736:
case 401:
case 988:
case 3921:
case 2636:
case 942:
case 2330:
case 158:
case 3313:
case 1147:
case 2286:
case 778:
case 2568:
case 1320:
case 1071:
case 3708:
case 1818:
case 1951:
case 3387:
case 3107:
case 3128:
case 1263:
case 3287:
case 3511:
case 3727:
case 3946:
case 2106:
case 2386:
case 2802:
case 1496:
case 4044:
case 1780:
case 379:
case 1220:
case 2854:
case 194:
case 2696:
case 2202:
case 3027:
case 2513:
case 2390:
case 3655:
case 349:
case 3530:
case 1820:
case 3469:
case 1080:
case 2550:
case 390:
case 3069:
case 1863:
case 895:
case 3964:
case 1933:
case 708:
case 3153:
case 2572:
case 1982:
case 694:
case 2302:
case 1448:
case 748:
case 2182:
case 2671:
case 847:
case 3998:
case 3110:
case 2426:
case 963:
case 2133:
case 782:
case 3008:
case 928:
case 1095:
case 3579:
case 1905:
case 2923:
case 3189:
case 3945:
case 2385:
case 165:
case 1036:
case 275:
case 3743:
case 2725:
case 3394:
case 3850:
case 2285:
case 3209:
case 1977:
case 1625:
case 2462:
case 716:
case 4022:
case 3368:
case 864:
case 2177:
case 2441:
case 3813:
case 3554:
case 2200:
case 2859:
case 3908:
case 1482:
case 2392:
case 1751:
case 3532:
case 1265:
case 3464:
case 3583:
case 621:
case 604:
case 1082:
case 2817:
case 2552:
case 3173:
case 897:
case 3064:
case 798:
case 1033:
case 1948:
case 300:
case 1980:
case 144:
case 2606:
case 2180:
case 3816:
case 3112:
case 1706:
case 121:
case 3927:
case 919:
case 1477:
case 3574:
case 1141:
case 2962:
case 37:
case 1344:
case 2157:
case 3184:
case 326:
case 3101:
case 3381:
case 1866:
case 3156:
case 3399:
case 2539:
case 507:
case 277:
case 3852:
case 2195:
case 1414:
case 2460:
case 167:
case 4020:
case 1005:
case 2883:
case 547:
case 1014:
case 1995:
case 2060:
case 3559:
case 2136:
case 3445:
case 1998:
case 753:
case 2361:
case 690:
case 3448:
case 272:
case 2953:
case 2164:
case 1110:
case 162:
case 2797:
case 3218:
case 1153:
case 813:
case 1964:
case 1408:
case 2198:
case 109:
case 3080:
case 3524:
case 3318:
case 3863:
case 1834:
case 190:
case 2012:
case 851:
case 569:
case 1655:
case 210:
case 3796:
case 2520:
case 2991:
case 1209:
case 1850:
case 1394:
case 2484:
case 1743:
case 2563:
case 3057:
case 365:
case 3495:
case 785:
case 1945:
case 2456:
case 1872:
case 3036:
case 480:
case 3160:
case 1579:
case 173:
case 2145:
case 3123:
case 3905:
case 140:
case 1927:
case 304:
case 1112:
case 3365:
case 1816:
case 75:
case 4072:
case 1969:
case 100:
case 2912:
case 2127:
case 2566:
case 2340:
case 344:
case 2728:
case 199:
case 3980:
case 3082:
case 2453:
case 1631:
case 433:
case 977:
case 2010:
case 1839:
case 3033:
case 640:
case 1173:
case 3751:
case 3647:
case 699:
case 2973:
case 3482:
case 4013:
case 2410:
case 3567:
case 3126:
case 1464:
case 3822:
case 626:
case 2867:
case 2089:
case 1445:
case 1559:
case 2076:
case 3014:
case 4087:
case 1852:
case 4034:
case 2621:
case 1156:
case 2829:
case 1281:
case 888:
case 1215:
case 489:
case 136:
case 1517:
case 3414:
case 787:
case 3077:
case 3957:
case 1137:
case 1184:
case 551:
case 3866:
case 1870:
case 869:
case 1381:
case 126:
case 3162:
case 3919:
case 1574:
case 2901:
case 26:
case 2984:
case 2937:
case 2091:
case 1720:
case 2402:
case 1896:
case 837:
case 710:
case 329:
case 211:
case 415:
case 2002:
case 2543:
case 2663:
case 2090:
case 2900:
case 1686:
case 1100:
case 728:
case 1248:
case 772:
case 2490:
case 827:
case 1380:
case 1679:
case 4093:
case 2226:
case 948:
case 152:
case 2144:
case 3904:
case 982:
case 474:
case 1597:
case 908:
case 481:
case 1295:
case 2362:
case 2411:
case 1395:
case 559:
case 3409:
case 1049:
case 2825:
case 3843:
case 1219:
case 3750:
case 3713:
case 2878:
case 2011:
case 396:
case 1803:
case 2241:
case 3009:
case 1449:
case 6:
case 535:
case 3999:
case 1722:
case 1659:
case 624:
case 1190:
case 2847:
case 318:
case 2622:
case 1233:
case 1851:
case 4003:
case 1918:
case 641:
case 2118:
case 2000:
case 357:
case 1617:
case 2990:
case 134:
case 2521:
case 458:
case 3846:
case 2538:
case 124:
case 101:
case 2902:
case 3142:
case 2774:
case 1102:
case 719:
case 320:
case 3161:
case 3558:
case 417:
case 2492:
case 1806:
case 1382:
case 1333:
case 141:
case 3364:
case 1575:
case 537:
case 1277:
case 2911:
case 2858:
case 2149:
case 3345:
case 550:
case 1185:
case 1528:
case 2360:
case 346:
case 1314:
case 2666:
case 1205:
case 4035:
case 3404:
case 1044:
case 1531:
case 998:
case 3481:
case 1683:
case 3667:
case 527:
case 1632:
case 1444:
case 2783:
case 3994:
case 3018:
case 486:
case 2312:
case 1369:
case 282:
case 40:
case 208:
case 522:
case 3418:
case 1327:
case 1208:
case 2897:
case 1140:
case 44:
case 2273:
case 532:
case 1787:
case 3763:
case 2061:
case 2687:
case 2855:
case 3192:
case 3896:
case 866:
case 1269:
case 493:
case 1578:
case 2212:
case 2042:
case 2503:
case 854:
case 3803:
case 196:
case 3257:
case 1999:
case 3336:
case 2596:
case 2613:
case 911:
case 3630:
case 683:
case 2650:
case 3395:
case 2535:
case 2356:
case 2199:
case 2237:
case 1624:
case 2201:
case 1772:
case 4046:
case 2337:
case 3597:
case 1494:
case 2115:
case 2672:
case 2301:
case 1468:
case 1981:
case 1915:
case 953:
case 1904:
case 183:
case 3382:
case 403:
case 3102:
case 1364:
case 3333:
case 2310:
case 657:
case 2828:
case 2353:
case 1142:
case 630:
case 2961:
case 324:
case 2488:
case 1398:
case 2253:
case 2831:
case 2639:
case 2440:
case 987:
case 2807:
case 3190:
case 3722:
case 3233:
case 3377:
case 646:
case 3683:
case 1245:
case 1547:
case 878:
case 2729:
case 1404:
case 777:
case 2194:
case 3205:
case 1481:
case 1629:
case 1752:
case 1415:
case 3531:
case 1968:
case 3044:
case 3111:
case 2109:
case 3949:
case 3185:
case 146:
case 3528:
case 3277:
case 1099:
case 3893:
case 3575:
case 1345:
case 95:
case 106:
case 2924:
case 2113:
case 1950:
case 3130:
case 3066:
case 462:
case 254:
case 4008:
case 266:
case 2891:
case 1470:
case 63:
case 3805:
case 1221:
case 2067:
case 2604:
case 747:
case 4027:
case 2876:
case 2172:
case 1972:
case 3744:
case 490:
case 707:
case 409:
case 676:
case 2029:
case 1845:
case 3765:
case 3186:
case 3600:
case 598:
case 1864:
case 2375:
case 3833:
case 3251:
case 2810:
case 2853:
case 2328:
case 3576:
case 1898:
case 1346:
case 1640:
case 1439:
case 2505:
case 3589:
case 2331:
case 2788:
case 2307:
case 1246:
case 937:
case 1688:
case 384:
case 816:
case 3154:
case 180:
case 2577:
case 1416:
case 2275:
case 3351:
case 499:
case 1526:
case 898:
case 2929:
case 705:
case 123:
case 1072:
case 2856:
case 633:
case 3895:
case 3573:
case 1472:
case 2967:
case 2837:
case 2884:
case 3611:
case 1450:
case 623:
case 2609:
case 2801:
case 1709:
case 2170:
case 3966:
case 3749:
case 1050:
case 1413:
case 3857:
case 1661:
case 3296:
case 436:
case 3880:
case 4045:
case 189:
case 2116:
case 232:
case 3174:
case 2761:
case 3420:
case 1087:
case 2812:
case 959:
case 1869:
case 3063:
case 935:
case 1562:
case 2519:
case 3584:
case 582:
case 3922:
case 3718:
case 689:
case 548:
case 3556:
case 2139:
case 1808:
case 426:
case 3396:
case 3848:
case 2536:
case 168:
case 222:
case 278:
case 3052:
case 587:
case 1744:
case 3972:
case 2483:
case 1393:
case 2823:
case 713:
case 4080:
case 2432:
case 3715:
case 2598:
case 3221:
case 2083:
case 1553:
case 227:
case 853:
case 494:
case 2860:
case 3238:
case 2930:
case 1466:
case 237:
case 3799:
case 751:
case 32:
case 1293:
case 1066:
case 250:
case 2258:
case 1130:
case 760:
case 4036:
case 1692:
case 171:
case 3934:
case 3987:
case 465:
case 2474:
case 2120:
case 1920:
case 4095:
case 966:
case 2954:
case 2074:
case 3246:
case 1576:
case 2417:
case 2979:
case 3560:
case 792:
case 4019:
case 1589:
case 3439:
case 2986:
case 3346:
case 3898:
case 1022:
case 2017:
case 4057:
case 1882:
case 2459:
case 1765:
case 1186:
case 2545:
case 3039:
case 1833:
case 885:
case 1422:
case 4033:
case 1203:
case 71:
case 3970:
case 2569:
case 1857:
case 2649:
case 2430:
case 259:
case 431:
case 1685:
case 3450:
case 1611:
case 2711:
case 2527:
case 2166:
case 3709:
case 1819:
case 3013:
case 2225:
case 3243:
case 2030:
case 2932:
case 2508:
case 3129:
case 2983:
case 444:
case 1183:
case 3167:
case 3526:
case 922:
case 1836:
case 3952:
case 887:
case 1690:
case 1396:
case 2486:
case 2826:
case 2917:
case 1922:
case 2618:
case 2086:
case 2959:
case 2079:
case 553:
case 1501:
case 3827:
case 4014:
case 1463:
case 3434:
case 3487:
case 3642:
case 1371:
case 769:
case 2454:
case 1063:
case 3869:
case 3034:
case 3087:
case 1420:
case 3541:
case 2702:
case 1174:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756173601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,];
var gg_b = "1756173601/";

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
