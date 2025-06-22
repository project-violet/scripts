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
case 2327:
case 3839:
case 3484:
case 1087:
case 529:
case 2856:
case 3670:
case 1471:
case 1831:
case 799:
case 2153:
case 2290:
case 1489:
case 3077:
case 1625:
case 3248:
case 3340:
case 3949:
case 1701:
case 2710:
case 1704:
case 3541:
case 3414:
case 1610:
case 1941:
case 3709:
case 2897:
case 3058:
case 1267:
case 3143:
case 4037:
case 1245:
case 1809:
case 299:
case 115:
case 859:
case 1055:
case 2226:
case 2752:
case 3734:
case 587:
case 2048:
case 3656:
case 3194:
case 535:
case 3191:
case 1860:
case 1199:
case 2959:
case 1739:
case 2258:
case 5:
case 1536:
case 1961:
case 2727:
case 2666:
case 3342:
case 2712:
case 2138:
case 3268:
case 2493:
case 1612:
case 1676:
case 2798:
case 2288:
case 892:
case 252:
case 1124:
case 2919:
case 1682:
case 3075:
case 1121:
case 1301:
case 1346:
case 1085:
case 406:
case 3129:
case 123:
case 2444:
case 2441:
case 2514:
case 1500:
case 2406:
case 81:
case 40:
case 421:
case 1078:
case 1862:
case 3923:
case 3088:
case 149:
case 2816:
case 2432:
case 2275:
case 3334:
case 3866:
case 3331:
case 2886:
case 3695:
case 3018:
case 575:
case 3163:
case 3530:
case 4035:
case 1247:
case 320:
case 803:
case 1339:
case 700:
case 1003:
case 71:
case 1686:
case 2370:
case 2984:
case 1564:
case 311:
case 2979:
case 2850:
case 1342:
case 3015:
case 3569:
case 4038:
case 3627:
case 3676:
case 2571:
case 292:
case 852:
case 537:
case 1969:
case 2574:
case 962:
case 3766:
case 2402:
case 1268:
case 3346:
case 2257:
case 2662:
case 3304:
case 564:
case 2716:
case 2449:
case 3124:
case 3121:
case 1740:
case 1075:
case 323:
case 1900:
case 2203:
case 1129:
case 1033:
case 3085:
case 1762:
case 1672:
case 318:
case 800:
case 2397:
case 3862:
case 2215:
case 21:
case 4013:
case 2882:
case 349:
case 1088:
case 2108:
case 3523:
case 2328:
case 792:
case 3096:
case 2220:
case 905:
case 1695:
case 1018:
case 427:
case 1454:
case 1334:
case 1331:
case 2898:
case 3459:
case 2135:
case 203:
case 3265:
case 2827:
case 2876:
case 2795:
case 4083:
case 1163:
case 660:
case 924:
case 120:
case 214:
case 2045:
case 908:
case 4007:
case 566:
case 3831:
case 1593:
case 3489:
case 759:
case 3834:
case 1026:
case 3993:
case 3502:
case 3366:
case 1760:
case 142:
case 4053:
case 2386:
case 2469:
case 1670:
case 3471:
case 3746:
case 3704:
case 3549:
case 540:
case 1248:
case 1340:
case 92:
case 1058:
case 1541:
case 1506:
case 3944:
case 1362:
case 3941:
case 1709:
case 1411:
case 1544:
case 3610:
case 3906:
case 658:
case 1628:
case 2797:
case 714:
case 1143:
case 3267:
case 3652:
case 697:
case 2423:
case 1532:
case 1804:
case 1697:
case 315:
case 3932:
case 1846:
case 259:
case 3860:
case 1731:
case 2880:
case 56:
case 2631:
case 651:
case 2395:
case 2756:
case 2222:
case 588:
case 1588:
case 2455:
case 662:
case 3988:
case 2269:
case 1363:
case 2156:
case 3799:
case 884:
case 3596:
case 2691:
case 736:
case 1978:
case 1794:
case 1791:
case 3578:
case 49:
case 2373:
case 1279:
case 2853:
case 1131:
case 1592:
case 1214:
case 1637:
case 893:
case 1211:
case 1030:
case 94:
case 4052:
case 1957:
case 520:
case 1448:
case 3219:
case 774:
case 2737:
case 1743:
case 1329:
case 802:
case 3069:
case 2071:
case 236:
case 2074:
case 3520:
case 1920:
case 338:
case 3467:
case 3104:
case 3324:
case 137:
case 1061:
case 3321:
case 2417:
case 3585:
case 1160:
case 960:
case 3891:
case 753:
case 3607:
case 2547:
case 3933:
case 73:
case 274:
case 2019:
case 1142:
case 2735:
case 1590:
case 1763:
case 767:
case 1955:
case 1032:
case 2195:
case 3399:
case 4050:
case 776:
case 1673:
case 2663:
case 608:
case 2838:
case 2773:
case 3683:
case 1821:
case 16:
case 387:
case 601:
case 335:
case 2403:
case 3613:
case 2805:
case 2249:
case 2337:
case 2457:
case 3829:
case 3:
case 88:
case 1729:
case 3977:
case 3926:
case 276:
case 997:
case 2420:
case 709:
case 1526:
case 1162:
case 2813:
case 378:
case 2415:
case 542:
case 958:
case 3605:
case 2172:
case 2629:
case 2567:
case 3724:
case 2116:
case 177:
case 494:
case 166:
case 626:
case 951:
case 2236:
case 3958:
case 1917:
case 3166:
case 1558:
case 1044:
case 2186:
case 1922:
case 234:
case 3049:
case 2883:
case 447:
case 3955:
case 3673:
case 473:
case 78:
case 2783:
case 1990:
case 2293:
case 3635:
case 3394:
case 515:
case 761:
case 143:
case 2241:
case 3821:
case 3824:
case 187:
case 286:
case 87:
case 1:
case 2713:
case 2054:
case 3162:
case 669:
case 178:
case 2705:
case 876:
case 1926:
case 2182:
case 28:
case 3526:
case 3577:
case 377:
case 454:
case 1721:
case 2967:
case 1587:
case 4016:
case 2945:
case 1605:
case 448:
case 1259:
case 3041:
case 3006:
case 2738:
case 3044:
case 1465:
case 1447:
case 1517:
case 2433:
case 2353:
case 4086:
case 171:
case 2127:
case 2835:
case 2475:
case 3254:
case 786:
case 1638:
case 2112:
case 834:
case 2568:
case 1799:
case 3996:
case 1596:
case 433:
case 2383:
case 322:
case 4056:
case 3588:
case 1139:
case 549:
case 3978:
case 3791:
case 1578:
case 175:
case 3030:
case 3637:
case 4028:
case 293:
case 853:
case 3903:
case 1992:
case 3743:
case 995:
case 3518:
case 2477:
case 3109:
case 2305:
case 3920:
case 1069:
case 2125:
case 3329:
case 1843:
case 1324:
case 3061:
case 1515:
case 2079:
case 1101:
case 2084:
case 2081:
case 385:
case 3160:
case 364:
case 1891:
case 2458:
case 456:
case 3985:
case 1000:
case 2753:
case 765:
case 523:
case 4070:
case 1653:
case 1377:
case 1326:
case 3818:
case 346:
case 1106:
case 3720:
case 461:
case 2424:
case 938:
case 847:
case 3387:
case 883:
case 649:
case 780:
case 1803:
case 2367:
case 1358:
case 3102:
case 2675:
case 931:
case 870:
case 3295:
case 3322:
case 1062:
case 2072:
case 241:
case 1896:
case 1040:
case 1775:
case 468:
case 2016:
case 1665:
case 611:
case 1390:
case 2266:
case 1788:
case 2159:
case 1999:
case 1483:
case 748:
case 1885:
case 3994:
case 3778:
case 3833:
case 1594:
case 3668:
case 3991:
case 1227:
case 3473:
case 2688:
case 1282:
case 1792:
case 195:
case 2095:
case 355:
case 1820:
case 1718:
case 975:
case 623:
case 3216:
case 741:
case 2537:
case 1413:
case 3100:
case 1777:
case 896:
case 507:
case 3929:
case 2848:
case 450:
case 1252:
case 4014:
case 1060:
case 2905:
case 3320:
case 4011:
case 3297:
case 2745:
case 615:
case 929:
case 2626:
case 397:
case 3521:
case 1042:
case 2119:
case 1924:
case 157:
case 1921:
case 2767:
case 1758:
case 2239:
case 3169:
case 2365:
case 812:
case 971:
case 830:
case 1009:
case 3256:
case 2938:
case 745:
case 2189:
case 3385:
case 4079:
case 3004:
case 3046:
case 75:
case 1855:
case 1375:
case 4081:
case 3890:
case 1407:
case 1164:
case 351:
case 2499:
case 1280:
case 3755:
case 756:
case 3963:
case 493:
case 1822:
case 3270:
case 465:
case 2690:
case 2508:
case 484:
case 1225:
case 9:
case 3039:
case 1392:
case 3123:
case 2201:
case 3357:
case 2204:
case 1210:
case 3645:
case 1228:
case 3060:
case 2687:
case 1929:
case 2114:
case 1100:
case 3726:
case 3777:
case 296:
case 977:
case 2080:
case 1315:
case 3042:
case 474:
case 1524:
case 357:
case 4019:
case 3009:
case 436:
case 4071:
case 230:
case 1722:
case 212:
case 2025:
case 940:
case 3161:
case 2234:
case 2179:
case 1890:
case 391:
case 151:
case 3164:
case 2010:
case 79:
case 1004:
case 1001:
case 2184:
case 1963:
case 453:
case 1396:
case 1755:
case 3563:
case 2368:
case 2052:
case 3280:
case 3388:
case 2494:
case 526:
case 1858:
case 2242:
case 1378:
case 3822:
case 1270:
case 2973:
case 712:
case 3887:
case 2209:
case 2845:
case 2867:
case 845:
case 1039:
case 833:
case 730:
case 2748:
case 1357:
case 3318:
case 1437:
case 3210:
case 985:
case 2429:
case 3106:
case 1818:
case 146:
case 3857:
case 2615:
case 848:
case 937:
case 2098:
case 1892:
case 434:
case 283:
case 3803:
case 247:
case 1149:
case 2012:
case 2620:
case 1387:
case 467:
case 1785:
case 270:
case 3733:
case 1102:
case 2553:
case 1317:
case 3438:
case 3193:
case 3250:
case 3040:
case 3775:
case 1888:
case 3665:
case 2507:
case 854:
case 620:
case 3896:
case 1796:
case 1355:
case 1599:
case 1286:
case 3390:
case 1875:
case 747:
case 3227:
case 922:
case 1778:
case 1833:
case 3885:
case 1994:
case 880:
case 3594:
case 2262:
case 2657:
case 1408:
case 155:
case 524:
case 819:
case 1703:
case 409:
case 3282:
case 617:
case 2050:
case 873:
case 2348:
case 2603:
case 794:
case 2937:
case 3543:
case 1216:
case 3718:
case 505:
case 1757:
case 1272:
case 227:
case 1841:
case 1157:
case 369:
case 2997:
case 2928:
case 732:
case 3732:
case 879:
case 3205:
case 2552:
case 1103:
case 2083:
case 3192:
case 813:
case 666:
case 126:
case 1893:
case 2636:
case 640:
case 789:
case 3534:
case 821:
case 2754:
case 3659:
case 1178:
case 1196:
case 1736:
case 3939:
case 1495:
case 3188:
case 1021:
case 3175:
case 3361:
case 3836:
case 3427:
case 3476:
case 2384:
case 2970:
case 2859:
case 416:
case 2005:
case 108:
case 3498:
case 4065:
case 1185:
case 3793:
case 66:
case 12:
case 101:
case 3946:
case 1832:
case 3904:
case 3213:
case 688:
case 2649:
case 3482:
case 3741:
case 1909:
case 1120:
case 3706:
case 2038:
case 1300:
case 2314:
case 1208:
case 2311:
case 2525:
case 544:
case 2148:
case 3091:
case 2623:
case 772:
case 1099:
case 637:
case 1428:
case 2819:
case 2871:
case 3869:
case 920:
case 124:
case 2354:
case 664:
case 2889:
case 2351:
case 2431:
case 2995:
case 2550:
case 1456:
case 1861:
case 622:
case 162:
case 3674:
case 3761:
case 3764:
case 3671:
case 2669:
case 2576:
case 1470:
case 1830:
case 546:
case 2294:
case 2291:
case 1122:
case 1684:
case 3158:
case 1679:
case 1566:
case 1302:
case 2598:
case 3966:
case 2600:
case 4045:
case 1614:
case 3540:
case 3410:
case 1611:
case 1940:
case 2007:
case 3823:
case 2972:
case 1962:
case 825:
case 3306:
case 3177:
case 2714:
case 2711:
case 4048:
case 1094:
case 3497:
case 949:
case 2814:
case 1452:
case 3099:
case 1332:
case 324:
case 1869:
case 282:
case 2037:
case 3456:
case 631:
case 563:
case 3861:
case 499:
case 2359:
case 305:
case 2595:
case 3830:
case 1689:
case 2912:
case 1674:
case 1761:
case 2976:
case 2927:
case 362:
case 3470:
case 3679:
case 3302:
case 2774:
case 911:
case 1966:
case 872:
case 2664:
case 1480:
case 2145:
case 3349:
case 204:
case 3187:
case 782:
case 3614:
case 1540:
case 2401:
case 2167:
case 2404:
case 1126:
case 2982:
case 1562:
case 1306:
case 3841:
case 169:
case 3157:
case 2073:
case 678:
case 915:
case 827:
case 213:
case 326:
case 279:
case 2528:
case 1732:
case 1205:
case 228:
case 221:
case 3931:
case 1939:
case 3736:
case 1188:
case 4068:
case 3539:
case 2759:
case 1330:
case 2570:
case 598:
case 1361:
case 2693:
case 1412:
case 3024:
case 3942:
case 107:
case 2374:
case 779:
case 2371:
case 400:
case 713:
case 2147:
case 2851:
case 810:
case 2389:
case 889:
case 635:
case 3832:
case 643:
case 3749:
case 721:
case 1901:
case 2644:
case 3504:
case 3501:
case 2641:
case 32:
case 2319:
case 3472:
case 687:
case 3300:
case 3208:
case 1482:
case 1744:
case 1509:
case 3909:
case 4061:
case 437:
case 4064:
case 1184:
case 1179:
case 2890:
case 1617:
case 891:
case 2256:
case 3938:
case 934:
case 3189:
case 510:
case 2315:
case 3119:
case 3677:
case 976:
case 967:
case 2100:
case 196:
case 464:
case 1111:
case 898:
case 1505:
case 2320:
case 2357:
case 1513:
case 3246:
case 2303:
case 2648:
case 3508:
case 1867:
case 2039:
case 97:
case 1908:
case 3056:
case 422:
case 2123:
case 1845:
case 909:
case 1655:
case 3097:
case 2270:
case 1494:
case 1491:
case 1242:
case 3499:
case 1935:
case 758:
case 3983:
case 4030:
case 527:
case 2963:
case 2755:
case 3028:
case 990:
case 260:
case 3907:
case 3633:
case 74:
case 2888:
case 3675:
case 2317:
case 3953:
case 3747:
case 2785:
case 170:
case 974:
case 2387:
case 936:
case 3367:
case 572:
case 1027:
case 2066:
case 4044:
case 348:
case 1098:
case 440:
case 3086:
case 1429:
case 2720:
case 2818:
case 2757:
case 24:
case 1603:
case 1348:
case 953:
case 1937:
case 2216:
case 3692:
case 1240:
case 616:
case 760:
case 1050:
case 4032:
case 93:
case 1657:
case 2408:
case 255:
case 895:
case 3095:
case 2833:
case 1847:
case 2991:
case 2668:
case 1865:
case 692:
case 3688:
case 1463:
case 3266:
case 746:
case 2355:
case 2599:
case 1768:
case 2040:
case 2775:
case 2665:
case 2647:
case 3507:
case 763:
case 141:
case 1633:
case 2896:
case 3685:
case 525:
case 1747:
case 504:
case 2733:
case 795:
case 2358:
case 2438:
case 3553:
case 1675:
case 1765:
case 429:
case 3082:
case 4049:
case 902:
case 2803:
case 3027:
case 3076:
case 1424:
case 1345:
case 3620:
case 1421:
case 1086:
case 2144:
case 846:
case 2106:
case 3098:
case 148:
case 3937:
case 3348:
case 993:
case 3240:
case 2413:
case 2820:
case 1618:
case 3657:
case 965:
case 3050:
case 173:
case 2815:
case 2276:
case 652:
case 1688:
case 2885:
case 984:
case 3154:
case 3696:
case 2594:
case 539:
case 3151:
case 487:
case 1159:
case 3678:
case 2483:
case 2298:
case 2390:
case 443:
case 2788:
case 3617:
case 1658:
case 2161:
case 2375:
case 3179:
case 844:
case 961:
case 3181:
case 3010:
case 3622:
case 3184:
case 2333:
case 330:
case 3538:
case 438:
case 3025:
case 1677:
case 2042:
case 1119:
case 2921:
case 506:
case 1767:
case 1745:
case 3505:
case 2645:
case 298:
case 2726:
case 2777:
case 156:
case 1848:
case 3080:
case 2529:
case 2667:
case 15:
case 1201:
case 1913:
case 1204:
case 2210:
case 1056:
case 2225:
case 50:
case 3908:
case 986:
case 513:
case 3242:
case 1573:
case 2822:
case 757:
case 579:
case 2563:
case 2130:
case 2280:
case 3935:
case 475:
case 2790:
case 798:
case 3995:
case 1439:
case 1359:
case 2730:
case 1881:
case 1595:
case 4055:
case 2253:
case 415:
case 1879:
case 1950:
case 2869:
case 3889:
case 824:
case 1630:
case 3351:
case 139:
case 2332:
case 3819:
case 3148:
case 1811:
case 2800:
case 2094:
case 3623:
case 665:
case 125:
case 554:
case 2562:
case 541:
case 2341:
case 3714:
case 3053:
case 1982:
case 3582:
case 1401:
case 3600:
case 4087:
case 1516:
case 2410:
case 1145:
case 3972:
case 4017:
case 2480:
case 1789:
case 1774:
case 2158:
case 372:
case 2966:
case 1664:
case 3779:
case 1976:
case 1927:
case 862:
case 2671:
case 3527:
case 3512:
case 684:
case 3956:
case 2238:
case 2450:
case 3168:
case 55:
case 2188:
case 4078:
case 2531:
case 533:
case 2802:
case 3013:
case 3928:
case 4003:
case 668:
case 2732:
case 2849:
case 2205:
case 128:
case 3552:
case 3229:
case 113:
case 1224:
case 68:
case 1221:
case 999:
case 2482:
case 2744:
case 3314:
case 1925:
case 3462:
case 4020:
case 3311:
case 801:
case 82:
case 4015:
case 411:
case 1606:
case 2904:
case 1641:
case 389:
case 3440:
case 2498:
case 1854:
case 808:
case 423:
case 2133:
case 1374:
case 1980:
case 2283:
case 3580:
case 1371:
case 4085:
case 1165:
case 3379:
case 2542:
case 1570:
case 3384:
case 3970:
case 3859:
case 3008:
case 2495:
case 634:
case 2196:
case 1956:
case 1168:
case 4088:
case 1754:
case 1013:
case 2178:
case 1751:
case 2893:
case 2931:
case 420:
case 1229:
case 2103:
case 1083:
case 3035:
case 3952:
case 4092:
case 3528:
case 959:
case 3073:
case 1997:
case 3632:
case 869:
case 3597:
case 4018:
case 667:
case 3224:
case 3221:
case 1314:
case 1311:
case 2909:
case 1038:
case 1510:
case 2416:
case 2749:
case 3644:
case 189:
case 2501:
case 3606:
case 3910:
case 2115:
case 3319:
case 22:
case 512:
case 2472:
case 3374:
case 2702:
case 2369:
case 3165:
case 1580:
case 4033:
case 3851:
case 3466:
case 3854:
case 2185:
case 4075:
case 3570:
case 2273:
case 1384:
case 417:
case 1859:
case 609:
case 2021:
case 807:
case 596:
case 1379:
case 2864:
case 3950:
case 2861:
case 674:
case 3359:
case 2155:
case 3881:
case 4090:
case 205:
case 1434:
case 1354:
case 1889:
case 690:
case 1874:
case 3037:
case 2723:
case 762:
case 1148:
case 3814:
case 63:
case 1053:
case 1582:
case 705:
case 4026:
case 594:
case 3572:
case 3145:
case 1007:
case 570:
case 3401:
case 916:
case 1600:
case 2237:
case 1916:
case 724:
case 3516:
case 653:
case 2611:
case 2940:
case 3404:
case 2117:
case 3998:
case 2679:
case 2566:
case 2302:
case 3664:
case 3586:
case 2681:
case 4058:
case 2122:
case 3789:
case 2830:
case 1512:
case 1781:
case 1291:
case 1784:
case 1669:
case 1527:
case 1576:
case 2470:
case 992:
case 300:
case 3105:
case 2900:
case 3782:
case 3325:
case 823:
case 3441:
case 116:
case 1716:
case 1449:
case 3919:
case 4024:
case 3218:
case 1662:
case 4021:
case 2360:
case 1296:
case 1786:
case 3798:
case 3380:
case 3974:
case 3971:
case 352:
case 2969:
case 1574:
case 3288:
case 3727:
case 3776:
case 536:
case 1850:
case 2342:
case 972:
case 3666:
case 1278:
case 3584:
case 3581:
case 42:
case 3712:
case 426:
case 1795:
case 694:
case 2163:
case 1356:
case 1436:
case 1285:
case 3183:
case 2092:
case 2866:
case 1898:
case 2695:
case 717:
case 1173:
case 2018:
case 3068:
case 1220:
case 2088:
case 1108:
case 3816:
case 3432:
case 3352:
case 683:
case 1215:
case 1882:
case 1397:
case 3113:
case 3646:
case 2541:
case 989:
case 3604:
case 534:
case 2411:
case 3382:
case 69:
case 3725:
case 2058:
case 1852:
case 1316:
case 2340:
case 3828:
case 1372:
case 1609:
case 462:
case 3710:
case 2760:
case 2593:
case 3290:
case 2026:
case 3153:
case 3376:
case 3327:
case 2839:
case 567:
case 2484:
case 932:
case 114:
case 3461:
case 1045:
case 1395:
case 3870:
case 3959:
case 1559:
case 2936:
case 1217:
case 1631:
case 3430:
case 612:
case 3639:
case 2731:
case 1880:
case 3048:
case 1954:
case 3551:
case 2656:
case 3554:
case 630:
case 1951:
case 1810:
case 1728:
case 815:
case 2801:
case 2846:
case 405:
case 1825:
case 509:
case 1797:
case 1287:
case 1382:
case 65:
case 2017:
case 2944:
case 2022:
case 2941:
case 1897:
case 2746:
case 2549:
case 3609:
case 633:
case 3316:
case 1153:
case 3642:
case 2834:
case 568:
case 3255:
case 3469:
case 842:
case 3386:
case 2087:
case 3045:
case 1464:
case 1312:
case 1856:
case 1376:
case 2739:
case 1258:
case 921:
case 3631:
case 586:
case 3756:
case 3395:
case 2199:
case 1870:
case 1959:
case 3559:
case 3954:
case 3951:
case 1554:
case 1639:
case 4091:
case 3728:
case 215:
case 3810:
case 359:
case 2932:
case 928:
case 2245:
case 3797:
case 4043:
case 3287:
case 3825:
case 223:
case 1444:
case 3640:
case 1292:
case 316:
case 1514:
case 3911:
case 2085:
case 3257:
case 3662:
case 2301:
case 619:
case 1310:
case 2304:
case 2124:
case 2682:
case 3449:
case 817:
case 3519:
case 1974:
case 2676:
case 392:
case 3571:
case 1798:
case 1288:
case 2766:
case 1971:
case 3589:
case 2020:
case 3402:
case 1493:
case 3786:
case 2612:
case 3278:
case 3981:
case 3370:
case 1581:
case 1712:
case 3850:
case 211:
case 2698:
case 2015:
case 1666:
case 2459:
case 3135:
case 1183:
case 3827:
case 3876:
case 303:
case 2265:
case 723:
case 641:
case 3436:
case 2247:
case 654:
case 1233:
case 3173:
case 469:
case 2650:
case 2840:
case 249:
case 1816:
case 3328:
case 584:
case 711:
case 2078:
case 2862:
case 3215:
case 771:
case 1713:
case 1054:
case 3337:
case 186:
case 37:
case 2:
case 933:
case 1548:
case 86:
case 3708:
case 2036:
case 287:
case 1244:
case 235:
case 243:
case 1492:
case 599:
case 463:
case 2683:
case 3478:
case 1783:
case 3735:
case 1150:
case 2990:
case 778:
case 2399:
case 1488:
case 2555:
case 309:
case 1475:
case 2863:
case 271:
case 161:
case 1198:
case 2958:
case 621:
case 2447:
case 2517:
case 1433:
case 60:
case 2522:
case 2465:
case 2587:
case 679:
case 2605:
case 3172:
case 628:
case 866:
case 613:
case 3567:
case 2721:
case 956:
case 1967:
case 2977:
case 1182:
case 367:
case 1624:
case 1621:
case 18:
case 3420:
case 2002:
case 3813:
case 1705:
case 1232:
case 625:
case 2918:
case 1313:
case 3737:
case 33:
case 973:
case 3200:
case 193:
case 353:
case 3308:
case 2992:
case 604:
case 4034:
case 2578:
case 1261:
case 1264:
case 3335:
case 3455:
case 3269:
case 2988:
case 3694:
case 1568:
case 3807:
case 2799:
case 3968:
case 3691:
case 374:
case 457:
case 4042:
case 500:
case 3170:
case 231:
case 775:
case 4060:
case 2000:
case 1965:
case 1753:
case 682:
case 3422:
case 1014:
case 1947:
case 2891:
case 2585:
case 941:
case 2894:
case 1230:
case 864:
case 639:
case 2467:
case 1110:
case 552:
case 2321:
case 1079:
case 837:
case 2069:
case 102:
case 3089:
case 1477:
case 3223:
case 2743:
case 365:
case 2957:
case 2518:
case 1128:
case 2030:
case 2592:
case 2903:
case 2214:
case 3152:
case 2211:
case 2134:
case 2279:
case 1853:
case 785:
case 2131:
case 2978:
case 2794:
case 2363:
case 1694:
case 3490:
case 1691:
case 2588:
case 3383:
case 222:
case 51:
case 1269:
case 1019:
case 2142:
case 3707:
case 2899:
case 1170:
case 3338:
case 3947:
case 264:
case 2985:
case 190:
case 3011:
case 3753:
case 4001:
case 1487:
case 4004:
case 2061:
case 3084:
case 3110:
case 285:
case 444:
case 838:
case 1089:
case 3477:
case 1223:
case 2109:
case 3305:
case 2329:
case 983:
case 1071:
case 3837:
case 17:
case 1948:
case 386:
case 3548:
case 2343:
case 3051:
case 843:
case 3492:
case 835:
case 3241:
case 2821:
case 887:
case 2635:
case 1478:
case 777:
case 2394:
case 2391:
case 1773:
case 2763:
case 2955:
case 109:
case 3488:
case 455:
case 3783:
case 1496:
case 3150:
case 788:
case 3176:
case 3835:
case 930:
case 2254:
case 3307:
case 3112:
case 2041:
case 1186:
case 446:
case 361:
case 3198:
case 1236:
case 2917:
case 3433:
case 2558:
case 240:
case 1567:
case 1116:
case 996:
case 460:
case 3945:
case 368:
case 3705:
case 514:
case 781:
case 627:
case 3182:
case 167:
case 176:
case 3621:
case 38:
case 2526:
case 2577:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750572002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,];
var gg_b = "1750572002/";

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
