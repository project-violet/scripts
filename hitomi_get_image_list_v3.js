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
case 310:
case 4028:
case 2338:
case 1448:
case 1585:
case 2389:
case 2296:
case 1754:
case 1884:
case 3699:
case 1695:
case 378:
case 1047:
case 1518:
case 1495:
case 1657:
case 887:
case 3132:
case 2070:
case 563:
case 1408:
case 1972:
case 3898:
case 981:
case 3717:
case 156:
case 3217:
case 1159:
case 3155:
case 3414:
case 3805:
case 740:
case 1269:
case 1809:
case 3265:
case 3082:
case 2583:
case 671:
case 3765:
case 2995:
case 1769:
case 3383:
case 3197:
case 760:
case 2724:
case 3680:
case 1849:
case 2427:
case 3662:
case 3590:
case 516:
case 2957:
case 1273:
case 3544:
case 2948:
case 619:
case 4064:
case 3246:
case 1367:
case 1128:
case 3746:
case 3326:
case 4012:
case 3319:
case 3441:
case 3930:
case 3278:
case 2519:
case 3778:
case 2059:
case 3074:
case 1893:
case 3641:
case 3401:
case 1827:
case 3206:
case 3051:
case 1984:
case 2535:
case 2311:
case 3511:
case 1388:
case 2449:
case 2876:
case 2107:
case 3036:
case 3352:
case 2410:
case 3945:
case 3053:
case 598:
case 2848:
case 3300:
case 2857:
case 65:
case 1891:
case 3403:
case 829:
case 1556:
case 50:
case 3394:
case 879:
case 3603:
case 1029:
case 419:
case 2147:
case 2158:
case 2684:
case 3720:
case 4017:
case 208:
case 1831:
case 2826:
case 2819:
case 246:
case 1362:
case 4065:
case 1063:
case 3938:
case 2534:
case 266:
case 1985:
case 823:
case 29:
case 3770:
case 717:
case 1683:
case 3811:
case 1822:
case 1079:
case 413:
case 3075:
case 4:
case 2576:
case 3813:
case 3228:
case 97:
case 2852:
case 2065:
case 92:
case 1146:
case 3728:
case 892:
case 3944:
case 2485:
case 367:
case 3348:
case 2017:
case 2102:
case 800:
case 3357:
case 2760:
case 14:
case 1178:
case 3990:
case 938:
case 2557:
case 1591:
case 68:
case 1856:
case 3904:
case 2508:
case 1061:
case 2840:
case 1833:
case 1572:
case 2894:
case 804:
case 16:
case 2983:
case 466:
case 2595:
case 2418:
case 865:
case 1481:
case 1877:
case 2633:
case 1694:
case 28:
case 1303:
case 3838:
case 2656:
case 1885:
case 2078:
case 1755:
case 1400:
case 3889:
case 1452:
case 2935:
case 301:
case 1922:
case 3911:
case 2677:
case 2046:
case 355:
case 235:
case 1165:
case 1818:
case 1797:
case 1297:
case 1723:
case 2433:
case 1494:
case 857:
case 613:
case 1343:
case 2274:
case 836:
case 2398:
case 549:
case 951:
case 1426:
case 1419:
case 120:
case 781:
case 4046:
case 186:
case 1341:
case 905:
case 646:
case 3804:
case 1977:
case 2736:
case 1635:
case 608:
case 1721:
case 3505:
case 3212:
case 1221:
case 4078:
case 2883:
case 940:
case 964:
case 3667:
case 882:
case 1549:
case 3439:
case 3488:
case 2952:
case 1435:
case 3913:
case 960:
case 2179:
case 944:
case 132:
case 2020:
case 3890:
case 1232:
case 69:
case 3192:
case 174:
case 2225:
case 2631:
case 3844:
case 3068:
case 4042:
case 1952:
case 2435:
case 3349:
case 1422:
case 2549:
case 1020:
case 232:
case 1179:
case 3175:
case 933:
case 352:
case 3229:
case 3216:
case 2232:
case 2732:
case 3716:
case 224:
case 1900:
case 1725:
case 2626:
case 3501:
case 270:
case 2933:
case 577:
case 1398:
case 2341:
case 2956:
case 286:
case 2426:
case 1431:
case 527:
case 3541:
case 4050:
case 1940:
case 220:
case 1163:
case 3309:
case 1736:
case 2635:
case 4002:
case 1622:
case 2509:
case 1305:
case 1253:
case 2977:
case 1883:
case 1236:
case 218:
case 2221:
case 2797:
case 2818:
case 2652:
case 474:
case 2223:
case 424:
case 2723:
case 739:
case 990:
case 1251:
case 2297:
case 1006:
case 2343:
case 66:
case 599:
case 1774:
case 1433:
case 3543:
case 2042:
case 2494:
case 2600:
case 1926:
case 2440:
case 1274:
case 814:
case 3915:
case 18:
case 64:
case 2255:
case 1633:
case 2002:
case 3503:
case 810:
case 2400:
case 2885:
case 1656:
case 2922:
case 2510:
case 1935:
case 3988:
case 2584:
case 885:
case 3310:
case 1046:
case 486:
case 2061:
case 379:
case 2786:
case 296:
case 603:
case 1685:
case 26:
case 4079:
case 113:
case 2572:
case 2833:
case 1:
case 3599:
case 2399:
case 1595:
case 2481:
case 2877:
case 2106:
case 311:
case 2681:
case 2146:
case 1852:
case 1065:
case 1800:
case 1485:
case 3438:
case 1548:
case 1260:
case 1760:
case 3391:
case 2985:
case 2593:
case 3604:
case 3092:
case 3393:
case 624:
case 674:
case 2527:
case 632:
case 2683:
case 496:
case 3258:
case 3747:
case 3247:
case 754:
case 2822:
case 46:
case 2120:
case 2079:
case 618:
case 926:
case 2918:
case 976:
case 750:
case 3207:
case 44:
case 2314:
case 1981:
case 862:
case 3815:
case 3644:
case 686:
case 1826:
case 3071:
case 620:
case 2831:
case 1819:
case 589:
case 2063:
case 3690:
case 1808:
case 304:
case 637:
case 3430:
case 2872:
case 2016:
case 3032:
case 2533:
case 2029:
case 2170:
case 3333:
case 1147:
case 3899:
case 3377:
case 1158:
case 2909:
case 1012:
case 3021:
case 392:
case 1552:
case 1410:
case 2949:
case 583:
case 1064:
case 1500:
case 3901:
case 1857:
case 1787:
case 323:
case 3742:
case 506:
case 1834:
case 2893:
case 3903:
case 3698:
case 609:
case 961:
case 3097:
case 954:
case 1609:
case 3023:
case 2910:
case 1449:
case 1535:
case 3445:
case 4016:
case 784:
case 3605:
case 2339:
case 950:
case 3250:
case 1409:
case 121:
case 3750:
case 1649:
case 2367:
case 3814:
case 2128:
case 780:
case 3405:
case 3331:
case 3702:
case 3202:
case 1059:
case 559:
case 3055:
case 941:
case 3862:
case 3498:
case 2849:
case 2237:
case 437:
case 382:
case 2737:
case 907:
case 3174:
case 2273:
case 1957:
case 3086:
case 209:
case 1427:
case 3261:
case 1948:
case 593:
case 4007:
case 2972:
case 336:
case 1304:
case 2634:
case 256:
case 1908:
case 2269:
case 2769:
case 1583:
case 3666:
case 3914:
case 3279:
case 3318:
case 939:
case 3980:
case 2047:
case 3779:
case 3843:
case 2792:
case 3962:
case 2648:
case 2408:
case 357:
case 1116:
case 1129:
case 237:
case 3803:
case 2771:
case 15:
case 3263:
case 1491:
case 2164:
case 2457:
case 2585:
case 2271:
case 2608:
case 1389:
case 3385:
case 2884:
case 855:
case 3136:
case 2007:
case 2810:
case 456:
case 522:
case 801:
case 3153:
case 2254:
case 2958:
case 2428:
case 2354:
case 3105:
case 499:
case 700:
case 158:
case 2947:
case 4091:
case 3080:
case 1396:
case 1289:
case 3285:
case 911:
case 1970:
case 1738:
case 169:
case 2563:
case 574:
case 1789:
case 1859:
case 586:
case 2093:
case 3592:
case 2392:
case 765:
case 2027:
case 277:
case 3682:
case 3145:
case 3897:
case 518:
case 704:
case 4072:
case 3379:
case 1375:
case 2907:
case 929:
case 2579:
case 1184:
case 1812:
case 3821:
case 1076:
case 1110:
case 3569:
case 1407:
case 2369:
case 1204:
case 2670:
case 503:
case 3986:
case 376:
case 1704:
case 1790:
case 1244:
case 653:
case 1008:
case 384:
case 2816:
case 3832:
case 1290:
case 427:
case 1095:
case 1607:
case 1447:
case 477:
case 2337:
case 56:
case 2148:
case 3302:
case 1616:
case 2215:
case 596:
case 3231:
case 2157:
case 2176:
case 3923:
case 131:
case 3453:
case 2550:
case 1546:
case 3350:
case 881:
case 2195:
case 2288:
case 2239:
case 3653:
case 1211:
case 3222:
case 1711:
case 2612:
case 2858:
case 3425:
case 1416:
case 2542:
case 3955:
case 333:
case 952:
case 2916:
case 3674:
case 1387:
case 394:
case 1713:
case 2009:
case 1828:
case 3651:
case 2049:
case 3921:
case 1520:
case 3777:
case 302:
case 3886:
case 677:
case 3233:
case 3733:
case 390:
case 3474:
case 1964:
case 3001:
case 1368:
case 2100:
case 448:
case 10:
case 2085:
case 61:
case 1661:
case 2417:
case 630:
case 3307:
case 2280:
case 805:
case 2507:
case 2979:
case 2214:
case 1846:
case 406:
case 851:
case 3624:
case 936:
case 2780:
case 2850:
case 2018:
case 198:
case 3954:
case 1806:
case 3424:
case 2842:
case 860:
case 2140:
case 844:
case 3227:
case 1156:
case 752:
case 3727:
case 283:
case 634:
case 3971:
case 1570:
case 2617:
case 2194:
case 1461:
case 3973:
case 2126:
case 3291:
case 2119:
case 1463:
case 3791:
case 206:
case 1360:
case 3496:
case 1382:
case 4085:
case 3969:
case 2799:
case 1479:
case 3475:
case 1965:
case 3111:
case 483:
case 1820:
case 339:
case 2386:
case 4018:
case 259:
case 1917:
case 430:
case 3710:
case 3784:
case 3854:
case 1906:
case 2620:
case 3067:
case 3284:
case 3210:
case 648:
case 175:
case 188:
case 1026:
case 2031:
case 992:
case 3015:
case 3668:
case 2703:
case 82:
case 2203:
case 116:
case 711:
case 3104:
case 1559:
case 2743:
case 3190:
case 965:
case 3892:
case 1730:
case 472:
case 2902:
case 3597:
case 4056:
case 1946:
case 2420:
case 812:
case 3523:
case 3039:
case 4033:
case 1035:
case 779:
case 1512:
case 3521:
case 1705:
case 4031:
case 2321:
case 1450:
case 341:
case 1353:
case 2478:
case 21:
case 2241:
case 1564:
case 230:
case 1000:
case 537:
case 3189:
case 3138:
case 1298:
case 2678:
case 683:
case 2056:
case 1040:
case 3532:
case 2529:
case 1602:
case 2332:
case 4022:
case 1745:
case 222:
case 2646:
case 2406:
case 1118:
case 3249:
case 361:
case 2077:
case 1861:
case 134:
case 942:
case 2040:
case 3987:
case 995:
case 55:
case 317:
case 4035:
case 1033:
case 2325:
case 884:
case 2650:
case 122:
case 2745:
case 1646:
case 172:
case 698:
case 1321:
case 4019:
case 2450:
case 2512:
case 3013:
case 3536:
case 2205:
case 2353:
case 416:
case 3553:
case 2865:
case 425:
case 962:
case 2817:
case 3364:
case 3968:
case 2564:
case 1241:
case 2798:
case 2185:
case 826:
case 60:
case 2642:
case 880:
case 488:
case 2402:
case 3574:
case 2374:
case 1902:
case 2351:
case 2946:
case 1950:
case 4040:
case 747:
case 391:
case 3011:
case 1879:
case 2906:
case 4000:
case 767:
case 275:
case 3896:
case 1183:
case 1703:
case 193:
case 1031:
case 2026:
case 4052:
case 1863:
case 3359:
case 216:
case 1799:
case 2479:
case 914:
case 2122:
case 3654:
case 2820:
case 3139:
case 3708:
case 498:
case 1386:
case 3090:
case 4081:
case 3492:
case 3208:
case 2917:
case 3257:
case 2131:
case 755:
case 894:
case 2463:
case 928:
case 3115:
case 701:
case 106:
case 985:
case 3248:
case 3757:
case 93:
case 148:
case 910:
case 40:
case 2679:
case 3582:
case 625:
case 3669:
case 1018:
case 298:
case 2766:
case 3996:
case 2266:
case 2177:
case 2156:
case 833:
case 1842:
case 3473:
case 2133:
case 2461:
case 3234:
case 1194:
case 643:
case 3370:
case 1262:
case 3673:
case 1100:
case 1802:
case 1417:
case 2878:
case 1507:
case 3637:
case 1214:
case 1280:
case 1850:
case 1714:
case 1049:
case 714:
case 3497:
case 2520:
case 3294:
case 3740:
case 2193:
case 189:
case 3655:
case 649:
case 839:
case 2127:
case 2368:
case 3240:
case 546:
case 2964:
case 3794:
case 3925:
case 59:
case 3700:
case 1459:
case 3455:
case 1916:
case 785:
case 3098:
case 1929:
case 669:
case 3860:
case 728:
case 3162:
case 566:
case 955:
case 658:
case 3114:
case 2828:
case 710:
case 3882:
case 3180:
case 3199:
case 1288:
case 3235:
case 1847:
case 3735:
case 3621:
case 1788:
case 1858:
case 1612:
case 2506:
case 1739:
case 3306:
case 3432:
case 1108:
case 360:
case 3030:
case 2616:
case 1502:
case 1148:
case 3719:
case 513:
case 3974:
case 2578:
case 1464:
case 3378:
case 351:
case 1267:
case 1176:
case 1010:
case 1412:
case 305:
case 3951:
case 1550:
case 2790:
case 1470:
case 1072:
case 795:
case 854:
case 1373:
case 58:
case 3982:
case 2324:
case 2458:
case 3524:
case 2928:
case 449:
case 1337:
case 841:
case 3283:
case 469:
case 3853:
case 3365:
case 2647:
case 2048:
case 2864:
case 2204:
case 1670:
case 3103:
case 850:
case 458:
case 762:
case 1091:
case 127:
case 249:
case 3486:
case 177:
case 1027:
case 3851:
case 3781:
case 947:
case 3066:
case 2149:
case 3281:
case 4048:
case 967:
case 2396:
case 1947:
case 338:
case 4057:
case 2970:
case 2289:
case 2789:
case 3141:
case 2738:
case 269:
case 2444:
case 3593:
case 1334:
case 772:
case 2393:
case 3527:
case 819:
case 1770:
case 4037:
case 3683:
case 479:
case 652:
case 2747:
case 2758:
case 4073:
case 1811:
case 3120:
case 3079:
case 2707:
case 502:
case 999:
case 3918:
case 3380:
case 71:
case 2207:
case 2867:
case 2580:
case 730:
case 2404:
case 2071:
case 411:
case 2187:
case 3063:
case 3061:
case 687:
case 2638:
case 396:
case 3786:
case 1904:
case 147:
case 36:
case 2372:
case 229:
case 2073:
case 3572:
case 2599:
case 1024:
case 3399:
case 3481:
case 2037:
case 211:
case 497:
case 1228:
case 3178:
case 2391:
case 1357:
case 2967:
case 989:
case 2124:
case 2613:
case 3297:
case 1137:
case 759:
case 3343:
case 629:
case 3042:
case 2543:
case 576:
case 3600:
case 1173:
case 3931:
case 768:
case 2915:
case 679:
case 287:
case 303:
case 3303:
case 3002:
case 1759:
case 748:
case 2384:
case 1911:
case 2939:
case 3452:
case 3584:
case 101:
case 2310:
case 611:
case 3165:
case 3050:
case 1169:
case 2413:
case 155:
case 783:
case 2349:
case 1667:
case 3549:
case 487:
case 252:
case 374:
case 2216:
case 3232:
case 1615:
case 2716:
case 1844:
case 1068:
case 3301:
case 324:
case 3619:
case 1171:
case 370:
case 1598:
case 1415:
case 3341:
case 697:
case 3956:
case 3426:
case 1264:
case 2541:
case 1087:
case 3419:
case 2309:
case 1688:
case 1505:
case 2611:
case 3509:
case 3977:
case 1639:
case 3221:
case 1212:
case 959:
case 3518:
case 541:
case 2980:
case 665:
case 3495:
case 2843:
case 3792:
case 968:
case 3648:
case 3408:
case 1132:
case 337:
case 13:
case 948:
case 2803:
case 2263:
case 3771:
case 3585:
case 3448:
case 600:
case 3993:
case 88:
case 1589:
case 561:
case 2136:
case 128:
case 3007:
case 3810:
case 835:
case 645:
case 1966:
case 1699:
case 436:
case 3254:
case 1680:
case 2151:
case 1197:
case 753:
case 457:
case 1590:
case 2174:
case 3991:
case 673:
case 2801:
case 623:
case 2261:
case 3773:
case 1717:
case 3972:
case 1462:
case 1898:
case 236:
case 3634:
case 356:
case 3269:
case 1383:
case 1082:
case 1765:
case 2666:
case 1186:
case 1641:
case 223:
case 922:
case 2742:
case 2242:
case 866:
case 2698:
case 1051:
case 682:
case 934:
case 1866:
case 404:
case 195:
case 3388:
case 1335:
case 1511:
case 2023:
case 2445:
case 2588:
case 3984:
case 1706:
case 2250:
case 400:
case 808:
case 2880:
case 2750:
case 1746:
case 2645:
case 3367:
case 2405:
case 3531:
case 1278:
case 1930:
case 2331:
case 2515:
case 2702:
case 445:
case 2202:
case 2160:
case 1778:
case 3556:
case 2941:
case 813:
case 3016:
case 3872:
case 3533:
case 1998:
case 1603:
case 3170:
case 2333:
case 4023:
case 1025:
case 265:
case 2899:
case 1220:
case 1720:
case 1905:
case 727:
case 3577:
case 1036:
case 1513:
case 993:
case 245:
case 292:
case 1053:
case 200:
case 507:
case 2630:
case 1403:
case 2513:
case 3876:
case 3012:
case 145:
case 3484:
case 2053:
case 3552:
case 925:
case 462:
case 1901:
case 3848:
case 758:
case 100:
case 3287:
case 3064:
case 610:
case 2643:
case 63:
case 988:
case 4051:
case 1356:
case 3540:
case 442:
case 1430:
case 2340:
case 104:
case 614:
case 2443:
case 3594:
case 2220:
case 1899:
case 4074:
case 165:
case 3147:
case 3610:
case 3684:
case 2720:
case 2905:
case 1377:
case 1250:
case 963:
case 262:
case 2246:
case 1814:
case 1645:
case 321:
case 1182:
case 1567:
case 3649:
case 1880:
case 1750:
case 1702:
case 2441:
case 3526:
case 2601:
case 2930:
case 1055:
case 4053:
case 2778:
case 1498:
case 1862:
case 1202:
case 3059:
case 3834:
case 2074:
case 319:
case 2186:
case 2641:
case 1698:
case 173:
case 2866:
case 1097:
case 1588:
case 1322:
case 3535:
case 3311:
case 1605:
case 2706:
case 2511:
case 1023:
case 2462:
case 3627:
case 428:
case 2717:
case 870:
case 2217:
case 485:
case 3693:
case 2155:
case 1841:
case 2060:
case 136:
case 2414:
case 410:
case 2265:
case 3028:
case 2383:
case 2845:
case 1151:
case 414:
case 695:
case 182:
case 3390:
case 1086:
case 2662:
case 998:
case 3427:
case 1174:
case 2590:
case 3948:
case 1261:
case 1801:
case 35:
case 3491:
case 23:
case 1803:
case 1385:
case 3338:
case 3934:
case 3389:
case 228:
case 2121:
case 1153:
case 3796:
case 3581:
case 1318:
case 3275:
case 2499:
case 1779:
case 3775:
case 1843:
case 3472:
case 1962:
case 2132:
case 3116:
case 3070:
case 2830:
case 3129:
case 931:
case 856:
case 2171:
case 3994:
case 2598:
case 2264:
case 1541:
case 2087:
case 2415:
case 455:
case 2804:
case 3305:
case 2712:
case 1309:
case 2688:
case 2505:
case 2212:
case 3236:
case 1196:
case 3883:
case 2667:
case 1411:
case 2545:
case 3952:
case 1175:
case 2913:
case 3020:
case 2890:
case 1229:
case 1216:
case 3725:
case 3631:
case 1501:
case 2844:
case 2259:
case 667:
case 3078:
case 3656:
case 1988:
case 2911:
case 3677:
case 1939:
case 1413:
case 2169:
case 3046:
case 255:
case 335:
case 3881:
case 4068:
case 3433:
case 837:
case 3456:
case 1915:
case 647:
case 3330:
case 187:
case 2173:
case 3274:
case 2530:
case 2813:
case 3576:
case 655:
case 2228:
case 2376:
case 111:
case 3282:
case 601:
case 969:
case 3782:
case 3852:
case 3618:
case 1069:
case 2944:
case 775:
case 788:
case 3800:
case 2348:
case 1391:
case 958:
case 3760:
case 2990:
case 3685:
case 540:
case 1638:
case 564:
case 3508:
case 3142:
case 1689:
case 4075:
case 3:
case 1372:
case 3983:
case 2024:
case 1599:
case 2395:
case 3418:
case 949:
case 1037:
case 1054:
case 3981:
case 1580:
case 1207:
case 2096:
case 1815:
case 1690:
case 1187:
case 2334:
case 4024:
case 1393:
case 2989:
case 3534:
case 366:
case 1604:
case 39:
case 1490:
case 1327:
case 1747:
case 1258:
case 447:
case 1839:
case 743:
case 1888:
case 1758:
case 2075:
case 1347:
case 3766:
case 1424:
case 4044:
case 1954:
case 3806:
case 1227:
case 617:
case 2734:
case 853:
case 1293:
case 2234:
case 1727:
case 107:
case 2038:
case 1992:
case 2469:
case 2637:
case 2975:
case 1307:
case 281:
case 1624:
case 4004:
case 2795:
case 1969:
case 3479:
case 1111:
case 3820:
case 2188:
case 1586:
case 2708:
case 889:
case 2868:
case 2492:
case 3917:
case 3131:
case 1291:
case 481:
case 2004:
case 2692:
case 2560:
case 2887:
case 1496:
case 95:
case 3679:
case 2167:
case 4038:
case 2454:
case 595:
case 3382:
case 2276:
case 3230:
case 877:
case 1468:
case 3374:
case 1687:
case 1144:
case 3730:
case 7:
case 713:
case 2875:
case 3035:
case 2011:
case 417:
case 1039:
case 325:
case 1710:
case 388:
case 375:
case 2896:
case 4013:
case 1871:
case 1555:
case 2359:
case 316:
case 1104:
case 2987:
case 3040:
case 1316:
case 510:
case 4011:
case 1532:
case 3602:
case 491:
case 3118:
case 2824:
case 919:
case 1749:
case 3650:
case 3745:
case 528:
case 3245:
case 1837:
case 766:
case 161:
case 1709:
case 1521:
case 2013:
case 3512:
case 2536:
case 3705:
case 3353:
case 3205:
case 681:
case 3052:
case 746:
case 1209:
case 3865:
case 2364:
case 3564:
case 363:
case 3298:
case 514:
case 1660:
case 349:
case 2486:
case 2781:
case 2851:
case 1682:
case 3149:
case 2066:
case 1823:
case 3375:
case 1218:
case 2281:
case 3109:
case 1554:
case 238:
case 1014:
case 2596:
case 1571:
case 1460:
case 1198:
case 3859:
case 3789:
case 1785:
case 2141:
case 369:
case 3738:
case 893:
case 22:
case 1062:
case 184:
case 4066:
case 3008:
case 1361:
case 3790:
case 3244:
case 1832:
case 1573:
case 3744:
case 412:
case 834:
case 966:
case 2982:
case 3095:
case 3928:
case 872:
case 501:
case 99:
case 719:
case 1537:
case 3076:
case 3658:
case 3812:
case 605:
case 946:
case 3110:
case 2283:
case 2783:
case 3565:
case 1569:
case 2365:
case 115:
case 3048:
case 180:
case 664:
case 640:
case 721:
case 3517:
case 1986:
case 438:
case 3057:
case 1653:
case 2235:
case 1636:
case 2621:
case 1722:
case 2432:
case 4045:
case 1043:
case 3429:
case 1342:
case 3959:
case 244:
case 3629:
case 1625:
case 2219:
case 3578:
case 2974:
case 240:
case 3191:
case 547:
case 1231:
case 264:
case 251:
case 1923:
case 3546:
case 1436:
case 205:
case 1350:
case 2951:
case 1997:
case 2423:
case 1166:
case 612:
case 1277:
case 2045:
case 2953:
case 1451:
case 2497:
case 2320:
case 3912:
case 1921:
case 460:
case 3520:
case 444:
case 3193:
case 2740:
case 1756:
case 3368:
case 3127:
case 859:
case 190:
case 1474:
case 3964:
case 2925:
case 62:
case 2162:
case 2587:
case 935:
case 2200:
case 405:
case 2623:
case 2252:
case 3713:
case 1651:
case 3828:
case 3213:
case 75:
case 2752:
case 440:
case 2882:
case 848:
case 464:
case 3916:
case 2932:
case 3929:
case 1700:
case 3459:
case 294:
case 1587:
case 4003:
case 1005:
case 1252:
case 2651:
case 1045:
case 2277:
case 1423:
case 2166:
case 1936:
case 903:
case 2451:
case 433:
case 2886:
case 1655:
case 2756:
case 3134:
case 1740:
case 2233:
case 1568:
case 597:
case 1726:
case 3148:
case 1719:
case 1632:
case 3715:
case 2003:
case 676:
case 1378:
case 3215:
case 1219:
case 1974:
case 140:
case 579:
case 164:
case 680:
case 2231:
case 615:
case 3807:
case 3010:
case 3267:
case 1951:
case 1346:
case 3550:
case 920:
case 3412:
case 105:
case 2350:
case 494:
case 3847:
case 3195:
case 3239:
case 2222:
case 974:
case 2722:
case 1306:
case 511:
case 4001:
case 3612:
case 1621:
case 490:
case 898:
case 2342:
case 2425:
case 3108:
case 2955:
case 3542:
case 684:
case 160:
case 144:
case 1283:
case 1836:
case 2821:
case 2569:
case 1853:
case 1783:
case 1103:
case 226:
case 280:
case 587:
case 1317:
case 4080:
case 2986:
case 4014:
case 276:
case 863:
case 633:
case 1960:
case 3470:
case 3561:
case 284:
case 1825:
case 3072:
case 2832:
case 2130:
case 3829:
case 1982:
case 2482:
case 3354:
case 552:
case 2105:
case 476:
case 825:
case 694:
case 2460:
case 816:
case 2285:
case 2198:
case 2785:
case 1686:
case 12:
case 2062:
case 2363:
case 415:
case 1874:
case 3392:
case 1101:
case 1066:
case 484:
case 2897:
case 3628:
case 1851:
case 602:
case 2379:
case 112:
case 1281:
case 2823:
case 3579:
case 2218:
case 4015:
case 3321:
case 1312:
case 2709:
case 1553:
case 241:
case 250:
case 3478:
case 1968:
case 330:
case 1364:
case 2189:
case 4067:
case 607:
case 3201:
case 3056:
case 2873:
case 4088:
case 2532:
case 3529:
case 1525:
case 3332:
case 2316:
case 3701:
case 4039:
case 2329:
case 3646:
case 3406:
case 261:
case 372:
case 582:
case 74:
case 2710:
case 3620:
case 2284:
case 1896:
case 3031:
case 2668:
case 3203:
case 1359:
case 3863:
case 536:
case 2687:
case 3743:
case 1574:
case 2892:
case 2468:
case 639:
case 3243:
case 2597:
case 3950:
case 3397:
case 3022:
case 2523:
case 2039:
case 3323:
case 1875:
case 796:
case 1115:
case 3126:
case 2973:
case 3119:
case 523:
case 1887:
case 1248:
case 1004:
case 2675:
case 1776:
case 1167:
case 2475:
case 703:
case 2696:
case 1795:
case 1295:
case 3135:
case 1188:
case 937:
case 2111:
case 3299:
case 1090:
case 3386:
case 2272:
case 2586:
case 359:
case 1868:
case 1492:
case 3100:
case 1038:
case 650:
case 3762:
case 504:
case 2992:
case 1089:
case 3280:
case 1975:
case 641:
case 181:
case 720:
case 3507:
case 2113:
case 1637:
case 3214:
case 3979:
case 3714:
case 565:
case 3780:
case 909:
case 3018:
case 1996:
case 3665:
case 439:
case 1437:
case 3547:
case 724:
case 3558:
case 2954:
case 545:
case 2424:
case 592:
case 1473:
case 1734:
case 3842:
case 3140:
case 2793:
case 2227:
case 500:
case 1370:
case 2971:
case 2293:
case 1234:
case 3617:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751612402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,];
var gg_b = "1751612402/";

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
