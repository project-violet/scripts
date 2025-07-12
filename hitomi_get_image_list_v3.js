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
case 2592:
case 3834:
case 2056:
case 2384:
case 611:
case 657:
case 1067:
case 3137:
case 297:
case 1945:
case 2165:
case 3310:
case 874:
case 725:
case 4:
case 974:
case 3111:
case 360:
case 1507:
case 3738:
case 3510:
case 480:
case 3410:
case 637:
case 3696:
case 3133:
case 2584:
case 2695:
case 2245:
case 3246:
case 1390:
case 2368:
case 1236:
case 2199:
case 3380:
case 2008:
case 3225:
case 2256:
case 2873:
case 1661:
case 1850:
case 1490:
case 278:
case 2669:
case 1263:
case 3046:
case 3480:
case 2936:
case 2045:
case 890:
case 2877:
case 3580:
case 1590:
case 51:
case 1956:
case 2414:
case 3181:
case 1583:
case 72:
case 3341:
case 3827:
case 877:
case 2304:
case 3593:
case 294:
case 3493:
case 1387:
case 1865:
case 991:
case 1483:
case 2018:
case 4004:
case 891:
case 1152:
case 634:
case 3853:
case 1587:
case 2404:
case 862:
case 1487:
case 3998:
case 2504:
case 865:
case 1383:
case 3497:
case 977:
case 2088:
case 2843:
case 4051:
case 4021:
case 1317:
case 476:
case 998:
case 2451:
case 1130:
case 3060:
case 2264:
case 1359:
case 1173:
case 1313:
case 3400:
case 512:
case 1874:
case 2439:
case 1918:
case 1658:
case 2075:
case 3795:
case 3076:
case 104:
case 1177:
case 3500:
case 2144:
case 481:
case 898:
case 1785:
case 1405:
case 1274:
case 2714:
case 258:
case 1790:
case 3604:
case 421:
case 2291:
case 1602:
case 1649:
case 2974:
case 1947:
case 2243:
case 2693:
case 31:
case 1156:
case 3981:
case 3027:
case 3538:
case 3223:
case 2875:
case 691:
case 954:
case 3771:
case 2091:
case 944:
case 2784:
case 1145:
case 2965:
case 662:
case 2600:
case 3639:
case 713:
case 844:
case 1703:
case 3072:
case 3257:
case 3227:
case 3621:
case 3651:
case 934:
case 1108:
case 2888:
case 854:
case 3089:
case 3338:
case 1863:
case 1759:
case 918:
case 2610:
case 1032:
case 3162:
case 1244:
case 400:
case 2739:
case 2920:
case 3684:
case 3595:
case 2950:
case 436:
case 2277:
case 3209:
case 312:
case 2396:
case 1578:
case 595:
case 315:
case 1118:
case 1867:
case 1731:
case 1250:
case 2944:
case 3825:
case 446:
case 1679:
case 818:
case 3855:
case 2856:
case 1478:
case 2751:
case 1044:
case 66:
case 420:
case 3614:
case 2222:
case 749:
case 196:
case 2077:
case 503:
case 214:
case 1415:
case 187:
case 3846:
case 3668:
case 2704:
case 837:
case 1020:
case 811:
case 1922:
case 2073:
case 226:
case 937:
case 1783:
case 739:
case 568:
case 782:
case 3009:
case 1612:
case 2030:
case 1315:
case 3042:
case 3198:
case 3940:
case 2932:
case 847:
case 3369:
case 1188:
case 1603:
case 667:
case 1386:
case 570:
case 2242:
case 94:
case 3230:
case 3396:
case 215:
case 212:
case 2209:
case 330:
case 3751:
case 95:
case 3944:
case 2825:
case 2034:
case 3273:
case 306:
case 2901:
case 1942:
case 85:
case 350:
case 93:
case 3671:
case 3052:
case 3920:
case 2684:
case 2595:
case 340:
case 3596:
case 1586:
case 3739:
case 2700:
case 84:
case 1749:
case 2234:
case 1702:
case 3073:
case 1254:
case 2940:
case 1160:
case 3030:
case 3808:
case 473:
case 594:
case 2797:
case 3252:
case 1176:
case 2614:
case 2569:
case 1361:
case 3704:
case 2668:
case 1690:
case 3680:
case 2954:
case 1066:
case 2289:
case 3167:
case 952:
case 3974:
case 2019:
case 955:
case 2981:
case 2027:
case 139:
case 3864:
case 945:
case 2057:
case 1125:
case 338:
case 889:
case 1862:
case 358:
case 3714:
case 845:
case 989:
case 1989:
case 3163:
case 1033:
case 787:
case 159:
case 3641:
case 2780:
case 935:
case 149:
case 1011:
case 348:
case 1070:
case 2053:
case 331:
case 2227:
case 3792:
case 2072:
case 1328:
case 1953:
case 1782:
case 2911:
case 609:
case 2338:
case 1266:
case 3888:
case 571:
case 2933:
case 2860:
case 1898:
case 2651:
case 2621:
case 586:
case 1659:
case 2876:
case 1458:
case 1629:
case 3875:
case 1081:
case 2223:
case 1927:
case 1957:
case 2253:
case 2538:
case 2710:
case 1794:
case 3600:
case 1919:
case 2438:
case 1528:
case 1146:
case 4038:
case 3047:
case 351:
case 3784:
case 2937:
case 597:
case 1233:
case 2823:
case 2769:
case 3404:
case 2853:
case 433:
case 2597:
case 3275:
case 1811:
case 909:
case 2998:
case 2593:
case 394:
case 203:
case 1549:
case 1134:
case 1502:
case 2857:
case 105:
case 1298:
case 453:
case 2397:
case 1648:
case 1866:
case 1761:
case 1837:
case 3288:
case 3321:
case 929:
case 964:
case 645:
case 292:
case 2400:
case 530:
case 2500:
case 3144:
case 652:
case 506:
case 3891:
case 3796:
case 2101:
case 2076:
case 3075:
case 1142:
case 1098:
case 3451:
case 3218:
case 122:
case 1109:
case 2300:
case 632:
case 635:
case 3339:
case 3088:
case 3150:
case 864:
case 829:
case 3120:
case 540:
case 3551:
case 2872:
case 3264:
case 1123:
case 2170:
case 1379:
case 704:
case 4010:
case 3245:
case 3392:
case 1728:
case 2696:
case 4071:
case 1840:
case 3056:
case 1678:
case 2025:
case 1157:
case 10:
case 3026:
case 3592:
case 2834:
case 1119:
case 1035:
case 1482:
case 551:
case 2137:
case 517:
case 397:
case 3045:
case 2480:
case 3967:
case 1615:
case 3174:
case 3468:
case 2181:
case 1955:
case 64:
case 1925:
case 29:
case 2580:
case 724:
case 967:
case 3877:
case 1706:
case 972:
case 3199:
case 2809:
case 2380:
case 1189:
case 3963:
case 63:
case 3873:
case 716:
case 548:
case 3226:
case 12:
case 2225:
case 1172:
case 2711:
case 3815:
case 3207:
case 2138:
case 562:
case 1723:
case 479:
case 2644:
case 1979:
case 357:
case 1158:
case 591:
case 311:
case 2733:
case 1546:
case 1677:
case 1128:
case 2910:
case 337:
case 1630:
case 1727:
case 3203:
case 2282:
case 2620:
case 2737:
case 42:
case 3765:
case 2861:
case 2766:
case 1673:
case 2279:
case 1719:
case 598:
case 2094:
case 781:
case 1355:
case 3563:
case 1325:
case 1895:
case 1106:
case 3290:
case 1010:
case 812:
case 2335:
case 2886:
case 3367:
case 2632:
case 815:
case 2535:
case 166:
case 3536:
case 915:
case 24:
case 69:
case 1425:
case 912:
case 3878:
case 1525:
case 25:
case 1772:
case 1555:
case 3436:
case 776:
case 2980:
case 1360:
case 1116:
case 2993:
case 1000:
case 3287:
case 2674:
case 2169:
case 56:
case 493:
case 2740:
case 1691:
case 1476:
case 344:
case 3059:
case 3283:
case 2498:
case 1643:
case 425:
case 574:
case 422:
case 3013:
case 2997:
case 1293:
case 2724:
case 3031:
case 1161:
case 2941:
case 1376:
case 668:
case 3670:
case 133:
case 590:
case 3196:
case 3633:
case 2806:
case 235:
case 4062:
case 2195:
case 3805:
case 3217:
case 232:
case 3744:
case 3951:
case 2462:
case 1186:
case 143:
case 252:
case 242:
case 3848:
case 692:
case 2002:
case 3083:
case 3939:
case 695:
case 983:
case 405:
case 1093:
case 153:
case 3599:
case 398:
case 3831:
case 3374:
case 1906:
case 923:
case 1688:
case 756:
case 3813:
case 1489:
case 892:
case 3248:
case 27:
case 895:
case 700:
case 229:
case 2028:
case 683:
case 995:
case 2481:
case 3114:
case 1800:
case 1389:
case 2581:
case 2206:
case 3399:
case 2180:
case 485:
case 482:
case 3465:
case 3192:
case 362:
case 1419:
case 2938:
case 365:
case 2333:
case 4037:
case 1618:
case 1457:
case 1427:
case 2311:
case 1958:
case 511:
case 2370:
case 2566:
case 1353:
case 3565:
case 2366:
case 3887:
case 968:
case 1553:
case 2337:
case 4033:
case 2171:
case 3005:
case 2511:
case 1897:
case 1327:
case 2533:
case 2411:
case 2258:
case 209:
case 1841:
case 4070:
case 1453:
case 2470:
case 1194:
case 272:
case 3278:
case 2301:
case 3420:
case 510:
case 3450:
case 3344:
case 2061:
case 3996:
case 2995:
case 3550:
case 173:
case 3121:
case 1442:
case 1986:
case 1608:
case 2401:
case 4001:
case 612:
case 2100:
case 3139:
case 99:
case 615:
case 2286:
case 267:
case 1342:
case 1295:
case 1645:
case 1309:
case 1880:
case 2882:
case 2424:
case 554:
case 2193:
case 3803:
case 4024:
case 1102:
case 1149:
case 36:
case 1656:
case 2798:
case 860:
case 2261:
case 2524:
case 48:
case 1810:
case 2324:
case 2086:
case 3085:
case 1269:
case 1095:
case 1776:
case 3807:
case 1961:
case 1334:
case 2141:
case 728:
case 2540:
case 3532:
case 3762:
case 1978:
case 555:
case 1814:
case 1373:
case 1477:
case 1129:
case 1577:
case 1646:
case 1117:
case 2015:
case 1330:
case 367:
case 1296:
case 2890:
case 2544:
case 3100:
case 1868:
case 542:
case 640:
case 2420:
case 1530:
case 375:
case 4020:
case 1718:
case 4050:
case 1377:
case 372:
case 878:
case 2151:
case 3812:
case 1573:
case 2550:
case 3995:
case 535:
case 650:
case 2807:
case 1552:
case 897:
case 1522:
case 4032:
case 2215:
case 2432:
case 1187:
case 3540:
case 2104:
case 2532:
case 136:
case 1452:
case 626:
case 1422:
case 100:
case 3969:
case 1892:
case 3193:
case 3882:
case 2635:
case 3667:
case 3454:
case 2332:
case 871:
case 3340:
case 986:
case 1915:
case 146:
case 3261:
case 614:
case 799:
case 1625:
case 26:
case 128:
case 2114:
case 2574:
case 54:
case 484:
case 364:
case 2859:
case 1491:
case 638:
case 2763:
case 1547:
case 2817:
case 1447:
case 4074:
case 1591:
case 1343:
case 1948:
case 55:
case 2168:
case 3735:
case 2736:
case 53:
case 2767:
case 648:
case 298:
case 1347:
case 2698:
case 2248:
case 1726:
case 2499:
case 1821:
case 2813:
case 1443:
case 870:
case 1905:
case 1107:
case 3511:
case 3433:
case 3171:
case 3006:
case 2662:
case 631:
case 1804:
case 3228:
case 1745:
case 2184:
case 2883:
case 262:
case 3802:
case 2192:
case 4065:
case 773:
case 994:
case 617:
case 651:
case 641:
case 291:
case 3537:
case 3311:
case 1708:
case 3997:
case 176:
case 817:
case 1051:
case 3249:
case 931:
case 1987:
case 2904:
case 1375:
case 3598:
case 234:
case 1672:
case 3941:
case 3724:
case 766:
case 841:
case 1588:
case 1983:
case 2017:
case 1722:
case 3398:
case 244:
case 3828:
case 917:
case 2029:
case 3858:
case 2681:
case 1204:
case 831:
case 2732:
case 404:
case 848:
case 1518:
case 355:
case 1627:
case 352:
case 2231:
case 1929:
case 938:
case 2750:
case 1773:
case 1917:
case 670:
case 2720:
case 3049:
case 1251:
case 1418:
case 2939:
case 858:
case 2083:
case 1221:
case 342:
case 3002:
case 1564:
case 1931:
case 1364:
case 2611:
case 210:
case 2229:
case 1004:
case 3562:
case 469:
case 424:
case 958:
case 1653:
case 572:
case 3462:
case 2921:
case 2087:
case 332:
case 2217:
case 1777:
case 1318:
case 3195:
case 2805:
case 2633:
case 335:
case 753:
case 2203:
case 1907:
case 1642:
case 1408:
case 3910:
case 1292:
case 1345:
case 1508:
case 3861:
case 814:
case 2765:
case 2984:
case 3138:
case 1445:
case 1903:
case 2207:
case 697:
case 247:
case 826:
case 1545:
case 686:
case 211:
case 257:
case 34:
case 2536:
case 564:
case 3535:
case 1743:
case 2567:
case 529:
case 2003:
case 3082:
case 906:
case 2654:
case 2363:
case 678:
case 4067:
case 1526:
case 1148:
case 4036:
case 2968:
case 1326:
case 950:
case 806:
case 2563:
case 1747:
case 1084:
case 218:
case 2774:
case 2640:
case 2367:
case 2885:
case 3781:
case 4063:
case 1268:
case 1896:
case 1791:
case 2979:
case 1644:
case 3014:
case 1294:
case 2158:
case 3284:
case 710:
case 2128:
case 2546:
case 563:
case 1816:
case 3308:
case 2982:
case 3445:
case 2210:
case 3068:
case 1737:
case 1650:
case 1766:
case 2673:
case 1861:
case 2994:
case 3345:
case 1012:
case 3609:
case 2346:
case 1910:
case 3642:
case 2630:
case 2895:
case 2071:
case 2010:
case 2912:
case 1886:
case 1781:
case 62:
case 3214:
case 219:
case 380:
case 3747:
case 2355:
case 2325:
case 813:
case 744:
case 2652:
case 3326:
case 3990:
case 3148:
case 3556:
case 98:
case 679:
case 1980:
case 4055:
case 266:
case 3426:
case 2455:
case 528:
case 4076:
case 461:
case 718:
case 2691:
case 3475:
case 381:
case 1858:
case 2241:
case 546:
case 1398:
case 2576:
case 3722:
case 3115:
case 2360:
case 2116:
case 3575:
case 2297:
case 1993:
case 492:
case 2838:
case 1674:
case 3388:
case 1169:
case 3588:
case 1941:
case 3672:
case 423:
case 2560:
case 3987:
case 3021:
case 1699:
case 1498:
case 2643:
case 3488:
case 3689:
case 376:
case 1997:
case 135:
case 3318:
case 3777:
case 949:
case 132:
case 622:
case 882:
case 885:
case 625:
case 2186:
case 1462:
case 233:
case 3623:
case 3004:
case 388:
case 757:
case 189:
case 468:
case 959:
case 3931:
case 939:
case 1002:
case 142:
case 3619:
case 737:
case 1049:
case 1362:
case 1665:
case 253:
case 243:
case 403:
case 985:
case 152:
case 3657:
case 2709:
case 2742:
case 982:
case 3730:
case 3443:
case 3821:
case 2572:
case 3726:
case 17:
case 2112:
case 3660:
case 3756:
case 2472:
case 649:
case 299:
case 1381:
case 1735:
case 4072:
case 2038:
case 822:
case 3948:
case 3343:
case 685:
case 825:
case 3839:
case 993:
case 1206:
case 3447:
case 774:
case 1180:
case 129:
case 1028:
case 2372:
case 164:
case 1481:
case 2519:
case 905:
case 2179:
case 902:
case 3708:
case 1311:
case 2427:
case 1537:
case 2323:
case 1370:
case 2928:
case 1466:
case 1802:
case 1333:
case 2527:
case 1849:
case 1258:
case 2327:
case 109:
case 2841:
case 2746:
case 1228:
case 2453:
case 1470:
case 2194:
case 1570:
case 1366:
case 1110:
case 802:
case 2553:
case 2238:
case 805:
case 1337:
case 1006:
case 2319:
case 2897:
case 3107:
case 1995:
case 273:
case 3113:
case 3573:
case 4009:
case 1812:
case 762:
case 2409:
case 3764:
case 3985:
case 172:
case 2509:
case 3377:
case 588:
case 1301:
case 3530:
case 791:
case 3473:
case 1061:
case 3868:
case 1286:
case 2342:
case 2880:
case 2645:
case 3117:
case 3577:
case 1401:
case 979:
case 3978:
case 1762:
case 3352:
case 2656:
case 3655:
case 1554:
case 3788:
case 581:
case 415:
case 2916:
case 1882:
case 1636:
case 2534:
case 2102:
case 90:
case 1969:
case 300:
case 3884:
case 336:
case 1894:
case 2810:
case 3187:
case 1440:
case 1086:
case 2269:
case 2095:
case 3775:
case 3522:
case 2871:
case 3552:
case 576:
case 1197:
case 553:
case 3880:
case 3309:
case 2330:
case 2296:
case 1139:
case 1544:
case 2814:
case 2978:
case 414:
case 2373:
case 4077:
case 1350:
case 907:
case 543:
case 709:
case 2129:
case 1121:
case 3409:
case 2764:
case 373:
case 1550:
case 2113:
case 1520:
case 1996:
case 807:
case 2131:
case 1344:
case 190:
case 2530:
case 2718:
case 4073:
case 426:
case 1532:
case 4022:
case 440:
case 236:
case 764:
case 927:
case 3961:
case 200:
case 1807:
case 174:
case 2522:
case 2096:
case 3095:
case 1215:
case 2775:
case 1085:
case 246:
case 696:
case 2788:
case 2655:
case 3760:
case 2322:
case 1078:
case 3656:
case 3626:
case 16:
case 3434:
case 2892:
case 3534:
case 2183:
case 1803:
case 3916:
case 1332:
case 687:
case 1399:
case 1205:
case 451:
case 4047:
case 2839:
case 1168:
case 3038:
case 4091:
case 228:
case 3372:
case 1829:
case 2756:
case 4043:
case 2851:
case 2660:
case 3112:
case 3725:
case 2821:
case 3572:
case 2726:
case 3489:
case 2443:
case 1374:
case 2905:
case 1736:
case 3589:
case 1767:
case 2543:
case 198:
case 1599:
case 208:
case 3194:
case 3453:
case 3357:
case 2745:
case 3841:
case 3746:
case 3327:
case 3319:
case 2107:
case 924:
case 767:
case 1662:
case 3523:
case 3553:
case 1887:
case 3928:
case 1565:
case 3353:
case 824:
case 3958:
case 438:
case 775:
case 2708:
case 772:
case 165:
case 1883:
case 3557:
case 1192:
case 3182:
case 1465:
case 3893:
case 1904:
case 3560:
case 3376:
case 134:
case 2672:
case 884:
case 3161:
case 624:
case 669:
case 276:
case 1013:
case 1283:
case 2021:
case 3734:
case 616:
case 144:
case 1029:
case 281:
case 2475:
case 2204:
case 1681:
case 1732:
case 2039:
case 2388:
case 470:
case 3902:
case 3838:
case 2983:
case 3000:
case 2752:
case 2575:
case 3647:
case 3576:
case 984:
case 3360:
case 1213:
case 1637:
case 4018:
case 1720:
case 1939:
case 2564:
case 2619:
case 1848:
case 3742:
case 2627:
case 494:
case 3709:
case 2464:
case 1231:
case 343:
case 3186:
case 2239:
case 2185:
case 1087:
case 3200:
case 1744:
case 2777:
case 573:
case 3097:
case 2913:
case 2931:
case 3041:
case 1229:
case 3994:
case 755:
case 3673:
case 896:
case 1765:
case 1984:
case 745:
case 137:
case 2408:
case 3677:
case 3546:
case 3128:
case 2545:
case 2284:
case 789:
case 1601:
case 111:
case 3158:
case 3723:
case 3869:
case 3210:
case 1090:
case 4045:
case 3753:
case 1992:
case 2445:
case 732:
case 2903:
case 1207:
case 3080:
case 147:
case 1003:
case 1624:
case 1467:
case 607:
case 3555:
case 1363:
case 497:
case 3772:
case 2092:
case 2990:
case 3525:
case 1878:
case 486:
case 2634:
case 2426:
case 1799:
case 1536:
case 3789:
case 366:
case 4026:
case 1640:
case 471:
case 3912:
case 1336:
case 1290:
case 3280:
case 2791:
case 2896:
case 3895:
case 1463:
case 2326:
case 3325:
case 3652:
case 3355:
case 280:
case 2356:
case 118:
case 2:
case 197:
case 3824:
case 2945:
case 2036:
case 2403:
case 3035:
case 2307:
case 1026:
case 836:
case 30:
case 3678:
case 1056:
case 3394:
case 956:
case 2503:
case 723:
case 2303:
case 792:
case 4007:
case 3382:
case 3594:
case 936:
case 795:
case 2832:
case 3685:
case 2908:
case 2686:
case 3728:
case 900:
case 1392:
case 1822:
case 418:
case 2507:
case 1852:
case 3172:
case 32:
case 1226:
case 1256:
case 549:
case 680:
case 1873:
case 559:
case 1199:
case 2705:
case 3925:
case 1414:
case 2956:
case 457:
case 3955:
case 411:
case 1468:
case 2490:
case 1669:
case 447:
case 1514:
case 2616:
case 1967:
case 207:
case 1045:
case 1936:
case 920:
case 1288:
case 2865:
case 4083:
case 302:
case 3402:
case 2483:
case 1018:
case 3449:
case 2583:
case 3134:
case 3549:
case 1304:
case 216:
case 194:
case 2487:
case 3960:
case 3349:
case 3605:
case 2606:
case 2383:
case 676:
case 4087:
case 3302:
case 863:
case 224:
case 1264:
case 4031:
case 1521:
case 1551:
case 688:
case 2431:
case 2513:
case 1150:
case 1088:
case 1339:
case 3109:
case 2317:
case 2899:
case 322:
case 325:
case 3098:
case 3142:
case 2778:
case 2658:
case 2429:
case 1796:
case 2628:
case 2177:
case 2964:
case 444:
case 3786:
case 2785:
case 4017:
case 928:
case 2874:
case 2529:
case 1351:
case 901:
case 2417:
case 3972:
case 3281:
case 1291:
case 2505:
case 1641:
case 2943:
case 3033:
case 3989:
case 2348:
case 3687:
case 1714:
case 2991:
case 601:
case 138:
case 3125:
case 3712:
case 2126:
case 2548:
case 1864:
case 628:
case 382:
case 2448:
case 2649:
case 385:
case 2947:
case 579:
case 1167:
case 3037:
case 3233:
case 117:
case 3558:
case 3617:
case 876:
case 981:
case 1965:
case 3146:
case 3919:
case 2074:
case 3270:
case 50:
case 3957:
case 3927:
case 3081:
case 1875:
case 3211:
case 284:
case 3428:
case 3659:
case 3779:
case 3898:
case 2108:
case 1043:
case 498:
case 3631:
case 3953:
case 3328:
case 1792:
case 2244:
case 2694:
case 140:
case 3201:
case 2717:
case 1277:
case 2973:
case 2863:
case 1496:
case 3607:
case 2759:
case 9:
case 3909:
case 522:
case 3486:
case 525:
case 3040:
case 3942:
case 2930:
case 620:
case 880:
case 4078:
case 46:
case 2250:
case 1273:
case 593:
case 2977:
case 2713:
case 1721:
case 2164:
case 2679:
case 1751:
case 130:
case 1856:
case 2578:
case 1396:
case 2118:
case 2385:
case 2867:
case 3054:
case 3416:
case 287:
case 2415:
case 1680:
case 656:
case 3690:
case 3240:
case 4015:
case 2044:
case 2787:
case 3176:
case 3516:
case 2175:
case 1252:
case 646:
case 1077:
case 2612:
case 1030:
case 3316:
case 3254:
case 2020:
case 2922:
case 126:
case 2783:
case 490:
case 1855:
case 3679:
case 3220:
case 819:
case 2603:
case 2386:
case 3867:
case 1395:
case 1242:
case 3118:
case 115:
case 1209:
case 1692:
case 3717:
case 1595:
case 3694:
case 3585:
case 1700:
case 3485:
case 3930:
case 673:
case 919:
case 3759:
case 2607:
case 751:
case 3863:
case 1495:
case 4086:
case 2224:
case 2561:
case 1369:
case 2254:
case 1940:
case 2160:
case 2749:
case 3783:
case 524:
case 2461:
case 3020:
case 2240:
case 4016:
case 1668:
case 1741:
case 3415:
case 1954:
case 396:
case 1797:
case 3175:
case 2176:
case 1614:
case 3787:
case 2155:
case 3548:
case 3126:
case 833:
case 726:
case 183:
case 953:
case 3991:
case 2066:
case 3065:
case 507:
case 3947:
case 3299:
case 1019:
case 3448:
case 3505:
case 1023:
case 2070:
case 2862:
case 933:
case 4006:
case 2687:
case 3348:
case 2989:
case 3405:
case 2406:
case 259:
case 47:
case 1338:
case 3265:
case 2613:
case 2898:
case 3108:
case 1651:
case 1219:
case 730:
case 2923:
case 1227:
case 1257:
case 1970:
case 2631:
case 3074:
case 2919:
case 2528:
case 2617:
case 2233:
case 2659:
case 3707:
case 2428:
case 1771:
case 1876:
case 740:
case 4058:
case 1223:
case 2927:
case 2081:
case 2957:
case 1253:
case 2270:
case 1497:
case 3988:
case 3606:
case 1140:
case 2062:
case 1998:
case 432:
case 1393:
case 3487:
case 489:
case 2870:
case 1597:
case 3715:
case 3122:
case 2811:
case 2716:
case 369:
case 1276:
case 1819:
case 1397:
case 1124:
case 2866:
case 4002:
case 3387:
case 3865:
case 442:
case 1493:
case 445:
case 2837:
case 452:
case 1593:
case 316:
case 455:
case 3785:
case 3964:
case 643:
case 304:
case 3429:
case 899:
case 1795:
case 3658:
case 3417:
case 771:
case 3918:
case 2262:
case 3313:
case 1400:
case 3173:
case 123:
case 3513:
case 3359:
case 633:
case 1060:
case 2098:
case 3413:
case 1300:
case 3531:
case 999:
case 1246:
case 2758:
case 1133:
case 327:
case 770:
case 1696:
case 2594:
case 2685:
case 2382:
case 1410:
case 3303:
case 2494:
case 2123:
case 1510:
case 43:
case 3507:
case 4094:
case 1111:
case 1571:
case 4082:
case 3307:
case 2946:
case 2824:
case 2854:
case 2582:
case 2394:
case 1055:
case 1834:
case 2479:
case 2955:
case 3926:
case 2925:
case 666:
case 3705:
case 2706:
case 873:
case 1480:
case 1935:
case 1046:
case 279:
case 3616:
case 3263:
case 3147:
case 794:
case 3661:
case 619:
case 1255:
case 2172:
case 3748:
case 22:
case 1380:
case 2412:
case 2189:
case 3390:
case 3143:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752292801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,];
var gg_b = "1752292801/";

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
