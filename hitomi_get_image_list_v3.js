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
case 2296:
case 1839:
case 1309:
case 3565:
case 2840:
case 796:
case 2726:
case 2867:
case 3520:
case 2413:
case 2979:
case 3161:
case 2642:
case 3772:
case 1369:
case 1915:
case 3505:
case 2337:
case 1621:
case 3227:
case 1796:
case 469:
case 1382:
case 511:
case 3437:
case 253:
case 854:
case 2573:
case 3050:
case 1193:
case 1174:
case 218:
case 2594:
case 632:
case 3528:
case 3706:
case 42:
case 530:
case 1707:
case 583:
case 1017:
case 2500:
case 725:
case 2121:
case 895:
case 2560:
case 646:
case 457:
case 3932:
case 2914:
case 1826:
case 536:
case 1740:
case 234:
case 3399:
case 2207:
case 441:
case 1429:
case 3352:
case 2571:
case 1239:
case 2896:
case 986:
case 3311:
case 880:
case 1142:
case 2240:
case 2267:
case 4004:
case 1595:
case 847:
case 2443:
case 4050:
case 3634:
case 2024:
case 2651:
case 2810:
case 3779:
case 1945:
case 369:
case 947:
case 1832:
case 76:
case 951:
case 798:
case 514:
case 3215:
case 1756:
case 3181:
case 2554:
case 687:
case 3343:
case 1153:
case 851:
case 3531:
case 2818:
case 3090:
case 789:
case 103:
case 1389:
case 2966:
case 1060:
case 772:
case 2441:
case 3377:
case 1710:
case 899:
case 65:
case 2906:
case 2517:
case 3815:
case 1071:
case 1232:
case 2130:
case 1149:
case 3359:
case 1422:
case 648:
case 2856:
case 32:
case 1068:
case 1555:
case 160:
case 2210:
case 1112:
case 1787:
case 3533:
case 4016:
case 2005:
case 3362:
case 593:
case 2715:
case 1634:
case 2814:
case 2683:
case 2065:
case 3945:
case 754:
case 4054:
case 1779:
case 3756:
case 3094:
case 535:
case 1757:
case 1585:
case 990:
case 3638:
case 3073:
case 2886:
case 2996:
case 1090:
case 890:
case 3153:
case 1343:
case 2462:
case 1004:
case 1939:
case 1714:
case 2940:
case 1046:
case 2967:
case 2516:
case 1815:
case 2322:
case 2286:
case 27:
case 4080:
case 3710:
case 3422:
case 1359:
case 3008:
case 4088:
case 2584:
case 219:
case 49:
case 4017:
case 468:
case 1341:
case 12:
case 2134:
case 795:
case 3068:
case 1772:
case 2745:
case 989:
case 3309:
case 3839:
case 1058:
case 898:
case 2598:
case 3369:
case 1178:
case 96:
case 1505:
case 998:
case 165:
case 2482:
case 2844:
case 4073:
case 1101:
case 1437:
case 649:
case 1245:
case 2603:
case 1227:
case 3621:
case 673:
case 1528:
case 3193:
case 2409:
case 368:
case 1163:
case 3017:
case 1016:
case 1706:
case 4068:
case 1827:
case 1932:
case 2504:
case 466:
case 3740:
case 3767:
case 3826:
case 3088:
case 144:
case 2872:
case 1845:
case 2033:
case 3748:
case 2244:
case 215:
case 3119:
case 829:
case 2206:
case 2987:
case 3623:
case 661:
case 2266:
case 1311:
case 2918:
case 4025:
case 972:
case 4060:
case 1352:
case 4047:
case 1563:
case 1982:
case 2743:
case 1690:
case 1841:
case 363:
case 4075:
case 1503:
case 3913:
case 255:
case 1909:
case 1456:
case 1698:
case 3289:
case 1243:
case 3542:
case 1:
case 2620:
case 2665:
case 3591:
case 294:
case 1561:
case 993:
case 3608:
case 2386:
case 2222:
case 306:
case 723:
case 604:
case 3671:
case 3414:
case 2432:
case 742:
case 371:
case 408:
case 3952:
case 2759:
case 711:
case 1105:
case 2198:
case 1578:
case 1410:
case 3911:
case 893:
case 2190:
case 3862:
case 1604:
case 3625:
case 1722:
case 935:
case 2035:
case 474:
case 1128:
case 3332:
case 2314:
case 3593:
case 1664:
case 678:
case 596:
case 4023:
case 3269:
case 1899:
case 2236:
case 3021:
case 4030:
case 3654:
case 1650:
case 1811:
case 3209:
case 1962:
case 1583:
case 1736:
case 3737:
case 2829:
case 3549:
case 117:
case 2184:
case 259:
case 1496:
case 1133:
case 90:
case 1902:
case 1327:
case 3512:
case 3155:
case 529:
case 2078:
case 3882:
case 589:
case 3023:
case 2001:
case 1467:
case 3941:
case 2439:
case 676:
case 714:
case 56:
case 2158:
case 3339:
case 3617:
case 3809:
case 939:
case 1252:
case 2150:
case 1185:
case 2344:
case 1131:
case 406:
case 3688:
case 2306:
case 1299:
case 1729:
case 1021:
case 2427:
case 595:
case 409:
case 2445:
case 1472:
case 4:
case 836:
case 983:
case 284:
case 930:
case 2237:
case 1209:
case 830:
case 3989:
case 2117:
case 3852:
case 61:
case 1943:
case 777:
case 3496:
case 3658:
case 643:
case 3962:
case 2042:
case 622:
case 580:
case 1155:
case 3327:
case 3902:
case 1282:
case 1326:
case 586:
case 2180:
case 3133:
case 2655:
case 3407:
case 250:
case 1023:
case 1406:
case 1444:
case 1882:
case 174:
case 682:
case 3813:
case 1941:
case 1466:
case 2093:
case 842:
case 3185:
case 2074:
case 1809:
case 3211:
case 823:
case 3448:
case 2340:
case 3616:
case 923:
case 2922:
case 3729:
case 3535:
case 1977:
case 1553:
case 3976:
case 3859:
case 1038:
case 2100:
case 405:
case 3563:
case 2789:
case 417:
case 588:
case 2147:
case 1479:
case 3503:
case 3841:
case 3690:
case 163:
case 675:
case 2168:
case 2012:
case 1457:
case 838:
case 2051:
case 2762:
case 1591:
case 1030:
case 2936:
case 309:
case 938:
case 452:
case 3:
case 1542:
case 1876:
case 3277:
case 1276:
case 3561:
case 2695:
case 2387:
case 1999:
case 1608:
case 3501:
case 2523:
case 547:
case 100:
case 1668:
case 739:
case 1952:
case 171:
case 637:
case 1660:
case 2310:
case 2053:
case 3292:
case 213:
case 1625:
case 551:
case 2929:
case 2173:
case 814:
case 1593:
case 1486:
case 221:
case 1600:
case 2194:
case 2183:
case 1476:
case 1214:
case 119:
case 257:
case 2533:
case 22:
case 3210:
case 3966:
case 212:
case 3218:
case 638:
case 1681:
case 3287:
case 3906:
case 3517:
case 241:
case 1286:
case 1907:
case 2815:
case 17:
case 4055:
case 975:
case 3944:
case 3138:
case 1028:
case 1402:
case 937:
case 3887:
case 2585:
case 1550:
case 2215:
case 2531:
case 3997:
case 3554:
case 162:
case 2135:
case 1462:
case 701:
case 1005:
case 1489:
case 3256:
case 28:
case 1715:
case 3612:
case 770:
case 310:
case 453:
case 1814:
case 1020:
case 1065:
case 1558:
case 546:
case 1987:
case 1601:
case 3896:
case 683:
case 1266:
case 3240:
case 1897:
case 3175:
case 540:
case 2352:
case 3248:
case 2163:
case 3674:
case 1910:
case 843:
case 3411:
case 879:
case 2706:
case 3452:
case 822:
case 2932:
case 2827:
case 979:
case 2766:
case 3525:
case 3739:
case 1670:
case 1872:
case 2845:
case 3547:
case 244:
case 353:
case 416:
case 2797:
case 4024:
case 318:
case 1663:
case 3594:
case 778:
case 2313:
case 2528:
case 1956:
case 410:
case 1085:
case 642:
case 3979:
case 2161:
case 3642:
case 1745:
case 3296:
case 1866:
case 3691:
case 3867:
case 3726:
case 2178:
case 1598:
case 265:
case 3807:
case 1844:
case 1482:
case 611:
case 3206:
case 1055:
case 1568:
case 1207:
case 1986:
case 3033:
case 3244:
case 775:
case 2429:
case 2191:
case 3266:
case 3918:
case 1508:
case 2595:
case 3661:
case 1267:
case 3897:
case 3564:
case 1693:
case 2707:
case 1452:
case 1248:
case 2017:
case 597:
case 1500:
case 60:
case 1121:
case 3546:
case 1499:
case 1739:
case 561:
case 1525:
case 3504:
case 1914:
case 4065:
case 870:
case 3603:
case 3469:
case 2193:
case 3956:
case 3409:
case 901:
case 1957:
case 970:
case 1594:
case 3663:
case 876:
case 2174:
case 1867:
case 1840:
case 1642:
case 1979:
case 549:
case 3844:
case 3598:
case 4028:
case 2369:
case 2915:
case 3214:
case 3476:
case 2071:
case 2718:
case 2149:
case 3584:
case 319:
case 1095:
case 131:
case 2422:
case 2008:
case 266:
case 1856:
case 1210:
case 3857:
case 3134:
case 2112:
case 260:
case 2787:
case 892:
case 1218:
case 1732:
case 3635:
case 3967:
case 1441:
case 1653:
case 1492:
case 3879:
case 1944:
case 71:
case 564:
case 37:
case 1138:
case 4033:
case 1287:
case 2000:
case 1459:
case 3286:
case 3907:
case 3322:
case 3886:
case 804:
case 2073:
case 2756:
case 3402:
case 362:
case 3996:
case 1997:
case 2389:
case 203:
case 1443:
case 110:
case 4085:
case 1024:
case 1256:
case 1810:
case 1651:
case 635:
case 3558:
case 1649:
case 2832:
case 782:
case 116:
case 3683:
case 1093:
case 2339:
case 1074:
case 3366:
case 66:
case 1367:
case 576:
case 698:
case 2869:
case 3836:
case 2688:
case 3306:
case 1307:
case 1154:
case 3344:
case 494:
case 787:
case 2553:
case 391:
case 150:
case 2959:
case 2680:
case 3001:
case 3078:
case 3633:
case 2444:
case 274:
case 3158:
case 156:
case 949:
case 3439:
case 402:
case 3184:
case 1769:
case 2737:
case 2075:
case 1709:
case 2282:
case 2326:
case 2551:
case 3372:
case 748:
case 1188:
case 2021:
case 2269:
case 184:
case 629:
case 1445:
case 3713:
case 1237:
case 861:
case 2209:
case 1396:
case 75:
case 3397:
case 1782:
case 961:
case 1117:
case 2943:
case 3116:
case 2660:
case 3777:
case 2647:
case 1776:
case 1053:
case 4061:
case 1929:
case 113:
case 732:
case 491:
case 2802:
case 3314:
case 1173:
case 3081:
case 1194:
case 2574:
case 3741:
case 2671:
case 3432:
case 2276:
case 2999:
case 696:
case 394:
case 4070:
case 3222:
case 2608:
case 3386:
case 845:
case 1523:
case 1318:
case 2911:
case 2124:
case 1012:
case 1702:
case 355:
case 3605:
case 1624:
case 2289:
case 1051:
case 1762:
case 2030:
case 2591:
case 1171:
case 2195:
case 3083:
case 2876:
case 1108:
case 3620:
case 1415:
case 2202:
case 3628:
case 1100:
case 2694:
case 459:
case 2479:
case 1147:
case 302:
case 2262:
case 3146:
case 1521:
case 2913:
case 746:
case 1356:
case 1125:
case 964:
case 3357:
case 3104:
case 456:
case 647:
case 1190:
case 2292:
case 2722:
case 313:
case 2604:
case 537:
case 3310:
case 2646:
case 2128:
case 2487:
case 358:
case 3194:
case 450:
case 1314:
case 3695:
case 2561:
case 1386:
case 2165:
case 987:
case 2105:
case 887:
case 2843:
case 1198:
case 2501:
case 3318:
case 3523:
case 2410:
case 651:
case 34:
case 628:
case 2909:
case 95:
case 1605:
case 2698:
case 688:
case 1379:
case 2:
case 3575:
case 484:
case 1620:
case 1083:
case 3171:
case 699:
case 85:
case 3936:
case 3762:
case 1822:
case 1937:
case 3049:
case 1628:
case 2563:
case 4019:
case 3789:
case 2859:
case 3415:
case 3356:
case 2841:
case 2690:
case 1104:
case 1357:
case 4042:
case 3160:
case 102:
case 3147:
case 3521:
case 1146:
case 582:
case 745:
case 2211:
case 3367:
case 2581:
case 3340:
case 2252:
case 1150:
case 2185:
case 0:
case 1070:
case 2131:
case 2299:
case 324:
case 3154:
case 3307:
case 1711:
case 1078:
case 932:
case 458:
case 1752:
case 350:
case 3655:
case 356:
case 4053:
case 3348:
case 1439:
case 167:
case 1799:
case 1158:
case 1229:
case 832:
case 2962:
case 1829:
case 764:
case 946:
case 3091:
case 2658:
case 695:
case 846:
case 940:
case 205:
case 1372:
case 3709:
case 2902:
case 3237:
case 3188:
case 252:
case 543:
case 3117:
case 1063:
case 1116:
case 633:
case 2811:
case 579:
case 2989:
case 3868:
case 1298:
case 2057:
case 1451:
case 618:
case 1412:
case 1954:
case 3483:
case 4026:
case 1597:
case 1449:
case 2383:
case 311:
case 3724:
case 2228:
case 1705:
case 2159:
case 139:
case 3800:
case 3958:
case 3860:
case 2545:
case 2192:
case 3847:
case 342:
case 1804:
case 2079:
case 1765:
case 1204:
case 3225:
case 1692:
case 4039:
case 3435:
case 3260:
case 1641:
case 3247:
case 1890:
case 336:
case 3200:
case 1264:
case 544:
case 852:
case 917:
case 763:
case 805:
case 3540:
case 2381:
case 246:
case 3567:
case 3676:
case 1677:
case 3271:
case 2143:
case 1898:
case 1506:
case 905:
case 2335:
case 240:
case 1917:
case 10:
case 1613:
case 287:
case 1129:
case 2097:
case 442:
case 3990:
case 1973:
case 3880:
case 1557:
case 411:
case 1785:
case 569:
case 3321:
case 2833:
case 135:
case 1045:
case 3669:
case 3888:
case 3403:
case 3026:
case 2421:
case 616:
case 1027:
case 3375:
case 1816:
case 2152:
case 3609:
case 3587:
case 2361:
case 1586:
case 1493:
case 3755:
case 3137:
case 1136:
case 3470:
case 2378:
case 631:
case 3323:
case 3518:
case 4032:
case 2995:
case 2784:
case 1699:
case 3478:
case 2370:
case 2716:
case 3280:
case 2006:
case 3510:
case 3946:
case 2066:
case 1925:
case 483:
case 9:
case 430:
case 227:
case 1284:
case 393:
case 3258:
case 3129:
case 3491:
case 800:
case 1990:
case 2096:
case 906:
case 3731:
case 3884:
case 4015:
case 971:
case 1682:
case 2928:
case 1556:
case 245:
case 3557:
case 3419:
case 900:
case 1026:
case 3027:
case 2637:
case 3045:
case 2965:
case 1888:
case 1669:
case 2391:
case 1998:
case 3816:
case 2905:
case 3250:
case 2342:
case 1375:
case 3493:
case 1755:
case 705:
case 3216:
case 3586:
case 3850:
case 2048:
case 863:
case 3908:
case 1518:
case 1323:
case 3699:
case 717:
case 1288:
case 264:
case 963:
case 377:
case 1854:
case 2169:
case 1470:
case 2007:
case 1280:
case 2182:
case 3900:
case 1478:
case 566:
case 2717:
case 3514:
case 2532:
case 1904:
case 3925:
case 752:
case 3284:
case 2788:
case 3858:
case 138:
case 1039:
case 3947:
case 3643:
case 3298:
case 2224:
case 2056:
case 2176:
case 2931:
case 1808:
case 3449:
case 3597:
case 4045:
case 435:
case 339:
case 1273:
case 2349:
case 1330:
case 1294:
case 3864:
case 3804:
case 142:
case 3334:
case 1958:
case 2351:
case 3720:
case 123:
case 3290:
case 1847:
case 1435:
case 3246:
case 2018:
case 3890:
case 1260:
case 2162:
case 1225:
case 2708:
case 607:
case 3204:
case 3453:
case 59:
case 3692:
case 1984:
case 1894:
case 2768:
case 615:
case 1481:
case 3980:
case 261:
case 1200:
case 3659:
case 2747:
case 1271:
case 3677:
case 2539:
case 1208:
case 3988:
case 1916:
case 2010:
case 3917:
case 30:
case 1507:
case 2189:
case 3544:
case 2353:
case 1626:
case 2562:
case 3627:
case 2775:
case 1431:
case 1069:
case 4043:
case 655:
case 188:
case 2502:
case 1148:
case 744:
case 2696:
case 860:
case 2458:
case 1167:
case 1140:
case 2242:
case 3166:
case 2139:
case 1107:
case 1082:
case 3106:
case 325:
case 1823:
case 2219:
case 866:
case 2589:
case 3144:
case 1223:
case 3455:
case 2819:
case 2981:
case 1793:
case 506:
case 1774:
case 1875:
case 3197:
case 2842:
case 4041:
case 1196:
case 2640:
case 3770:
case 1639:
case 1317:
case 2935:
case 2723:
case 46:
case 498:
case 3384:
case 151:
case 3011:
case 803:
case 2416:
case 128:
case 396:
case 2126:
case 204:
case 2355:
case 903:
case 4077:
case 489:
case 1821:
case 1712:
case 968:
case 195:
case 72:
case 1751:
case 1428:
case 425:
case 3975:
case 757:
case 1749:
case 1118:
case 2730:
case 1062:
case 2490:
case 2569:
case 868:
case 1537:
case 2212:
case 1110:
case 3043:
case 2963:
case 3424:
case 133:
case 180:
case 741:
case 1405:
case 2656:
case 1373:
case 2249:
case 186:
case 1230:
case 3114:
case 2132:
case 372:
case 2903:
case 3921:
case 2970:
case 1076:
case 1632:
case 3735:
case 3495:
case 1753:
case 1300:
case 120:
case 2610:
case 2851:
case 4052:
case 1360:
case 574:
case 1347:
case 36:
case 490:
case 2812:
case 3834:
case 1156:
case 4011:
case 3179:
case 1368:
case 154:
case 3041:
case 667:
case 3092:
case 508:
case 2404:
case 270:
case 1371:
case 2978:
case 1308:
case 1838:
case 691:
case 78:
case 2687:
case 201:
case 2395:
case 3428:
case 3751:
case 3002:
case 3187:
case 2494:
case 4082:
case 395:
case 2734:
case 3712:
case 3238:
case 844:
case 2473:
case 2365:
case 2991:
case 944:
case 2835:
case 2305:
case 3749:
case 279:
case 222:
case 3062:
case 3118:
case 2657:
case 1424:
case 1390:
case 1234:
case 517:
case 505:
case 2283:
case 2328:
case 2513:
case 3465:
case 703:
case 2022:
case 1495:
case 865:
case 3830:
case 3753:
case 2471:
case 2883:
case 3076:
case 1735:
case 2614:
case 1529:
case 1077:
case 3325:
case 1157:
case 451:
case 1304:
case 2993:
case 320:
case 16:
case 2468:
case 3347:
case 965:
case 3360:
case 198:
case 282:
case 1092:
case 2425:
case 656:
case 2460:
case 2599:
case 2400:
case 3838:
case 3308:
case 2686:
case 1059:
case 2552:
case 2115:
case 3371:
case 2672:
case 1645:
case 1930:
case 3431:
case 486:
case 2870:
case 3626:
case 1627:
case 433:
case 4089:
case 2263:
case 2951:
case 3485:
case 3275:
case 3140:
case 1013:
case 3167:
case 957:
case 82:
case 1703:
case 1350:
case 2801:
case 92:
case 1938:
case 3823:
case 125:
case 681:
case 768:
case 3082:
case 3107:
case 2543:
case 2878:
case 3433:
case 2278:
case 3774:
case 2201:
case 1455:
case 621:
case 185:
case 869:
case 3793:
case 3388:
case 658:
case 2480:
case 2261:
case 1770:
case 1316:
case 969:
case 3639:
case 1197:
case 2577:
case 3196:
case 2953:
case 351:
case 190:
case 2559:
case 64:
case 1011:
case 1778:
case 420:
case 2592:
case 2803:
case 2333:
case 3380:
case 2541:
case 4076:
case 2488:
case 1099:
case 2127:
case 35:
case 2401:
case 2510:
case 641:
case 3423:
case 3006:
case 4086:
case 1717:
case 1532:
case 2904:
case 327:
case 2946:
case 3113:
case 1067:
case 2039:
case 238:
case 3066:
case 2755:
case 62:
case 981:
case 3361:
case 3885:
case 1048:
case 2323:
case 881:
case 759:
case 3784:
case 3995:
case 4014:
case 2137:
case 2854:
case 657:
case 1169:
case 2403:
case 2254:
case 1920:
case 913:
case 3072:
case 3231:
case 2669:
case 669:
case 858:
case 68:
case 2998:
case 1391:
case 921:
case 3515:
case 2375:
case 813:
case 3111:
case 1754:
case 2990:
case 1096:
case 3363:
case 2682:
case 2321:
case 3833:
case 2880:
case 2556:
case 94:
case 145:
case 3746:
case 2676:
case 3820:
case 2271:
case 702:
case 534:
case 1760:
case 2032:
case 1539:
case 1725:
case 3381:
case 2268:
case 2916:
case 3805:
case 1824:
case 2507:
case 340:
case 2260:
case 1162:
case 2247:
case 2795:
case 197:
case 45:
case 884:
case 2873:
case 1087:
case 1102:
case 3955:
case 2273:
case 824:
case 2800:
case 2330:
case 3438:
case 665:
case 2294:
case 211:
case 553:
case 2602:
case 3527:
case 3079:
case 1526:
case 3141:
case 2662:
case 223:
case 1351:
case 2958:
case 2860:
case 794:
case 487:
case 2847:
case 1773:
case 1434:
case 950:
case 1985:
case 1794:
case 2689:
case 3057:
case 3205:
case 1224:
case 1056:
case 2338:
case 1931:
case 2596:
case 2808:
case 3430:
case 149:
case 3265:
case 3177:
case 3790:
case 2871:
case 515:
case 959:
case 3725:
case 3539:
case 1622:
case 146:
case 1381:
case 1820:
case 1746:
case 3747:
case 3700:
case 3010:
case 2898:
case 1764:
case 3824:
case 20:
case 4067:
case 2204:
case 2890:
case 3018:
case 3771:
case 2641:
case 1955:
case 3102:
case 3087:
case 2264:
case 1828:
case 3933:
case 1228:
case 2705:
case 1159:
case 445:
case 3351:
case 2720:
case 1079:
case 2765:
case 3526:
case 1057:
case 991:
case 3056:
case 3224:
case 721:
case 3773:
case 2643:
case 132:
case 2122:
case 1220:
case 1430:
case 891:
case 2449:
case 1177:
case 1716:
case 1233:
case 3717:
case 3182:
case 955:
case 519:
case 1006:
case 1423:
case 3067:
case 3040:
case 2858:
case 1066:
case 2947:
case 1629:
case 3532:
case 2284:
case 127:
case 3393:
case 1885:
case 2968:
case 148:
case 2474:
case 2216:
case 2850:
case 3048:
case 2733:
case 2611:
case 2586:
case 4010:
case 3780:
case 1378:
case 1831:
case 57:
case 1995:
case 3637:
case 2045:
case 3965:
case 2579:
case 3342:
case 1111:
case 1285:
case 3391:
case 1515:
case 3905:
case 750:
case 1924:
case 2731:
case 2613:
case 187:
case 2884:
case 2442:
case 994:
case 724:
case 2491:
case 3096:
case 345:
case 2419:
case 3855:
case 2994:
case 1833:
case 1303:
case 674:
case 376:
case 2179:
case 3961:
case 3446:
case 3618:
case 1511:
case 1400:
case 2923:
case 478:
case 710:
case 370:
case 3978:
case 3464:
case 3849:
case 1022:
case 2364:
case 2077:
case 404:
case 2735:
case 2529:
case 1614:
case 1993:
case 608:
case 3610:
case 3851:
case 1974:
case 26:
case 567:
case 3251:
case 3498:
case 2390:
case 2234:
case 807:
case 11:
case 3582:
case 915:
case 1328:
case 3249:
case 229:
case 2114:
case 1320:
case 1494:
case 3509:
case 2615:
case 1365:
case 731:
case 1305:
case 1942:
case 1679:
case 122:
case 3730:
case 1559:
case 3648:
case 600:
case 2701:
case 3723:
case 862:
case 671:
case 1863:
case 2384:
case 137:
case 2052:
case 2761:
case 1145:
case 1270:
case 962:
case 296:
case 1541:
case 304:
case 3355:
case 2099:
case 1127:
case 1644:
case 401:
case 594:
case 718:
case 285:
case 3607:
case 2455:
case 3819:
case 1606:
case 476:
case 2770:
case 3891:
case 3667:
case 2522:
case 1577:
case 3484:
case 1029:
case 3576:
case 3242:
case 919:
case 555:
case 392:
case 2703:
case 2350:
case 663:
case 225:
case 1331:
case 2938:
case 2106:
case 819:
case 1672:
case 2645:
case 3775:
case 2930:
case 1036:
case 87:
case 1870:
case 3562:
case 1454:
case 97:
case 3502:
case 175:
case 3893:
case 1263:
case 1951:
case 2358:
case 502:
case 3863:
case 1293:
case 3417:
case 251:
case 3559:
case 3541:
case 1126:
case 3127:
case 104:
case 4022:
case 3333:
case 3803:
case 521:
case 1607:
case 3201:
case 2223:
case 3606:
case 2793:
case 3480:
case 3278:
case 816:
case 178:
case 3644:
case 2774:
case 2875:
case 1484:
case 810:
case 1576:
case 3261:
case 1891:
case 1640:
case 3666:
case 1935:
case 3385:
case 3861:
case 3697:
case 1291:
case 1458:
case 1721:
case 1696:
case 422:
case 1242:
case 2167:
case 1139:
case 192:
case 2354:
case 2082:
case 3543:
case 3331:
case 1983:
case 2791:
case 3203:
case 707:
case 1037:
case 3949:
case 299:
case 3672:
case 3036:
case 3951:
case 41:
case 2009:
case 375:
case 3460:
case 953:
case 2368:
case 1618:
case 1446:
case 3552:
case 524:
case 1978:
case 1901:
case 3686:
case 2838:
case 1395:
case 1687:
case 3281:
case 3471:
case 2076:
case 3614:
case 1849:
case 2300:
case 1851:
case 1610:
case 220:
case 2110:
case 77:
case 1582:
case 1963:
case 3657:
case 1251:
case 2405:
case 233:
case 475:
case 934:
case 1656:
case 1498:
case 2465:
case 286:
case 2373:
case 2230:
case 3283:
case 1903:
case 2420:
case 652:
case 2712:
case 295:
case 1509:
case 2238:
case 3919:
case 605:
case 3365:
case 3881:
case 2428:
case 2187:
case 584:
case 3679:
case 3942:
case 1730:
case 322:
case 2062:
case 2118:
case 617:
case 1490:
case 2537:
case 3305:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754676002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,];
var gg_b = "1754676002/";

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
