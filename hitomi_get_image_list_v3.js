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
case 462:
case 252:
case 1154:
case 2189:
case 211:
case 1836:
case 2792:
case 2272:
case 1565:
case 2486:
case 27:
case 2118:
case 1883:
case 3651:
case 613:
case 1309:
case 2433:
case 1213:
case 4065:
case 420:
case 3585:
case 1862:
case 2404:
case 2632:
case 1783:
case 2140:
case 2101:
case 2552:
case 954:
case 3004:
case 1066:
case 1929:
case 1246:
case 847:
case 2855:
case 1975:
case 2666:
case 2892:
case 1335:
case 3086:
case 3782:
case 811:
case 1290:
case 1770:
case 201:
case 2089:
case 852:
case 1618:
case 2196:
case 1394:
case 87:
case 3669:
case 2018:
case 3078:
case 3401:
case 2534:
case 1689:
case 161:
case 1469:
case 2001:
case 2478:
case 2827:
case 2364:
case 1166:
case 3104:
case 686:
case 341:
case 2950:
case 88:
case 1132:
case 1601:
case 3186:
case 3399:
case 2703:
case 1181:
case 3606:
case 1664:
case 1135:
case 3059:
case 578:
case 761:
case 872:
case 1570:
case 3684:
case 2301:
case 2340:
case 3161:
case 444:
case 2064:
case 3226:
case 3949:
case 2318:
case 2694:
case 633:
case 1109:
case 882:
case 697:
case 1960:
case 2921:
case 2803:
case 2156:
case 1354:
case 231:
case 1094:
case 1250:
case 393:
case 967:
case 3731:
case 1972:
case 2728:
case 2852:
case 2895:
case 3077:
case 1035:
case 1332:
case 272:
case 3061:
case 3333:
case 3200:
case 2592:
case 3973:
case 25:
case 46:
case 1366:
case 3304:
case 2681:
case 282:
case 1420:
case 3924:
case 2229:
case 1009:
case 3691:
case 1865:
case 1656:
case 923:
case 3831:
case 1583:
case 4036:
case 2752:
case 974:
case 2795:
case 2609:
case 3417:
case 3885:
case 1562:
case 258:
case 2519:
case 2650:
case 2129:
case 913:
case 2426:
case 3444:
case 3822:
case 1390:
case 501:
case 3115:
case 1294:
case 2175:
case 3525:
case 1723:
case 3598:
case 1507:
case 2954:
case 1874:
case 654:
case 1321:
case 3100:
case 446:
case 2044:
case 3969:
case 3026:
case 2264:
case 3543:
case 2029:
case 858:
case 4042:
case 1313:
case 2400:
case 430:
case 903:
case 976:
case 3015:
case 3312:
case 511:
case 1542:
case 1811:
case 1708:
case 3951:
case 1281:
case 2415:
case 1437:
case 492:
case 3000:
case 3429:
case 3126:
case 2576:
case 2144:
case 1346:
case 1473:
case 1121:
case 3233:
case 780:
case 1046:
case 1742:
case 2909:
case 3204:
case 3743:
case 3757:
case 878:
case 3816:
case 2412:
case 3472:
case 3286:
case 1956:
case 2935:
case 3843:
case 3857:
case 1190:
case 888:
case 1917:
case 3012:
case 3716:
case 2776:
case 49:
case 997:
case 1672:
case 4045:
case 1508:
case 400:
case 1842:
case 770:
case 3898:
case 2060:
case 2788:
case 1021:
case 355:
case 1146:
case 2719:
case 3299:
case 2730:
case 4074:
case 667:
case 3558:
case 2621:
case 288:
case 1090:
case 327:
case 3879:
case 221:
case 379:
case 143:
case 4023:
case 2172:
case 3649:
case 3522:
case 1523:
case 1964:
case 3460:
case 410:
case 1707:
case 3825:
case 3701:
case 3288:
case 104:
case 1302:
case 2648:
case 2427:
case 3974:
case 2279:
case 1470:
case 2163:
case 3303:
case 3230:
case 287:
case 195:
case 328:
case 3219:
case 3334:
case 4084:
case 3155:
case 2899:
case 1010:
case 277:
case 799:
case 1506:
case 3923:
case 3192:
case 920:
case 1193:
case 3840:
case 3801:
case 3670:
case 2559:
case 3027:
case 2639:
case 3556:
case 998:
case 1591:
case 332:
case 1105:
case 2704:
case 3328:
case 3662:
case 1148:
case 2455:
case 2243:
case 2331:
case 2257:
case 2063:
case 864:
case 2786:
case 24:
case 2385:
case 1851:
case 3896:
case 692:
case 1520:
case 1997:
case 3352:
case 2561:
case 2:
case 829:
case 3463:
case 630:
case 2693:
case 3908:
case 1751:
case 3395:
case 2216:
case 3796:
case 3092:
case 2833:
case 1483:
case 1462:
case 390:
case 1347:
case 2577:
case 69:
case 3942:
case 2861:
case 2586:
case 1047:
case 1267:
case 2428:
case 2533:
case 1271:
case 1791:
case 600:
case 33:
case 2504:
case 519:
case 3095:
case 3856:
case 4051:
case 2452:
case 2031:
case 2297:
case 2085:
case 3134:
case 1685:
case 1720:
case 302:
case 1102:
case 1551:
case 1631:
case 3596:
case 842:
case 2599:
case 726:
case 3864:
case 704:
case 1153:
case 474:
case 1147:
case 3540:
case 1310:
case 2403:
case 548:
case 795:
case 2968:
case 423:
case 2859:
case 1979:
case 3195:
case 2434:
case 1214:
case 2602:
case 2131:
case 3518:
case 1784:
case 2185:
case 199:
case 96:
case 3034:
case 467:
case 257:
case 312:
case 3764:
case 1706:
case 1002:
case 4069:
case 3228:
case 1411:
case 1573:
case 2357:
case 54:
case 2343:
case 2231:
case 2285:
case 3875:
case 360:
case 946:
case 2700:
case 1697:
case 3829:
case 322:
case 3572:
case 3608:
case 2993:
case 4073:
case 3729:
case 4024:
case 2800:
case 140:
case 716:
case 1445:
case 2158:
case 2671:
case 662:
case 1067:
case 3983:
case 1071:
case 1982:
case 2667:
case 805:
case 1524:
case 3775:
case 3497:
case 2316:
case 3087:
case 1114:
case 2715:
case 1963:
case 215:
case 1549:
case 338:
case 3330:
case 3319:
case 1474:
case 2197:
case 3234:
case 2939:
case 783:
case 3388:
case 769:
case 3744:
case 3458:
case 1202:
case 2726:
case 2325:
case 486:
case 698:
case 1580:
case 2398:
case 2826:
case 3422:
case 2058:
case 706:
case 4038:
case 1167:
case 294:
case 476:
case 1658:
case 239:
case 1171:
case 3560:
case 1538:
case 2948:
case 4080:
case 773:
case 529:
case 3187:
case 1014:
case 1880:
case 525:
case 819:
case 1239:
case 2526:
case 433:
case 1314:
case 1698:
case 3860:
case 596:
case 2902:
case 2098:
case 1838:
case 3425:
case 3227:
case 124:
case 106:
case 557:
case 1679:
case 1205:
case 2668:
case 2322:
case 753:
case 349:
case 173:
case 1248:
case 2143:
case 308:
case 3030:
case 644:
case 266:
case 456:
case 848:
case 219:
case 1371:
case 1985:
case 3255:
case 2541:
case 809:
case 835:
case 2712:
case 3292:
case 2016:
case 3387:
case 910:
case 1931:
case 3965:
case 2198:
case 1442:
case 542:
case 2953:
case 2947:
case 3575:
case 1643:
case 2515:
case 3642:
case 2179:
case 1168:
case 4037:
case 3529:
case 318:
case 3130:
case 2263:
case 2057:
case 2282:
case 866:
case 2812:
case 2944:
case 689:
case 3926:
case 384:
case 1018:
case 2689:
case 1654:
case 3805:
case 451:
case 261:
case 2770:
case 2054:
case 1499:
case 3710:
case 4034:
case 3151:
case 3678:
case 2618:
case 4003:
case 2394:
case 1196:
case 3454:
case 323:
case 2870:
case 3280:
case 3384:
case 2601:
case 2132:
case 731:
case 1040:
case 679:
case 1260:
case 374:
case 3705:
case 1827:
case 3699:
case 3169:
case 1528:
case 2213:
case 3793:
case 1433:
case 75:
case 3273:
case 3941:
case 580:
case 772:
case 1404:
case 1189:
case 111:
case 152:
case 3391:
case 1272:
case 17:
case 4028:
case 1096:
case 1792:
case 3604:
case 1855:
case 4052:
case 18:
case 2032:
case 2736:
case 1140:
case 1101:
case 993:
case 1552:
case 3686:
case 2929:
case 2066:
case 3224:
case 2762:
case 2246:
case 937:
case 1555:
case 490:
case 3677:
case 15:
case 1681:
case 1164:
case 3106:
case 907:
case 3593:
case 1728:
case 40:
case 4092:
case 77:
case 2491:
case 1017:
case 3184:
case 3661:
case 2035:
case 2332:
case 711:
case 3481:
case 3091:
case 2583:
case 78:
case 550:
case 1275:
case 1477:
case 1795:
case 1396:
case 2194:
case 2009:
case 1461:
case 182:
case 2865:
case 941:
case 2536:
case 432:
case 3120:
case 1340:
case 1301:
case 2570:
case 3539:
case 1064:
case 1244:
case 675:
case 41:
case 1703:
case 471:
case 1527:
case 3494:
case 2135:
case 2354:
case 131:
case 354:
case 3191:
case 2250:
case 747:
case 481:
case 1459:
case 1834:
case 2094:
case 428:
case 543:
case 2109:
case 1318:
case 1694:
case 2960:
case 1921:
case 685:
case 3771:
case 963:
case 3986:
case 1932:
case 955:
case 2711:
case 1372:
case 2150:
case 418:
case 2675:
case 1400:
case 1441:
case 2313:
case 280:
case 3373:
case 3615:
case 3933:
case 989:
case 3767:
case 3220:
case 3324:
case 979:
case 1144:
case 2745:
case 1576:
case 927:
case 2708:
case 2281:
case 1217:
case 3641:
case 891:
case 1887:
case 2390:
case 1175:
case 449:
case 3137:
case 2774:
case 778:
case 3714:
case 408:
case 4030:
case 1650:
case 1129:
case 158:
case 1530:
case 561:
case 1519:
case 2901:
case 1426:
case 2940:
case 637:
case 3206:
case 2918:
case 3626:
case 333:
case 2723:
case 3450:
case 788:
case 291:
case 2874:
case 3284:
case 721:
case 2507:
case 3768:
case 3080:
case 303:
case 1994:
case 1719:
case 3490:
case 1788:
case 2021:
case 1240:
case 1201:
case 376:
case 1344:
case 3514:
case 2807:
case 2964:
case 3269:
case 2113:
case 386:
case 2438:
case 2523:
case 2707:
case 3959:
case 3868:
case 188:
case 2090:
case 1819:
case 1172:
case 438:
case 3180:
case 1646:
case 1876:
case 3413:
case 3571:
case 1160:
case 975:
case 617:
case 2266:
case 1909:
case 2013:
case 3149:
case 1329:
case 2842:
case 3961:
case 3446:
case 2917:
case 3977:
case 250:
case 843:
case 2190:
case 1981:
case 2545:
case 1296:
case 1243:
case 1331:
case 1063:
case 3509:
case 2148:
case 3036:
case 1385:
case 14:
case 214:
case 1967:
case 3083:
case 3493:
case 1733:
case 804:
case 3766:
case 3242:
case 2105:
case 742:
case 3692:
case 618:
case 36:
case 2093:
case 1577:
case 2347:
case 540:
case 4061:
case 3655:
case 3866:
case 4077:
case 2110:
case 1:
case 2139:
case 2997:
case 3170:
case 1561:
case 1216:
case 2436:
case 3832:
case 951:
case 2751:
case 3410:
case 187:
case 1163:
case 3439:
case 1799:
case 2048:
case 493:
case 3854:
case 2470:
case 3136:
case 1182:
case 3183:
case 226:
case 204:
case 2869:
case 93:
case 1427:
case 3594:
case 2302:
case 1648:
case 344:
case 1298:
case 2193:
case 649:
case 2769:
case 1610:
case 1639:
case 553:
case 3207:
case 1559:
case 2584:
case 1899:
case 3627:
case 177:
case 2010:
case 4059:
case 3448:
case 2506:
case 1403:
case 2310:
case 2339:
case 764:
case 3794:
case 398:
case 3930:
case 1968:
case 569:
case 1599:
case 2147:
case 3402:
case 2806:
case 157:
case 234:
case 3634:
case 90:
case 3603:
case 2706:
case 524:
case 3165:
case 2305:
case 2002:
case 1222:
case 3223:
case 2348:
case 1578:
case 729:
case 573:
case 2784:
case 74:
case 3211:
case 1653:
case 4086:
case 1428:
case 2271:
case 3881:
case 3835:
case 1877:
case 142:
case 1861:
case 3709:
case 2047:
case 660:
case 3532:
case 981:
case 2465:
case 4033:
case 320:
case 834:
case 1761:
case 91:
case 3453:
case 3628:
case 2102:
case 516:
case 3362:
case 3245:
case 1363:
case 2916:
case 3976:
case 1452:
case 1777:
case 362:
case 1382:
case 7:
case 1085:
case 1297:
case 236:
case 3590:
case 92:
case 3145:
case 526:
case 1325:
case 1726:
case 3023:
case 2549:
case 2622:
case 2368:
case 1939:
case 1910:
case 595:
case 3850:
case 2474:
case 3111:
case 2538:
case 612:
case 2423:
case 139:
case 3521:
case 2171:
case 105:
case 3074:
case 1948:
case 3750:
case 455:
case 265:
case 1398:
case 840:
case 253:
case 2167:
case 194:
case 918:
case 1826:
case 1058:
case 300:
case 1700:
case 1512:
case 3467:
case 3342:
case 514:
case 4012:
case 2411:
case 3123:
case 3992:
case 3471:
case 719:
case 1815:
case 602:
case 2408:
case 1715:
case 2524:
case 3174:
case 2737:
case 3546:
case 240:
case 1841:
case 1800:
case 1158:
case 1671:
case 949:
case 1198:
case 2773:
case 3713:
case 3676:
case 869:
case 3107:
case 938:
case 4000:
case 632:
case 883:
case 1541:
case 1500:
case 2371:
case 2985:
case 1712:
case 2931:
case 4015:
case 873:
case 1043:
case 1179:
case 3236:
case 1812:
case 3952:
case 1282:
case 1953:
case 2873:
case 330:
case 824:
case 806:
case 2643:
case 60:
case 3345:
case 3746:
case 3042:
case 2724:
case 346:
case 628:
case 3821:
case 4026:
case 3007:
case 1358:
case 148:
case 2210:
case 3934:
case 485:
case 2880:
case 922:
case 2314:
case 3374:
case 1143:
case 475:
case 3323:
case 599:
case 3890:
case 273:
case 2068:
case 1079:
case 2625:
case 206:
case 2738:
case 816:
case 671:
case 3630:
case 2407:
case 1025:
case 2205:
case 1322:
case 61:
case 2757:
case 2743:
case 889:
case 3876:
case 2286:
case 4071:
case 1571:
case 2233:
case 2341:
case 1138:
case 2204:
case 1024:
case 855:
case 3909:
case 863:
case 440:
case 991:
case 1149:
case 1073:
case 1612:
case 1446:
case 2597:
case 1961:
case 827:
case 1977:
case 3935:
case 3981:
case 1251:
case 2315:
case 2673:
case 2012:
case 103:
case 4014:
case 1490:
case 3994:
case 3719:
case 2299:
case 3621:
case 661:
case 980:
case 2638:
case 3240:
case 1038:
case 176:
case 453:
case 2680:
case 1124:
case 465:
case 1514:
case 2460:
case 1049:
case 1421:
case 2906:
case 1269:
case 2825:
case 3690:
case 436:
case 279:
case 797:
case 1868:
case 3289:
case 2879:
case 3819:
case 227:
case 388:
case 2522:
case 2649:
case 3172:
case 2112:
case 970:
case 507:
case 2525:
case 3175:
case 4068:
case 473:
case 1137:
case 1714:
case 1999:
case 703:
case 275:
case 1568:
case 3129:
case 3519:
case 3530:
case 776:
case 2758:
case 2444:
case 3360:
case 259:
case 1338:
case 3264:
case 2026:
case 2969:
case 3044:
case 1978:
case 2858:
case 950:
case 1626:
case 1284:
case 2259:
case 1450:
case 197:
case 541:
case 3256:
case 1771:
case 1986:
case 1291:
case 3932:
case 2897:
case 3372:
case 517:
case 713:
case 2312:
case 3400:
case 2637:
case 3966:
case 1904:
case 1373:
case 2543:
case 1933:
case 416:
case 2000:
case 1220:
case 859:
case 3144:
case 2126:
case 1867:
case 2516:
case 1600:
case 2475:
case 2797:
case 2161:
case 3301:
case 2684:
case 1659:
case 1539:
case 1702:
case 2949:
case 784:
case 3064:
case 3703:
case 3117:
case 2059:
case 1494:
case 4010:
case 2177:
case 589:
case 1191:
case 154:
case 3803:
case 3459:
case 2980:
case 527:
case 2378:
case 4005:
case 3318:
case 3921:
case 2464:
case 774:
case 404:
case 2200:
case 3555:
case 1409:
case 1677:
case 3635:
case 372:
case 3681:
case 2304:
case 1853:
case 3592:
case 3852:
case 3728:
case 2731:
case 680:
case 1912:
case 2159:
case 3017:
case 1184:
case 2785:
case 2620:
case 2077:
case 3895:
case 1481:
case 3752:
case 3828:
case 1091:
case 2885:
case 2417:
case 2215:
case 1435:
case 2924:
case 382:
case 2582:
case 414:
case 1747:
case 2178:
case 1793:
case 3433:
case 1169:
case 2651:
case 2531:
case 1273:
case 3118:
case 1466:
case 1941:
case 1900:
case 2585:
case 3755:
case 3356:
case 2863:
case 217:
case 3272:
case 2212:
case 3792:
case 3666:
case 3855:
case 2763:
case 1915:
case 2782:
case 38:
case 2496:
case 1547:
case 2377:
case 3892:
case 3552:
case 2361:
case 3101:
case 3140:
case 1320:
case 2033:
case 650:
case 4047:
case 3595:
case 4002:
case 1926:
case 3503:
case 3727:
case 499:
case 3089:
case 575:
case 817:
case 1710:
case 1739:
case 3499:
case 1151:
case 3196:
case 123:
case 585:
case 1810:
case 3260:
case 643:
case 3001:
case 174:
case 2418:
case 1238:
case 1705:
case 3364:
case 1699:
case 146:
case 3488:
case 2860:
case 2425:
case 626:
case 348:
case 1790:
case 604:
case 3430:
case 1468:
case 1270:
case 1903:
case 3116:
case 3526:
case 2030:
case 1323:
case 2019:
case 249:
case 940:
case 2498:
case 2088:
case 551:
case 3322:
case 512:
case 1142:
case 2965:
case 470:
case 1846:
case 700:
case 614:
case 1311:
case 53:
case 2457:
case 3500:
case 2255:
case 79:
case 2387:
case 3016:
case 3712:
case 2292:
case 22:
case 3057:
case 2119:
case 1995:
case 849:
case 218:
case 1308:
case 2642:
case 965:
case 3397:
case 2872:
case 130:
case 3953:
case 1813:
case 3515:
case 3125:
case 502:
case 1345:
case 100:
case 3700:
case 3512:
case 3993:
case 1045:
case 3122:
case 2608:
case 983:
case 3231:
case 3357:
case 19:
case 969:
case 2645:
case 2228:
case 3487:
case 3815:
case 845:
case 3097:
case 3285:
case 50:
case 2936:
case 2252:
case 924:
case 3715:
case 906:
case 2087:
case 3316:
case 2376:
case 1174:
case 2497:
case 2775:
case 1546:
case 1687:
case 3841:
case 2729:
case 4046:
case 2611:
case 3671:
case 730:
case 2623:
case 1145:
case 2744:
case 2319:
case 238:
case 3910:
case 245:
case 581:
case 3939:
case 4090:
case 443:
case 860:
case 528:
case 634:
case 1111:
case 1521:
case 916:
case 1750:
case 3948:
case 3398:
case 3905:
case 2674:
case 768:
case 394:
case 2844:
case 4021:
case 2422:
case 2431:
case 2355:
case 3533:
case 1881:
case 2287:
case 1835:
case 926:
case 2095:
case 904:
case 23:
case 342:
case 1695:
case 2942:
case 1709:
case 1532:
case 1652:
case 3586:
case 851:
case 1383:
case 120:
case 1809:
case 76:
case 1065:
case 640:
case 3452:
case 2028:
case 1781:
case 2665:
case 1976:
case 1336:
case 3085:
case 518:
case 636:
case 1370:
case 2501:
case 2152:
case 325:
case 1794:
case 1919:
case 2195:
case 3434:
case 83:
case 3599:
case 396:
case 2327:
case 1402:
case 1988:
case 2907:
case 251:
case 802:
case 2589:
case 1603:
case 1165:
case 1223:
case 2003:
case 2518:
case 665:
case 3602:
case 2034:
case 1894:
case 549:
case 3185:
case 3914:
case 1439:
case 3799:
case 1410:
case 3163:
case 281:
case 3279:
case 364:
case 1136:
case 1183:
case 3878:
case 2740:
case 683:
case 1594:
case 2801:
case 3778:
case 3639:
case 2027:
case 1207:
case 890:
case 2670:
case 1405:
case 1627:
case 1754:
case 2789:
case 2155:
case 1448:
case 271:
case 2192:
case 2564:
case 21:
case 1987:
case 3257:
case 2662:
case 560:
case 828:
case 2911:
case 2896:
case 3385:
case 3971:
case 1083:
case 232:
case 3967:
case 1493:
case 522:
case 4009:
case 1766:
case 3704:
case 1365:
case 1242:
case 1692:
case 999:
case 16:
case 290:
case 2127:
case 3804:
case 1866:
case 871:
case 2463:
case 4035:
case 3561:
case 762:
case 2352:
case 3216:
case 2395:
case 81:
case 20:
case 2908:
case 2482:
case 3021:
case 4058:
case 601:
case 3449:
case 155:
case 2514:
case 3574:
case 1680:
case 3146:
case 1326:
case 1299:
case 1779:
case 2768:
case 3090:
case 127:
case 3480:
case 785:
case 2868:
case 2959:
case 1879:
case 1112:
case 1522:
case 3350:
case 554:
case 1649:
case 2173:
case 2049:
case 3113:
case 4022:
case 2269:
case 1906:
case 2421:
case 3707:
case 759:
case 2138:
case 1341:
case 1300:
case 1233:
case 2413:
case 2571:
case 3121:
case 611:
case 3742:
case 3266:
case 2024:
case 67:
case 3046:
case 1743:
case 803:
case 2180:
case 3232:
case 958:
case 1991:
case 1472:
case 3190:
case 2977:
case 3917:
case 1716:
case 1012:
case 3545:
case 2251:
case 2612:
case 3508:
case 886:
case 3672:
case 3013:
case 1920:
case 1597:
case 68:
case 2961:
case 3842:
case 2615:
case 1557:
case 1543:
case 3313:
case 3675:
case 2767:
case 978:
case 3845:
case 3711:
case 2291:
case 672:
case 3808:
case 1015:
case 2037:
case 65:
case 1897:
case 3150:
case 4016:
case 833:
case 3996:
case 3811:
case 3281:
case 3708:
case 1277:
case 897:
case 2641:
case 419:
case 1797:
case 1000:
case 1041:
case 988:
case 3346:
case 755:
case 567:
case 4025:
case 1579:
case 1822:
case 3940:
case 584:
case 3390:
case 3823:
case 466:
case 3294:
case 175:
case 2137:
case 3723:
case 233:
case 3644:
case 2380:
case 2626:
case 523:
case 297:
case 185:
case 448:
case 2814:
case 409:
case 3874:
case 727:
case 2338:
case 1100:
case 1141:
case 159:
case 1969:
case 574:
case 1722:
case 1858:
case 3491:
case 1731:
case 3972:
case 3081:
case 2593:
case 3035:
case 2661:
case 1620:
case 717:
case 2020:
case 1200:
case 2847:
case 1304:
case 901:
case 1563:
case 1691:
case 947:
case 3536:
case 1582:
case 3865:
case 4082:
case 854:
case 3194:
case 2435:
case 1215:
case 4063:
case 2237:
case 658:
case 3181:
case 477:
case 1177:
case 2494:
case 503:
case 707:
case 2084:
case 429:
case 2539:
case 2510:
case 1684:
case 2659:
case 3570:
case 1161:
case 2120:
case 952:
case 2702:
case 2006:
case 1378:
case 98:
case 2369:
case 1938:
case 586:
case 254:
case 3354:
case 741:
case 3094:
case 487:
case 107:
case 2710:
case 95:
case 3054:
case 3770:
case 3394:
case 972:
case 3618:
case 2678:
case 1669:
case 556:
case 284:
case 678:
case 1401:
case 3944:
case 2249:
case 1078:
case 267:
case 361:
case 2238:
case 621:
case 3469:
case 2699:
case 2306:
case 1104:
case 2705:
case 425:
case 793:
case 2280:
case 597:
case 141:
case 3870:
case 3132:
case 1359:
case 117:
case 4085:
case 3154:
case 1882:
case 3565:
case 2273:
case 3883:
case 867:
case 2900:
case 3783:
case 1361:
case 1033:
case 3246:
case 1199:
case 2915:
case 3736:
case 2553:
case 1496:
case 2547:
case 3451:
case 1086:
case 3985:
case 1255:
case 1457:
case 2311:
case 1772:
case 1387:
case 2676:
case 1965:
case 2713:
case 722:
case 3442:
case 2107:
case 3367:
case 905:
case 2283:
case 3873:
case 3724:
case 939:
case 2042:
case 1575:
case 2746:
case 520:
case 4029:
case 2345:
case 3657:
case 3643:
case 2995:
case 994:
case 1130:
case 2952:
case 2236:
case 1416:
case 2270:
case 383:
case 598:
case 2468:
case 745:
case 3880:
case 2934:
case 3239:
case 3314:
case 3749:
case 2821:
case 687:
case 1425:
case 892:
case 1227:
case 2721:
case 830:
case 1498:
case 306:
case 2142:
case 3205:
case 2550:
case 2619:
case 3407:
case 2630:
case 3248:
case 3780:
case 3068:
case 2323:
case 1019:
case 2688:
case 3368:
case 2108:
case 3549:
case 89:
case 1319:
case 2023:
case 1330:
case 1203:
case 421:
case 1970:
case 2850:
case 145:
case 696:
case 488:
case 2414:
case 800:
case 2927:
case 3202:
case 2145:
case 1623:
case 625:
case 1674:
case 365:
case 1844:
case 544:
case 1560:
case 2111:
case 708:
case 2074:
case 478:
case 1187:
case 3014:
case 749:
case 29:
case 4072:
case 2471:
case 1645:
case 1228:
case 2008:
case 2123:
case 642:
case 72:
case 3837:
case 1875:
case 160:
case 1829:
case 122:
case 1572:
case 909:
case 948:
case 1962:
case 2687:
case 340:
case 1983:
case 3253:
case 3247:
case 1611:
case 56:
case 3408:
case 1252:
case 1936:
case 2011:
case 1497:
case 1775:
case 2546:
case 2174:
case 1376:
case 3524:
case 3963:
case 3114:
case 1295:
case 3925:
case 3806:
case 1864:
case 4001:
case 4040:
case 546:
case 3153:
case 1540:
case 3339:
case 2274:
case 781:
case 2794:
case 3348:
case 1128:
case 2223:
case 71:
case 399:
case 401:
case 2894:
case 1034:
case 694:
case 639:
case 2554:
case 1589:
case 2634:
case 3002:
case 1764:
case 3706:
case 9:
case 4018:
case 2603:
case 3998:
case 2709:
case 3393:
case 3820:
case 732:
case 987:
case 3053:
case 3271:
case 1052:
case 48:
case 1431:
case 898:
case 1485:
case 1095:
case 3957:
case 2835:
case 1028:
case 2208:
case 2976:
case 2781:
case 1665:
case 3916:
case 3891:
case 1103:
case 1717:
case 262:
case 3720:
case 102:
case 220:
case 2383:
case 929:
case 3551:
case 2628:
case 1596:
case 615:
case 619:
case 1556:
case 3591:
case 1636:
case 314:
case 2062:
case 2365:
case 3105:
case 2242:
case 2766:
case 482:
case 3663:
case 1328:
case 996:
case 1911:
case 1896:
case 59:
case 1683:
case 2732:
case 3997:
case 3520:
case 3139:
case 3110:
case 1463:
case 10:
case 1395:
case 1796:
case 1945:
case 844:
case 26:
case 3483:
case 2655:
case 1517:
case 3462:
case 3353:
case 1127:
case 3958:
case 3869:
case 648:
case 2162:
case 3302:
case 510:
case 2594:
case 635:
case 3470:
case 3048:
case 2439:
case 1303:
case 128:
case 0:
case 942:
case 2136:
case 2754:
case 2070:
case 3010:
case 1564:
case 11:
case 1192:
case 1923:
case 3193:
case 1718:
case 86:
case 244:
case 712:
case 2405:
case 2207:
case 751:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759716002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,];
var gg_b = "1759716002/";

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
