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
case 1095:
case 2673:
case 4061:
case 0:
case 1665:
case 4016:
case 998:
case 1234:
case 3195:
case 368:
case 1535:
case 4033:
case 671:
case 1488:
case 1432:
case 1871:
case 3940:
case 2923:
case 1908:
case 3110:
case 1457:
case 1731:
case 1763:
case 2775:
case 381:
case 29:
case 3475:
case 1830:
case 2835:
case 791:
case 2015:
case 608:
case 2424:
case 5:
case 1251:
case 3668:
case 1893:
case 3724:
case 3098:
case 1513:
case 3582:
case 2581:
case 4015:
case 49:
case 1198:
case 997:
case 817:
case 2776:
case 663:
case 2118:
case 392:
case 2222:
case 2691:
case 3221:
case 2016:
case 1754:
case 782:
case 2593:
case 2836:
case 3485:
case 2459:
case 2061:
case 4090:
case 2351:
case 146:
case 3649:
case 3352:
case 1478:
case 3607:
case 1644:
case 1162:
case 656:
case 2195:
case 641:
case 536:
case 3530:
case 151:
case 268:
case 737:
case 492:
case 2239:
case 550:
case 3727:
case 4062:
case 3673:
case 505:
case 970:
case 2427:
case 3334:
case 3786:
case 3775:
case 512:
case 3604:
case 1463:
case 3015:
case 1339:
case 39:
case 259:
case 467:
case 1757:
case 1431:
case 1115:
case 3969:
case 3683:
case 2582:
case 2538:
case 1321:
case 3581:
case 1964:
case 1237:
case 459:
case 2098:
case 2724:
case 1252:
case 3813:
case 1882:
case 1838:
case 834:
case 2649:
case 1018:
case 2352:
case 931:
case 1116:
case 929:
case 1161:
case 3118:
case 1454:
case 3776:
case 1480:
case 584:
case 3593:
case 3222:
case 3691:
case 292:
case 3016:
case 2221:
case 1900:
case 2905:
case 2692:
case 643:
case 3791:
case 2792:
case 153:
case 3492:
case 2342:
case 3685:
case 3958:
case 2219:
case 754:
case 1678:
case 806:
case 942:
case 478:
case 2749:
case 277:
case 2768:
case 3035:
case 858:
case 70:
case 528:
case 283:
case 3815:
case 1466:
case 2903:
case 1072:
case 1242:
case 1411:
case 2483:
case 1712:
case 1688:
case 1632:
case 483:
case 55:
case 1302:
case 401:
case 97:
case 3977:
case 1657:
case 477:
case 2193:
case 2404:
case 3686:
case 1562:
case 3675:
case 3704:
case 2950:
case 1955:
case 2898:
case 1818:
case 3833:
case 2473:
case 1038:
case 1082:
case 933:
case 2317:
case 3182:
case 1113:
case 3138:
case 3816:
case 1598:
case 3036:
case 2862:
case 780:
case 857:
case 726:
case 3201:
case 448:
case 972:
case 4036:
case 2958:
case 2890:
case 1394:
case 1214:
case 2791:
case 1654:
case 3659:
case 3342:
case 2685:
case 2676:
case 1979:
case 3491:
case 1241:
case 2595:
case 3903:
case 111:
case 2783:
case 3768:
case 3624:
case 2172:
case 377:
case 2314:
case 510:
case 793:
case 1629:
case 1810:
case 1030:
case 3984:
case 1447:
case 688:
case 2704:
case 3898:
case 1663:
case 1516:
case 1670:
case 1093:
case 1561:
case 4035:
case 1301:
case 1631:
case 3193:
case 94:
case 2977:
case 661:
case 290:
case 3862:
case 2925:
case 2861:
case 702:
case 3297:
case 419:
case 625:
case 2773:
case 1656:
case 1233:
case 2959:
case 2121:
case 2674:
case 638:
case 2705:
case 1700:
case 1746:
case 4034:
case 3687:
case 899:
case 1396:
case 1261:
case 1216:
case 145:
case 3362:
case 1152:
case 3597:
case 600:
case 3769:
case 3037:
case 44:
case 2051:
case 3502:
case 3677:
case 2740:
case 1745:
case 2210:
case 3899:
case 3440:
case 2390:
case 1395:
case 3975:
case 24:
case 3519:
case 4051:
case 2650:
case 3406:
case 522:
case 1514:
case 637:
case 2706:
case 1753:
case 990:
case 1290:
case 2295:
case 68:
case 2687:
case 433:
case 1446:
case 2658:
case 1980:
case 3959:
case 52:
case 3448:
case 85:
case 1400:
case 2405:
case 372:
case 2122:
case 2748:
case 983:
case 2817:
case 2769:
case 47:
case 901:
case 3333:
case 3501:
case 1318:
case 3469:
case 3051:
case 977:
case 1298:
case 557:
case 3316:
case 730:
case 1151:
case 682:
case 1689:
case 885:
case 2406:
case 34:
case 724:
case 4052:
case 1970:
case 2975:
case 771:
case 3684:
case 4037:
case 3740:
case 2723:
case 2677:
case 3390:
case 3423:
case 535:
case 123:
case 3210:
case 2899:
case 1445:
case 1931:
case 2440:
case 260:
case 1620:
case 2625:
case 1819:
case 614:
case 1039:
case 1767:
case 3814:
case 3034:
case 691:
case 2927:
case 1134:
case 431:
case 615:
case 3197:
case 429:
case 788:
case 398:
case 270:
case 3102:
case 981:
case 2837:
case 3477:
case 884:
case 1338:
case 3640:
case 2623:
case 1608:
case 3293:
case 3336:
case 3784:
case 534:
case 1455:
case 2904:
case 3750:
case 579:
case 602:
case 3426:
case 3271:
case 397:
case 4017:
case 967:
case 836:
case 2403:
case 2099:
case 1428:
case 139:
case 1911:
case 2983:
case 121:
case 1839:
case 362:
case 3992:
case 3605:
case 2648:
case 3774:
case 3335:
case 3014:
case 693:
case 1779:
case 1944:
case 3907:
case 3119:
case 812:
case 2758:
case 470:
case 3487:
case 3458:
case 3949:
case 240:
case 1393:
case 3238:
case 1213:
case 716:
case 370:
case 517:
case 4014:
case 462:
case 3960:
case 1236:
case 732:
case 549:
case 1909:
case 1117:
case 2336:
case 2784:
case 680:
case 1755:
case 1947:
case 3837:
case 99:
case 2477:
case 81:
case 3852:
case 2293:
case 2851:
case 3777:
case 2313:
case 2703:
case 1142:
case 1664:
case 1728:
case 144:
case 3669:
case 2230:
case 1235:
case 3099:
case 2271:
case 743:
case 297:
case 3194:
case 3272:
case 2041:
case 3042:
case 518:
case 3726:
case 2487:
case 1371:
case 498:
case 2458:
case 2949:
case 2335:
case 1479:
case 2605:
case 1600:
case 2014:
case 1756:
case 60:
case 3474:
case 10:
case 86:
case 1579:
case 3123:
case 1257:
case 3574:
case 2140:
case 31:
case 1617:
case 3828:
case 3045:
case 3286:
case 3275:
case 3439:
case 3227:
case 1153:
case 986:
case 920:
case 870:
case 1887:
case 2995:
case 1990:
case 3601:
case 567:
case 3053:
case 2388:
case 3503:
case 4067:
case 3148:
case 212:
case 2105:
case 1100:
case 3918:
case 1933:
case 581:
case 503:
case 2422:
case 3421:
case 1278:
case 831:
case 3843:
case 2820:
case 3584:
case 1146:
case 1877:
case 2224:
case 1699:
case 1737:
case 2996:
case 1069:
case 1359:
case 4008:
case 2525:
case 250:
case 3855:
case 3169:
case 21:
case 2286:
case 2828:
case 2045:
case 1006:
case 3910:
case 193:
case 1556:
case 1231:
case 2574:
case 2123:
case 1108:
case 2:
case 621:
case 2053:
case 3388:
case 1528:
case 3602:
case 3995:
case 2601:
case 1386:
case 918:
case 898:
case 1375:
case 2370:
case 2439:
case 3879:
case 2856:
case 3739:
case 1874:
case 3697:
case 665:
case 3820:
case 1005:
case 1555:
case 2329:
case 102:
case 2843:
case 1614:
case 2584:
case 312:
case 3105:
case 3721:
case 1254:
case 2148:
case 2046:
case 1280:
case 2285:
case 3259:
case 4045:
case 1998:
case 1850:
case 1376:
case 350:
case 41:
case 2064:
case 115:
case 1751:
case 3224:
case 2694:
case 3996:
case 1452:
case 3378:
case 713:
case 2344:
case 2126:
case 2845:
case 548:
case 1499:
case 2028:
case 4055:
case 1003:
case 452:
case 2972:
case 3268:
case 1651:
case 2794:
case 304:
case 590:
case 1442:
case 1211:
case 191:
case 3930:
case 1391:
case 623:
case 1179:
case 2311:
case 3312:
case 2291:
case 3621:
case 3174:
case 299:
case 2187:
case 2419:
case 35:
case 3719:
case 410:
case 1805:
case 2800:
case 2260:
case 2043:
case 182:
case 3639:
case 3020:
case 675:
case 3309:
case 1634:
case 1564:
case 210:
case 1120:
case 2125:
case 3702:
case 2701:
case 3569:
case 746:
case 3401:
case 3981:
case 2846:
case 2938:
case 4056:
case 3993:
case 795:
case 1500:
case 84:
case 2177:
case 1050:
case 1084:
case 1189:
case 3150:
case 2864:
case 2204:
case 1417:
case 2365:
case 1546:
case 1373:
case 1026:
case 1935:
case 3283:
case 1742:
case 2103:
case 1128:
case 1799:
case 578:
case 3344:
case 485:
case 2808:
case 2268:
case 1349:
case 1652:
case 1823:
case 3028:
case 4089:
case 969:
case 2207:
case 2867:
case 2719:
case 906:
case 1156:
case 3291:
case 3853:
case 2292:
case 1508:
case 2523:
case 2312:
case 1058:
case 1143:
case 3701:
case 776:
case 577:
case 583:
case 3982:
case 4079:
case 2569:
case 2401:
case 833:
case 3273:
case 1936:
case 3800:
case 860:
case 2639:
case 2347:
case 3204:
case 3864:
case 1155:
case 1209:
case 1717:
case 2184:
case 3055:
case 352:
case 2993:
case 92:
case 87:
case 533:
case 2672:
case 3560:
case 3346:
case 3573:
case 2496:
case 1129:
case 4057:
case 927:
case 877:
case 904:
case 1024:
case 2269:
case 3630:
case 1348:
case 161:
case 3029:
case 258:
case 3300:
case 1369:
case 1154:
case 2248:
case 457:
case 322:
case 3865:
case 3921:
case 2078:
case 1180:
case 2718:
case 95:
case 57:
case 1762:
case 3054:
case 1547:
case 3504:
case 188:
case 1461:
case 235:
case 1059:
case 878:
case 1934:
case 2127:
case 257:
case 3939:
case 4078:
case 13:
case 2568:
case 3583:
case 2495:
case 1323:
case 435:
case 3345:
case 3844:
case 1267:
case 694:
case 3795:
case 173:
case 2367:
case 2223:
case 1208:
case 3693:
case 3063:
case 2410:
case 1415:
case 3240:
case 739:
case 542:
case 2088:
case 3866:
case 3353:
case 2812:
case 2549:
case 22:
case 721:
case 3811:
case 774:
case 1163:
case 985:
case 2186:
case 2175:
case 1170:
case 2507:
case 1264:
case 3847:
case 1804:
case 358:
case 4031:
case 1498:
case 2029:
case 132:
case 847:
case 3809:
case 3269:
case 1635:
case 4070:
case 1952:
case 2671:
case 2346:
case 1565:
case 2560:
case 2796:
case 999:
case 116:
case 2504:
case 1076:
case 2080:
case 222:
case 2921:
case 1200:
case 3078:
case 2205:
case 2865:
case 2418:
case 1873:
case 54:
case 3248:
case 3718:
case 2681:
case 3638:
case 1340:
case 1613:
case 3682:
case 4080:
case 1027:
case 2844:
case 1636:
case 357:
case 422:
case 1306:
case 910:
case 2939:
case 890:
case 1891:
case 744:
case 32:
case 3812:
case 4029:
case 2031:
case 3088:
case 2866:
case 2353:
case 3057:
case 3175:
case 952:
case 3186:
case 666:
case 1188:
case 2710:
case 653:
case 3592:
case 1245:
case 2240:
case 2591:
case 3223:
case 2693:
case 2070:
case 1554:
case 3047:
case 417:
case 3009:
case 745:
case 4011:
case 3320:
case 2576:
case 2829:
case 2343:
case 1615:
case 4066:
case 89:
case 1255:
case 3104:
case 1109:
case 1917:
case 3160:
case 1384:
case 3524:
case 4044:
case 3173:
case 1529:
case 1350:
case 2355:
case 1073:
case 1690:
case 2902:
case 796:
case 1243:
case 3481:
case 1060:
case 2482:
case 2438:
case 3878:
case 2781:
case 3738:
case 1713:
case 3782:
case 334:
case 249:
case 2044:
case 2274:
case 1827:
case 418:
case 1616:
case 4065:
case 1661:
case 1570:
case 2586:
case 598:
case 2066:
case 2696:
case 3012:
case 2011:
case 217:
case 2527:
case 2168:
case 3857:
case 3772:
case 1112:
case 3183:
case 1374:
case 1735:
case 3430:
case 2870:
case 1875:
case 141:
case 1228:
case 156:
case 529:
case 1289:
case 3250:
case 1578:
case 646:
case 3284:
case 1824:
case 163:
case 3829:
case 3610:
case 881:
case 4012:
case 2320:
case 3576:
case 2559:
case 3585:
case 3438:
case 3065:
case 3902:
case 286:
case 2225:
case 1220:
case 1377:
case 318:
case 3781:
case 3854:
case 2173:
case 479:
case 2160:
case 1165:
case 434:
case 3355:
case 108:
case 1914:
case 3149:
case 1144:
case 486:
case 3586:
case 1326:
case 1092:
case 3328:
case 1532:
case 2618:
case 1557:
case 279:
case 3044:
case 171:
case 2183:
case 3356:
case 1698:
case 867:
case 1941:
case 1435:
case 3696:
case 2012:
case 4009:
case 3831:
case 723:
case 2888:
case 3066:
case 3472:
case 3168:
case 2772:
case 950:
case 905:
case 317:
case 2994:
case 1355:
case 2529:
case 3436:
case 544:
case 3859:
case 2885:
case 1880:
case 3165:
case 2384:
case 772:
case 667:
case 1781:
case 118:
case 1695:
case 2243:
case 1438:
case 1065:
case 3413:
case 330:
case 2580:
case 1585:
case 3824:
case 1284:
case 2109:
case 3289:
case 3578:
case 2147:
case 356:
case 3387:
case 117:
case 1168:
case 4004:
case 1831:
case 2083:
case 1011:
case 2942:
case 324:
case 74:
case 3068:
case 2886:
case 3941:
case 1870:
case 895:
case 1203:
case 3698:
case 915:
case 1356:
case 1863:
case 3166:
case 2735:
case 1730:
case 371:
case 3557:
case 3007:
case 1044:
case 1274:
case 3049:
case 2531:
case 3279:
case 2303:
case 3588:
case 1328:
case 3532:
case 2616:
case 2563:
case 4060:
case 2661:
case 1919:
case 1586:
case 3326:
case 2570:
case 1575:
case 3662:
case 3914:
case 1149:
case 2377:
case 1738:
case 1782:
case 3713:
case 4092:
case 3243:
case 1481:
case 1878:
case 186:
case 565:
case 889:
case 1901:
case 1225:
case 2220:
case 4049:
case 521:
case 2859:
case 2436:
case 742:
case 208:
case 954:
case 2165:
case 1524:
case 3917:
case 90:
case 1104:
case 256:
case 424:
case 4068:
case 2289:
case 2578:
case 1559:
case 3580:
case 2325:
case 1320:
case 2824:
case 1277:
case 1047:
case 3004:
case 224:
case 3942:
case 1430:
case 341:
case 3886:
case 2111:
case 3112:
case 1772:
case 2387:
case 3083:
case 3999:
case 760:
case 1258:
case 3661:
case 2144:
case 2326:
case 3563:
case 2092:
case 733:
case 3091:
case 2914:
case 1287:
case 980:
case 926:
case 876:
case 2557:
case 179:
case 3303:
case 3531:
case 3256:
case 134:
case 1618:
case 1185:
case 1718:
case 106:
case 43:
case 3873:
case 2433:
case 2154:
case 3200:
case 1078:
case 3860:
case 169:
case 3085:
case 3462:
case 135:
case 3761:
case 2762:
case 98:
case 3937:
case 487:
case 1672:
case 3565:
case 1496:
case 76:
case 2348:
case 261:
case 2798:
case 3264:
case 3804:
case 1847:
case 690:
case 1223:
case 2868:
case 3086:
case 287:
case 343:
case 1410:
case 3245:
case 273:
case 3132:
case 4024:
case 1057:
case 1186:
case 938:
case 1507:
case 1032:
case 12:
case 1549:
case 3883:
case 461:
case 157:
case 2892:
case 1127:
case 3306:
case 23:
case 1568:
case 3636:
case 564:
case 2934:
case 647:
case 2267:
case 3790:
case 575:
case 3027:
case 955:
case 2849:
case 1495:
case 2512:
case 3511:
case 4059:
case 488:
case 3566:
case 1682:
case 3461:
case 1080:
case 2076:
case 3416:
case 388:
case 798:
case 2246:
case 1054:
case 216:
case 3547:
case 2178:
case 4027:
case 2733:
case 3180:
case 1159:
case 1364:
case 1865:
case 2200:
case 1921:
case 1418:
case 3154:
case 2498:
case 1029:
case 1630:
case 361:
case 3348:
case 2804:
case 811:
case 1796:
case 3129:
case 2952:
case 325:
case 443:
case 1124:
case 1671:
case 894:
case 1346:
case 914:
case 3170:
case 2544:
case 3163:
case 2883:
case 432:
case 1031:
case 1206:
case 1866:
case 1063:
case 243:
case 1591:
case 1240:
case 2157:
case 2086:
case 3868:
case 1693:
case 2188:
case 3131:
case 373:
case 2715:
case 2790:
case 1795:
case 2027:
case 3807:
case 3267:
case 2613:
case 2566:
case 3512:
case 3849:
case 3323:
case 2511:
case 2636:
case 762:
case 3892:
case 677:
case 2891:
case 916:
case 1291:
case 1853:
case 2545:
case 1540:
case 482:
case 3087:
case 3414:
case 1506:
case 337:
case 2714:
case 1056:
case 1419:
case 3368:
case 67:
case 2553:
case 1845:
case 2840:
case 2499:
case 1972:
case 4050:
case 2651:
case 3349:
case 3823:
case 3637:
case 3799:
case 1126:
case 633:
case 3567:
case 660:
case 3742:
case 3128:
case 79:
case 2442:
case 3441:
case 1283:
case 38:
case 2806:
case 845:
case 2266:
case 642:
case 2084:
case 2500:
case 1505:
case 338:
case 2050:
case 152:
case 2546:
case 1365:
case 3717:
case 491:
case 3209:
case 2189:
case 1864:
case 2417:
case 943:
case 511:
case 2265:
case 1800:
case 1043:
case 282:
case 355:
case 594:
case 1273:
case 3936:
case 3913:
case 110:
case 1125:
case 2120:
case 4074:
case 1207:
case 2414:
case 64:
case 2368:
case 1249:
case 3714:
case 1292:
case 2508:
case 1312:
case 3383:
case 2058:
case 2087:
case 988:
case 4077:
case 3741:
case 875:
case 3266:
case 3806:
case 2392:
case 781:
case 391:
case 1930:
case 2212:
case 3651:
case 1808:
case 104:
case 2652:
case 3840:
case 1971:
case 759:
case 127:
case 438:
case 864:
case 2799:
case 2637:
case 961:
case 553:
case 3546:
case 973:
case 987:
case 3417:
case 3189:
case 1150:
case 2077:
case 3500:
case 672:
case 1089:
case 767:
case 3050:
case 1548:
case 1993:
case 1981:
case 2913:
case 2143:
case 1702:
case 93:
case 3564:
case 3304:
case 3634:
case 255:
case 2848:
case 2025:
case 1020:
case 1797:
case 4058:
case 3265:
case 2434:
case 3874:
case 1697:
case 1739:
case 3734:
case 1602:
case 4048:
case 1995:
case 426:
case 480:
case 3528:
case 1357:
case 908:
case 2257:
case 777:
case 576:
case 956:
case 701:
case 1910:
case 3006:
case 2915:
case 393:
case 2579:
case 3556:
case 3040:
case 3263:
case 3270:
case 184:
case 1558:
case 3327:
case 1587:
case 930:
case 1106:
case 1378:
case 2699:
case 821:
case 971:
case 839:
case 3452:
case 136:
case 40:
case 3751:
case 3437:
case 924:
case 2752:
case 315:
case 640:
case 3884:
case 1525:
case 2520:
case 2359:
case 3385:
case 3641:
case 3850:
case 1889:
case 1721:
case 3254:
case 112:
case 1577:
case 2100:
case 1105:
case 2324:
case 778:
case 3614:
case 3555:
case 2589:
case 302:
case 1820:
case 280:
case 226:
case 454:
case 1503:
case 402:
case 595:
case 3990:
case 1601:
case 2167:
case 3887:
case 1:
case 2874:
case 3153:
case 1370:
case 2375:
case 1363:
case 1439:
case 1286:
case 1275:
case 2270:
case 3023:
case 2040:
case 1045:
case 2803:
case 11:
case 3617:
case 2327:
case 631:
case 3145:
case 3257:
case 2108:
case 629:
case 293:
case 3915:
case 3232:
case 2231:
case 546:
case 2884:
case 4040:
case 2998:
case 2850:
case 3359:
case 3642:
case 1380:
case 3520:
case 2376:
case 2641:
case 3451:
case 3069:
case 4006:
case 2229:
case 1064:
case 215:
case 3877:
case 941:
case 3752:
case 1694:
case 2614:
case 3146:
case 513:
case 3825:
case 3048:
case 2962:
case 380:
case 3278:
case 3916:
case 2005:
case 202:
case 2555:
case 748:
case 3589:
case 1421:
case 1276:
case 1285:
case 3933:
case 1521:
case 1623:
case 2608:
case 1837:
case 3755:
case 2789:
case 1904:
case 474:
case 16:
case 3909:
case 421:
case 3489:
case 2455:
case 1450:
case 439:
case 2552:
case 524:
case 1973:
case 2821:
case 2965:
case 769:
case 3653:
case 2537:
case 2097:
case 1725:
case 2720:
case 1101:
case 989:
case 3213:
case 735:
case 3393:
case 1474:
case 3756:
case 826:
case 129:
case 556:
case 4002:
case 2114:
case 1787:
case 61:
case 3371:
case 2372:
case 563:
case 3646:
case 1758:
case 1726:
case 2966:
case 1403:
case 1099:
case 239:
case 508:
case 6:
case 221:
case 3235:
case 3912:
case 3094:
case 3728:
case 1606:
case 444:
case 1336:
case 1784:
case 2117:
case 893:
case 3608:
case 2381:
case 3338:
case 1640:
case 3382:
case 1477:
case 3667:
case 3097:
case 605:
case 3720:
case 140:
case 2420:
case 1425:
case 2393:
case 3443:
case 1281:
case 198:
case 3821:
case 2653:
case 2822:
case 3552:
case 2236:
case 3002:
case 636:
case 3537:
case 2371:
case 1949:
case 1487:
case 1907:
case 1119:
case 2756:
case 1014:
case 3779:
case 4001:
case 1774:
case 3839:
case 3456:
case 162:
case 2600:
case 1605:
case 244:
case 3911:
case 2235:
case 1230:
case 2912:
case 321:
case 3966:
case 339:
case 1703:
case 995:
case 2199:
case 2534:
case 1271:
case 197:
case 1041:
case 1426:
case 1924:
case 1296:
case 2137:
case 3929:
case 1603:
case 3298:
case 1333:
case 1501:
case 3318:
case 1051:
case 3464:
case 685:
case 1121:
case 172:
case 2700:
case 1705:
case 3679:
case 3400:
case 2233:
case 1959:
case 2261:
case 2801:
case 3802:
case 296:
case 3262:
case 2216:
case 2978:
case 543:
case 2022:
case 3446:
case 2746:
case 718:
case 3134:
case 532:
case 1594:
case 1139:
case 2467:
case 2643:
case 1315:
case 3767:
case 882:
case 3542:
case 496:
case 2988:
case 1210:
case 2215:
case 3445:
case 3931:
case 1423:
case 1390:
case 2408:
case 445:
case 3708:
case 516:
case 2745:
case 1740:
case 14:
case 1841:
case 3689:
case 3963:
case 264:
case 1502:
case 2298:
case 610:
case 3764:
case 3628:
case 1817:
case 2464:
case 1769:
case 1597:
case 275:
case 2151:
case 3152:
case 2929:
case 1626:
case 3216:
case 3978:
case 4039:
case 587:
case 3261:
case 720:
case 2517:
case 953:
case 573:
case 3746:
case 3700:
case 652:
case 1122:
case 2980:
case 1985:
case 3233:
case 1218:
case 1976:
case 2679:
case 3656:
case 160:
case 525:
case 3290:
case 2620:
case 2819:
case 2542:
case 133:
case 2039:
case 800:
case 3643:
case 3310:
case 855:
case 2134:
case 2599:
case 734:
case 561:
case 1927:
case 779:
case 3753:
case 17:
case 3514:
case 2963:
case 2970:
case 838:
case 1986:
case 1842:
case 3408:
case 223:
case 2445:
case 2931:
case 3745:
case 3957:
case 1677:
case 2708:
case 3030:
case 2319:
case 861:
case 3629:
case 177:
case 1768:
case 1171:
case 964:
case 2712:
case 3766:
case 311:
case 2466:
case 3071:
case 2928:
case 394:
case 1483:
case 3590:
case 784:
case 1491:
case 4082:
case 2956:
case 3680:
case 1974:
case 3654:
case 2444:
case 3214:
case 3394:
case 1219:
case 266:
case 209:
case 1399:
case 3744:
case 2678:
case 3765:
case 1317:
case 58:
case 1473:
case 2818:
case 2082:
case 453:
case 3081:
case 409:
case 83:
case 1862:
case 466:
case 2113:
case 178:
case 622:
case 1193:
case 2657:
case 537:
case 2688:
case 3631:
case 3533:
case 3896:
case 705:
case 3989:
case 1950:
case 1898:
case 3516:
case 2217:
case 873:
case 2709:
case 1984:
case 2397:
case 71:
case 2711:
case 3712:
case 1783:
case 4093:
case 2590:
case 2412:
case 3466:
case 3928:
case 3299:
case 147:
case 2629:
case 1815:
case 2030:
case 1926:
case 832:
case 1172:
case 1294:
case 657:
case 1314:
case 7:
case 2394:
case 1407:
case 2214:
case 3678:
case 309:
case 1958:
case 366:
case 3956:
case 353:
case 2515:
case 2654:
case 996:
case 816:
case 1036:
case 190:
case 148:
case 3598:
case 658:
case 1182:
case 3113:
case 1138:
case 1760:
case 514:
case 3038:
case 1013:
case 2081:
case 3818:
case 1833:
case 2989:
case 3955:
case 2516:
case 4071:
case 2663:
case 2093:
case 494:
case 1686:
case 2670:
case 3562:
case 2561:
case 3397:
case 411:
case 3217:
case 3657:
case 669:
case 606:
case 3302:
case 2896:
case 2533:
case 3688:
case 3632:
case 213:
case 634:
case 3788:
case 2731:
case 3872:
case 2488:
case 3757:
case 2871:
case 679:
case 2908:
case 2830:
case 1835:
case 3463:
case 2010:
case 1604:
case 1334:
case 2770:
case 2234:
case 1673:
case 2665:
case 389:
case 799:
case 1530:
case 351:
case 515:
case 1222:
case 1691:
case 3480:
case 1836:
case 2780:
case 3454:
case 2644:
case 3778:
case 2162:
case 1351:
case 1033:
case 246:
case 3882:
case 2478:
case 3838:
case 3946:
case 2881:
case 593:
case 2251:
case 2536:
case 3252:
case 295:
case 3429:
case 752:
case 413:
case 1424:
case 944:
case 2198:
case 3964:
case 2513:
case 2322:
case 4010:
case 1969:
case 2611:
case 1683:
case 2096:
case 830:
case 2339:
case 2463:
case 1906:
case 1486:
case 1475:
case 2470:
case 2647:
case 3763:
case 2788:
case 3731:
case 2115:
case 313:
case 580:
case 3488:
case 159:
case 3432:
case 1940:
case 727:
case 2757:
case 251:
case 75:
case 1195:
case 3234:
case 1427:
case 1572:
case 3665:
case 1239:
case 3095:
case 617:
case 1337:
case 2116:
case 2161:
case 3644:
case 1607:
case 2778:
case 3881:
case 2946:
case 451:
case 2018:
case 346:
case 1476:
case 1485:
case 1221:
case 2900:
case 3754:
case 2454:
case 1759:
case 3780:
case 965:
case 3611:
case 3666:
case 3513:
case 2429:
case 395:
case 974:
case 807:
case 2252:
case 921:
case 2237:
case 939:
case 1196:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750240801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,];
var gg_b = "1750240801/";

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
