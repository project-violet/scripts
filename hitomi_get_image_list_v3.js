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
case 510:
case 2707:
case 1772:
case 1848:
case 1992:
case 2461:
case 3185:
case 2370:
case 536:
case 2724:
case 4011:
case 3940:
case 685:
case 3479:
case 3746:
case 2742:
case 867:
case 1530:
case 2417:
case 520:
case 1083:
case 3605:
case 1322:
case 3285:
case 2457:
case 3837:
case 252:
case 1534:
case 740:
case 2423:
case 2926:
case 4067:
case 3450:
case 3753:
case 2319:
case 2359:
case 840:
case 3713:
case 2548:
case 3410:
case 1266:
case 910:
case 3609:
case 1067:
case 1801:
case 3414:
case 767:
case 350:
case 3189:
case 3700:
case 1166:
case 2580:
case 2902:
case 3906:
case 3403:
case 182:
case 1051:
case 1612:
case 3377:
case 473:
case 878:
case 1247:
case 961:
case 2076:
case 4000:
case 965:
case 16:
case 3484:
case 2421:
case 532:
case 1081:
case 2764:
case 303:
case 1628:
case 2669:
case 2277:
case 3219:
case 2094:
case 1147:
case 4013:
case 3783:
case 3698:
case 4004:
case 1362:
case 4053:
case 1545:
case 3259:
case 63:
case 1335:
case 1437:
case 3238:
case 2966:
case 4027:
case 2760:
case 2177:
case 577:
case 1593:
case 1810:
case 3561:
case 1358:
case 1850:
case 149:
case 1013:
case 3939:
case 3170:
case 3918:
case 2192:
case 3115:
case 46:
case 3557:
case 1803:
case 1854:
case 1814:
case 3517:
case 2845:
case 2632:
case 3636:
case 186:
case 1875:
case 977:
case 999:
case 267:
case 342:
case 4081:
case 3174:
case 1828:
case 1882:
case 466:
case 2233:
case 1679:
case 3468:
case 1994:
case 2649:
case 2722:
case 3871:
case 3508:
case 2788:
case 3089:
case 2693:
case 157:
case 1796:
case 1211:
case 3907:
case 1167:
case 3898:
case 2443:
case 3942:
case 438:
case 1307:
case 2981:
case 1569:
case 3702:
case 2706:
case 2528:
case 1931:
case 457:
case 1650:
case 25:
case 581:
case 3331:
case 138:
case 1183:
case 3747:
case 1610:
case 1409:
case 2397:
case 620:
case 2865:
case 2913:
case 2416:
case 3412:
case 2456:
case 3452:
case 1675:
case 3085:
case 1759:
case 2645:
case 2832:
case 3836:
case 4066:
case 1719:
case 2927:
case 1283:
case 1654:
case 1603:
case 1360:
case 665:
case 2441:
case 3428:
case 2983:
case 2678:
case 2486:
case 553:
case 3960:
case 3055:
case 2762:
case 3766:
case 1100:
case 1789:
case 2131:
case 34:
case 1471:
case 1684:
case 1204:
case 1253:
case 2552:
case 3096:
case 2092:
case 391:
case 3637:
case 1127:
case 3070:
case 1680:
case 85:
case 3297:
case 1153:
case 588:
case 93:
case 2231:
case 3964:
case 2568:
case 953:
case 833:
case 1601:
case 323:
case 632:
case 934:
case 369:
case 2276:
case 3272:
case 2408:
case 3038:
case 2634:
case 162:
case 1812:
case 1181:
case 1785:
case 988:
case 699:
case 2758:
case 3059:
case 2294:
case 2176:
case 2718:
case 3019:
case 1933:
case 1436:
case 677:
case 2967:
case 540:
case 1540:
case 1819:
case 174:
case 3387:
case 2257:
case 768:
case 1838:
case 2056:
case 3052:
case 720:
case 2596:
case 2765:
case 490:
case 3611:
case 3651:
case 1987:
case 736:
case 1522:
case 2117:
case 3847:
case 1544:
case 2157:
case 575:
case 2261:
case 4005:
case 2806:
case 3802:
case 3279:
case 3667:
case 2123:
case 1334:
case 4073:
case 1005:
case 2559:
case 2348:
case 4009:
case 2384:
case 2519:
case 940:
case 810:
case 3978:
case 3203:
case 2538:
case 567:
case 1896:
case 326:
case 1870:
case 261:
case 3250:
case 3114:
case 474:
case 3826:
case 2380:
case 330:
case 3991:
case 1466:
case 2937:
case 3489:
case 3068:
case 1782:
case 3577:
case 1391:
case 2664:
case 799:
case 3148:
case 2350:
case 429:
case 861:
case 3184:
case 4071:
case 304:
case 2818:
case 1697:
case 2310:
case 268:
case 463:
case 1237:
case 2263:
case 552:
case 1345:
case 3709:
case 3180:
case 2589:
case 2303:
case 3945:
case 1402:
case 3627:
case 2375:
case 2477:
case 2585:
case 1098:
case 1558:
case 578:
case 2187:
case 1518:
case 3361:
case 119:
case 1393:
case 1539:
case 2620:
case 3470:
case 832:
case 1961:
case 3101:
case 3496:
case 1889:
case 2862:
case 4036:
case 2287:
case 1426:
case 1768:
case 3028:
case 2729:
case 765:
case 1917:
case 2835:
case 3646:
case 2642:
case 877:
case 3201:
case 3474:
case 761:
case 2041:
case 312:
case 3323:
case 306:
case 3075:
case 1451:
case 2639:
case 1908:
case 1273:
case 1520:
case 1897:
case 667:
case 3003:
case 3054:
case 288:
case 3308:
case 1205:
case 1685:
case 2658:
case 881:
case 1701:
case 1524:
case 2433:
case 3268:
case 2936:
case 1173:
case 2730:
case 379:
case 800:
case 234:
case 3853:
case 2572:
case 3965:
case 3813:
case 1332:
case 458:
case 640:
case 3737:
case 2216:
case 3212:
case 3252:
case 700:
case 2820:
case 1369:
case 2328:
case 1941:
case 3531:
case 2057:
case 23:
case 1109:
case 2017:
case 1483:
case 1986:
case 3079:
case 2778:
case 2116:
case 3881:
case 3152:
case 2156:
case 472:
case 3846:
case 1872:
case 1689:
case 302:
case 3851:
case 1775:
case 1638:
case 788:
case 678:
case 1995:
case 2909:
case 2186:
case 1400:
case 1754:
case 1703:
case 3395:
case 3497:
case 31:
case 1714:
case 1659:
case 3316:
case 2312:
case 1564:
case 3001:
case 2241:
case 2606:
case 3282:
case 2286:
case 4037:
case 3356:
case 2352:
case 95:
case 3647:
case 155:
case 3925:
case 1271:
case 83:
case 753:
case 1453:
case 2063:
case 73:
case 1329:
case 834:
case 200:
case 2108:
case 3080:
case 652:
case 954:
case 409:
case 2864:
case 1446:
case 1481:
case 343:
case 2905:
case 1999:
case 888:
case 2793:
case 2490:
case 314:
case 1615:
case 1655:
case 3048:
case 55:
case 2622:
case 2208:
case 830:
case 2148:
case 3858:
case 950:
case 2280:
case 1291:
case 4069:
case 1065:
case 3839:
case 1756:
case 2284:
case 196:
case 2653:
case 2604:
case 2709:
case 3589:
case 698:
case 3163:
case 1406:
case 1954:
case 3477:
case 1903:
case 1914:
case 2945:
case 1979:
case 1743:
case 3585:
case 496:
case 2101:
case 3379:
case 2993:
case 222:
case 1130:
case 1422:
case 4032:
case 3862:
case 2866:
case 2415:
case 716:
case 3041:
case 4065:
case 2474:
case 1230:
case 2646:
case 3642:
case 1069:
case 3086:
case 139:
case 1193:
case 3257:
case 1458:
case 2387:
case 2485:
case 3217:
case 2930:
case 613:
case 3570:
case 4029:
case 2179:
case 644:
case 812:
case 3596:
case 2611:
case 3765:
case 704:
case 3056:
case 377:
case 2934:
case 192:
case 3157:
case 1526:
case 503:
case 822:
case 2279:
case 669:
case 2802:
case 1877:
case 2203:
case 2978:
case 2254:
case 2321:
case 3519:
case 3384:
case 3043:
case 695:
case 3840:
case 3348:
case 2150:
case 3099:
case 226:
case 1984:
case 1948:
case 3660:
case 3538:
case 2489:
case 365:
case 3844:
case 1547:
case 2991:
case 2154:
case 230:
case 2114:
case 3822:
case 712:
case 439:
case 1145:
case 2363:
case 1435:
case 1337:
case 4025:
case 1980:
case 2577:
case 1786:
case 3769:
case 2128:
case 4078:
case 1169:
case 3186:
case 2811:
case 2182:
case 650:
case 3141:
case 3745:
case 148:
case 21:
case 2497:
case 646:
case 1583:
case 3352:
case 779:
case 2228:
case 2602:
case 3606:
case 3286:
case 1677:
case 4091:
case 427:
case 1833:
case 1912:
case 1511:
case 127:
case 1091:
case 4030:
case 1551:
case 2929:
case 1968:
case 3494:
case 897:
case 2080:
case 1717:
case 879:
case 2883:
case 224:
case 4034:
case 117:
case 1373:
case 3905:
case 1424:
case 1165:
case 243:
case 1442:
case 3864:
case 2399:
case 1407:
case 3622:
case 2626:
case 3749:
case 3021:
case 385:
case 214:
case 2343:
case 2084:
case 1129:
case 591:
case 71:
case 206:
case 4093:
case 1045:
case 3658:
case 2014:
case 2800:
case 2054:
case 4049:
case 2003:
case 388:
case 1831:
case 642:
case 3618:
case 445:
case 3730:
case 49:
case 194:
case 353:
case 2827:
case 72:
case 297:
case 1336:
case 470:
case 2050:
case 334:
case 824:
case 3572:
case 2853:
case 1787:
case 54:
case 3382:
case 1225:
case 3971:
case 3256:
case 3791:
case 2212:
case 3216:
case 1460:
case 1763:
case 2341:
case 2737:
case 1928:
case 544:
case 1500:
case 82:
case 3195:
case 3057:
case 2531:
case 170:
case 1894:
case 3156:
case 2152:
case 3842:
case 2846:
case 802:
case 523:
case 1527:
case 3116:
case 2881:
case 603:
case 3662:
case 2666:
case 1876:
case 1553:
case 1504:
case 1721:
case 569:
case 3807:
case 1093:
case 3421:
case 3550:
case 371:
case 408:
case 2119:
case 375:
case 3076:
case 850:
case 1042:
case 2138:
case 1478:
case 3277:
case 3669:
case 1641:
case 3764:
case 1024:
case 340:
case 2698:
case 1817:
case 2783:
case 889:
case 2219:
case 1020:
case 2962:
case 2238:
case 3463:
case 1823:
case 1222:
case 1140:
case 2561:
case 2215:
case 530:
case 789:
case 1985:
case 2401:
case 2274:
case 2958:
case 1430:
case 697:
case 516:
case 3579:
case 1240:
case 2155:
case 606:
case 3632:
case 2636:
case 3845:
case 3031:
case 2557:
case 108:
case 746:
case 2174:
case 3292:
case 1434:
case 526:
case 2270:
case 2523:
case 1790:
case 703:
case 101:
case 3707:
case 1118:
case 1821:
case 90:
case 159:
case 1139:
case 2746:
case 2479:
case 3370:
case 3457:
case 1258:
case 3355:
case 1326:
case 1699:
case 180:
case 1643:
case 3417:
case 1218:
case 922:
case 3374:
case 1955:
case 3720:
case 1239:
case 2673:
case 3926:
case 3891:
case 352:
case 2837:
case 1915:
case 2289:
case 1938:
case 2410:
case 1262:
case 1695:
case 2609:
case 3359:
case 3548:
case 50:
case 2713:
case 1887:
case 2521:
case 2704:
case 3584:
case 3830:
case 62:
case 3033:
case 2454:
case 405:
case 1162:
case 2189:
case 742:
case 378:
case 1731:
case 1445:
case 2414:
case 3625:
case 0:
case 803:
case 3947:
case 522:
case 2563:
case 630:
case 3829:
case 2074:
case 579:
case 1621:
case 3131:
case 1383:
case 1088:
case 3762:
case 597:
case 2055:
case 2516:
case 3512:
case 4006:
case 898:
case 3691:
case 1663:
case 2873:
case 160:
case 128:
case 1843:
case 626:
case 2805:
case 1351:
case 223:
case 3568:
case 1120:
case 1311:
case 3077:
case 3951:
case 1687:
case 3408:
case 3290:
case 798:
case 979:
case 1895:
case 1124:
case 1367:
case 213:
case 2333:
case 1220:
case 3825:
case 1573:
case 1142:
case 2038:
case 1432:
case 2172:
case 3176:
case 4088:
case 4022:
case 244:
case 1505:
case 943:
case 4039:
case 1841:
case 2468:
case 1035:
case 74:
case 1886:
case 2394:
case 3693:
case 3744:
case 2508:
case 2871:
case 2726:
case 415:
case 1062:
case 2089:
case 3788:
case 914:
case 52:
case 3649:
case 612:
case 1381:
case 1623:
case 1972:
case 2907:
case 2924:
case 869:
case 791:
case 3499:
case 2376:
case 3372:
case 51:
case 1536:
case 3740:
case 2942:
case 1997:
case 895:
case 2541:
case 1264:
case 769:
case 543:
case 3900:
case 2586:
case 3582:
case 2702:
case 1160:
case 3706:
case 125:
case 3495:
case 2747:
case 514:
case 723:
case 1808:
case 35:
case 744:
case 1425:
case 1164:
case 604:
case 3416:
case 1039:
case 3927:
case 524:
case 1304:
case 1353:
case 4062:
case 115:
case 1058:
case 2836:
case 3645:
case 111:
case 1313:
case 2085:
case 713:
case 811:
case 3789:
case 1595:
case 2022:
case 2509:
case 941:
case 2044:
case 2383:
case 218:
case 3204:
case 3684:
case 1015:
case 3471:
case 1197:
case 1074:
case 3360:
case 594:
case 1428:
case 3227:
case 3200:
case 2899:
case 970:
case 1805:
case 821:
case 331:
case 469:
case 3153:
case 825:
case 1297:
case 228:
case 793:
case 191:
case 3525:
case 2663:
case 1637:
case 195:
case 99:
case 1070:
case 169:
case 2687:
case 1272:
case 3246:
case 123:
case 491:
case 2351:
case 2505:
case 1599:
case 4015:
case 3785:
case 1019:
case 2107:
case 1172:
case 2432:
case 3436:
case 3933:
case 2142:
case 1038:
case 2856:
case 59:
case 362:
case 247:
case 711:
case 1333:
case 4074:
case 2124:
case 2465:
case 2367:
case 3066:
case 1089:
case 1871:
case 1726:
case 4085:
case 3715:
case 2886:
case 3828:
case 718:
case 1468:
case 3267:
case 917:
case 2841:
case 847:
case 3994:
case 1942:
case 2617:
case 2536:
case 1376:
case 1924:
case 760:
case 2346:
case 3342:
case 3211:
case 2623:
case 3976:
case 3650:
case 2808:
case 2300:
case 1747:
case 338:
case 1331:
case 3409:
case 1702:
case 2160:
case 696:
case 1586:
case 517:
case 2997:
case 2598:
case 1836:
case 211:
case 2058:
case 384:
case 4089:
case 2304:
case 948:
case 215:
case 3603:
case 607:
case 1412:
case 527:
case 366:
case 1452:
case 2164:
case 2327:
case 103:
case 701:
case 3682:
case 2478:
case 3628:
case 3202:
case 705:
case 641:
case 2042:
case 1138:
case 3247:
case 1072:
case 1119:
case 1159:
case 1484:
case 36:
case 2823:
case 780:
case 1962:
case 1238:
case 3437:
case 3335:
case 2989:
case 2491:
case 3102:
case 539:
case 1480:
case 3147:
case 69:
case 2366:
case 1935:
case 1259:
case 1170:
case 3027:
case 2430:
case 1918:
case 1274:
case 1958:
case 1401:
case 3339:
case 3593:
case 2244:
case 880:
case 3004:
case 3810:
case 3013:
case 349:
case 3850:
case 1255:
case 992:
case 3358:
case 3226:
case 2222:
case 1939:
case 1751:
case 1270:
case 3875:
case 2434:
case 403:
case 364:
case 805:
case 1097:
case 2144:
case 1557:
case 3126:
case 2122:
case 1517:
case 1636:
case 2240:
case 1155:
case 1781:
case 373:
case 1479:
case 1940:
case 3530:
case 2970:
case 617:
case 808:
case 2449:
case 596:
case 2821:
case 2776:
case 1587:
case 2118:
case 3884:
case 3992:
case 2996:
case 3340:
case 2493:
case 2915:
case 3534:
case 1922:
case 2239:
case 2955:
case 2060:
case 2643:
case 627:
case 1285:
case 3322:
case 2326:
case 3880:
case 2974:
case 489:
case 3801:
case 2235:
case 2887:
case 1704:
case 1521:
case 996:
case 2695:
case 1609:
case 1289:
case 1410:
case 2537:
case 3051:
case 648:
case 382:
case 1563:
case 2616:
case 907:
case 146:
case 3306:
case 2302:
case 1475:
case 2445:
case 150:
case 2347:
case 2731:
case 3166:
case 593:
case 911:
case 3619:
case 841:
case 3703:
case 4048:
case 2309:
case 11:
case 4084:
case 2034:
case 3775:
case 3638:
case 1182:
case 3560:
case 1128:
case 870:
case 3916:
case 1647:
case 3413:
case 3750:
case 351:
case 794:
case 3404:
case 3956:
case 2952:
case 12:
case 3271:
case 1001:
case 3564:
case 1316:
case 2677:
case 1602:
case 1356:
case 42:
case 511:
case 993:
case 3236:
case 2723:
case 2551:
case 894:
case 3037:
case 3670:
case 2091:
case 227:
case 770:
case 680:
case 3329:
case 2692:
case 3696:
case 2265:
case 114:
case 3615:
case 2761:
case 1084:
case 2407:
case 1626:
case 3779:
case 2078:
case 2442:
case 3446:
case 3943:
case 601:
case 143:
case 605:
case 3674:
case 2424:
case 2165:
case 741:
case 1594:
case 560:
case 3685:
case 1308:
case 106:
case 748:
case 3520:
case 4079:
case 2129:
case 179:
case 518:
case 2787:
case 3507:
case 3332:
case 2336:
case 1590:
case 197:
case 3701:
case 1827:
case 294:
case 1932:
case 3467:
case 3365:
case 2229:
case 3173:
case 337:
case 827:
case 2546:
case 497:
case 727:
case 4050:
case 358:
case 3109:
case 3780:
case 928:
case 3986:
case 2928:
case 1341:
case 1212:
case 2460:
case 547:
case 29:
case 2225:
case 3369:
case 2093:
case 2876:
case 3872:
case 2553:
case 2504:
case 3748:
case 4054:
case 2513:
case 848:
case 918:
case 1666:
case 4075:
case 1846:
case 1152:
case 207:
case 3752:
case 2756:
case 739:
case 2950:
case 2065:
case 2910:
case 2178:
case 4028:
case 3885:
case 3036:
case 2032:
case 1148:
case 104:
case 1184:
case 1459:
case 2631:
case 625:
case 792:
case 2914:
case 2191:
case 1627:
case 621:
case 3447:
case 1613:
case 3562:
case 2566:
case 501:
case 1180:
case 505:
case 2975:
case 1653:
case 296:
case 693:
case 3539:
case 1470:
case 1496:
case 3098:
case 980:
case 3558:
case 2979:
case 319:
case 3393:
case 2440:
case 1028:
case 2230:
case 3917:
case 1474:
case 1323:
case 2444:
case 905:
case 3071:
case 959:
case 1415:
case 2690:
case 3889:
case 329:
case 1455:
case 1357:
case 3426:
case 3923:
case 3672:
case 2676:
case 416:
case 3330:
case 1592:
case 3987:
case 1651:
case 1179:
case 1012:
case 908:
case 1930:
case 3540:
case 1387:
case 707:
case 2193:
case 239:
case 2877:
case 796:
case 1802:
case 2633:
case 2249:
case 3588:
case 3009:
case 2526:
case 2293:
case 1847:
case 292:
case 1934:
case 628:
case 3921:
case 126:
case 3870:
case 1798:
case 2245:
case 508:
case 1978:
case 4012:
case 2502:
case 3506:
case 1577:
case 807:
case 1363:
case 4052:
case 37:
case 1991:
case 130:
case 3963:
case 1489:
case 3466:
case 2462:
case 1658:
case 3045:
case 776:
case 2685:
case 188:
case 2897:
case 1243:
case 962:
case 2908:
case 2273:
case 1734:
case 272:
case 1199:
case 3336:
case 2332:
case 3787:
case 1572:
case 134:
case 43:
case 4017:
case 2507:
case 2173:
case 237:
case 1730:
case 3546:
case 2365:
case 3229:
case 1433:
case 755:
case 394:
case 2524:
case 2986:
case 851:
case 370:
case 3894:
case 3225:
case 1382:
case 1216:
case 3460:
case 1023:
case 3763:
case 2209:
case 3398:
case 2689:
case 3049:
case 2748:
case 2784:
case 3553:
case 3876:
case 2872:
case 3093:
case 341:
case 1635:
case 1998:
case 3464:
case 876:
case 283:
case 66:
case 1824:
case 1778:
case 682:
case 984:
case 1745:
case 3309:
case 2171:
case 3583:
case 2754:
case 2703:
case 2400:
case 2619:
case 3169:
case 557:
case 2995:
case 2638:
case 883:
case 2775:
case 276:
case 3034:
case 2404:
case 938:
case 2453:
case 2198:
case 2271:
case 3952:
case 2956:
case 251:
case 7:
case 2916:
case 209:
case 2413:
case 3030:
case 3269:
case 1286:
case 1606:
case 2427:
case 1241:
case 3833:
case 3232:
case 1640:
case 4087:
case 100:
case 1860:
case 3692:
case 837:
case 758:
case 2670:
case 957:
case 3420:
case 3091:
case 1973:
case 3407:
case 1208:
case 3132:
case 181:
case 2655:
case 1021:
case 1490:
case 98:
case 1793:
case 1905:
case 3373:
case 317:
case 2674:
case 3165:
case 2446:
case 2943:
case 872:
case 3078:
case 3567:
case 863:
case 1223:
case 2987:
case 1765:
case 3025:
case 2330:
case 1056:
case 2838:
case 1257:
case 461:
case 2819:
case 274:
case 1161:
case 2859:
case 1732:
case 3418:
case 1217:
case 132:
case 3877:
case 1574:
case 1806:
case 392:
case 1515:
case 1261:
case 949:
case 2544:
case 2588:
case 2522:
case 3526:
case 2009:
case 4043:
case 586:
case 2378:
case 2921:
case 631:
case 1660:
case 2896:
case 3892:
case 3948:
case 432:
case 2073:
case 564:
case 1043:
case 1384:
case 4095:
case 1348:
case 1559:
case 2005:
case 1099:
case 3435:
case 477:
case 729:
case 3502:
case 2506:
case 3029:
case 4016:
case 499:
case 3786:
case 2815:
case 2466:
case 3462:
case 1937:
case 27:
case 549:
case 1822:
case 1380:
case 1888:
case 763:
case 3145:
case 3716:
case 1263:
case 2237:
case 684:
case 2752:
case 4041:
case 307:
case 1839:
case 3631:
case 120:
case 1310:
case 2697:
case 1858:
case 666:
case 1350:
case 2036:
case 3032:
case 136:
case 2137:
case 3903:
case 1477:
case 3954:
case 2402:
case 3914:
case 2535:
case 1303:
case 110:
case 1354:
case 2562:
case 1314:
case 2345:
case 2447:
case 1492:
case 1620:
case 657:
case 3440:
case 2518:
case 410:
case 2558:
case 3799:
case 1585:
case 1624:
case 2917:
case 3069:
case 2768:
case 3422:
case 2426:
case 3488:
case 1287:
case 2923:
case 2672:
case 874:
case 229:
case 2071:
case 2889:
case 3690:
case 420:
case 3444:
case 3661:
case 1788:
case 663:
case 2066:
case 3062:
case 28:
case 2755:
case 2994:
case 2679:
case 2267:
case 3429:
case 629:
case 2320:
case 3886:
case 2774:
case 2828:
case 393:
case 1981:
case 3657:
case 1372:
case 2307:
case 154:
case 3536:
case 1946:
case 2324:
case 576:
case 133:
case 3381:
case 2770:
case 2976:
case 3792:
case 257:
case 2990:
case 2342:
case 2409:
case 951:
case 2610:
case 2183:
case 238:
case 3571:
case 15:
case 3808:
case 909:
case 321:
case 2650:
case 831:
case 3997:
case 1900:
case 3160:
case 433:
case 1582:
case 2283:
case 1927:
case 2719:
case 315:
case 3353:
case 3304:
case 3313:
case 311:
case 1832:
case 2614:
case 3327:
case 3164:
case 2675:
case 1456:
case 266:
case 3260:
case 1416:
case 976:
case 2738:
case 884:
case 2204:
case 2471:
case 2684:
case 318:
case 1131:
case 3088:
case 3509:
case 2026:
case 3022:
case 2213:
case 866:
case 67:
case 1486:
case 2227:
case 1735:
case 1231:
case 235:
case 2153:
case 2498:
case 3040:
case 231:
case 958:
case 2200:
case 3899:
case 1691:
case 2127:
case 1512:
case 2364:
case 1552:
case 1276:
case 2047:
case 3351:
case 937:
case 2601:
case 3242:
case 2246:
case 2529:
case 3311:
case 2933:
case 1294:
case 3505:
case 1190:
case 88:
case 2181:
case 2812:
case 3816:
case 3367:
case 3124:
case 3465:
case 262:
case 784:
case 2146:
case 3573:
case 2530:
case 963:
case 2668:
case 1396:
case 886:
case 76:
case 1370:
case 273:
case 1461:
case 2340:
case 3158:
case 2992:
case 3493:
case 305:
case 2772:
case 2884:
case 3970:
case 3449:
case 359:
case 3060:
case 3955:
case 1374:
case 1926:
case 1423:
case 1891:
case 3863:
case 3915:
case 1355:
case 2388:
case 919:
case 3699:
case 2344:
case 2083:
case 3794:
case 1417:
case 1338:
case 3235:
case 1830:
case 609:
case 563:
case 3919:
case 749:
case 1033:
case 2067:
case 2578:
case 3695:
case 2266:
case 1548:
case 1319:
case 1625:
case 2306:
case 3302:
case 764:
case 3135:
case 3656:
case 2652:
case 3616:
case 2591:
case 2051:
case 786:
case 1580:
case 2166:
case 3731:
case 519:
case 990:
case 2046:
case 3042:
case 3686:
case 467:
case 3024:
case 1764:
case 773:
case 26:
case 4031:
case 171:
case 1849:
case 175:
case 3861:
case 97:
case 1177:
case 3491:
case 3020:
case 3989:
case 1966:
case 658:
case 3823:
case 140:
case 3857:
case 1503:
case 1094:
case 2339:
case 456:
case 1192:
case 590:
case 3430:
case 2027:
case 3222:
case 2226:
case 3288:
case 1385:
case 57:
case 2850:
case 2549:
case 2013:
case 2358:
case 6:
case 2053:
case 2004:
case 3244:
case 1292:
case 1665:
case 3434:
case 167:
case 873:
case 286:
case 1845:
case 1632:
case 974:
case 2126:
case 2000:
case 475:
case 2814:
case 3188:
case 2803:
case 2854:
case 471:
case 1031:
case 264:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761771601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,];
var gg_b = "1761771601/";

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
