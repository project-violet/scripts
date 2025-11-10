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
case 3597:
case 2999:
case 3777:
case 3759:
case 2178:
case 3883:
case 1643:
case 2977:
case 3799:
case 1845:
case 1488:
case 3684:
case 3685:
case 2562:
case 113:
case 2907:
case 3707:
case 1980:
case 3042:
case 911:
case 3166:
case 3287:
case 230:
case 251:
case 2507:
case 2317:
case 2483:
case 1385:
case 2660:
case 1741:
case 2709:
case 523:
case 1429:
case 1416:
case 3432:
case 371:
case 4040:
case 291:
case 2333:
case 3158:
case 2599:
case 2779:
case 2577:
case 1435:
case 3957:
case 2559:
case 1764:
case 1619:
case 1626:
case 3382:
case 335:
case 1250:
case 1931:
case 3837:
case 2243:
case 1091:
case 1051:
case 3196:
case 811:
case 3921:
case 3670:
case 2592:
case 2772:
case 1851:
case 258:
case 3425:
case 1401:
case 3217:
case 3424:
case 45:
case 3439:
case 1974:
case 225:
case 2282:
case 4066:
case 1418:
case 3567:
case 2969:
case 3902:
case 3013:
case 2702:
case 972:
case 3233:
case 2847:
case 3769:
case 1794:
case 1795:
case 2623:
case 3328:
case 2106:
case 1755:
case 336:
case 3312:
case 312:
case 2569:
case 3967:
case 1689:
case 2824:
case 2176:
case 320:
case 2413:
case 3521:
case 588:
case 1510:
case 3752:
case 1486:
case 2650:
case 648:
case 2130:
case 4058:
case 3447:
case 2219:
case 3792:
case 298:
case 2661:
case 3155:
case 240:
case 690:
case 285:
case 1906:
case 3194:
case 599:
case 3426:
case 3419:
case 2247:
case 3833:
case 697:
case 792:
case 4065:
case 3563:
case 247:
case 1251:
case 865:
case 813:
case 1930:
case 2043:
case 966:
case 869:
case 3616:
case 3629:
case 2644:
case 2019:
case 1576:
case 2763:
case 349:
case 2239:
case 657:
case 528:
case 675:
case 2104:
case 1530:
case 1335:
case 2342:
case 2819:
case 570:
case 2175:
case 2174:
case 3443:
case 1329:
case 631:
case 1048:
case 650:
case 3332:
case 1169:
case 1485:
case 307:
case 559:
case 555:
case 3688:
case 965:
case 3141:
case 3087:
case 1162:
case 913:
case 604:
case 1261:
case 1046:
case 544:
case 2973:
case 1846:
case 4055:
case 1647:
case 4054:
case 4095:
case 111:
case 4094:
case 3520:
case 1798:
case 70:
case 596:
case 2349:
case 1758:
case 2691:
case 2232:
case 1244:
case 2903:
case 3489:
case 3165:
case 2651:
case 3164:
case 78:
case 3347:
case 1050:
case 1199:
case 1978:
case 3920:
case 2720:
case 1159:
case 3622:
case 1177:
case 1639:
case 1414:
case 1890:
case 1227:
case 1415:
case 3671:
case 394:
case 2313:
case 2487:
case 3618:
case 2503:
case 417:
case 1107:
case 2089:
case 3412:
case 373:
case 2180:
case 3601:
case 1624:
case 3953:
case 676:
case 1023:
case 346:
case 3993:
case 422:
case 3428:
case 2298:
case 4019:
case 1983:
case 976:
case 1732:
case 3944:
case 3880:
case 2934:
case 3734:
case 162:
case 3189:
case 3356:
case 2431:
case 3464:
case 52:
case 3396:
case 2588:
case 3208:
case 2534:
case 2535:
case 1477:
case 2330:
case 1542:
case 1499:
case 1809:
case 2187:
case 1009:
case 2041:
case 4082:
case 1114:
case 567:
case 2988:
case 890:
case 1136:
case 613:
case 2480:
case 781:
case 3278:
case 447:
case 1696:
case 904:
case 2864:
case 1097:
case 560:
case 897:
case 3340:
case 1057:
case 3545:
case 1079:
case 2529:
case 316:
case 3544:
case 3494:
case 931:
case 3455:
case 1698:
case 3454:
case 3276:
case 1937:
case 1872:
case 3119:
case 3010:
case 838:
case 3005:
case 3603:
case 493:
case 979:
case 4089:
case 2240:
case 3206:
case 3875:
case 2501:
case 3074:
case 148:
case 1452:
case 2378:
case 3673:
case 2986:
case 222:
case 843:
case 788:
case 363:
case 2410:
case 2894:
case 884:
case 453:
case 1513:
case 3281:
case 2054:
case 2055:
case 1949:
case 3358:
case 3701:
case 1867:
case 1724:
case 2586:
case 3398:
case 804:
case 2620:
case 1263:
case 1739:
case 4028:
case 2256:
case 3143:
case 3591:
case 4012:
case 3771:
case 486:
case 1185:
case 2918:
case 264:
case 2971:
case 3496:
case 3607:
case 157:
case 841:
case 3806:
case 2068:
case 1782:
case 3456:
case 3364:
case 592:
case 2331:
case 3275:
case 3125:
case 2868:
case 3124:
case 948:
case 491:
case 2040:
case 3006:
case 862:
case 3204:
case 1743:
case 3210:
case 3699:
case 131:
case 3139:
case 2481:
case 3659:
case 1917:
case 1272:
case 3784:
case 795:
case 1362:
case 3785:
case 933:
case 3076:
case 3830:
case 1118:
case 2985:
case 799:
case 3440:
case 2896:
case 1863:
case 3738:
case 2137:
case 2679:
case 190:
case 4032:
case 437:
case 81:
case 2056:
case 3468:
case 1307:
case 426:
case 1517:
case 777:
case 1719:
case 2584:
case 2585:
case 2380:
case 1665:
case 672:
case 3662:
case 1641:
case 197:
case 2295:
case 3881:
case 2476:
case 2254:
case 2255:
case 1399:
case 3081:
case 2748:
case 1533:
case 1186:
case 3948:
case 1359:
case 451:
case 430:
case 2430:
case 29:
case 3523:
case 1392:
case 138:
case 1352:
case 796:
case 50:
case 2746:
case 2602:
case 962:
case 3715:
case 3669:
case 1987:
case 2900:
case 3946:
case 2936:
case 848:
case 2408:
case 2858:
case 2621:
case 3466:
case 3550:
case 2058:
case 3354:
case 3770:
case 2098:
case 3590:
case 2672:
case 1369:
case 703:
case 721:
case 1279:
case 1820:
case 2183:
case 104:
case 3811:
case 3078:
case 2790:
case 2264:
case 3231:
case 1020:
case 2265:
case 184:
case 2374:
case 1129:
case 3132:
case 3990:
case 1116:
case 458:
case 3923:
case 91:
case 3808:
case 1134:
case 3498:
case 1655:
case 756:
case 1694:
case 3458:
case 1695:
case 2241:
case 425:
case 1403:
case 3546:
case 2500:
case 2305:
case 2515:
case 1789:
case 3516:
case 1532:
case 956:
case 2545:
case 855:
case 3864:
case 3727:
case 3865:
case 2128:
case 2031:
case 3064:
case 3663:
case 2211:
case 3480:
case 232:
case 614:
case 1146:
case 1062:
case 870:
case 903:
case 181:
case 3266:
case 3187:
case 983:
case 123:
case 3841:
case 101:
case 3534:
case 2561:
case 828:
case 2208:
case 724:
case 2080:
case 2396:
case 565:
case 513:
case 1273:
case 1007:
case 2356:
case 2464:
case 3431:
case 2734:
case 1807:
case 660:
case 487:
case 2735:
case 1497:
case 741:
case 3934:
case 2527:
case 4:
case 2944:
case 996:
case 1059:
case 1932:
case 2716:
case 3744:
case 2441:
case 1899:
case 1877:
case 667:
case 1783:
case 1859:
case 1676:
case 454:
case 3918:
case 883:
case 3971:
case 3117:
case 1852:
case 2591:
case 928:
case 108:
case 1052:
case 3475:
case 2143:
case 1678:
case 970:
case 803:
case 2722:
case 1092:
case 3620:
case 3296:
case 1611:
case 1749:
case 3094:
case 2398:
case 3586:
case 3054:
case 3133:
case 1925:
case 3901:
case 1472:
case 1924:
case 1547:
case 3055:
case 959:
case 977:
case 3854:
case 219:
case 3410:
case 955:
case 2182:
case 3311:
case 1947:
case 2074:
case 3378:
case 1525:
case 2786:
case 473:
case 999:
case 3240:
case 733:
case 3571:
case 2005:
case 2603:
case 3308:
case 2126:
case 2119:
case 2455:
case 2366:
case 1393:
case 310:
case 2804:
case 844:
case 566:
case 2494:
case 2805:
case 2948:
case 790:
case 3430:
case 2081:
case 4042:
case 3748:
case 3254:
case 3476:
case 177:
case 2881:
case 3255:
case 155:
case 1582:
case 2662:
case 3294:
case 3295:
case 4083:
case 1292:
case 1631:
case 1151:
case 801:
case 3380:
case 988:
case 1252:
case 692:
case 1919:
case 2468:
case 1191:
case 3056:
case 3679:
case 170:
case 3896:
case 439:
case 2830:
case 1717:
case 435:
case 2341:
case 1519:
case 757:
case 2076:
case 652:
case 2785:
case 1526:
case 2659:
case 3481:
case 2876:
case 518:
case 2006:
case 1357:
case 1733:
case 3868:
case 3149:
case 2456:
case 2560:
case 1680:
case 2275:
case 199:
case 3331:
case 302:
case 2607:
case 2496:
case 195:
case 2806:
case 3515:
case 808:
case 3500:
case 3304:
case 3514:
case 4013:
case 1321:
case 103:
case 3667:
case 1989:
case 3866:
case 981:
case 121:
case 1262:
case 183:
case 1372:
case 3066:
case 2458:
case 888:
case 2498:
case 35:
case 784:
case 156:
case 2652:
case 1145:
case 2692:
case 3264:
case 3375:
case 3570:
case 2078:
case 3790:
case 3374:
case 2011:
case 3183:
case 2811:
case 3536:
case 2590:
case 2395:
case 834:
case 3098:
case 1453:
case 196:
case 2355:
case 2466:
case 2354:
case 1604:
case 3858:
case 2736:
case 1003:
case 3898:
case 3936:
case 3408:
case 2715:
case 412:
case 2700:
case 1589:
case 2669:
case 1207:
case 3411:
case 3478:
case 27:
case 427:
case 1420:
case 1675:
case 1964:
case 239:
case 1731:
case 2382:
case 3442:
case 2979:
case 1461:
case 3559:
case 524:
case 852:
case 3779:
case 3599:
case 4030:
case 391:
case 2343:
case 3289:
case 1444:
case 1445:
case 3660:
case 1088:
case 3709:
case 3483:
case 3317:
case 167:
case 3507:
case 3962:
case 1193:
case 2166:
case 330:
case 1153:
case 1633:
case 1214:
case 90:
case 4081:
case 1427:
case 2042:
case 562:
case 3108:
case 2842:
case 98:
case 1835:
case 3562:
case 1780:
case 3907:
case 2509:
case 2319:
case 1270:
case 1564:
case 114:
case 3228:
case 769:
case 2685:
case 326:
case 1829:
case 337:
case 713:
case 2557:
case 3959:
case 601:
case 1348:
case 3032:
case 1236:
case 2799:
case 2579:
case 623:
case 2777:
case 2597:
case 1120:
case 3219:
case 2572:
case 3690:
case 2447:
case 398:
case 3952:
case 3039:
case 2752:
case 278:
case 1071:
case 1238:
case 1018:
case 634:
case 1346:
case 1822:
case 220:
case 3176:
case 3839:
case 2849:
case 3824:
case 3825:
case 2502:
case 2312:
case 2967:
case 212:
case 1995:
case 47:
case 3106:
case 1001:
case 73:
case 1955:
case 1954:
case 3702:
case 2013:
case 2600:
case 3646:
case 4008:
case 2769:
case 3847:
case 3969:
case 2902:
case 1594:
case 608:
case 1390:
case 2439:
case 329:
case 1554:
case 3047:
case 1555:
case 3181:
case 2037:
case 2425:
case 468:
case 2972:
case 2217:
case 3772:
case 3592:
case 2670:
case 1285:
case 4078:
case 1163:
case 2921:
case 2389:
case 2156:
case 1704:
case 2837:
case 1710:
case 1201:
case 2688:
case 3417:
case 860:
case 597:
case 207:
case 1102:
case 1344:
case 1781:
case 287:
case 3175:
case 2443:
case 3174:
case 3627:
case 1172:
case 1271:
case 3342:
case 1361:
case 1218:
case 590:
case 1996:
case 1838:
case 2963:
case 3104:
case 245:
case 3019:
case 280:
case 1956:
case 3239:
case 249:
case 416:
case 2629:
case 1884:
case 772:
case 659:
case 1085:
case 2563:
case 1596:
case 3843:
case 1556:
case 655:
case 309:
case 579:
case 2426:
case 3247:
case 2419:
case 3082:
case 575:
case 1167:
case 3882:
case 1940:
case 2195:
case 1327:
case 718:
case 2634:
case 2155:
case 389:
case 670:
case 340:
case 74:
case 3753:
case 4075:
case 1288:
case 3573:
case 246:
case 273:
case 1351:
case 967:
case 1708:
case 393:
case 1391:
case 4005:
case 3487:
case 3313:
case 1446:
case 960:
case 1598:
case 2622:
case 1778:
case 1711:
case 2347:
case 1558:
case 2920:
case 914:
case 3651:
case 2489:
case 2165:
case 3828:
case 3903:
case 254:
case 3131:
case 386:
case 621:
case 3691:
case 543:
case 3012:
case 603:
case 576:
case 3812:
case 1836:
case 1070:
case 3028:
case 2520:
case 3349:
case 1197:
case 2593:
case 2773:
case 1450:
case 1566:
case 656:
case 1815:
case 1800:
case 538:
case 1814:
case 1490:
case 2553:
case 10:
case 419:
case 1000:
case 1613:
case 1235:
case 92:
case 2242:
case 1109:
case 353:
case 2141:
case 463:
case 3725:
case 961:
case 3666:
case 3867:
case 2749:
case 3724:
case 2547:
case 2924:
case 3949:
case 40:
case 4000:
case 764:
case 868:
case 3513:
case 48:
case 3303:
case 2608:
case 163:
case 2402:
case 3184:
case 3469:
case 3185:
case 1591:
case 1771:
case 288:
case 2052:
case 208:
case 598:
case 66:
case 1722:
case 2467:
case 1603:
case 1119:
case 1126:
case 612:
case 3872:
case 627:
case 3937:
case 636:
case 1455:
case 3698:
case 1805:
case 3658:
case 3821:
case 2353:
case 2737:
case 2148:
case 348:
case 2320:
case 1673:
case 3549:
case 2524:
case 525:
case 1875:
case 234:
case 1874:
case 1206:
case 2069:
case 2713:
case 3002:
case 2146:
case 3100:
case 3115:
case 3253:
case 1788:
case 842:
case 3809:
case 2862:
case 223:
case 3499:
case 3542:
case 2681:
case 3459:
case 1561:
case 116:
case 1544:
case 1545:
case 1340:
case 3696:
case 1368:
case 1211:
case 3583:
case 1031:
case 3879:
case 1112:
case 3136:
case 3857:
case 2932:
case 2059:
case 1944:
case 1527:
case 2077:
case 671:
case 341:
case 2409:
case 2676:
case 2877:
case 2273:
case 3668:
case 1396:
case 639:
case 1464:
case 635:
case 1356:
case 1465:
case 1189:
case 97:
case 2606:
case 3640:
case 530:
case 3942:
case 1880:
case 2479:
case 3116:
case 1132:
case 1990:
case 1652:
case 2144:
case 3473:
case 815:
case 863:
case 2528:
case 3020:
case 304:
case 3820:
case 2302:
case 3257:
case 593:
case 3789:
case 1008:
case 654:
case 3893:
case 203:
case 3093:
case 3695:
case 3209:
case 2372:
case 4086:
case 3694:
case 3134:
case 3053:
case 3655:
case 3654:
case 3135:
case 1923:
case 1808:
case 2873:
case 553:
case 1669:
case 1700:
case 17:
case 2207:
case 4001:
case 3392:
case 4022:
case 1394:
case 2453:
case 1770:
case 1590:
case 3728:
case 1354:
case 2803:
case 79:
case 376:
case 506:
case 1355:
case 1466:
case 1550:
case 2493:
case 4071:
case 2299:
case 673:
case 4018:
case 586:
case 2259:
case 2367:
case 2912:
case 3726:
case 3665:
case 3063:
case 414:
case 3664:
case 2919:
case 2252:
case 390:
case 2543:
case 270:
case 1440:
case 3377:
case 1948:
case 832:
case 3399:
case 1960:
case 919:
case 1881:
case 259:
case 42:
case 397:
case 255:
case 600:
case 2733:
case 2357:
case 1006:
case 589:
case 1124:
case 585:
case 3933:
case 1125:
case 1364:
case 4088:
case 1275:
case 1274:
case 467:
case 379:
case 509:
case 1607:
case 2463:
case 357:
case 649:
case 3171:
case 2717:
case 3118:
case 1830:
case 607:
case 3362:
case 1785:
case 2526:
case 547:
case 2519:
case 3272:
case 3917:
case 1784:
case 1876:
case 1659:
case 687:
case 460:
case 782:
case 1139:
case 1210:
case 1699:
case 3221:
case 1849:
case 112:
case 444:
case 1312:
case 3754:
case 3370:
case 3575:
case 3795:
case 3260:
case 900:
case 1447:
case 496:
case 3486:
case 178:
case 2871:
case 3505:
case 2346:
case 2018:
case 3315:
case 2238:
case 3314:
case 3504:
case 949:
case 120:
case 456:
case 1424:
case 1037:
case 366:
case 510:
case 3851:
case 2323:
case 3904:
case 3051:
case 1196:
case 3905:
case 3612:
case 1636:
case 2705:
case 2710:
case 663:
case 615:
case 1389:
case 1233:
case 517:
case 1600:
case 1013:
case 403:
case 3471:
case 2886:
case 2687:
case 421:
case 758:
case 2594:
case 2350:
case 3422:
case 1343:
case 845:
case 2445:
case 1432:
case 3416:
case 3173:
case 2888:
case 3741:
case 3223:
case 973:
case 800:
case 495:
case 2941:
case 139:
case 3931:
case 3250:
case 887:
case 2965:
case 3103:
case 3626:
case 135:
case 3765:
case 3619:
case 2731:
case 3290:
case 1957:
case 2461:
case 1198:
case 3434:
case 1979:
case 260:
case 791:
case 1997:
case 1638:
case 1685:
case 954:
case 3531:
case 2270:
case 428:
case 2617:
case 2816:
case 730:
case 751:
case 1557:
case 3045:
case 2120:
case 1759:
case 1597:
case 1166:
case 1287:
case 2193:
case 2427:
case 3338:
case 3061:
case 459:
case 369:
case 1707:
case 3861:
case 455:
case 1319:
case 726:
case 365:
case 632:
case 1618:
case 836:
case 827:
case 3850:
case 2446:
case 3415:
case 793:
case 3177:
case 3639:
case 67:
case 3386:
case 2778:
case 3090:
case 34:
case 2598:
case 3050:
case 3199:
case 3470:
case 1428:
case 2966:
case 971:
case 3766:
case 146:
case 2288:
case 2649:
case 820:
case 3908:
case 2351:
case 1412:
case 173:
case 2391:
case 2708:
case 1686:
case 2450:
case 1773:
case 1887:
case 706:
case 59:
case 311:
case 1553:
case 20:
case 2490:
case 3371:
case 1242:
case 2014:
case 28:
case 3318:
case 3261:
case 3508:
case 3162:
case 2109:
case 1087:
case 1164:
case 1165:
case 3244:
case 1703:
case 2036:
case 4052:
case 408:
case 2998:
case 2637:
case 2179:
case 1283:
case 2958:
case 4092:
case 2070:
case 4059:
case 100:
case 3335:
case 978:
case 2271:
case 2996:
case 3576:
case 3796:
case 871:
case 2222:
case 180:
case 1249:
case 2201:
case 4007:
case 2102:
case 3484:
case 3848:
case 107:
case 839:
case 2540:
case 1332:
case 927:
case 187:
case 1443:
case 835:
case 3860:
case 747:
case 1833:
case 1426:
case 502:
case 642:
case 2167:
case 292:
case 2286:
case 423:
case 1195:
case 401:
case 3740:
case 1635:
case 1033:
case 2706:
case 582:
case 1634:
case 318:
case 1629:
case 2730:
case 1616:
case 3632:
case 785:
case 3930:
case 789:
case 2884:
case 2448:
case 2596:
case 2776:
case 1563:
case 3388:
case 2683:
case 2085:
case 2084:
case 709:
case 2556:
case 705:
case 3976:
case 940:
case 989:
case 886:
case 129:
case 4053:
case 3086:
case 3594:
case 4093:
case 125:
case 1282:
case 905:
case 2418:
case 1702:
case 806:
case 2612:
case 947:
case 2904:
case 2910:
case 3285:
case 76:
case 2851:
case 3323:
case 484:
case 2628:
case 853:
case 1449:
case 1552:
case 1839:
case 712:
case 1387:
case 617:
case 3346:
case 2505:
case 2504:
case 3071:
case 2314:
case 1992:
case 23:
case 3871:
case 2486:
case 736:
case 198:
case 1226:
case 622:
case 2795:
case 874:
case 2370:
case 1437:
case 3001:
case 778:
case 1024:
case 610:
case 438:
case 2754:
case 1106:
case 2248:
case 1569:
case 720:
case 2336:
case 1825:
case 563:
case 1824:
case 3801:
case 3541:
case 2682:
case 2980:
case 3835:
case 32:
case 3834:
case 3633:
case 3214:
case 2338:
case 3427:
case 2246:
case 3200:
case 3215:
case 2061:
case 3034:
case 151:
case 3193:
case 1178:
case 805:
case 1999:
case 3236:
case 1977:
case 3029:
case 1959:
case 3016:
case 490:
case 3829:
case 3617:
case 1832:
case 2845:
case 885:
case 771:
case 1757:
case 1333:
case 450:
case 1559:
case 431:
case 1797:
case 2435:
case 2765:
case 2290:
case 3731:
case 2764:
case 532:
case 2931:
case 3964:
case 3941:
case 1507:
case 1709:
case 2384:
case 475:
case 2223:
case 2385:
case 2416:
case 3445:
case 3444:
case 3888:
case 2429:
case 2173:
case 191:
case 1349:
case 3070:
case 2798:
case 65:
case 3998:
case 1812:
case 2758:
case 3637:
case 3036:
case 937:
case 186:
case 3216:
case 1232:
case 1691:
case 1651:
case 3870:
case 1903:
case 4067:
case 2162:
case 38:
case 3014:
case 2371:
case 2508:
case 3000:
case 3015:
case 3814:
case 30:
case 2647:
case 3800:
case 2846:
case 2322:
case 951:
case 211:
case 3391:
case 3351:
case 2766:
case 2625:
case 448:
case 2624:
case 3288:
case 1753:
case 991:
case 3966:
case 69:
case 568:
case 2050:
case 3558:
case 3711:
case 2639:
case 3598:
case 2090:
case 2159:
case 1720:
case 2415:
case 2890:
case 1503:
case 1313:
case 4021:
case 773:
case 2976:
case 851:
case 3683:
case 147:
case 2192:
case 3885:
case 3448:
case 218:
case 2291:
case 4079:
case 3642:
case 41:
case 837:
case 2740:
case 1661:
case 189:
case 929:
case 925:
case 2906:
case 185:
case 392:
case 3167:
case 4009:
case 1082:
case 3968:
case 272:
case 3345:
case 2506:
case 700:
case 2329:
case 3781:
case 2848:
case 3102:
case 462:
case 2485:
case 3201:
case 1383:
case 602:
case 1019:
case 707:
case 1104:
case 2756:
case 1110:
case 1105:
case 3218:
case 441:
case 1342:
case 2335:
case 1826:
case 1433:
case 787:
case 1819:
case 1240:
case 902:
case 1378:
case 3320:
case 248:
case 1311:
case 3947:
case 1268:
case 2492:
case 56:
case 2747:
case 3148:
case 122:
case 982:
case 4050:
case 2821:
case 3353:
case 3393:
case 2072:
case 1751:
case 2872:
case 89:
case 3467:
case 1308:
case 2021:
case 1571:
case 3611:
case 2373:
case 1620:
case 1474:
case 625:
case 1922:
case 3052:
case 3939:
case 715:
case 1117:
case 3852:
case 763:
case 1971:
case 3402:
case 719:
case 1918:
case 3892:
case 2469:
case 520:
case 1404:
case 2067:
case 1405:
case 1855:
case 512:
case 3608:
case 2303:
case 2513:
case 2949:
case 3924:
case 3547:
case 1055:
case 1133:
case 1054:
case 527:
case 658:
case 1693:
case 411:
case 2725:
case 1586:
case 3749:
case 2867:
case 1094:
case 1935:
case 99:
case 3479:
case 3123:
case 2942:
case 3742:
case 2640:
case 1761:
case 4048:
case 3007:
case 4060:
case 3273:
case 3783:
case 3859:
case 3676:
case 1298:
case 3899:
case 2462:
case 1258:
case 2983:
case 3150:
case 1744:
case 3099:
case 802:
case 2732:
case 691:
case 1916:
case 3190:
case 3932:
case 2879:
case 539:
case 1480:
case 2857:
case 2136:
case 2583:
case 535:
case 2407:
case 1865:
case 2097:
case 1529:
case 1516:
case 651:
case 2477:
case 2459:
case 3681:
case 2809:
case 323:
case 1187:
case 637:
case 1376:
case 2253:
case 2115:
case 2100:
case 2114:
case 3367:
case 3259:
case 1898:
case 1936:
case 3277:
case 3610:
case 2712:
case 3803:
case 817:
case 1058:
case 3127:
case 2728:
case 1672:
case 3453:
case 3073:
case 19:
case 1478:
case 3420:
case 3207:
case 2987:
case 3589:
case 1602:
case 344:
case 1746:
case 1900:
case 1914:
case 2134:
case 1142:
case 2654:
case 2135:
case 3372:
case 606:
case 1066:
case 546:
case 2695:
case 3262:
case 2694:
case 383:
case 768:
case 2893:
case 321:
case 2403:
case 303:
case 573:
case 2789:
case 1304:
case 2853:
case 1310:
case 653:
case 4091:
case 1536:
case 594:
case 2297:
case 1183:
case 284:
case 2020:
case 1264:
case 3528:
case 1570:
case 1790:
case 466:
case 3145:
case 2129:
case 356:
case 3144:
case 1538:
case 2743:
case 2221:
case 910:
case 4027:
case 1481:
case 231:
case 250:
case 3526:
case 2917:
case 3519:
case 1984:
case 917:
case 1840:
case 3982:
case 395:
case 102:
case 257:
case 3463:
case 279:
case 399:
case 1331:
case 3680:
case 1149:
case 2101:
case 1868:
case 1040:
case 922:
case 2202:
case 182:
case 1295:
case 465:
case 2641:
case 3582:
case 1294:
case 469:
case 1255:
case 377:
case 507:
case 1476:
case 2533:
case 1748:
case 2399:
case 2377:
case 2186:
case 689:
case 5:
case 370:
case 1697:
case 290:
case 761:
case 1137:
case 3543:
case 4044:
case 2307:
case 3191:
case 3926:
case 2063:
case 609:
case 1584:
case 2719:
case 3631:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1762772401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,];
var gg_b = "1762772401/";

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
